const express = require('express')
const router = express.Router()
const httpProxy = require('express-http-proxy')
const authMiddleWare = require('../middleware/auth.middleware')
const accountServiceProxy = httpProxy('http://api_account_chat:3333')

//  account api
router.post('/api/v0/accounts/signin', accountServiceProxy)
router.post('/api/v0/accounts/signup', accountServiceProxy)
router.post('/api/v0/accounts/active', accountServiceProxy)
router.get('/api/v0/accounts/active/send', accountServiceProxy)
router.get('/api/v0/accounts/passwords/forgot', accountServiceProxy)
router.post('/api/v0/accounts/passwords/change', authMiddleWare.isAuth, accountServiceProxy)
router.post('/api/v0/accounts/code/verify', accountServiceProxy)

//  user api
router.put('/api/v0/users/profile/update', authMiddleWare.isAuth, accountServiceProxy)
router.get('/api/v0/users/search', accountServiceProxy)
router.get('/api/v0/users/list', accountServiceProxy)
router.post('/api/v0/users/add', authMiddleWare.isAuthRoleAdmin, accountServiceProxy)
router.get('/api/v0/users', accountServiceProxy)
router.get('/api/v0/users/detail', accountServiceProxy)
router.put('/api/v0/users/update', authMiddleWare.isAuthRoleAdmin, accountServiceProxy)
module.exports = router
