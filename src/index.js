const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const controllers = [
  "produtos.js",
  "cliente.js",
  "compra_finalizada"
];

controllers.forEach(controller => {
  const controllerModule = require(`./controllers/${controller}`);
  
  app.get(`/${controller}`, (req, res) => {
    res.json(controllerModule.index());
  });

  app.get(`/${controller}/:id`, (req, res) => {
    res.json(controllerModule.show(req.params.id));
  });

  app.post(`/${controller}`, (req, res) => {
    const code = controllerModule.store(req.body);
    res.status(code).json();
  });

  app.put(`/${controller}/:id`, (req, res) => {
    const code = controllerModule.update(req.params.id, req.body);
    res.status(code).json();
  });

  app.delete(`/${controller}/:id`, (req, res) => {
    const code = controllerModule.destroy(req.params.id);
    res.status(code).json();
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
