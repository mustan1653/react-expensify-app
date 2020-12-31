//Object destructuring
// const person = {
// name: 'Mustan',
// age: 28,
// location: {
//     city: "Philadelphia",
//     temp: 88
//     }
// }
// const {name: firstName = 'Anonymous' , age} = person;
// console.log(`${firstName} is ${age}`);

// console.log(`It's ${person.location.temp} in ${person.location.city}`)


// const {city, temp: temprature} = person.location;
// if(city && temprature) {
//     console.log(`It's ${temprature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name : publisherName = 'Self-Published'} = book.publisher;

// console.log(`${publisherName}`);


//Array Destructuring

// const address = ['1229 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [,city , state] = address;
// console.log(`You are in ${city} ${state}`)

const item = ['Coffee (iced)', "$2.00", "$5.50", "$2.75"];

const [coffee, , medium] = item

console.log(`A medium ${coffee} costs ${medium}`)