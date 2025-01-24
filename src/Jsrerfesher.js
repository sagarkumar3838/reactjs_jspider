// // * DESTRUCTURING

// // * Array destructuiring

// let arr = [23,34,45,56];
// let [a,b,c,d] = arr;

// console.log('Value of a is :' + a);
// console.log('Value of a is :' + b);
// console.log('Value of a is :' + c);
// console.log('Value of a is :' + d);


// // * object destructuring

// let student = {
//     id : 123,
//     name : "abc",
//     phone: 878789654
// }

// let {id , name} = student;

// console.log('id');
// console.log('name');

// // ! 

// console.log(student.phone);


// ! fetch method :

let id = 0;

function change(){
 ++id;
 let name = document.createElement("h1")
 let phone = document.createElement("h2")
 let hr = document.createElement("hr")
 let demo = document.querySelector(".demo")
 console.log(name, phone, demo);

 fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
 .then((res)=>{
    res.json()
    .then((data)=>{
        console.log(data);

        name.innerHTML = "The Name :" + data.name;
        phone.innerHTML = "The phone :" + data.phone;
        demo.append(name, phone, hr)
    })
    .catch((err)=> {
        console.log(err);
    })
 })
 .catch((err1)=>{
    console.log(err1);
 })
}

