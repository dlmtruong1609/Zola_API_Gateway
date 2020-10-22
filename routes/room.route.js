const express = require('express')
const router = express.Router()
const httpProxy = require('express-http-proxy')
const authMiddleWare = require('../middleware/auth.middleware')
const accountServiceProxy = httpProxy('http://api_room_chat:8080')

router.post('/api/v0/rooms/single', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.post('/api/v0/rooms/group', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.get('/api/v0/rooms', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.get('/api/v0/rooms/detail', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.put('/api/v0/rooms', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.delete('/api/v0/rooms', authMiddleWare.isAuthRoleMember, accountServiceProxy)

router.put('/api/v0/rooms/exit', authMiddleWare.isAuthRoleMember, accountServiceProxy)

module.exports = router
