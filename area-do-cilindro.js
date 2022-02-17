let R = 3;
let H = 5;
let Pi = 3.14159265359;

let Ab = 2 * Pi * (R ** 2);
console.log(Ab);

let Al = 2 * Pi * R * H;
console.log(Al);

let At = 2 * Pi * R * (R + H);
console.log(At);

let AT = 2 * Ab + Al;
console.log(`A área total do cilindro é ${AT}`);

