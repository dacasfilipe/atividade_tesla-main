const supertest = require('supertest');
const app = require('../routes/carros'); // Importe sua instância do app Express
const sequelize = require("../model/carro");

describe('Carros API', () => {

    // Pode ser útil limpar o DB antes ou depois de cada teste
    beforeEach(async () => {
        await sequelize.sync({ force: true });
    });

    // Finalmente, o afterAll:
    afterAll(async () => {
     await sequelize.close();
    });

    test('GET /carros should return an array of cars', async () => {
        const response = await supertest(app).get('/carros');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true); // Verifica se a resposta é um array
    });

    // // Teste para verificar a rota de listar carros disponíveis
    // test('GET /disponiveis', async () => {
    //     const response = await request(app).get('/disponiveis');
    //     expect(response.status).toBe(200);
    //     expect(response.body).toHaveProperty('carros');
    // });

//     // Teste para consultar carro pelo ID
//     test('GET /:id', async () => {
//         // Você precisa criar um carro primeiro ou garantir que exista um com o ID específico.
//         const response = await request(app).get('/1'); // Exemplo com ID 1
//         expect(response.status).toBe(200);
//         expect(response.body).toHaveProperty('task');
//     });

//     // Teste para calcular a média de carros vendidos
//     test('GET /media/mediaCarros', async () => {
//         const response = await request(app).get('/media/mediaCarros');
//         expect(response.status).toBe(200);
//         expect(response.body).toHaveProperty('mediaCarros');
//     });

//     // Teste para criar um carro
//     test('POST /', async () => {
//         const newCar = {
//             modelo: "Modelo Teste",
//             preco: 10000,
//             caracteristicas: "Teste"
//         };
//         const response = await request(app).post('/').send(newCar);
//         expect(response.status).toBe(201);
//     });

//     // Teste para atualizar um carro
//     test('PUT /:id', async () => {
//         // Novamente, você precisa garantir que o carro exista para este teste.
//         const response = await request(app).put('/1').send({ preco: 15000 }); // Exemplo com ID 1
//         expect(response.status).toBe(200);
//     });

//     // Teste para deletar um carro
//     test('DELETE /:id', async () => {
//         // Garanta que o carro exista para este teste.
//         const response = await request(app).delete('/1'); // Exemplo com ID 1
//         expect(response.status).toBe(200);
//     });

});



