const jwtHelper = require('../helpers/jwt.helper')
const Response = require('../utils/response')
require('dotenv').config()
const CONSTANT = require('../utils/auth.constants')
// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
/**
 * Middleware: Authorization user by Token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const isAuth = async (req, res, next) => {
  // Lấy token được gửi lên từ phía client
  const tokenFromClient = req.headers['x-access-token'] ? req.headers['x-access-token'] : req.query.token
  if (tokenFromClient) {
    // Nếu tồn tại token
    try {
      // Thực hiện giải mã token xem có hợp lệ hay không?
      const decoded = await jwtHelper.verifyToken(tokenFromClient, accessTokenSecret)
      // Nếu token hợp lệ, lưu thông tin giải mã được vào đối tượng req, dùng cho các xử lý ở phía sau.
      req.jwtDecoded = decoded
      // Cho phép req đi tiếp sang service.
      next()
    } catch (error) {
      // Nếu giải mã gặp lỗi: Không đúng, hết hạn...etc:
      return res.status(401).send(new Response(true, CONSTANT.UNAUTHORIZED, null))
    }
  } else {
    // Không tìm thấy token trong request
    return res.status(499).send(new Response(true, CONSTANT.NO_TOKEN_PROVIDED, null))
  }
}
const isAuthRoleAdmin = async (req, res, next) => {
  // Lấy token được gửi lên từ phía client
  const tokenFromClient = req.headers['x-access-token'] ? req.headers['x-access-token'] : req.query.token
  if (tokenFromClient) {
    // Nếu tồn tại token
    try {
      // Thực hiện giải mã token xem có hợp lệ hay không?
      const decoded = await jwtHelper.verifyToken(tokenFromClient, accessTokenSecret)
      if (decoded.data.role === 'ADMIN') {
        // Nếu token hợp lệ, lưu thông tin giải mã được vào đối tượng req, dùng cho các xử lý ở phía sau.
        req.jwtDecoded = decoded
        // Cho phép req đi tiếp sang service.
        next()
      } else {
        return res.status(403).send(new Response(true, CONSTANT.ACCESS_DENIED, null))
      }
    } catch (error) {
      // Nếu giải mã gặp lỗi: Không đúng, hết hạn...etc:
      return res.status(401).send(new Response(true, CONSTANT.UNAUTHORIZED, null))
    }
  } else {
    // Không tìm thấy token trong request
    return res.status(499).send(new Response(true, CONSTANT.NO_TOKEN_PROVIDED, null))
  }
}

const isAuthRoleMember = async (req, res, next) => {
  // Lấy token được gửi lên từ phía client
  const tokenFromClient = req.headers['x-access-token'] ? req.headers['x-access-token'] : req.query.token
  if (tokenFromClient) {
    // Nếu tồn tại token
    try {
      // Thực hiện giải mã token xem có hợp lệ hay không?
      const decoded = await jwtHelper.verifyToken(tokenFromClient, accessTokenSecret)
      console.log(decoded)
      if (decoded.data.role === 'MEMBER' || decoded.data.role === 'ADMIN') {
        // Nếu token hợp lệ, lưu thông tin giải mã được vào đối tượng req, dùng cho các xử lý ở phía sau.
        req.jwtDecoded = decoded
        // Cho phép req đi tiếp sang service.
        next()
      } else {
        return res.status(403).send(new Response(true, CONSTANT.ACCESS_DENIED, null))
      }
    } catch (error) {
      // Nếu giải mã gặp lỗi: Không đúng, hết hạn...etc:
      return res.status(401).send(new Response(true, CONSTANT.UNAUTHORIZED, null))
    }
  } else {
    // Không tìm thấy token trong request
    return res.status(499).send(new Response(true, CONSTANT.NO_TOKEN_PROVIDED, null))
  }
}
module.exports = {
  isAuth: isAuth,
  isAuthRoleAdmin: isAuthRoleAdmin,
  isAuthRoleMember: isAuthRoleMember
}
