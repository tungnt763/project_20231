import db from "../models/index";
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let handleUserLogin = (phoneNumber, password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkPhoneNumber(phoneNumber);
            if (isExist) {
                // user already exist
                // compare password

                let user = await db.User.findOne({
                    attributes: ['phoneNumber', 'roleId', 'password'],
                    where: { phoneNumber: phoneNumber },
                    raw: true,
                });

                if (user) {
                    // compare password
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'Ok';
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User not found`;
                }
            } else {
                // return error
                userData.errCode = 1;
                userData.errMessage = `Your phoneNumber isn't exist in your FileSystem. Pls try other phoneNumber`
            }
            resolve(userData)
        } catch (e) {
            reject(e);
        }
    })
}

let checkPhoneNumber = (phoneNumber) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { phoneNumber: phoneNumber }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllUsers = (userId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let users = '';
            if (userId === 'ALL') {
                users = await db.User.findAll({
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            if (userId && userId != 'ALL') {
                users = await db.User.findOne({
                    where: { id: userId },
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            resolve(users)
        } catch (e) {
            reject(e);
        }
    })
}

let createNewUser = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            // check phoneNumber is exist???
            let check = await checkPhoneNumber(data.phoneNumber);
            if (check === true) {
                resolve({
                    errCode: 1,
                    errMessage: 'Your phoneNumber is used, pls use other phoneNumber'
                })
            } else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                await db.User.create({
                    phoneNumber: data.phoneNumber,
                    password: hashPasswordFromBcrypt,
                    fullName: data.fullName,
                    address: data.address,
                    roleId: data.roleId,
                })
                resolve({
                    errCode: 0,
                    message: 'OK'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let deleteUser = (userId) => {
    return new Promise(async(resolve, reject) => {
        let foundUser = await db.User.findOne({
            where: { id: userId }
        })
        if (!foundUser) {
            resolve({
                errCode: 2,
                errMessage: `The user isn't exist`
            })
        } else {

            // await foundUser.destroy();
            await db.User.destroy({
                where: { id: userId }
            })

            resolve({
                errCode: 0,
                message: `The user id deleted`
            })
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameter!'
                })
            } else {
                let user = await db.User.findOne({
                    where: { id: data.id },
                    raw: false
                })
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
                        message: 'Update the user succeeds!'
                    });
                } else {
                    resolve({
                        errCode: 1,
                        errMessage: 'User not found'
                    });
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    updateUserData: updateUserData,
}