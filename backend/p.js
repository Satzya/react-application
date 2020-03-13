let abc = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Here');
        }, 2000)
    })
}

let rty = async () => {
    return await abc()
}

// rty().then((res) => {
//     console.log(res)
// })


console.log(rty())