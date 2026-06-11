const request = require("supertest");
const app = require("../index");

describe("Pruebas de la aplicación DevSecOps CI", () => {
  test("Debe responder correctamente en la ruta principal", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Continuous Integration");
  });
});