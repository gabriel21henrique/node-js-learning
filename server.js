const express = require('express'); //Importa e salva o express (o requiere primeiro interpreta (avalia, executa) e depois retorna a função express, que é salva na const express)
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express(); //Executa a função express

mongoose.connect(
  'mongodb://localhost:27017/first-project', 
  {useNewUrlParser: true}
);

requireDir('./src/models');

const Product = mongoose.model('Product');

app.get('/', (req, res) => { //req: todas as informações da requisição feita pelo cliente | res: resposta da requisição dada pelo servidor
  Product.create({
    title:'React Native',
    description: 'Build native apps with React',
    url: 'https://github.com/facebook/react-native'
  }); 
  console.log('Product created!')  
  return res.send('Product created!') //Quando o usuário fazer uma requisição na rota raiz (/) a res, é um Product created!
})

app.listen(3001); //A aplicação ouve a porta 3001 do navegador (localhost:3001)