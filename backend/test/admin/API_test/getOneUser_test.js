pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});


pm.test("Response body received", ()=>{
    pm.expect(response).to.be.an("object")
})

pm.test("Name is correct" , ()=>{ //check whether the name is correct
    pm.expect(response.name).to.eql("Kasun Sameera");
})