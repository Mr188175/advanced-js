let name;    //আমরা যদি শুধু ভ্যারিয়েবল ডিক্লেয়ার করি তাহলে এর মান undefined হবে ।আর undefined এর মান False.

if (name) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}

console.log(name);

// আমরা কন্ডিশনে যদি '0', " " (white space),{},[] দেই তাহলে এগুলো সত্য হবে।


const anotherName = false;

if (anotherName) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}

console.log(anotherName);

// আমরা যদি কন্ডিশনে 0,"" (only double quote),null,false,Nan,undefined দেই তাওলে মিথ্যা হবে।



