const express = require('express');
const router = express.Router();
const httpProxy = require('express-http-proxy');
const authMiddleWare = require("../middleware/auth.middleware");
const accountServiceProxy = httpProxy('http://api_account_chat:3333');

//  account api
router.post("/api/v0/accounts/signin", accountServiceProxy);
router.post("/api/v0/accounts/signup", accountServiceProxy);
router.post("/api/v0/accounts/active", authMiddleWare.isAuth, accountServiceProxy);
router.get("/api/v0/accounts/active/send", accountServiceProxy);
router.get("/api/v0/accounts/passwords/forgot", accountServiceProxy);
router.post("/api/v0/accounts/passwords/change", authMiddleWare.isAuth, accountServiceProxy);

//  user api
router.put("/api/v0/users/update", authMiddleWare.isAuth, accountServiceProxy);
router.get("/api/v0/users/profile", accountServiceProxy);
router.get("/api/v0/users/search", accountServiceProxy);
router.get("/api/v0/users/list", accountServiceProxy);

module.exports = router;
