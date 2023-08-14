const request = require('supertest');
const app = require('../app'); // Importe sua instância do app Express
const sequelize = require("../sequelize");

describe('Carros API', () => {

    // Pode ser útil limpar o DB antes ou depois de cada teste
    beforeEach(async () => {
        await sequelize.sync({ force: true });
    });

    // Teste para verificar a rota de listar carros
    test('GET /', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('carros');
    });

    // Teste para verificar a rota de listar carros disponíveis
    test('GET /disponiveis', async () => {
        const response = await request(app).get('/disponiveis');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('carros');
    });

    // Teste para consultar carro pelo ID
    test('GET /:id', async () => {
        // Você precisa criar um carro primeiro ou garantir que exista um com o ID específico.
        const response = await request(app).get('/1'); // Exemplo com ID 1
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('task');
    });

    // Teste para calcular a média de carros vendidos
    test('GET /media/mediaCarros', async () => {
        const response = await request(app).get('/media/mediaCarros');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('mediaCarros');
    });

    // Teste para criar um carro
    test('POST /', async () => {
        const newCar = {
            modelo: "Modelo Teste",
            preco: 10000,
            caracteristicas: "Teste"
        };
        const response = await request(app).post('/').send(newCar);
        expect(response.status).toBe(201);
    });

    // Teste para atualizar um carro
    test('PUT /:id', async () => {
        // Novamente, você precisa garantir que o carro exista para este teste.
        const response = await request(app).put('/1').send({ preco: 15000 }); // Exemplo com ID 1
        expect(response.status).toBe(200);
    });

    // Teste para deletar um carro
    test('DELETE /:id', async () => {
        // Garanta que o carro exista para este teste.
        const response = await request(app).delete('/1'); // Exemplo com ID 1
        expect(response.status).toBe(200);
    });

});

// Finalmente, o afterAll:
afterAll(async () => {
    await sequelize.close();
});

