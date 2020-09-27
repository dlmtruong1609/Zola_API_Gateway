 
/**
 * @author Đặng Lê Minh Trường (dlmtruong1609@gmail.com)
 * @description Constructor to response
 */
/**
 * function to response after request
 * @param error
 * @param message
 * @param data
 */
function Response(error, message, data) {
    this.error = error;
    this.message = message;
    this.data = data;
}

module.exports = Response;