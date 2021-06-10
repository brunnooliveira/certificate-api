## Certificate

API para emissão de certificados

Projeto desenvolvido com

- NodeJS
- Express
- Handlebars
- Puppeteer

**Rodando o projeto:**

```
npm install && npm start
```

**Dev Local Endpoint**

```
POST http://localhost:3333/certificado
{
    "html":"https://brunnooliveira.github.io/certificate.html",
    "data": {
        "name": "Brunno Oliveira",
        "date": "09/06/2021",
        "course": "NodeJS & Express"
    }
}
```

**Heroku Endpoint**

```
https://certificate-api-bgdo.herokuapp.com/certificado
```
