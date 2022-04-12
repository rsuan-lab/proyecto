
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'http://localhost:3001';

describe('Insert user: ',()=>{
   it('should insert a user', (done) => {
   chai.request(url)
   .post('/add')
   .send({ id: 11, username: 'Dr Nice' , compras:'nada',password:'1234' })
   .end( function(err,res){
   console.log(res.body)
   expect(res).to.have.status(200);
   done();
   });
   });
  });
  
  describe('Delete user: ',()=>{
   it('should Delete a user', (done) => {
   chai.request(url)
   .get('/delete/4')
   .end( function(err,res){
   console.log(res.body)
   expect(res).to.have.status(200);
   done();
   });
   });
  });
  
  describe('Get all user: ',()=>{
   it('should get all user', (done) => {
   chai.request(url)
   .get('/')
   .end( function(err,res){
   console.log(res.body)
   expect(res).to.have.status(200);
   done();
   });
   });
  });