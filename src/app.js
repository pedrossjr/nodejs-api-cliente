const express = require('express');
const cors = require('cors');
const config = require('./config/env');
const clienteRoutes = require('./routes/clienteRoutes');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./middlewares/logger');
const app = express();

app.use(cors());
app.use(errorHandler);
app.use(logger);
app.use(express.json());

app.use('/api',
    clienteRoutes
);

app.listen(config.port, () => {
    console.log(
        `Servidor iniciado na porta ${config.port}`
    );
});