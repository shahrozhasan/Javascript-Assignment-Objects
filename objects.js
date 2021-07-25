// // 1.
// const itemsArray = [
//     { name: 'lays', price: 50, quantity: 3 },
//     { name: 'cookie', price: 30, quantity: 9 },
//     { name: 'shirt', price: 880, quantity: 1 },
//     { name: 'marker', price: 100, quantity: 2 },
// ];

// function calculate_Prices() {
//     let item_Price = [];
//     let Price = 0;

//     for (const item of itemsArray) {
//         const total = item.price * item.quantity;
//         item_Price.push(total);
//         Price += total;
//     }

//     console.log(item_Price);
//     console.log(Price);
// }

// calculate_Prices();

// // 2.
// const user = {
//     name: 'Shahroz',
//     email: 'sherry123@gmail.com',
//     password: 'shahrozqwerty',
//     age: 21,
//     gender: 'male',
//     city: 'Karachi',
//     country: 'Pakistan',
// };

// console.log('age' in user);
// console.log('country' in user);
// console.log('firstName' in user);
// console.log('lastName' in user);

// // 3.
// function Bike(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.getInfo = function () {
//         console.log(`${this.make} ${this.model} ${this.year}`);
//     };
// }

// const bike1 = new Bike('suzuki', 'hayabusa', '2020');
// const bike2 = new Bike('Honda', 'cg125', '2019');

// bike1.getInfo();
// bike2.getInfo();

// 4.
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

const people = [];

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

    people.push(person);

    console.log(people);
});
