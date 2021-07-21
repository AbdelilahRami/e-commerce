import request from 'supertest'
import {app} from "../../app";

test('should returns 200 when request private products', async () => {
    await request(app).get('/catalogues/visible_authenticated').expect(200);

});

test('should returns 200 when request public products', async () => {
    await request(app).get('/catalogues/visible_public').expect(200);
});


