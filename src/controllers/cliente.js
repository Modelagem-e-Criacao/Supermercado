const db = []; // Banco de dados em memória
let nextId = 1; // ID único para cada cliente

const model = (body, id = nextId++) => {
  if (
    body.nome != undefined &&
    body.email != undefined &&
    body.endereco != undefined &&
    body.nome != "" &&
    body.email != "" &&
    body.endereco != ""
  ) {
    return {
      id,
      nome: body.nome,
      email: body.email,
      endereco: body.endereco,
      telefone: body.telefone || null // Campo opcional
    };
  }
};

const store = (body) => {
  const novo = model(body);
  if (novo) {
    db.push(novo);
    return 201; // Status de criado com sucesso
  }
  return 400; // Status de requisição inválida
};

const index = () => db; // Retorna todos os clientes

const show = (id) => db.find((el) => el.id == id); // Retorna um cliente pelo ID

const update = (id, body) => {
  const index = db.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));
  if (index != -1 && novo) {
    db[index] = novo;
    return 200; // Status de atualização bem-sucedida
  }
  return 400; // Status de requisição inválida
};

const destroy = (id) => {
  const index = db.findIndex((el) => el.id == id);
  if (index != -1) {
    db.splice(index, 1);
    return 200; // Status de exclusão bem-sucedida
  }
  return 404; // Status de não encontrado
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy
};
