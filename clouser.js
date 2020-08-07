function watchCount () {
    let count = 0;
    return function () {
        count++;
        return count;
    };
    
}

const clock1 = watchCount();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());


const clock2 = watchCount();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());


/* clouser কী?
কোন একটা ফাংশন থেকে যদি কোন আরেকটা ফাংশনকে কল করি বা return করি তাহলে সে একটা closed environment তৈরি করে ফেলে এবং নিজেরা একটা external variable
এর reference রেখে দে। একেই clousers বলে

/*