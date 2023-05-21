interface user{
    readonly dbId :number,
    email: string,
    userId: number,
    startTrail (): string,
    getCoupon(coupanName: string, value: number):number
}
interface user{
    githubToken: string
}

interface Admin extends user{
    role: "admin"|"ta"
}

const abhi: user= {dbId:23,email:"h@h.com",userId: 2211, 
startTrail:()=>{
    return "trail"
}, 
getCoupon(name:"Abhinav", off:20) {
    return 10+off
},
githubToken:"XYZ"}

const abhi1: Admin= {dbId:23,email:"h@h.com",userId: 2211, 
    startTrail:()=>{
    return "trail"
    }, 
    getCoupon(name:"Abhinav", off:20) {
    return 10+off
    },
    githubToken:"XYZ",
    role:"admin"}

export{}