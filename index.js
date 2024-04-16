// let eded = 235; 

// let birinciReqem = Math.floor(eded / 100);
// let ikinciReqem = Math.floor((eded % 100) / 10);
// let ucuncuReqem = eded % 10;

// let cem = birinciReqem + ikinciReqem + ucuncuReqem;


// let hasil = birinciReqem * ikinciReqem * ucuncuReqem;

// let edediorta = ( birinciReqem + ikinciReqem + ucuncuReqem)/3


// console.log("Rəqəmlərin cəmi:", cem);
// console.log("Rəqəmlərin hasil:", hasil);
// console.log("Ədədin ortası:", edediorta);
// task2
// let eded = 36; 
// for (let i = 1; i <= eded; i++) {
//     if (eded % i === 0) {
//         console.log(i);
//     }
// }
// console.log("Bölənlər:");

// task3
// let eded = 36; 
// let bolenlerinSayi = 0; 

// for (let i = 1; i <= eded; i++) {
//     if (eded % i === 0) {
//         bolenlerinSayi++;
//     }
// }

// console.log("Bölənlərin sayı:", bolenlerinSayi);

// task4


// for (let i = 0; i <= 10; i++) {
//     console.log(i + " x " + i + " = " + (i * i));
// }

// task5

// for (let i = 0; i <= 10; i++) {
//     let iKare = i * i;
//     let iKub = i * i * i;
    
//     console.log(i + "    " + iKare + "    " + iKub);
// }

// console.log("i    i²   i³");



// task6
// for (let i = 2; i <= 100; i++) {
//     let sadə = true;
    
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             sadə = false;
//             break;
//         }
//     }
    
//     if (sadə) {
//         console.log(i);
//     }
// }
// task7
// let tekCem = 0;
// let cutCem = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i%2==0) {
//         cutCem+=i;
//     }else {
//         tekCem+=i;
//     }
    
// }
// console.log("tek ededlerincemi;",tekCem);
// console.log("cut ededlerincemi;",cutCem);


// Arrays
// task1

const students = [
    { name: "Ali", scores: [90, 85, 92] },
    { name: "Davud", scores: [100, 100, 100] },
    { name: "Mammal", scores: [75, 80, 85] },
    { name: "Camil", scores: [90, 95, 85] },
  ];
  
  const scoreOrtalamsi = [];
  
  students.forEach(student => {
    const totalScore = student.scores.reduce((baslangic, score) => baslangic + score, 0);
    const scoreOratalamsi = totalScore / student.scores.length;
    scoreOrtalamsi.push({ name: student.name, scoreOrtalamsi: scoreOrtalamsi });
  });
  
  console.log(scoreOrtalamsi);


// task2

const webTechs = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "JS",
    "Redux",
    "Node",
    "JS",
    "MongDB",
  ];
  
  const dordenBoyukOlan = webTechs.filter(tech => tech.length > 4);
  
  console.log(dordenBoyukOlan);

task3

const cumle = "Salam bu gun ders var.";

const spaces = cumle.split('').filter(char => char === ' ');

console.log("Cümle içindeki boşluq sayi:", spaces.length);

  
// Functions
// task5

function ilkVeSonCem(arr) {
    if (arr.length === 0) {
      return 0; 
    } else {
      return arr[0] + arr[arr.length - 1]; 
    }
  }
  
  
  const array = [1, 2, 3, 4, 5];
  console.log("İlk ve son elementlerin cemi:", ilkVeSonCem(array)); 
  
task6
function butunElementSayi(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  
  const array = [1, 2, 3, 4, 5];
  console.log("butun element cemi:",butunElementSayi(array)); 


task7

function findMax(arr) {
    return Math.max(...arr);
  }
  
  
  const array = [1,5,10,8];
  console.log("arraydaki boyuk element:", findMax(array));
  
task8

function filterEmployees(array) {
    return array.filter(employee => employee.salary > 60000);
  }
  
  const employees = [
    { name: "Jamil", salary: 50000, department: "IT" },
    { name: "Jale", salary: 60000, department: "HR" },
    { name: "Bayram", salary: 55000, department: "IT" },
    { name: "Sahil", salary: 75000, department: "HR" },
    { name: "Maryam", salary: 65000, department: "IT" },
    { name: "Elnara", salary: 80000, department: "HR" },
    { name: "Davud", salary: 70000, department: "IT" },
  ];
  
  console.log(filterEmployees(employees));


task9
function arrayIcindekiReqem(number, array) {
    return array.includes(number);
  }
  
          
  const numbers = [1,3,5,7,9,];
  const secilenNumber = 9;
  
  if (arrayIcindekiReqem(secilenNumber, numbers)) {
    console.log(secilenNumber + " arrayin icersinde var");
  } else {
    console.log(secilenNumber + " arrayin icersinde yoxdu.");
  }
  
  
task10
let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
and new features happen.`;
let spaces = sampleNews.split('').filter(char => char === ' ');


console.log("Cümle içindeki boşluq sayi:", spaces.length);
  

 

task11



function birgeArray(array1, array2) {
    return array1.concat(array2);
  }
  
 
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  
  const birlestirlenArray = birgeArray(array1, array2);
  console.log("birgeArray:", birlestirlenArray);
  
  








