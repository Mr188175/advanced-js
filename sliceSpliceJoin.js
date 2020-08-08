const nums = [1,2,3,4,5,6];

const part = nums.slice(1,4);
console.log(part);
console.log(nums);

// slice করলে যেই নাম্বার শুরু করেছি  আর যতটুকু কল করেছি তার আগের নাম্বার পর্যন্ত পাবো

// splice 

const removed = nums.splice(1,4,77);
console.log(removed);
console.log(nums);

/*
    এখানে একটা জিনিস খেয়াল করতে হবে।
    slice করলে তা array এর কোন পরিবর্তন হয় না

    কিন্তু splice করলে তা array থেকে রিমুভ করে ফেলে


*/

// আমরা চাইলে  যে  array পেয়েছি তা join ও করাতে পারি

const together = nums.join(" ");
console.log(together);