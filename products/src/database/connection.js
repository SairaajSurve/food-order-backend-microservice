const mongoose = require('mongoose');
const { DB_URL } = require('../config');

module.exports = async () => {

    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Product database connected');

    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }

};

