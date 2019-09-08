const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.index); //Quando receber uma requisição do tipo GET na rota /products, chama a função index do controller ProductController, responsável por retorna uma lista de produtos cadastrados no banco de dados

routes.get('/products/:id', ProductController.show); //Para colocar parâmetros na rota utilizando o express, é só colocar dois pontos e o nome do parâmetro 

routes.post('/products', ProductController.store); //Create

routes.put('/products/:id', ProductController.update); //Update

routes.delete('/products/:id', ProductController.destroy); //Delete

module.exports = routes; //Exporta o routes para ser usado em server.js

