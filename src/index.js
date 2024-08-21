const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Importando os controladores das entidades
const supermercado_controller = require("./controllers/supermercado.js");
const enderecoLoja_controller = require("./controllers/endereco.js");
const setor_controller = require("./controllers/setor.js");
const funcionarios_controller = require("./controllers/funcionarios.js");
const pagamento_controller = require("./controllers/pagamento.js");
const carrinho_controller = require("./controllers/carrinho.js");
const produtosCarrinho_controller = require("./controllers/produtos.js");
const compraFinalizada_controller = require("./controllers/compra.js");

// Rotas para a entidade Supermercado
app.get("/supermercado", (req, res) => {
    const content = supermercado_controller.index();
    res.json(content);
});

app.get("/supermercado/:id", (req, res) => {
    const content = supermercado_controller.show(req.params.id);
    res.json(content);
});

app.post("/supermercado", (req, res) => {
    const code = supermercado_controller.store(req.body);
    res.status(code).json();
});

app.put("/supermercado/:id", (req, res) => {
    const code = supermercado_controller.update(req.params.id, req.body);
    res.status(code).json();
});

app.delete("/supermercado/:id", (req, res) => {
    const code = supermercado_controller.destroy(req.params.id);
    res.status(code).json();
});

// Rotas para a entidade Endereço/Loja
app.get("/enderecoLoja", (req, res) => {
    const content = enderecoLoja_controller.index();
    res.json(content);
});

app.get("/enderecoLoja/:id", (req, res) => {
    const content = enderecoLoja_controller.show(req.params.id);
    res.json(content);
});

app.post("/enderecoLoja", (req, res) => {
    const code = enderecoLoja_controller.store(req.body);
    res.status(code).json();
});

app.put("/enderecoLoja/:id", (req, res) => {
    const code = enderecoLoja_controller.update(req.params.id, req.body);
    res.status(code).json();
});

app.delete("/enderecoLoja/:id", (req, res) => {
    const code = enderecoLoja_controller.destroy(req.params.id);
    res.status(code).json();
});

// Repetir o mesmo padrão para as outras entidades...

// Inicialização do servidor
app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port);
});
