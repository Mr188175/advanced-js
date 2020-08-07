// আমরা কয়েক ভাবে undefined ভ্যালু পেতে পারি।

// শুধুমাত্র ভ্যারিয়েবল ডিক্লেয়ার করে কোন ভ্যালু না দিলে।

let variable;

console.log(variable);


// ফাংশন এর প্যারামিটার ক্রিয়েট করে তা pass না করলে

function add(num1,num2) {
    return num2;
}

let result = add(12);
console.log(result);

// ফাংশন return  না করলে

function addNumber (num1,num2) {
    let result = num1 + num2;
}

console.log(result);


// object এর ভিতর কোন  property না থাকলে তাকে কল করলে undefined হবে।

let person = {name:'Mojibur',phone:'10345'};

console.log(person.id);


// undefined কে ভ্যারিয়েবল এ রাখলে

let name = undefined;
console.log(name);

// অ্যারের যেই ভ্যালু দেয়া হয় নি তাকে কল করলে

let array = [2,3,5,3];
console.log(array[33]);

// Null এর ব্যাপারটা হচ্ছে কোন জায়গায় কিছু ছিলো কিন্তু খালি হয়ে গেছে সেই ক্ষেত্রে আমরা  null পেতে পারি।