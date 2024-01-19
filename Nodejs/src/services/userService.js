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

            let checkPhoneNumber = true;
            let numbers = /[0-9]/g;
            for (let i = 0; i < phoneNumber.length; i++) {
                if (!phoneNumber[i].match(numbers)) {
                    checkPhoneNumber = false;
                    break;
                }
            }

            // if (user && checkPhoneNumber && phoneNumber.length === 10) {
            //     resolve(true);
            // } else {
            //     resolve(false);
            // }
            if (user) {
                resolve("Số điện thoại này đã được đăng ký. Hãy dùng số khác")
            } else if (!checkPhoneNumber || phoneNumber.length !== 10) {
                resolve("Số điện thoại không đúng định dạng")
            } else resolve("")
        } catch (e) {
            reject(e);
        }
    });
};

let checkPasswordFormat = (password) => {
    return new Promise(async(resolve, reject) => {
        try {
            if (!password) {
                resolve("Hãy điền đủ các ô cần thiết");
            } else if (password.length < 8) {
                resolve("Mật khẩu phải từ 8 kí tự trở lên");
            } else {
                let checkPassword = [false, false, false];
                let upperCaseLetters = /[A-Z]/g,
                    lowerCaseLetters = /[a-z]/g,
                    numbers = /[0-9]/g;
                for (let i = 0; i < password.length; i++) {
                    if (password[i].match(upperCaseLetters)) {
                        checkPassword[0] = true;
                        // break;
                    }
                    if (password[i].match(lowerCaseLetters)) {
                        checkPassword[1] = true;
                        // break;
                    }
                    if (password[i].match(numbers)) {
                        checkPassword[2] = true;
                        // break;
                    }
                }
                if (!checkPassword[0]) {
                    resolve("Mật khẩu phải có ít nhất 1 kí tự in hoa");
                } else if (!checkPassword[1]) {
                    resolve("Mật khẩu phải có ít nhất 1 kí tự in thường");
                } else if (!checkPassword[2]) {
                    resolve("Mật khẩu phải có ít nhất 1 số");
                } else
                    resolve("");
            }
        } catch (e) {
            reject(e);
        }
    });
}

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
            let checkPasswordMessage = await checkPasswordFormat(data.password);
            if (check.length !== 0) {
                resolve({
                    errCode: 1,
                    errMessage: check,
                });
            } else if (checkPasswordMessage.length !== 0) {
                resolve({
                    errCode: 2,
                    errMessage: checkPasswordMessage,
                })
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

let checkEmailFormat = (email) => {
    return new Promise(async(resolve, reject) => {
        try {
            let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!filter.test(email)) {
                resolve("Hay nhap dia chi email hop le.\nExample@gmail.com");
            } else {
                resolve("");
            }
        } catch (e) {
            reject(e);
        }
    })
}

let updateUserInfo = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: "Missing required parameter!",
                });
            } else {
                let checkEmail = await checkEmailFormat(data.email);
                // console.log(checkEmail);
                if (checkEmail.length !== 0) {
                    resolve({
                        errCode: 3,
                        errMessage: checkEmail,
                    })
                } else {
                    let user = await db.User.findOne({
                        where: { id: data.id },
                        raw: false,
                    });
                    if (user) {
                        user.fullName = data.fullName;
                        user.email = data.email;
                        user.birthday = data.birthday;
                        await user.save();
                        // await db.User.save({
                        //     firstname: data.firstName,
                        //     lastname: data.lastName,
                        //     address: data.address,
                        // })

                        resolve({
                            errCode: 0,
                            errMessage: "Update the user succeeds!",
                        });
                    } else {
                        resolve({
                            errCode: 1,
                            errMessage: "User not found",
                        });
                    }
                }
            }
        } catch (e) {
            reject(e);
        }
    });
};

let checkOldPassword = (userId, oldPassword) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                attributes: ["password"],
                where: { id: userId },
                raw: true,
            });
            let check = await bcrypt.compareSync(oldPassword, user.password);
            if (!check) {
                resolve("Nhập sai mật khẩu");
            } else {
                resolve("");
            }
        } catch (e) {
            reject(e);
        }
    })
}

let updatePassword = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let checkOld = await checkOldPassword(data.id, data.oldPassword);
            if (checkOld.length !== 0) {
                resolve({
                    errCode: 1,
                    errMessage: checkOld,
                })
            } else {
                let checkNew = await checkPasswordFormat(data.newPassword);
                if (checkNew.length !== 0) {
                    resolve({
                        errCode: 2,
                        errMessage: checkNew,
                    })
                } else {
                    let user = await db.User.findOne({
                        where: { id: data.id },
                        raw: false,
                    });
                    user.password = await hashUserPassword(data.newPassword);
                    await user.save();
                    resolve({
                        errCode: 0,
                        errMessage: "Thay đổi mật khẩu thành công",
                    })
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}

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
    updateUserInfo: updateUserInfo,
    bookingTable: bookingTable,
    getAllOrders: getAllOrders,
    updatePassword: updatePassword,
};