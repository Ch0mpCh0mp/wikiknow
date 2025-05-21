import fs from "fs"; // file system 
import prompt from "picoprompt";

const currentMillis = Date.now();
const currentDate = new Date(currentMillis)
const date = currentDate.toString()

const name = prompt("Name: ");
const booking = prompt("What is your booking?: ")


const filename = "text.txt"
const endcodig = "utf8" 
let contents = "" ;

try{
     contents = fs.readFileSync(filename, endcodig )
}catch(error){
    console.error(error.message, `There was no ${filename}, but now created!`)
}

contents = contents + 
            "\n" + 
            date + 
            "\n" + 
            name +  
            "\n" + 
            booking +  
            "\n" + 
            "------------------------------------" ;
// "text"   =    "text"   +  `Lorem simply   dsfsdfsdf\n`
//  `textLorem simply   dsfsdfsdf\n`

// console.log(contents)

fs.writeFileSync(filename, contents, endcodig)

/* 
const arr = ["text", 2, Number ];
const str = "String TEST SOmething"
const newArr = str.split(" ")
const num = 5667
const newNum = String(num).split("")
console.log(arr)
*/