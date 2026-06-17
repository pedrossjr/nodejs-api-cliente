const repository = require('../repositories/clienteRepository');

class ClienteRepository {

    findAll() {
        return repository.findAll();
    }

    findByCodigo(codigo) {
        return clientes.find(
            c => c.codigo == codigo
        );
    }

    save(cliente) {

        clientes.push(cliente);

        return cliente;
    }

    delete(codigo) {

        const index =
            clientes.findIndex(
                c => c.codigo == codigo
            );

        clientes.splice(index, 1);
    }
}

module.exports =
new ClienteRepository();