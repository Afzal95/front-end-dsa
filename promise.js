// let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(2);
//           resolve("10");
//         },2000)
//     })
//     console.log(promise);

// async function Res(){
//     try {
//         let res = await promise;
//         console.log('inside async',res);
//     } catch (error) {
//         console.log("er--",error);
//     }
// }
// Res();

// setTimeout(()=>console.log("1"),100);
// setTimeout(()=>console.log("2"),100);

//ans- promise<pending>, 1,2,2,inside async-10
// let users = fetch('https://jsonplaceholder.typicode.com/users');

// async function User(){
//     try {
//         let usrs = await users;
//         let usr = await usrs.json();
//         console.log("useresdata=",usr);
//     } catch (error) {
//         console.log("err-",error);
//     }
// }
// User();

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }

// (async () => {
//     try {
//         const data = await fetchData();
//         console.log('Fetched data:', data);
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// })();


// async function Resolve(){
//     try {
//         let res = await new Promise((re,rej)=>{
//             console.log("pass");
//             rej("failed");
//         });
//         console.log(res);        
//     } catch (error) {
//         console.log("in error");
//         console.log(error);
//     }
// }
// Resolve();

// new Promise((resolve, reject) => {
//     console.log('in promise');
//     resolve(new Promise((resolve, reject) => {
//         console.log("in second");
//         reject("second res");
//     }))
//     .then(r=>console.log("l-81-res",r)).catch(e=>console.log("l-81-rej",e))
// })
// .then(res=>console.log("l-83",res))
// .catch(er=>console.log("er-83",er));

// var obj1 = {
//     x:  43,
//     y:  "Hello world!",
//     z: function(){
//        return this.x +" " + this.y;
//     }
//  }
//  let val = obj1.z();
//  console.log(val); //43 hello w

// (function (){
//     console.log("logged");
// })() // logged

// var abc = 9;

// const myObject = {

//     abc: 123,

//   myMethod: function () {

//     console.log(this.abc);

//   }

// };



// myObject.myMethod(); // 123



//    fetch("https://dummy.restapiexample.com/api/v1/employees")
//    .then(res=>res.json())
//    .then(data=>console.log("first=",data)) //log data
//    .catch(err=>console.log(err))

// async function getData(){
//     try {
//         let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//         let d = await data.json();
//         return new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 reject(d);
//             },5000)
//         })
//     } catch (error) {
//         console.log("ferr",error); // datas
//     }
// }

// (async ()=>{
//     try {
//         let res = await getData();
//         console.log("try-",res);   
//     } catch (error) {
//       console.log("no");
// //        console.log("iner",error); //log
//     }
// })();

// new Promise((resolve, reject) => {
//     let data = fetch("https://jsonplaceholder.typicode.com/posts")
//     resolve(data);
// })
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

// let arr = [12,10,5,8,2];
// let temp = [];
// let biggest = -1;

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             biggest=arr[i];
//         }else{
//             biggest=arr[j];
//         }
//     }
//     temp.push(biggest);
// }
// console.log(temp);

// why next over reactjs 
// challenges while implementing nextjs
// sort an array
// use memo and use callback
// promise and fetch method
// how to achieve dynamic routing in nextjs

//mock api- https://jsonmock.hackerrank.com/api/stocks?date=5-January-2000

// function sum(){
//     console.log(a);
// }
// sum();
// const a = 10; // ref error
// let str = "abc";
// let arr = [];
// for(let i=0;i<str.length;i++){
//     for(let j=i+1;j<=str.length;j++){
//         arr.push(str.substring(i,j));
//     }
// }
// console.log(arr);


// let obj = {
//     name : "Ahmad",
//     prop:{
//         getName : function() {
//             return this.name
//         },
//         getName2: ()=> this.name
//     },
//     getName3: function() {
//         return console.log(this);
//     },
//     getName4 : ()=>console.log(this)
// }

// // console.log(obj.prop.getName());
// // console.log(obj.prop.getName2());
// // console.log(obj.getName3());
// console.log(obj.getName4());

// function updateBrand(obj) {
//     // Mutating the object is visible outside the function
//     obj.brand = "Toyota";
//     // Try to reassign the parameter, but this won't affect
//     // the variable's value outside the function
//     obj = null;
//   }
  
//   const car = {
//     brand: "Honda",
//     model: "Accord",
//     year: 1998,
//   };
  
//   console.log(car.brand); // Honda
  
//   // Pass object reference to the function
//   updateBrand(car);
  
//   // updateBrand mutates car
//   console.log(car.brand,car); // Toyota

// let pr = new Promise((res,rej)=>{
//   return new Promise((re,rj)=>{
//     setTimeout(()=>{
//       re("hello")
//     },2000)
//   }).then(r=>r);
// })
// pr.then(res=>res).then(r=>console.log(r))
// .catch(err=>console.log("err-",err));

let pr = new Promise((res,rej)=>{
  setTimeout(()=>{
    res(new Promise((resolve, reject) => {
      resolve("hello");
    }).catch(err=>err))
  },2000)
})
console.log(pr);

let da = async ()=>{
  try {
    let data =await pr;
    console.log(data);    
  } catch (error) {
    console.log("reject",error);
  }
}
da();