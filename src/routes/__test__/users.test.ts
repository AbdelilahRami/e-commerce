import request from 'supertest'
import {app} from "../../app";

test('test login : should returns bad request when email is invalid', async () => {

    await request(app).post('/users/login').send({email:'', password:'bonjour'}).expect(400);

});

test('test signup : should returns bad request when email is invalid', async () => {

    await request(app).post('/users/signup').send({email:'', password:'bonjour', name: 'John Doe'}).expect(400);

});
