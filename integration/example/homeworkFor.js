// const kanfet = ['A', 'B', 'C', 'D'];

// for (let i = 0; i < kanfet.length; i++) {
//     if (kanfet[i] === 'B') {
//         // Perform click operation here
//         cy.contains(kanfet[i]).click();

//     }
//     co
// }


// 1

// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


// 2 

// const fruits = ['apple', 'banana', 'orange', 'kiwi'];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// 3
// const people = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 }
// ];
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].name, people[i].age);
// }


// 4

// const mixedArray = ['apple', 5, { name: 'John' }, true];
// for (let i = 0; i < mixedArray.length; i++) {
//     console.log(mixedArray[i]);
// }

//5

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// for (let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i]);
// }

//6

// const sparseArray = [, , 'a', , 'b', , , 'c'];
// for (let i = 0; i < sparseArray.length; i++) {
//     console.log(sparseArray[i]);
// }


//7 

// const arrayWithUndefined = [1, undefined, 3, undefined, 5];
// for (let i = 0; i < arrayWithUndefined.length; i++) {
//     console.log(arrayWithUndefined[i]);
// }

//8

// const arrayWithNull = [1, null, 3, null, 5];
// for (let i = 0; i < arrayWithNull.length; i++) {
//     console.log(arrayWithNull[i]);
// }

//9

// const arrayWithDuplicates = [1, 2, 3, 1, 2, 3];
// for (let i = 0; i < arrayWithDuplicates.length; i++) {
//     console.log(arrayWithDuplicates[i]);
// }

//10

// const specialCharacters = ['@', '#', '$', '%', '^'];
// for (let i = 0; i < specialCharacters.length; i++) {
//     console.log(specialCharacters[i]);
// }



//Task1
// You are doing shopping and already have some items in your shopping cart.
// You need to make sure that you don't buy the same item many times.
// So, if you already have that item in shopping, card, don't add it
// If you don't have it, return 'I am adding <ITEM> to my shopping cart'.
// Create a function that will get shoppingCart and item as an argument and if the item is not
// in shoppingCart, return 'I am adding <ITEM> to my shopping cart'.



function returnVowerCount(str) {
    const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u", "Y", "y"];
    let count = 0;
    const arr = str.split(""); // ['G', 'a', 'g', 'i', 'k'];
  
	for(let i = 0; i < arr.length; i++) {
  	    if(vowels.includes(arr[i])){
     	    count++; // count = count + 1; count += 1 
        }
    }
  
 	return count;  
 
}

console.log(returnVowerCount("Gagik Shat vat e soviorum JavaScript, uraa")); //argument, paramter
console.log(returnVowerCount("Anahit"));   


// Create a function that will return sum (gumar) of all the numbers in array
// Please, receive the array of numbers as an argument.


  const numbers = [1, 2, 3, 10];
  const numbers2 = [5, 4];

  function sumOfTheNumbers(arr) {
    let quantity = 0;
    for(let i = 0; i < arr.length; i++) {
        quantity += arr[i]; // quantity = quantity + arr[i]
    }

    return quantity;
  }

  console.log(sumOfTheNumbers(numbers))



// Create a function that will check if the student has passed the exam or not
// if passed, return, <Name> <age> years old has passed the exam.
// if not passed, return  <Name> <age> years old failed the exam. He/She will need to try again.

const students = [
    {
      age: 60,
      name: "Penelope Rowland",
      passed: false
    },
    {
      age: 74,
      name: "Imogene Oneil",
      passed: true
    },
    {
      age: 34,
      name: "Vargas Long",
      passed: true
    },
    {
      age: 4,
      name: "Sasha Compton",
      passed: true
    },
    {
      age: 38,
      name: "Robert Dennis",
      passed: false
    },
    {
      age: 17,
      name: "Bethany Watson",
      passed: true
    },
    {
      age: 45,
      name: "Wagner Sparks",
      passed: false
    }
  ];

function checkExamResults(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].passed) {
            console.log(arr[i].name + ' ' + arr[i].age + ' handznel e');

        } else {
            console.log(arr[i].name + ' ' + arr[i].age + ' chi handznel');
        }
    
        
    } 

}

checkExamResults(students)
  


// ete tivs zuyg a veraradzru tivy ev asa zuyge nuyny kenti het


const tver = [1, 2, 3, 6, 7, 10, 5, 4, 9, 8];
const zuygTver = [2, 4, 6, 8, 10];

function dasakargelTvery(arr) {
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        let message = number % 2 === 0 ? "Your number is even" : "Your number is odd";
        console.log(number, message);
    }
}

dasakargelTvery(tver);


//vercnel naxxadastutyun u bolor tarery dardznel uppercase


const str = "everything are so dificult in our life so just relax and do anything you want.";

function makeAllUpper(str1) {
    let arr = str1.split("")
        for(let i = 0; i < arr.length; i++) {
            arr[i] = arr[i][0].toUpperCase() + arr1[i].substring(1)
        }
        
        return arr.join(" ")
}

console.log(makeAllUpper(str))



// mecacnel arajin tarery naxadastutyan

const str1 = "everything are so dificult in our life so just relax and do anything you want.";
function upFirstCharacter(str1){
const arr1 = str1.split(" ");
    for(let i = 0; i < arr1.length; i++){
        arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].substring(1)
    };
    return arr1.join(" ");
};
console.log(upFirstCharacter(str1));


// stugel vor goyutyun uni tvyal anuny arrayi mej te voch, ete goyutyun uni nayev asa inch guyni meqena e sirum hetevyal


const myArr = ['Jack', 'Jag', 'Mick'];

let selectCar = { 
    name: "BMW",
    color: "Black"
};

let selectCar1 = { 
    name: "Mercedes",
    color: "White"
};

let selectCar2 = { 
    name: "Zap",
    color: "Purple"
};

function findName(prostoArray, personName){
    let name;
    for(let i = 0; i < prostoArray.length; i++){
        if(prostoArray[i] === personName){
            console.log("Yes " + personName + " is exist and loves "  + selectCar1.color + " " + selectCar1.name); 
            name = prostoArray[i];
        }
    }
    if(name === undefined){
        console.log(personName + " is not exist");
    }
};

findName(myArr, 'Jack');




// veradardzner yndhanur gumary: baxadayneri hamar gumarel 1, dzaynavornelri hamar gumarel 2

function calculateWords(str) {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        const smth = str[i].toLowerCase();

        if (['a', 'e', 'i', 'o', 'u'].includes(smth)) {
            sum += 2;
        } else if (['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'].includes(smth)) {
            sum += 1;
        }
    }

    return sum;
}

//const str = "GagIkAB!@#.";   UNCOMMENT THIS TO MAKE THE CODE WORK
console.log("Check your result:", calculateWords(str));