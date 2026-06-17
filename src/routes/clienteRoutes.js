const express = require('express');

const router = express.Router();

const clienteController =
require('../controllers/clienteController');

router.get(
    '/clientes',
    clienteController.listar
);

router.get(
    '/clientes/:codigo',
    clienteController.buscar
);

router.post(
    '/clientes',
    clienteController.cadastrar
);

router.put(
    '/clientes/:codigo',
    clienteController.atualizar
);

router.delete(
    '/clientes/:codigo',
    clienteController.remover
);

module.exports = router;