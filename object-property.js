// আমরা এখন map,filter,find ব্যবহার করে object এর প্রোপার্টি কিভাবে access  করতে হয় তা শিখবো।

// প্রথমে আমরা for loop চালিয়ে বের করবো 

const actor = [
    {
        id:1, name:"Tom hanks"
    },
    {
        id:2, name:"Leonardo Dicaprio"
    },
    {
        id:3, name: "Will smith"
    },
    {
        id:4, name: "Shahrukh khan"
    }
];

const output = [];

for (let i = 0; i < actor.length; i++) {
    const element = actor[i];
    const result = element.name;
    output.push(result);
}

console.log(output);


// এবার আমরা map ব্যবহার করে আরো সহজে করতে পারি।

const mapping = actor.map(x => x.name);
const mapping2 = actor.map(x => x.id);
console.log(mapping);
console.log(mapping2);


// ফিল্টার ব্যবহার করে আমরা আলাদা করতে পারি কোন ভ্যালু

const filtering = actor.filter(x => x.id > 2);
console.log(filtering);

// find ব্যবহার করে আমরা শুধু একটি element পাবো

const finding = actor.find(x => x.id = 3);
console.log(finding);