const express = require('express');
const cors = require('cors');
const http = require('http');
const CertificateController = require('./controller/CertificateController');

const app = express();
app.use(cors());
const server = http.Server(app);

const routes = express.Router();
routes.get('/ping', CertificateController.ping);
routes.post('/certificado', CertificateController.emit);

app.use(express.json());
app.use(routes);

server.listen(process.env.PORT || 3333);
