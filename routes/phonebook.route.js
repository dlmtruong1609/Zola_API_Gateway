const express = require('express')
const router = express.Router()
const httpProxy = require('express-http-proxy')
// const authMiddleWare = require('../middleware/auth.middleware')
const accountServiceProxy = httpProxy('http://api_phonebook_chat:3210')

// phonebook
router.post('/api/v0/users/addFriend', accountServiceProxy)

router.get('/api/v0/users/listFriendRequest', accountServiceProxy)

router.post('/api/v0/users/addFriend', accountServiceProxy)

router.post('/api/v0/users/accepFriend', accountServiceProxy)

router.post('/api/v0/users/declineFriend', accountServiceProxy)

router.get('/api/v0/users/listFriendRequest', accountServiceProxy)

router.get('/api/v0/users/getListFriendByPhoneUser', accountServiceProxy)

router.get('/api/v0/users/getListFriendRequestByPhoneUser', accountServiceProxy)

router.get('/api/v0/users/getListFriendContactByPhoneUser', accountServiceProxy)

router.get('/api/v0/users/getListFriendPhoneBookByPhoneUser', accountServiceProxy)

router.get('/api/v0/users/textSearch', accountServiceProxy)

router.post('/api/v0/users/deleteFriend', accountServiceProxy)

router.get('/api/v0/users/getListPhoneBookById', accountServiceProxy)

router.get('/api/v0/users/getListRequestId', accountServiceProxy)

router.get('/api/v0/users/getListContactId', accountServiceProxy)

router.get('/api/v0/users/searchUserByPhone', accountServiceProxy)

router.post('/api/v0/users/deletePhoneByIdRequest', accountServiceProxy)

router.post('/api/v0/users/deletePhoneByIdContact', accountServiceProxy)

router.post('/api/v0/users/deletePhoneByIdPhoneBook', accountServiceProxy)

router.post('/api/v0/users/syncPhoneBook', accountServiceProxy)

module.exports = router