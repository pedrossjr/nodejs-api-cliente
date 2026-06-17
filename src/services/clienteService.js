const Cliente = require('../models/cliente');

let clientes = [];

class ClienteService {

    listar() {
        return clientes;
    }

    buscarPorCodigo(codigo) {
        return clientes.find(c => c.codigo == codigo);
    }

    cadastrar(dados) {

        const existe = clientes.find(
            c => c.codigo == dados.codigo
        );

        if (existe) {
            throw new Error(
                "Cliente já cadastrado"
            );
        }

        const cliente = new Cliente(
            dados.codigo,
            dados.nome,
            dados.telefone,
            dados.email
        );

        clientes.push(cliente);

        return cliente;
    }

    atualizar(codigo, dados) {

        const cliente =
            this.buscarPorCodigo(codigo);

        if (!cliente) {
            throw new Error(
                "Cliente não encontrado"
            );
        }

        cliente.nome = dados.nome;
        cliente.telefone = dados.telefone;
        cliente.email = dados.email;

        return cliente;
    }

    remover(codigo) {

        const indice =
            clientes.findIndex(
                c => c.codigo == codigo
            );

        if (indice < 0) {
            throw new Error(
                "Cliente não encontrado"
            );
        }

        clientes.splice(indice, 1);
    }
}

module.exports = new ClienteService();