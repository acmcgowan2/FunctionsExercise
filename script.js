// 1
function fozzieBear(){
    console.log(`Wocka Wocka!`);
}
fozzieBear();


// 2
function beaker(speak){
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
}
beaker(`Meep`);

// 3
function muppetShow(a, b){
    if (a === `Muppet` && b === `Show`){
        return `It's time to play the music. It's time to light the lights. `;
    }
    return ``;
}
console.log(muppetShow(`Muppet`, `Show`));
console.log(muppetShow(`Hi`, `Bye`));


// 4
function kermit(){
    console.log(`Kermit the Frog`);
}
kermit();

// 5
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    }
    return false;
}
console.log(muppetShowSeasons(5));
console.log(muppetShowSeasons(3));

// 6
const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet?`);
}
manOrMuppet();

// 7
rainbowConnection = () => console.log(`Someday we will find it. The Rainbow Connection. The lovers, the dreamers and me`);
rainbowConnection();

// 8
// No

// 9
// Yes

// Bonus
// 10a
const newMuppetMovies = [
    `The Muppets`,
    `Muppets Most Wanted`
];

// 10b
const uppers = newMuppetMovies.map(function(x){
    return x.toUpperCase();
});
console.log(uppers);

// 11a
const oldMuppetMovies =[
    "The Muppet Movie",
    "The Muppets Take Manhattan", 
    "The Great Muppet Caper", 
    "The Muppet Christmas Carol", 
    "Muppet Treasure Island",
     "Muppets From Space"
];

// 11b
const a = oldMuppetMovies.filter(twoMovies => twoMovies.length === 22);

console.log(a);

// 12a
const charactersOne = [
    'Statler',
    `Waldorf`
];

// 12b
const characterstwo =[
    "The Swedish Chef", 
    "Animal",
    "Rowlf"
];

// 12c
randomMuppet = (characters) => {
    console.log(`${characters[Math.floor(Math.random() * characters.length)]}`);
}

// 12d
randomMuppet(charactersOne);
randomMuppet(charactersTwo);

// 13
caps = string => {
    return string.split(``).map((v, i)=> i % 2 ? v.toLowercase() : v.toUpperCase()).join('');
}

console.log(caps(`Hello World`));

// 13 Extra Bonus
caps = string => {
    let count = 0;
    let newString = ``;
    for (1 = 0; i < string.length; i++){
        if (string[i] === ` `){
            newString =+ ` `;
        } else if (count % 2 === 0){
            newString += string[i].toUpperCase();
            count++;
        } else {
            newString += string[i].toLowercase();
            count++;
        }
    }
    return newString;
}

console.log(caps(`Hello World`));