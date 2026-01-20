const request = require('supertest');
const app = require('../server');

describe('Book Store API', () => {
    it('should create a new book', async () => {
        const bookData = { title: 'New Book', author: 'Author Name' };
        const response = await request(app).post('/books').send(bookData);
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual(expect.objectContaining(bookData));
    });

    it('should get all books', async () => {
        const response = await request(app).get('/books');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('should update a book', async () => {
        const bookData = { title: 'Updated Book', author: 'Author Name' };
        const response = await request(app).put('/books/1').send(bookData);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.objectContaining(bookData));
    });

    it('should delete a book', async () => {
        const response = await request(app).delete('/books/1');
        expect(response.statusCode).toBe(204);
    });
});
