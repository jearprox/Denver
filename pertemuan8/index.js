//Destructuring Array&Object

// let numbers = [1, 2, 3, 4, 5];
// let num1= numbers[0];
// let num2= numbers[1];
// let num3= numbers[2];
// let num4= numbers[3];
// let num5= numbers[4];


//Destructuring semua
// let [num1, num2, num3, num4, num5] = numbers;
// console.log (num1);
// console.log (num2);



//Destructuring beberapa
// let [num1,, num3,, num5] = numbers;
// console.log (num1);
// console.log (num3);


// let john = {
//     fullName : "John doe",
//     age : 33,
//     isMarried: true,
// };

// const { fullName, age, isMarried} = john;

// console.log (fullName);
// console.log (age);
// console.log (isMarried);

//Destructuring pada parameter fungsi
// const greetings = ({fullName, age}) => {
//     return `Hello my name is ${fullName} and I'm ${age} years old`;
// };
// console.log(greetings(john));


//================
//module
//================

// import {nama, numbers, john} from "./istol.js";
// console.log(nama);
// console.log(numbers);
// console.log(john);



//================
//Asynchronous 
//================

//Synchronous => blocking
// console.log("proses 1");
// console.log("proses 2");
// console.log("proses 3");
// console.log("proses 4");


//Asynchronous JS - non-blocking 
//1. parallel
// console.log("proses 1");
// setTimeout(()=> {
//   console.log("proses 2");
//   }, 5000);
// setTimeout(()=> {
//     console.log("proses 3");
//   }, 3000);
// console.log("proses 4");

//2. Concurrent
// setTimeout(()=> {
//     console.log("proses 1");
//     setTimeout(()=> {
//         console.log("proses 2");
//         setTimeout(()=> {
//             console.log("proses 3");
//             setTimeout(()=> {
//               console.log("proses 4");
//        }, 5000);
//       }, 5000);        
//      }, 5000);         
//     }, 5000);



//Promise
// let condition = true;
// let newPromise = new Promise((resolve, reject) => {
//     if(condition) {
//         resolve("Berhasil");
//     } else {
//         reject("Gagal");
//     }
// });


//cara menggunakan Promise
//1 then-cacth-finally

// newPromise 
//   .then((result) => `${result} !!!`)
//   .then((result2) => console.log(result2))
//   .catch((Error) => console.log(Error))
//   .finally(() console.log("ini pasti dijalankan"));


  //Async - Await





  // getdata();



