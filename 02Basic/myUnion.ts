let score : number | string = 33
score= "Abc"

type User = {
    name: string
    id : number
}
type Admin = {
    username: string
    id : number
}
let Abhinav: User | Admin ={name:"Abhi",id: 3}
Abhinav = {username:"Abhinav", id:5}

function getDbId(id: number | string){
    if(typeof id === "string"){
        return id.toLowerCase()
    }
    else{
        return id +2
    }
}
getDbId(3)
getDbId("3")

const data :(string | number)[] = [1,"2",4]
let data1: string[] | number[] = [1,2,3]
data1=["1","2","3"]

let seatarr : "Aile"|"middle"|"window"
// seatarr = "crew"
seatarr = "Aile"
export {}