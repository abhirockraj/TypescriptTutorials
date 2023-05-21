// class User{
//     public email : string
//     name : string
//     private readonly city: string = "Patna"
//     constructor (email : string, name : string){
//         this.email = email
//         this.name = name
//     }
// }

class User{
    private _courseCount = 1
    protected _newCount = 3
    private readonly city: string = "Patna"
    constructor (public email : string,public name : string){}
    // getters
    get getAppleEmail() : string{
        return `apple${this.email}`
    }
    get courseCount() :number{
        return this._courseCount
    }
    //setters
    set courseCount(courseNumber){
        if(courseNumber <= 1){
            throw new Error("Course less than 1")
        }
        this._courseCount = courseNumber
    }
    private deleteToken(){
        console.log("token deleted")
    }
}
class SubUser extends User{
    isFamaliy : boolean =true
    changeCourse(){
        this._newCount = 3
    }
}

const abhi = new User("a@a.com","Abhinav")
// abhi.deleteToken()
// abhi.city="Patna"