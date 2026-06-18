const express = require('express');
const cors = require('cors');
const config = require('./config/env');
const clienteRoutes = require('./routes/clienteRoutes');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./middlewares/logger');
const sequelize = require('./config/database');
require('./models');
const app = express();

app.use(cors());
app.use(errorHandler);
app.use(logger);
app.use(express.json());
app.use('/api', clienteRoutes);

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Banco conectado');
        await sequelize.sync({ alter: true });
        console.log('Tabelas sincronizadas');
        app.listen(config.port, () => {
            console.log(`Servidor iniciado na porta ${config.port}`);
        });
    } catch(err) {
        console.error('Erro ao iniciar aplicação', err);
    }
}

startServer();