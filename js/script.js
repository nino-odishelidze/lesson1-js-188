// დავალება 1

let array = [1, 2, 3, 4, 5, 10,20, 30, 40, 50, 60, 70, 80, 90, 99, 100]

for (let  item = 4; item < 99; item ++ ) {
    console.log(array[item]);
}

// დავალება 2

 let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]

 for (let  i = 0; i < 10;  i++){
    console.log(array1[i])
 }

// დავალება 3
let array2= [1, 2, 3, 4, 5]

for ( item1 = 0; item1 + array2.length; item1++){
    console.log(item1);
 } 

// დავალება 5

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active",
}

console.log(user.studentstatus);

// დავალება 6
// if -ის პირველი ჩანაწერი 
let user2 = {
    name: 'ana',
    age: 20,
    studentstatus: 'active' 
}

if (user2.age < 18 && user2.studentstatus == 'active') {
    console.log("hello user");
    
} else if (user2.name == 'levani') {
    console.log("hello levani");
    
}  else if (user.studentstatus == 'active' || user.age < 25) {
    console.log('hello ana');
    
} else {
    console.log('error');
    
}

// if -ის მეორე ჩანაწერი ternary operator ?

let user3 = {
    name: 'ana',
    age: 20,
    studentstatus: 'active' 
}

let data = user3.age < 18 && user3.studentstatus == 'active' ? "hello user": user3.name == 'levani' ? 'hello levani': user3.studentstatus == 'active' || user3.age < 25 ? "hello ana" : "error"
  console.log(data);
  

  // დავალება 8

  let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
  ]
   
    console.log(users[2]);

    // დავალება 9

    let array7 = [32, 14, null, 40, 50];

    console.log(array7[3]);
    console.log(array7[4]);
   

    // დავალება 10

let array8 = [[2, -3, 5, 11], [1, -35, -11], [12, -36, -24]];

console.log(array8[0][0][2][3])
console.log(array8[1][0])
console.log(array8[2][0])
    

    
// ამ დავალებაში რაღაც საკითხები ვერ გავიგე კარგად, რადგან მემგონი ცოტა სხვანაირად კეთდება რაც ჯერ არ ახსნილა ან ვერ გავიგე რაღაც. 
// კონკრეტულად ვგულისხმობ ცილკს (for loop-ს), ამიტო გაუგებარი საკითხები გამოვტოვე.

