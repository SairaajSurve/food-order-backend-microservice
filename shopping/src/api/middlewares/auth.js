const { ValidateSignature } = require('../../utils');

module.exports = async (req, res, next) => {

    try {
        const isAuthorized = await ValidateSignature(req);

        if (isAuthorized) {
            return next();
        }
    } catch (error) {
        console.log(`JWT Error: ${error.message}`);
        return res.status(403).json({ message: 'Not Authorized' });
    }
}