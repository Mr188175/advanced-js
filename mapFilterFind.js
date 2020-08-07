// আমরা কয়েকভাবে স্কোয়ার নাম্বার পেতে পারি।

// ১। 

const numbers = [2,3,4,5,6,7];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
   
    
}

console.log(output);
// 
// 
// ২। আমরা ম্যাপ ব্যাবহার করে সহজ এ কাজ করতে পারি।

//  ম্যাপ এর ভেতর কোন ফাংশন pass করি তাহলে সে  ৩ টা parameter নিতে পারে। 1. element 2 . index 3. Array

// map আর filter Array রিটার্ন করে

const mapping = numbers.map(function (element) {
   return element * element;
});

console.log(mapping);

// আমরা arrow funciton ব্যবহার করে আরো সহজ এ কাজ করতে পারি।

const mapping2 = numbers.map(x => x * x);
console.log(mapping2);


// আমরা filter ব্যবহার করে কোন কিছু ফিল্টার করতে পারি।

const filter = numbers.filter(x => x > 3);
console.log(filter);

// আমরা find ব্যবহার করে কোন কিছু খুজে পেতে পারি। find আপনাকে কোন element রিটার্ন করবে।

const findNumber = numbers.find(x => x > 4);
console.log(findNumber);

// আমরা যে নাম্বার থেকে বড় চেয়েছি তার থেকে বড় প্রথম সংখ্যাই map আপনাকে রিটার্ন করেছে।