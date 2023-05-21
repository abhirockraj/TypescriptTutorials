interface User{
    name: string,
    email: string
}
interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}

function logValue(x: Date |string){
    if(x instanceof Date){
        console.log(x.toUTCString())
    }
    else{
        console.log(x.toUpperCase())
    }
}

type Fish = {swim:()=> void}
type bird = {fly:()=> void}

function isFish(pet: Fish | bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | bird){
    if(isFish (pet)){
        pet
        return "Fish food"
    }
    else{
        pet
        return "Bird food"
    }
}