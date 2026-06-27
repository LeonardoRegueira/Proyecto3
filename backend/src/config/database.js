require('dotenv').config();

const dns = require('dns');
const mongoose = require('mongoose');

dns.setServers(['8.8.8.8', '1.1.1.1']);

const conectarDB = async () => {
    try {

        if (!process.env.MONGODB_URI) {
            throw new Error('Falta configurar MONGODB_URI en el archivo .env');
        }

        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 10000
        });
        console.log('MongoDB conectado');

    } catch (error) {

        console.error('Error al conectar MongoDB:', error.message);
        process.exit(1);

    }
};

module.exports = conectarDB;
