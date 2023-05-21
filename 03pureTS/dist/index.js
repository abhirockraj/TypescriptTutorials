"use strict";
// class User{
//     public email : string
//     name : string
//     private readonly city: string = "Patna"
//     constructor (email : string, name : string){
//         this.email = email
//         this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this._newCount = 3;
        this.city = "Patna";
    }
    // getters
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //setters
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course less than 1");
        }
        this._courseCount = courseNumber;
    }
    deleteToken() {
        console.log("token deleted");
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamaliy = true;
    }
    changeCourse() {
        this._newCount = 3;
    }
}
const abhi = new User("a@a.com", "Abhinav");
// abhi.deleteToken()
// abhi.city="Patna"
