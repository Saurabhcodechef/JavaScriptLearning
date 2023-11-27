let age = 33
let name = "Saurabh"
let isLoggedIn = true
let state = null
let city = undefined

//null is an empty value means when something is not returned due to server error or code failure we return null.
//null is object type
console.table([typeof age, typeof name, typeof isLoggedIn, typeof state, typeof city])

age = "12324jfjd"
console.log(Number(age))//return NaN, it is denoted value is not a number
names ="132" 
console.log(Boolean(names)) //It return true
names =""
console.log(Boolean(names))//It return false
names = null
console.log(Boolean(names))
console.log(Number(names))
names = undefined
console.log(Number(names))
