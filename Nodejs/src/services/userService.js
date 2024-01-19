import db from "../models/index";
import bcrypt from "bcryptjs";
const { Op } = require("sequelize");

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
};

let handleUserLogin = (phoneNumber, password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkPhoneNumber(phoneNumber);
            if (isExist) {
                // user already exist
                // compare password

                let user = await db.User.findOne({
                    attributes: ["phoneNumber", "fullName", "password", "id"],
                    where: { phoneNumber: phoneNumber },
                    raw: true,
                });

                if (user) {
                    // compare password
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = "Đăng nhập thành công";
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = "Sai mật khẩu";
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `Không tìm thấy người dùng`;
                }
            } else {
                // return error
                userData.errCode = 1;
                userData.errMessage = `Số điện thoại chưa được đăng ký`;
            }
            resolve(userData);
        } catch (e) {
            reject(e);
        }
    });
};

let checkPhoneNumber = (phoneNumber) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { phoneNumber: phoneNumber },
            });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    });
};

let getAllUsers = (userId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let users = "";
            if (userId === "ALL") {
                users = await db.User.findAll({
                    attributes: {
                        exclude: ["password"],
                    },
                });
            }
            if (userId && userId != "ALL") {
                users = await db.User.findOne({
                    where: { id: userId },
                    attributes: {
                        exclude: ["password"],
                    },
                });
            }
            resolve(users);
        } catch (e) {
            reject(e);
        }
    });
};

let createNewUser = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            // check phoneNumber is exist???
            let check = await checkPhoneNumber(data.phoneNumber);
            if (check === true) {
                resolve({
                    errCode: 1,
                    errMessage: "Số điện thoại này đã được đăng ký. Hãy dùng số khác",
                });
            } else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                await db.User.create({
                    phoneNumber: data.phoneNumber,
                    password: hashPasswordFromBcrypt,
                    fullName: data.fullName,
                    address: data.address,
                    roleId: data.roleId,
                });
                resolve({
                    errCode: 0,
                    message: "OK",
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

let deleteUser = (userId) => {
    return new Promise(async(resolve, reject) => {
        let foundUser = await db.User.findOne({
            where: { id: userId },
        });
        if (!foundUser) {
            resolve({
                errCode: 2,
                errMessage: `The user isn't exist`,
            });
        } else {
            // await foundUser.destroy();
            await db.User.destroy({
                where: { id: userId },
            });

            resolve({
                errCode: 0,
                message: `The user id deleted`,
            });
        }
    });
};

let updateUserData = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: "Missing required parameter!",
                });
            } else {
                let user = await db.User.findOne({
                    where: { id: data.id },
                    raw: false,
                });
                if (user) {
                    user.fullName = data.fullName;
                    user.address = data.address;
                    await user.save();
                    // await db.User.save({
                    //     firstname: data.firstName,
                    //     lastname: data.lastName,
                    //     address: data.address,
                    // })

                    resolve({
                        errCode: 0,
                        message: "Update the user succeeds!",
                    });
                } else {
                    resolve({
                        errCode: 1,
                        errMessage: "User not found",
                    });
                }
            }
        } catch (e) {
            reject(e);
        }
    });
};

let checkBooking = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let bookingList = await db.Booking.findAll({
                where: {
                    address: data.addressSelected,
                    typeOfRoom: data.typeOfRoom,
                    dateBooking: data.dateBooking,
                    [Op.or]: [{
                            startTime: {
                                [Op.gte]: data.startTime + 8,
                                [Op.lte]: data.endTime + 8,
                            },
                            // startTime: { $lte: data.endTime, }
                        },
                        {
                            endTime: {
                                [Op.gte]: data.startTime + 9,
                                [Op.lte]: data.endTime + 9,
                                // $lte: data.endTime,
                            },
                        },
                        {
                            startTime: {
                                [Op.lt]: data.startTime + 8,
                            },
                            endTime: {
                                [Op.gt]: data.endTime + 9,
                            },
                        },
                    ],
                },
            });

            let room = await db.Room_Branch.findOne({
                where: {
                    address: data.addressSelected,
                    typeOfRoom: data.typeOfRoom,
                },
            });

            if (room && bookingList.length < room.numberOfRoom) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    });
};

let bookingTable = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            // address, room, startTime
            let check = await checkBooking(data);
            if (!check) {
                resolve({
                    errCode: 2,
                    errMessage: "Không còn phòng phù hợp",
                });
            } else {
                await db.Booking.create({
                    phoneNumber: data.phoneNumber,
                    typeOfRoom: data.typeOfRoom,
                    dateBooking: data.dateBooking,
                    startTime: data.startTime + 8,
                    endTime: data.endTime + 9,
                    address: data.addressSelected,
                    totalPrice: data.totalPrice,
                });
                resolve({
                    errCode: 0,
                    errMessage: "Đặt phòng thành công",
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

let getAllOrders = (userId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                attributes: {
                    exclude: ["password"],
                },
            });
            let orders = await db.Booking.findAll({
                where: { phoneNumber: user.phoneNumber },
            })
            resolve(orders);
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    updateUserData: updateUserData,
    bookingTable: bookingTable,
    getAllOrders: getAllOrders,
};