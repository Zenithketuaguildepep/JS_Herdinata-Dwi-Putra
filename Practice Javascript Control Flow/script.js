// JavaScript di sini
let output = document.getElementById("output");

// 1. Our First For Loop Practice
output.innerHTML += "<pre>I'm Blue - Da ba dee da ba daa</pre>";
for (let i = 0; i < 6; i++) {
    output.innerHTML += "<pre>Da ba dee da ba daa</pre>";
}

// 2. For Loops Practice (Countdown)
output.innerHTML += "<pre>Countdown:</pre>";
for (let i = 25; i >= 0; i -= 5) {
    output.innerHTML += `<pre>${i}</pre>`;
}

// 3. Iterating Arrays Exercise
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
output.innerHTML += "<pre>Names in Uppercase:</pre>";
for (let i = 0; i < people.length; i++) {
    output.innerHTML += `<pre>${people[i].toUpperCase()}</pre>`;
}
