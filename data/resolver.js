import {Clientes} from "./db";

const clientesDB = {}

export const resolvers = {
    Query: {
        getClientes: (tmp, {limit}) => {
            return Clientes.find({}).limit(limit)
        },
        getCliente: (tmp, {id}) => {
            return new Promise((resolve, object) => {
                Clientes.findById(id, (error, cliente) => {
                    if (error) rejects(error)
                    else resolve(cliente)
                })
            })
        }
    },
    Mutation: {
        createCliente: (tmp, {input}) => {
            const nuevoCliente = new Clientes({
                nombre: input.nombre,
                apellido: input.apellido,
                empresa: input.empresa,
                email: input.email,
                edad: input.edad,
                tipo: input.tipo,
                pedidos: input.pedidos
            })
            nuevoCliente.id = nuevoCliente._id

            return new Promise((resolve, object) => {
                nuevoCliente.save((error) => {
                    if (error) rejects(error)
                    else resolve(nuevoCliente)
                })
            })
        },

        actualizarCliente: (tmp, {input}) => {
            return new Promise((resolve, object) => {
                Clientes.findOneAndUpdate({_id: input.id}, input, {new: true}, (error, cliente) => {
                    if (error) rejects(error)
                    else resolve(cliente)
                })
            })
        }

    }
}