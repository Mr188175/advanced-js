// এবার আমরা scope জিনিসটা কি তা শিখবো। 

function sum(first,second) {
    const result = first + second;

    if (result > 4) {
        const mood = "happy";
        console.log(mood);
    }
 /* এখানে একটা জিনিস খেয়াল করতে হবে। আমরা যদি let অথবা const ব্যবহার করি তাহলে স্কোপ এর বাইরে যদি তাদের কনসোল লগ করি,তাহলে error দিবে।
কিন্তু এখানে var ব্যবহার করলে কোন error দিবে না */



    return result;

}

const output = sum(4,3);
console.log(output);


/*
 hoisiting হচ্ছে কোন একটা scope এর ভেতর যদি var লিখে variable  ডিক্লেয়ার করি এ variable এর declaration কে scope এর বাইরে গিয়ে তার 
 parent যেই scope আছে সেখানে নিয়ে নিবে বা টেনে তুলবে এবং তা শুধুমাত্র var name ; এমন যাবে কোন ভ্যালু যাবে না। ভ্যালু undefined দেখাবে। কিন্তু let বা const
 দিয়ে এই কাজ করলে তা স্কোপ এর বাইরে যাবেই না।error দেখাবে।

 আমরা চাইলে var দিয়ে যে value সেট করেছি তা বিভিন্ন ফাংশন এও ব্যবহার করতে পারবো।

 */