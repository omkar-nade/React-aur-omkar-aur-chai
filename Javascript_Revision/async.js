// function calculator(a,b, sumCallB){
//     sumCallB(a,b)
// }

// calculator(1,2, function sum(a,b){
//     console.log(a+b)
// })

// setTimeout(() => {console.log("Hellow")},3000);

  /*** CallBack Hell ***/
// function getData(dataid, getNextData){
//     setTimeout(() => {
//         console.log("Data", dataid);
//         if(getNextData){
//             getNextData();
//         }
//     }, 1000)
// }

// using callBack
// getData(1, () => {
//     getData(2,() => {
//         getData(3,() => {
//             getData(4)
//         })
//     })
// })


function getData(dataid){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data", dataid);
            resolve("Success")
        }, 1000)
    });
}

//  using Promise chain
// getData(1).then((res) => {
//     getData(2).then((res) => {})
// })

// getData(1)
// .then((res) => {
//     return getData(2);
// })
// .then((res) => {
//     return getData(3)
// })
// .then((res) => {
//     console.log(res)
// })

// using async-await
async function getAllData(){
    console.log("getting Data1")
    await getData(1)
    console.log("getting Data1")
    await getData(2)
    console.log("getting Data1")
    await getData(3)
    console.log("getting Data1")
    await getData(4)
}



/*** promises ***/

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promises")
//     reject("not done")
// })

// function asyncFunc1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data1")
//             resolve("Success")
//         },2000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data2")
//             resolve("Success")
//         },2000);
//     });
// }

// console.log("Fetching the Data1....");
// asyncFunc1().then((res) => {
//     console.log("Fetching the Data2....");
//    asyncFunc2().then((res) => {})
// });


// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data")
//             resolve(200)
//         }, 1000)
//     })
// }

// // async-await
// async function getWeatherData(){
//     await api();
//     await api();
// }
