const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>DevSecOps CI</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: white;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card {
          max-width: 850px;
          padding: 45px;
          border-radius: 24px;
          background: rgba(255,255,255,0.08);
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
        }
        .badge {
          display: inline-block;
          background: #38bdf8;
          color: #082f49;
          padding: 8px 14px;
          border-radius: 999px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 42px;
          margin-bottom: 15px;
        }
        p {
          font-size: 18px;
          line-height: 1.6;
          color: #cbd5e1;
        }
        .flow {
          margin-top: 25px;
          padding: 16px;
          background: rgba(15, 23, 42, 0.7);
          border-radius: 14px;
          font-weight: bold;
          color: #e0f2fe;
        }
      </style>
    </head>
    <body>
      <main class="card">
        <span class="badge">CI activo</span>
        <h1>Aplicación DevSecOps - Continuous Integration</h1>
        <p>
          Aplicación Node.js con Express usada para evidenciar prácticas de integración continua.
        </p>
        <p>
          Cada cambio enviado a GitHub activa un pipeline automático con instalación de dependencias,
          validación del código, pruebas y análisis básico de seguridad.
        </p>
        <div class="flow">
          GitHub → GitHub Actions → Build → Test → Security Check
        </div>
      </main>
    </body>
    </html>
  `);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
  });
}

module.exports = app;