// 1.
const itemsArray = [
    { name: 'juice', price: 50, quantity: 3 },
    { name: 'cookie', price: 30, quantity: 9 },
    { name: 'shirt', price: 880, quantity: 1 },
    { name: 'pen', price: 100, quantity: 2 },
];

let itemTotalPrice = [];
let totalPrice = 0;

for (const item of itemsArray) {
    const total = item.price * item.quantity;
    itemTotalPrice.push(total);
    totalPrice += total;
}

console.log(itemTotalPrice);
console.log(totalPrice);

// 2.
const obj = {
    name: 'shahroz',
    email: 'shah@gmail.com',
    password: 'pakistan',
    age: 22,
    gender: 'male',
    city: 'Karachi',
    country: 'Pakistan',
};

console.log(Object.hasOwnProperty('age'));
console.log(Object.hasOwnProperty('country'));
console.log(Object.hasOwnProperty('firstName'));
console.log(Object.hasOwnProperty('lastName'));

// 3.
function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const s1 = new Student('Moiz', 'Ali', 24);
const s2 = new Student('Yousuf', 'Ahmed', 22);

// 4.
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    const name = e.target.name.value;
    const gender = document
        .querySelector('input[name="gender"]:checked')
        .getAttribute('id');
    const address = e.target.address.value;
    const education = e.target.education.value;
    const profession = e.target.profession.value;

    const person = new Person(name, gender, address, education, profession);
});
