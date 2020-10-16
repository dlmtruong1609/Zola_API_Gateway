const express = require('express')
const router = express.Router()
const httpProxy = require('express-http-proxy')
const authMiddleWare = require('../middleware/auth.middleware')
const accountServiceProxy = httpProxy('http://api_phonebook_chat:3210')

// phonebook
router.post('/api/v0/users/addFriend',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.get('/api/v0/users/listFriendRequest',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.post('/api/v0/users/addFriend',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.post('/api/v0/users/accepFriend',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.post('/api/v0/users/declineFriend',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.get('/api/v0/users/listFriendRequest',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.get('/api/v0/users/getListFriendByPhoneUser',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.get('/api/v0/users/getListFriendRequestByPhoneUser',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.get('/api/v0/users/getListFriendContactByPhoneUser',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.get('/api/v0/users/getListFriendPhoneBookByPhoneUser',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.get('/api/v0/users/textSearch',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.post('/api/v0/users/deleteFriend',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.get('/api/v0/users/getListPhoneBookById',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.get('/api/v0/users/getListRequestId',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.get('/api/v0/users/getListContactId',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.get('/api/v0/users/searchUserByPhone', accountServiceProxy)

router.post('/api/v0/users/deletePhoneByIdRequest',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.post('/api/v0/users/deletePhoneByIdContact',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.post('/api/v0/users/deletePhoneByIdPhoneBook',authMiddleWare.isAuthRoleMember , accountServiceProxy)

router.post('/api/v0/users/syncPhoneBook',authMiddleWare.isAuthRoleMember , accountServiceProxy)

module.exports = router