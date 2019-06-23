const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const PostConstroller = require("./controllers/PostController");
const LikeConstroller = require("./controllers/LikeConstroller");

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get("/posts", PostConstroller.index);
routes.post("/posts", upload.single("image"), PostConstroller.store);

routes.post("/posts/:id/like", LikeConstroller.store);

module.exports = routes;
