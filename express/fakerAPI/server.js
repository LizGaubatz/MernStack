const express = require("express");
// const faker = require('@faker-js/faker');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

// console.log(faker.name.firstName())

class User {
    constructor(){
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phone = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}
// console.log(new User());

class Company {
    constructor(){
        this._id = faker.datatype.uuid()
        this.companyName = faker.company.companyName()
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/user", (req,res) => {
    res.json({result:new User});
});

app.get("/api/company", (req,res) => {
    res.json({result:new Company});
});

app.get("/api/user/company", (req,res) => {
    res.json({
        user: new User,
        company: new Company
    }); 
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );