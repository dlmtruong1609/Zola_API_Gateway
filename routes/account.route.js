const express = require('express')
const router = express.Router()
const httpProxy = require('express-http-proxy')
const authMiddleWare = require('../middleware/auth.middleware')
require('dotenv').config()
const accountServiceProxy = httpProxy(process.env.API_ACCOUNT)

//  account api
router.post('/api/v0/accounts/signin', accountServiceProxy)
router.post('/api/v0/accounts/signup', authMiddleWare.isAuth, accountServiceProxy)
router.get('/api/v0/accounts/active/send', accountServiceProxy)
router.get('/api/v0/accounts/passwords/forgot', accountServiceProxy)
router.put('/api/v0/accounts/passwords/change', authMiddleWare.isAuthRoleMember, accountServiceProxy)
router.post('/api/v0/accounts/code/password/verify', accountServiceProxy)
router.post('/api/v0/accounts/code/verify', accountServiceProxy)

//  user api

router.put('/api/v0/users/profile/update', authMiddleWare.isAuthRoleMember, accountServiceProxy)
router.put('/api/v0/users/profile/contact/update', authMiddleWare.isAuthRoleMember, accountServiceProxy)
router.get('/api/v0/users/search', authMiddleWare.isAuthRoleMember, accountServiceProxy)
router.get('/api/v0/users/list', authMiddleWare.isAuthRoleAdmin, accountServiceProxy)
router.get('/api/v0/users', authMiddleWare.isAuthRoleAdmin, accountServiceProxy)
router.get('/api/v0/users/detail', authMiddleWare.isAuthRoleMember, accountServiceProxy)
router.post('/api/v0/users', authMiddleWare.isAuthRoleAdmin, accountServiceProxy)
router.put('/api/v0/users', authMiddleWare.isAuthRoleAdmin, accountServiceProxy)
router.delete('/api/v0/users/:id', authMiddleWare.isAuthRoleAdmin, accountServiceProxy)

module.exports = router
