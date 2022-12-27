// async function f1(){
//     return 1
// }

// f1().then(alert)


async function f2(){
    return Promise.resolve("Hello")

}

f2().then(alert)