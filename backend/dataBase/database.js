const dns = require('dns');
const mongoose = require('mongoose');

dns.setServers(['8.8.8.8', '1.1.1.1']);

const conectarDB = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB conectado');

    } catch (error) {

        console.error('Error al conectar MongoDB:', error.message);
        process.exit(1);

    }
};

module.exports = conectarDB;