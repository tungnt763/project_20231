// moi khi truy cap vao 1 duong link cua website thi no se chay vao file nay dau tien
import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";
let router = express.Router();
let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);

  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-users", userController.handleGetAllUser);
  router.post("/api/create-new-user", userController.handleCreateNewUser);
  router.put("/api/edit-user-info", userController.handleEditUserInfo);
  router.put("/api/edit-password", userController.handleEditPassword);
  // router.put('/api/edit-user', userController.handleEditUser);
  router.delete("/api/delete-user", userController.handleDeleteUser); // restAPI
  router.post("/api/booking-table", userController.handleBookingTable);
  router.get("/api/get-all-orders", userController.handleGetAllOrder);
  router.get("/api/get-all-rooms", userController.handleGetAllRoom);
  router.post("/api/add-room", userController.handleAddRoom);

  // res api -> muon lay data thi dung method get
  // muon tao data thi dung method post
  // muon xoa data thi dung method delete
  // muon update data thi dung put

  return app.use("/", router);
};

module.exports = initWebRoutes;
