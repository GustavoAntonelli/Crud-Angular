const express = require('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const department_controller = require('./department_controller')
const product_controller = require('./product_controller')
const meuBancoUrl = 'mongodb+srv://gustavo_antonelli:gustavo_antonelli@cluster0.dyuuc.mongodb.net/aplicacao_http?retryWrites=true&w=majority';
const app = express();

mongoose.connect(meuBancoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.use('/departments', department_controller)
app.use('/products', product_controller)

app.listen(3000, () => {
    console.log("Servidor rodando na porta ", 3000);
});