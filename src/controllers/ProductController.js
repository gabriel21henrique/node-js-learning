//O arquivo ProductController gerencia as operações que a gente pode ter em determinado model, como por exemplo fazer o CRUD do model Product

const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = { //Exporta um objeto com algumas funções
  async index(req, res){ //index faz uma listagem de todo o registro de produtos da base de dados (Read)

    const { page = 1} = req.query; //req.query: acessar parâmetros GET passados na requisição; req.body: acessar informações (corpo) da requisição; req.params: acessar parâmetros passados na requisição

    const products = await Product.paginate({}, {page, limit: 10}); //await faz o código aguardar até que seja retornada a lista de todos os produtos, antes de executar a linha debaixo

    //Parâmetros do .paginate: o primeiro objeto vazio é onde podemos passar parâmetros, como where e outras condições de filtro; o segundo parâmetro colocamos a página atual da paginção; o terceiro parâmetro é o limite de itens da página
    
    return res.json(products); //Retorna a lista de produtos em formato JSON
  },

  async show(req, res){ //Read (specific)
    const product = await Product.findById(req.params.id); //Utiliza o parâmetro id da rota para fazer a busca

    return res.json(product);
  },

  async update(req, res){ //Update
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true //Faz com que product receba o novo produto, ou seja, o produto atualizado (com o update), para então retorna-lo ao fim do método
    });
    return res.json(product);
  },

  async store(req, res){ //Create
    const product = await Product.create(req.body); //O corpo da requisição possui todos os dados que o cliente está nos fornecendo, ou seja, nossa aplicação usa as informações fornecidas no request do cliente para criar o produto

    return res.json(product); //Retorna para o cliente o produto que acabou de ser criado na base de dados
  },

  async destroy(req, res){ //Update
    await Product.findByIdAndDelete(req.params.id);

    return res.send(); //Retorna o status final da requisição (se deu certou ou não)
  }
};