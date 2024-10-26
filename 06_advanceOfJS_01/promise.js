// promise 1
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`inside promise setTimeout`)
        resolve()

    },1000)
}).then(function(){
    console.log(`promise resolved`)
})
// promise with catch
let user = {username: 'abhishek3059', password: 'password'}
new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false

        if(!error){
            resolve(user)
        }
        else{
            reject('something went wrong')
        }
    },1000)
}).then(function(user){
    console.log(user.username);
    
    return user.username
 }).then(function(username){
     console.log(username)
     return username
 })
.catch(function(error){
    console.log(error)
})
//PROMISE WITH ASYNC AWAIT 
const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false // or true for error 

        if(!error){
            resolve(user)
        }
        else{
            reject('something went wrong')
        }
    },1000)
})

async function resolvePromiseFive(){
    try {
        const response = await promise
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
resolvePromiseFive()
//REAL WORLD EXAMPLE USING FETCH
async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users')
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }

}
getAllUsers()