class ExpressError extends Error {
    constructor(message, statusCode) {
        super(message);    // ✅ message is correct
        this.statusCode = statusCode;  // ✅ number (404, 400, etc.)
    }
}

module.exports = ExpressError;
