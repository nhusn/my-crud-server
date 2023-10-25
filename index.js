const jsonServer = require('json-server')

const crudServer = jsonServer.create()

const router = jsonServer.router("db.json")

const middlewares = jsonServer.defaults()

const port = 5367 || process.env.PORT

crudServer.use(middlewares)
crudServer.use(router)

crudServer.listen(port,()=>{
    console.log(`Crud Server Started at ${port}, and waiting for client request`);
})