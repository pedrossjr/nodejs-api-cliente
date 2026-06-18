const Cliente = require('../models/cliente');

class ClienteRepository {
    async findAll() {
        return await Cliente.findAll();
    }

    async findByCodigo(codigo) {
        return await Cliente.findByPk(codigo);
    }

    async save(cliente) {
        return await Cliente.create(cliente);
    }

    async update(cliente) {
        return await cliente.save();
    }

    async delete(codigo) {
        const cliente = await this.findByCodigo(codigo);

        if(cliente) {
            await cliente.destroy();
        }
    }
}

module.exports = new ClienteRepository();