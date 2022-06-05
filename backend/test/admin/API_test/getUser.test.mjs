const fetch = require("node-fetch");

//import supertest from 'supertest';
//import { user } from '../../routes/userRoute'
//use the supertest object as our API
const response  =  fetch('http://localhost:6005/users/getAllUsers').then(
    res => res.json()).then(data => {return data})

console.log(response.json());


//run npm test -- -t "GET call"
//test GET or READ call on localhost:3001/api/items endpoint
test('GET call',  () => {
    expect(response.status).toBe(200);
})