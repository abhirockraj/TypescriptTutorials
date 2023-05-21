const score : Array<number> = []
const names : Array<string> =[]
function indentitiesOne(val : boolean | number):boolean|number{
    return val
}
function indentitiesTwo(val: any):any{
    return val
}
function indentitiesThree<Type>(val: Type):Type{
    return val
}

function indentitiesfour<T>(val: T):T{
    return val
}
 interface Bottle{
    brand : string,
    type :number
 }
 indentitiesfour<Bottle>({brand:"puma",type:8})

 function getSearchProducts<T>(products: T[]):T{
    return products[2]
 }

//  Arrow Function
 const getMoreProduct =  <T,>(products: T[]):T => {
    return products[2]
 }

 interface Database{
    conn: string,
    username: string,
    password :string
 }

 function anotherFunction<T,U extends Database> (val1:T,val2:U):object{
    return{
        val1,
        val2
    }
 }

 interface Quiz{
    name: string,
    type: string
 }

 interface course{
    name: string,
    author: string,
    subject :string
 }

 class SellableProduct<T>{
    public cart : T[] = []

    addToCart(product:T){
        this.cart.push(product)
    }
 }