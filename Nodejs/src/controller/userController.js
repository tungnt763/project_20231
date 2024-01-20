import userService from "../services/userService";

let handleLogin = async (req, res) => {
  let phoneNumber = req.body.phoneNumber;
  let password = req.body.password;
  let checkPhoneNumber = true;
  let numbers = /[0-9]/g;
  for (let i = 0; i < phoneNumber.length; i++) {
    if (!phoneNumber[i].match(numbers)) {
      checkPhoneNumber = false;
      break;
    }
  }
  if (!phoneNumber || !password) {
    return res.status(200).json({
      errCode: 1,
      message: "Hãy điền đủ các ô cần thiết",
    });
  } else if (phoneNumber.length != 10 || !checkPhoneNumber) {
    return res.status(200).json({
      errCode: 8,
      message: "Số điện thoại không đúng định dạng",
    });
  } else {
    if (password.length < 8) {
      return res.status(200).json({
        errCode: 4,
        message: "Mật khẩu phải từ 8 kí tự trở lên",
      });
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
        return res.status(200).json({
          errCode: 5,
          message: "Mật khẩu phải có ít nhất 1 kí tự in hoa",
        });
      } else if (!checkPassword[1]) {
        return res.status(200).json({
          errCode: 6,
          message: "Mật khẩu phải có ít nhất 1 kí tự in thường",
        });
      } else if (!checkPassword[2]) {
        return res.status(200).json({
          errCode: 7,
          message: "Mật khẩu phải có ít nhất 1 số",
        });
      } else {
        let userData = await userService.handleUserLogin(phoneNumber, password);
        return res.status(200).json({
          errCode: userData.errCode,
          message: userData.errMessage,
          user: userData ? userData.user : {},
        });
      }
    }
  }
};

let handleGetAllUser = async (req, res) => {
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

let handleCreateNewUser = async (req, res) => {
  let message = await userService.createNewUser(req.body);
  return res.status(200).json(message);
};

let handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters!",
    });
  }
  let message = await userService.deleteUser(req.body.id);
  return res.status(200).json(message);
};

let handleEditUserInfo = async (req, res) => {
  let data = req.body;
  // console.log(data);
  let message = await userService.updateUserInfo(data);
  return res.status(200).json(message);
};

let handleEditPassword = async (req, res) => {
  let data = req.body;
  // console.log(data);
  let message = await userService.updatePassword(data);
  return res.status(200).json(message);
};

let handleBookingTable = async (req, res) => {
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

let handleGetAllOrder = async (req, res) => {
  let id = req.query.id;
  let orders = await userService.getAllOrders(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    orders,
  });
};

let handleGetAllRoom = async (req, res) => {
  let rooms = await userService.getAllRoom();
  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    rooms,
  });
};

module.exports = {
  handleLogin: handleLogin,
  handleGetAllUser: handleGetAllUser,
  handleCreateNewUser: handleCreateNewUser,
  handleEditUserInfo: handleEditUserInfo,
  handleDeleteUser: handleDeleteUser,
  handleBookingTable: handleBookingTable,
  handleGetAllOrder: handleGetAllOrder,
  handleEditPassword: handleEditPassword,
  handleGetAllRoom: handleGetAllRoom,
};
