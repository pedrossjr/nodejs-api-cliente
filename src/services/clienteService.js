const repository = require('../repositories/clienteRepository');

class ClienteService {
    async listar() {
        return await repository.findAll();
    }

    async buscarPorCodigo(codigo) {
        return await repository.findByCodigo(codigo);
    }

    async cadastrar(dados) {
        const existe = await repository.findByCodigo(dados.codigo);

        if(existe) {
            throw new Error('Cliente já existe');
        }

        return await repository.save(
            dados
        );
    }

    async atualizar(codigo, dados) {

        const cliente = await repository.findByCodigo(codigo);

        if (!cliente) {
            throw new Error("Cliente não encontrado");
        }

        cliente.nome = dados.nome;
        cliente.telefone = dados.telefone;
        cliente.email = dados.email;

        return await repository.update(cliente);
    }

    async remover(codigo) {
        const cliente = await repository.findByCodigo(codigo);

        if (!cliente) {
            throw new Error("Cliente não encontrado");
        }

        await repository.delete(codigo);
    }
}

module.exports = new ClienteService();