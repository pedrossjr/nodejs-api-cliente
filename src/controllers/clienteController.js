const clienteService =
require('../services/clienteService');

class ClienteController {

    listar(req, res) {

        return res.json(
            clienteService.listar()
        );
    }

    buscar(req, res) {

        const cliente =
            clienteService.buscarPorCodigo(
                req.params.codigo
            );

        if (!cliente) {

            return res.status(404).json({
                mensagem:
                "Cliente não encontrado"
            });
        }

        return res.json(cliente);
    }

    cadastrar(req, res) {

        try {

            const cliente =
                clienteService.cadastrar(
                    req.body
                );

            return res.status(201).json(
                cliente
            );

        } catch (erro) {

            return res.status(400).json({
                erro: erro.message
            });
        }
    }

    atualizar(req, res) {

        try {

            const cliente =
                clienteService.atualizar(
                    req.params.codigo,
                    req.body
                );

            return res.json(cliente);

        } catch (erro) {

            return res.status(404).json({
                erro: erro.message
            });
        }
    }

    remover(req, res) {

        try {

            clienteService.remover(
                req.params.codigo
            );

            return res.status(204).send();

        } catch (erro) {

            return res.status(404).json({
                erro: erro.message
            });
        }
    }
}

module.exports = new ClienteController();