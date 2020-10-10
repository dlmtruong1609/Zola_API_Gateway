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
router.post('/api/v0/accounts/passssswords/change', authMiddleWare.isAuth, accountServiceProxy)
router.post('/api/v0/accounts/code/verify', accountServiceProxy)

//  user api
router.put('/api/v0/users/update', accountServiceProxy)
router.get('/api/v0/users/profile', accountServiceProxy)
router.get('/api/v0/users/search', accountServiceProxy)
router.get('/api/v0/users/list', accountServiceProxy)

router.post('/api/v0/users/add', accountServiceProxy)
router.get('/api/v0/users/getAllUser', accountServiceProxy)
router.get('/api/v0/users/findUserByPhone', accountServiceProxy)
router.put('/api/v0/users/updateByPhone', accountServiceProxy)


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

module.exports = router
