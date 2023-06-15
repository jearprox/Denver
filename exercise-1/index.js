//Array
let people = ["Greg","Mary","Devon","James"];

//1.
for(let i=0; i<people.length; i++){
    console.log(people[i]);
};

//2.
people.forEach(function(value){
    console.log(people);
});

//3.
people.shift("Greg");
console.log(people);

//4.
people.pop("Jamess");
console.log(people);

//5.
people.unshift("Matt");
console.log(people);

//6.
people.push("Stephen");
console.log(people);

//7.
for(let i=0; i<people.length; i++){
    if(i > 1){
        break;
    }
    console.log(people[i]);
}

//8.
people.slice(2);
console.log(people);

//9.
people = ["Matt","Mary","Devon","James"];

people.splice(2,1,"Elizabeth","Artie","Stephen");
console.log(people);

//10.
let withBob = people.concat("Bob");
console.log(withBob);