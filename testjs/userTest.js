import supertest from "supertest";
import app from "../src/app"
import test from "ava";
import { request } from "express";
test('guardar datos',(t)=>{
    const user={ id: 11, username: 'Dr Nice' , compras:'nada',password:'1234' };
    request(app)
    .post('/add')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '15')
    .expect(200)
    .end(function(err, res) {
        if (err) throw err;
     });
})