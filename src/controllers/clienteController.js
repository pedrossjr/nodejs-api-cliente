const clienteService = require('../services/clienteService');

class ClienteController {
    async listar(req, res) {
        const cliente = await clienteService.listar();
        return res.json(cliente);
    }

    async buscar(req, res) {
        const cliente = await clienteService.buscarPorCodigo(req.params.codigo);

        if (!cliente) {
            return res.status(404).json({mensagem: "Cliente não encontrado"});
        }

        return res.json(cliente);
    }

    async cadastrar(req, res) {
        try {
            const cliente = await clienteService.cadastrar(req.body);
            return res.status(201).json(cliente);
        } catch (erro) {
            return res.status(400).json({erro: erro.message});
        }
    }

    async atualizar(req, res) {
        try {
            const cliente = await clienteService.atualizar(req.params.codigo, req.body);
            return res.json(cliente);
        } catch (erro) {
            return res.status(404).json({erro: erro.message});
        }
    }

    async remover(req, res) {
        try {
            await clienteService.remover(req.params.codigo);
            return res.status(204).send();
        } catch (erro) {
            return res.status(404).json({erro: erro.message});
        }
    }
}

module.exports = new ClienteController();