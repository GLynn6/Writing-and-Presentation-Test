let requstBundle = new Promise((resolve, reject) => {
    if (false) {
        resolve("Permintaan anda di terima!")
    }
    

    reject("Permintaan anda di tolak")
}).then(result => console.log(result))
.catch(err => console.log(err))

