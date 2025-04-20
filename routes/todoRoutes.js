const express = require('express');
const app = express();
const BodyParser = require('body-parser');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extends:true}))