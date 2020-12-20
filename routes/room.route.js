const express = require('express')
const router = express.Router()
const httpProxy = require('express-http-proxy')
const authMiddleWare = require('../middleware/auth.middleware')
require('dotenv').config()
const accountServiceProxy = httpProxy(process.env.API_CHAT)

router.post('/api/v0/rooms/single', authMiddleWare.isAuthRoleMember, accountServiceProxy)
router.post('/api/v0/rooms/single', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.post('/api/v0/rooms/group', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.get('/api/v0/rooms', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.get('/api/v0/rooms/:id', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.put('/api/v0/rooms', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.delete('/api/v0/rooms', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.put('/api/v0/rooms/exit', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.put('/api/v0/rooms', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.put('/api/v0/rooms/members', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.get('/api/v0/rooms/messages/recent', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.put('/api/v0/rooms/users/:id', accountServiceProxy)

router.use('/', accountServiceProxy)

module.exports = router
