function addTwo(num:number):number{
    return num +2
    // return "hello"
}
function getUpper( val : string){
    return val.toUpperCase()
}
let loginUser = (name : string, email: string, isPaid : boolean = false) => {}

function getValue(myValue : number){
    if(myValue >50){
        return true
    }
    return "200 OK"
}
const getHello = (s: string):string => {
    return "Hello world !"
}
const heros = ["thor", "Gardian","Hulk"]

heros.map((hero):string => {
    return `hello ${hero}`
})

function consoleError(errMsg : string) :void{
    console.log(errMsg)
}

function handleError(err : string): never{
    throw new Error(err)
}

loginUser("Abhinav", "a@a.com")

getUpper("Abhinav")
addTwo(4)
export{}