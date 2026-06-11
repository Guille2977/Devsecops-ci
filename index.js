const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Dashboard DevSecOps CI</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        body {
          min-height: 100vh;
          background: linear-gradient(135deg, #020617, #0f172a, #1e3a8a);
          color: #f8fafc;
          padding: 32px;
        }

        .container {
          max-width: 1150px;
          margin: auto;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .badge {
          background: #22c55e;
          color: #052e16;
          padding: 8px 15px;
          border-radius: 999px;
          font-weight: bold;
          font-size: 14px;
        }

        h1 {
          font-size: 42px;
          margin-bottom: 10px;
        }

        .subtitle {
          color: #cbd5e1;
          font-size: 18px;
          max-width: 780px;
          line-height: 1.6;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 20px;
          margin-top: 32px;
        }

        .card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
        }

        .card h3 {
          color: #93c5fd;
          font-size: 18px;
          margin-bottom: 12px;
        }

        .metric {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .card p {
          color: #cbd5e1;
          line-height: 1.5;
          font-size: 15px;
        }

        .pipeline {
          margin-top: 34px;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 20px;
          padding: 26px;
        }

        .pipeline h2 {
          margin-bottom: 18px;
          color: #e0f2fe;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 14px;
        }

        .step {
          background: rgba(30, 41, 59, 0.95);
          border-radius: 14px;
          padding: 18px;
          text-align: center;
          border: 1px solid rgba(148, 163, 184, 0.2);
        }

        .step span {
          display: block;
          font-size: 24px;
          margin-bottom: 8px;
        }

        .footer {
          margin-top: 28px;
          text-align: center;
          color: #94a3b8;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <main class="container">
        <section class="header">
          <div>
            <h1>Dashboard DevSecOps - CI</h1>
            <p class="subtitle">
              Aplicación web de ejemplo para evidenciar Continuous Integration mediante
              GitHub Actions, pruebas automáticas y análisis básico de seguridad.
            </p>
          </div>
          <span class="badge">CI activo</span>
        </section>

        <section class="grid">
          <div class="card">
            <h3>Estado del pipeline</h3>
            <div class="metric">OK</div>
            <p>El workflow se ejecuta automáticamente al hacer push a la rama main.</p>
          </div>

          <div class="card">
            <h3>Pruebas automáticas</h3>
            <div class="metric">1/1</div>
            <p>La prueba principal valida que la aplicación responda correctamente.</p>
          </div>

          <div class="card">
            <h3>Seguridad básica</h3>
            <div class="metric">0</div>
            <p>npm audit no reporta vulnerabilidades críticas en las dependencias.</p>
          </div>

          <div class="card">
            <h3>Repositorio</h3>
            <div class="metric">main</div>
            <p>El código fuente se gestiona con Git y GitHub como control de versiones.</p>
          </div>
        </section>

        <section class="pipeline">
          <h2>Flujo de Integración Continua</h2>
          <div class="steps">
            <div class="step">
              <span>1</span>
              Git Push
            </div>
            <div class="step">
              <span>2</span>
              GitHub Actions
            </div>
            <div class="step">
              <span>3</span>
              npm ci
            </div>
            <div class="step">
              <span>4</span>
              Lint
            </div>
            <div class="step">
              <span>5</span>
              Test
            </div>
            <div class="step">
              <span>6</span>
              npm audit
            </div>
          </div>
        </section>

        <footer class="footer">
          Taller de Aplicaciones Distribuidas | DevSecOps CI | Continuous Integration
        </footer>
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