## Certificate

API para emissão de certificados

**Rodando o projeto:**

```
npm install && npm start
```

**Endpoint:**

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

**Heroku**
