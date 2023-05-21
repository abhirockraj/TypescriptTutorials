const user = {
    name: "Abhinav Kumar",
    email : "abhi@gmail.com",
    isActive: true
}
function createUser({name: string,isActive:boolean}){}
function createCourse():{name :string, price : number}{
    return {name :"java",price:299}
}
type User = {
    name : string;
    email: string;
    isActive : boolean
} 
function createUserNew(user: User){}

type UserNew = {
    readonly _id : string
    name : string
    email: string
    isActive : boolean
    creditCardDetails?: number
}
let myUser: UserNew = {
    _id : "123",
    name : "Abhinav",
    email: "a@a.com",
    isActive : false
}
type cardDate={
    date : string
}
type cardNumber = {
    cardNum:number
}
type cardDetails = cardDate & cardNumber & {
    cvv :number
}
// myUser._id = "213"
export {}