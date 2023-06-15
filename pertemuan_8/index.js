// Destructuring Array & Objects

// let  numbers = [1,2,3,4,5];

// Destructuring Semua
// let [num1,num2,num3,num4,num5] = numbers;

// Destructuring beberapa
// let [num1,,num3,,num5] = numbers;

// console.log(num1);
// console.log(num3);

// let john = {
//     fullName : "John Doe",
//     age : 33,
//     isMarried : true,
// };

// const {fullName,age,isMarried} = john;

// console.log(fullName);
// console.log(age);
// console.log(isMarried);

// //Destructuring pada paramter fungsi
// const greetings = ({fullName,age}) => {
//     return `Hello my name is ${fullName} and I'm ${age} years old`;
// };

// console.log(greetings(john));


// =============================
// Module
// =============================

// import {nama,numbers,john} from  "./utility.js";
// import penambahan from "./penjumlahan.js";

// console.log(nama);
// console.log(numbers);
// console.log(john);

// console.log(penambahan(10,20));


// =============================
// Asynchronus
// =============================


// Jenis Async
// 1.Parallel
// setTimeout(() => {
//     console.log("proses1");
// }, 5000);
// console.log("proses2");
// setTimeout(() => {
//     console.log("proses3");
// }, 3000);
// console.log("proses4");

// 2.Concurent
// setTimeout(() => {
//     console.log("Proses 1");
//     setTimeout(() => {
//         console.log("Proses 2");
//         setTimeout(() => {
//             console.log("Proses 3");
//             setTimeout(()=> {
//                 console.log("Proses 4");
//             },1000);
//         },1000);
//     },1000);
// }, 1000);

// Promise
// let condition = false;
// let newPromise = new Promise((resolve, reject) => {
//     if (condition){
//         resolve("Berhasil");
//     }else {
//         reject ("Gagal");
//     }
// });

// //1. Then-Catch

// newPromise .then ((result) => {
//     console.log(result);
// })
// .catch((error) => console.log(error));

// //2. Async - Await

// const getPromise = async () =>{
// try {
//     let result = await newPromise;
//     console.log(result);
//     } catch (error) {
//     console.log(error); 
//     }
// };
// getPromise();

