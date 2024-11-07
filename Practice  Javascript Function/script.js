// 1. Latihan Definisi Fungsi
document.getElementById("output").innerHTML += `
    <div class="question">1. Latihan Definisi Fungsi</div>
    <div class="answer">Buatlah sebuah fungsi bernama printHeart yang mencetak string "&lt;3". Jalankan fungsi tersebut sekali.</div>
`;

function printHeart() {
    console.log("<3");
    document.getElementById("output").innerHTML += "<p>&lt;3</p>";
}
printHeart(); // Panggil fungsi


// 2. Latihan Return Value
document.getElementById("output").innerHTML += `
    <div class="question">2. Latihan Return Value</div>
    <div class="answer">Buatlah fungsi sederhana bernama multiply yang menerima dua argumen angka dan mengembalikan hasil perkalian keduanya.</div>
`;

function multiply(a, b) {
    return a * b;
}

document.getElementById("output").innerHTML += `
    <p>multiply(2, 3) = ${multiply(2, 3)}</p>
    <p>multiply(9, 9) = ${multiply(9, 9)}</p>
    <p>multiply(5, 4) = ${multiply(5, 4)}</p>
`;


// 3. Latihan Scope
document.getElementById("output").innerHTML += `
    <div class="question">3. Latihan Scope</div>
    <div class="answer">A. Apa yang dicetak ke console ketika kode berikut dijalankan?</div>
    <div class="code">let animal = "Giant Pacific Octopus";<br>function observe() {<br>let animal = "Pajama Squid";<br>console.log(animal);<br>}<br>observe();</div>
`;

let animal = "Giant Pacific Octopus";
function observe() {
    let animal = "Pajama Squid";
    console.log(animal);
    document.getElementById("output").innerHTML += `<p>observe() output: ${animal}</p>`;
}
observe(); // Panggil fungsi observe()


document.getElementById("output").innerHTML += `
    <div class="answer">B. Apa yang dicetak ke console ketika kode berikut dijalankan?</div>
    <div class="code">let deadlyAnimal = "Blue-Ringed Octopus";<br>function handleAnimal() {<br>let deadlyAnimal = "Scorpionfish";<br>console.log(deadlyAnimal);<br>}<br>handleAnimal();<br>console.log(deadlyAnimal);</div>
`;

let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
    document.getElementById("output").innerHTML += `<p>handleAnimal() output: ${deadlyAnimal}</p>`;
}
handleAnimal(); // Panggil fungsi handleAnimal()
console.log(deadlyAnimal);
document.getElementById("output").innerHTML += `<p>Global deadlyAnimal: ${deadlyAnimal}</p>`;


// 4. Latihan Fungsi Panah
document.getElementById("output").innerHTML += `
    <div class="question">4. Latihan Fungsi Panah</div>
    <div class="answer">Buatlah sebuah fungsi panah bernama sayHello. Fungsi ini menerima satu argumen berupa nama seseorang dan mengembalikan string sapaan, seperti "Halo [nama]!".</div>
`;

const sayHello = (name) => `Halo ${name}!`;

document.getElementById("output").innerHTML += `
    <p>${sayHello("Hagrid")}</p>
    <p>${sayHello("Luna")}</p>
`;