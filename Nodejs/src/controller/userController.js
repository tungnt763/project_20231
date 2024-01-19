import userService from "../services/userService";

let handleLogin = async(req, res) => {
    let phoneNumber = req.body.phoneNumber;
    let password = req.body.password;

    if (!phoneNumber || !password) {
        return res.status(200).json({
            errCode: 1,
            message: "Hãy điền đủ các ô cần thiết",
        });
    } else {
        let userData = await userService.handleUserLogin(phoneNumber, password);
        // check phoneNumber exist
        // compare password
        // return userInfo
        // access_token: JWT
        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            user: userData ? userData.user : {},
        });
    }
};

let handleGetAllUser = async(req, res) => {
    let id = req.query.id; //ALL, id

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters",
            users: [],
        });
    }

    let users = await userService.getAllUsers(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: "OK",
        users,
    });
};

let handleCreateNewUser = async(req, res) => {
    let message = await userService.createNewUser(req.body);
    return res.status(200).json(message);
};

let handleDeleteUser = async(req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters!",
        });
    }
    let message = await userService.deleteUser(req.body.id);
    return res.status(200).json(message);
};

let handleEditUser = async(req, res) => {
    let data = req.body;
    let message = await userService.updateUserData(data);
    return res.status(200).json(message);
};

let handleBookingTable = async(req, res) => {
    let typeOfRoom = req.body.typeOfRoom;
    let startTime = req.body.startTime;
    let address = req.body.addressSelected;

    if (address === "") {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Bạn chưa chọn chi nhánh",
        });
    } else if (typeOfRoom < 0) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Bạn chưa chọn loại phòng",
        });
    } else if (startTime < 0) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Bạn chưa chọn thời gian",
        });
    } else {
        let message = await userService.bookingTable(req.body);
        return res.status(200).json(message);
    }
};

let handleGetAllOrder = async(req, res) => {
    let id = req.query.id;
    let orders = await userService.getAllOrders(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: "OK",
        orders,
    });
}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUser: handleGetAllUser,
    handleCreateNewUser: handleCreateNewUser,
    handleEditUser: handleEditUser,
    handleDeleteUser: handleDeleteUser,
    handleBookingTable: handleBookingTable,
    handleGetAllOrder: handleGetAllOrder,
};