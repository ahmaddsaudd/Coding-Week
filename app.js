
var D = new Date();
var day = D.getDay();
console.log(day);
if (day == 1) {
    Cday = "Monday";
} else if (day == 2) {
    Cday = "Tuesday";
} else if (day == 3) {
    Cday = "Wednesday";
}
else if (day == 4) {
    Cday = "Thusrday";
}
else if (day == 5) {
    Cday = "Friday";
}
else if (day == 6) {
    Cday = "Saturday";
}
else if (day == 0) {
    Cday = "Sunday";
}
console.log(Cday);
var hours = D.getHours();
var atm
if (hours > 12) {
    hours = hours - 12;
    atm = "Pm"
}
var min = D.getMinutes();
var sec = D.getSeconds();
var output = "Current time is : " + hours + ":" + min + ":" + sec + " " + atm;
console.log(output)
document.getElementById("output").innerHTML = output;



// task 2
var date = new Date()
var month = date.getMonth() + 1
var day = date.getDate()
var year = date.getFullYear()
console.log(`${month}-${day}-${year}`)
console.log(`${day}-${month}-${year}`)
console.log(`${day}/${month}/${year}`)



// task 3
function task3(){
    s1 = Number(document.getElementById("side1").value);
s2 = Number(document.getElementById("side2").value);
s3 = Number(document.getElementById("side3").value);
var s=s1+s2+s3/2
var ans=Math.sqrt(s*(s-s1)*(s-s2)*(s-s3))
console.log(ans)
}


// task 4
var string = "Saylani"
var arr = []
for (var i = string.length - 1; i >= 0; i--) {
    arr.push(string[i])
}
console.log(arr.join(''))


// task5
function myFunction() {
    var year = Number(document.getElementById("year").value);
    if (year % 4 == 0) {
        document.getElementById("result").innerHTML = "This is a leap year";
    } else {
        document.getElementById("result").innerHTML = "This is not a leap year";
    }
}


// task 6
for (let i = 2014; i <= 2050; i++) {
    var date = new Date(i, 1 - 1, 1)
    var day = date.getDay()
    if (day == 0) {
        console.log(`On first januray of ${i} day is sunday `)
    }
}
// task 7
function myFunction() {
    numIn = Number(document.getElementById("number").value);
    // console.log(numIn);
    numRand = Math.floor(Math.random() * 10);
    // console.log(numRand);
    if (numIn === numRand) {
        document.getElementById("result").innerHTML = "Correct guess!!";
    } else {
        document.getElementById("result").innerHTML = "Wrong Guess!!!!";
    }
}


// task 8
today=new Date();
var aug14=new Date(today.getFullYear(), 8-1, 14);
if (today.getMonth()==7 && today.getDate()>14) 
{
    aug14.setFullYear(aug14.getFullYear()+1); 
}  
var secondsOfDay=1000*60*60*24;
console.log(Math.ceil((aug14.getTime()-today.getTime())/(secondsOfDay))+
"days left till August 14 ");


// task 9
function multiply() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = (num1 * num2);
}
function divide() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = (num1 / num2);
}

// task 10
function task10() {
    var celsius = Number(document.getElementById('celsius').value)
    var farhenheit = Number(document.getElementById('farhenheit').value)
    var cal = document.getElementById('celsius')
    var far = document.getElementById('farhenheit')
    if (farhenheit != 0) {
        console.log("far", farhenheit)
        var result = (farhenheit - 32) * 5 / 9
        cal.value = result
        console.log(celsius)
    }
    else if (celsius != 0) {
        var result = (9 * (celsius / 5)) + 32
        far.value = result
        console.log(farhenheit)

    }

}



// task 11
function checkSum() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    if (num1 === num2) {
        document.getElementById("result").innerHTML = (num1 + num2) * 3;
    } else {
        document.getElementById("result").innerHTML = (num1 + num2);

    }

}

// task 12
function task12() {
    var inp = Number(document.getElementById('task12').value)
    if ((inp > 20 && inp < 100) || inp == 400) {
        console.log("The given Number is within 20 of 100 or 400.")
    }
    else {
        console.log("The given Number is not in 20 of 100 or 400.")

    }
}
//task13
var array = [5, 7, 2]
if (array[0] > array[1] && array[0] > array[2]) {
    console.log(`The greatest number is ${array[0]}`)
} else if (array[1] > array[2] && array[1] > array[0]) {
    console.log(`The greatest number is ${array[1]}`)
} else if (array[2] > array[1] && array[2] > array[0]) {
    console.log(`The greatest number is ${array[2]}`)
}

// task 14
var sample = "my name is asad ali khan"
var string = sample.split(' ')

for (let i = 0; i < string.length; i++) {
    string[i] = string[i][0].toUpperCase() + string[i].substr(1)
}
console.log(string.join(' '))


// task 15
function task15(){
    var days = Number(document.getElementById('task15').value)
    var hour =document.getElementById('hour')
    var minute =document.getElementById('min')
    hour.innerHTML=days*24
    minute.innerHTML=days*24*60





}


// task 16
var string = ['This', 'is', 'sample', 'array']
var arr = []
for (var i = string.length - 1; i >= 0; i--) {
    arr.push(string[i])
}
console.log(arr)


// task 17
var array = [5, 7, 2]
if (array[0] > array[1] && array[0] > array[2]) {
    console.log(`The greatest number is ${array[0]}`)
    array[1] = array[0]
    array[2] = array[0]
} else if (array[1] > array[2] && array[1] > array[0]) {
    console.log(`The greatest number is ${array[1]}`)
    array[0] = array[1]
    array[2] = array[1]
} else if (array[2] > array[1] && array[2] > array[0]) {
    console.log(`The greatest number is ${array[2]}`)
    array[1] = array[2]
    array[0] = array[2]
}
console.log(array)



// TASK 18
function task18() {
    var kth = Number(document.getElementById('task18').value)
    var array = [1, 10, 2, 3, 88, 44, 64, 37, 22, 19, 55, 56, 63, 24]
    var sortedArray = array.sort(function (a, b) { return b - a })
    console.log(sortedArray)
    console.log(sortedArray[kth - 1])
}


//task 19
var temp;
var maxCount = 0;
var array = [1, 2, 2, 3, 2, 3, 4, 3, 2, 2, 2, 2, 3, 2, 5, 6, 7, 8, 9]
for (let i = 0; i < array.length; i++) {
    var count = 0;
    for (let j = 0; j < array.length; j++) {

        if (array[i] == array[j]) {
            count++
        } if (j == array.length - 1) {
            if (count > maxCount) {
                console.log(count,array[i])
                maxCount = count;
                temp = array[i]
                count = 0
            }
        }
    }
}
console.log(temp)


// task 20
var num = [1, 2, 3, 4, 2, 5, 6, 7, 2, 4, 2]
// console.log(num)
var replaceIt = 2
var replaceBy = 5
for (let i = 0; i < num.length; i++) {
    if (num[i] == replaceIt) {
        num[i] = replaceBy
    }
}
console.log(num)

