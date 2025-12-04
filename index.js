const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola desde CI/CD + Docker + Jenkins + K8s!');
});

app.listen(3000, () => console.log("App corriendo en puerto 3000"));
