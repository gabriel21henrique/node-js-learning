const express = require('express'); //Importa e salva o express (o requiere primeiro interpreta (avalia, executa) e depois retorna a função express, que é salva na const express)

const mongoose = require('mongoose')

const requireDir = require('require-dir')

const cors = require('cors');

const app = express(); //Executa a função express

app.use(express.json()); //Permite que os clientes enviem dados para a aplicação usando o formato JSON

app.use(cors()); //Usa o módulo CORS para permitir o acesso público da nossa API; é possível passar parâmetros de configurações na função cors()

mongoose.connect(
  'mongodb+srv://node-js-learning-user:pltADEaEQ6l6USCh@cluster-01-xxwdd.mongodb.net/node_js_learning?retryWrites=true&w=majority',
  {useNewUrlParser: true}
);

requireDir('./src/models');

//Rotas:
app.use('/api', require('./src/routes')); //Aceita todo tipo de requisição (use faz isso) na rota api, e a manda para o arquivo routes.js

app.listen(3001); //A aplicação ouve a porta 3001 do navegador (localhost:3001)