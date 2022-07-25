const prompt = require('prompt-sync')({sigint: true});

/*
let userPrompt = prompt("Enter a string: ");
let userNumber = Number(prompt("Enter a number: "));
console.log("User string: " + userPrompt);
console.log("User number: " + userNumber);
*/

console.log(`\nYou've gone fishing! Try to maximize the value of your caught fish. You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.`);
console.log("\n===========================================================\n");


let fishToKeep = [];
let fishAdj1 = ["Red-Tail", "Blue-Tail", "Red-Finned", "Blue-Finned", "Smash-Faced",  "Single-Finned", "Long-Necked", "Broken", "Transparent","Web-Slinging"];
let fishAdj2 = ["Busted-Ass", "Funny-Looking", "Wasted", "Happy", "Bottom-Dwelling", "Media-Believing", "Chia-Boi", "Chubby", "Biden-Loving", "Trump-Loving"];
let fishType = ["Snapper", "Tuna", "Salmon", "Halibut", "Trout", "Perch", "Whiting", "Bass", "Minnow", "Sardine"];
let freshFish = {};
let totalWeight = 0;
let totalValue = 0;
let timer = 0;


let createFish = (name, weight, value) => {
    let freshFish = {
        name: name,
        weight: weight,
        value: value,
    };
    return freshFish;

    // Dot notation:
        // let newFish = {};
        // newFish.name = name;
        // newFish.weight = weight;
        // newFish.value = value;
}


let randomRange = () => { 
    let res = (Math.ceil(Math.random() * 10));
    return res
}

let randomVal = () => {
    let val = (Math.ceil(Math.random() * 100) /5);
    return val;
}

let randomWeight = () => {
    let lbs = (Math.ceil(Math.random() * 100) /20);
    return lbs;
}

let goingFishing = () => {
    let theFish = `${fishAdj1[randomRange()]} ${fishAdj2[randomRange()]} ${fishType[randomRange()]}`;
    let fishWeight = randomWeight();
    let fishValue = randomVal();
    let freshFish = createFish(theFish, fishWeight, fishValue);
    return freshFish;
}




while (totalWeight <= 10.00 && timer <= 6) {
    freshFish = goingFishing();
    console.log(freshFish)
    let userIn = prompt(`Would you like to (k)eep or (r)elease this fish? `)
    if (userIn === 'k'){
        if (totalWeight + freshFish.weight > 10){
            console.log(`\n This fish is too heavy. It will put you over the 10 pound limit. `);
            timer++;
            console.log(`Hour #: ${timer}`)
            continue;
        }
        totalValue += freshFish.value;
        totalWeight += freshFish.weight;
        fishToKeep.push(freshFish.name);
    }else if (userIn === 'r'){
        console.log(`You have released the fish. Keep trying!`);
    }
    if (timer === 5) {
        console.log(`This is your last round to fish`)
    }
    console.log(`\nHere's the Fish you're keeping.`);
    console.log(fishToKeep);
    console.log(`Total weight: ${totalWeight}`);
    console.log(`Total value: ${totalValue}`);
    console.log(`Total fish caught: ${fishToKeep.length}`);
    timer++
    console.log(`That was hour #${timer} of fishing.`)
    console.log("\n===========================================================\n");
}
console.log(`The comp is now over.`);
console.log(`Your total weight of Fish is: ${totalWeight} lbs`);
console.log(`Your total value of Fish is: $${totalValue}`);
console.log(`Total amount of Fish you kept: ${fishToKeep.length}`);
console.log(`Here's the type of the Fish you caught.`);
console.log(fishToKeep);






