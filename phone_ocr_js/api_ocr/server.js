// Importa as dependências do express
/*
import express from 'express'
import bodyParser from 'body-parser';
// Importa a instância do multer configurada
import upload from './config/storage';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
// Adiciona o multer ao endpoint
app.post('/upload', upload.single('image'), async (req, res, next) => {
  const file = req.file
  // Retorna erro caso nenhum arquivo tenha sido enviado
  if (!file) {
    const error = new Error('Envie o arquivo a ser tratado');
    error.httpStatusCode = 400;
    return res.json(error)
  }
  // Retorna as informações do arquivo em caso de sucesso
  res.send(file);
})
app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
*/

import express from 'express'
import bodyParser from 'body-parser';
import upload from './config/storage';
import { extractText } from './lib/imageHandler';
const app = express();
const teste = []

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send(teste)
})

app.post('/upload', upload.single('image'), async (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Envie o arquivo a ser tratado');
    error.httpStatusCode = 400;
    return res.json(error);
  }
  // Inicia a extração de texto
  await extractText(file.path).then(text => {
    const result = { data: text, ...file };
    res.json(result);
    teste.push({'resposta': result})
  }).catch(error => {
    res.json(error);
  });
})
app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});