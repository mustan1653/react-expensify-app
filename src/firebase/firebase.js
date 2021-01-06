import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBvR5GZSpMe34rLe1lTb7cUQOzyZiKPrO4",
    authDomain: "expensify-203d4.firebaseapp.com",
    databaseURL: "https://expensify-203d4-default-rtdb.firebaseio.com",
    projectId: "expensify-203d4",
    storageBucket: "expensify-203d4.appspot.com",
    messagingSenderId: "237266807098",
    appId: "1:237266807098:web:df4c4715a481f3a3e08803",
    measurementId: "G-6MZLDR4SMN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();

//child removed
db.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child changed
db.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});


//child added
db.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// db.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses);
//     });




// db.ref('expenses')
//     .once('value')
//     .then(snapshot => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses);
//     });


// db.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 9843478249
// });

// db.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 1500,
//     createdAt: 1243478249
// });

// db.ref('expenses').push({
//     description: 'Food Bill',
//     note: '',
//     amount: 9500,
//     createdAt: 9876743478249
// });


// db.ref('notes/-MQMmSX7hQIh9St_qnSb').remove();


// db.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native,, Angular, React JS'
// });

// const firstNotes = {
//     notes: {
//         apidssds: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         sdsadasd: {
//             title: 'Another note!',
//             body: 'This is my note'
//         }
//     }
// }


// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note!',
//     body: 'This is my note'
//}];


// db.ref('notes').set(notes);






// db.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// db.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//     db.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     db.ref('age').off();
// }, 7000);

// setTimeout(() => {
//     db.ref('age').set(30);
// }, 10500);

// db.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })


// db.ref().set({
//     name: 'Mustansir Rampurawala',
//     age: 28,
//     stressLevel: 6,
//     job: 'Software developer',
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) =>
//     console.log('This failed', e));

// db.ref().update({
//     stressLevel: 9,
//     'job/title': 'Software developer',
//     'job/company': 'Amazaon',
//     'location/city': 'Seatlle'
// });

// db.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         cosnoel.log('Data was not removed', e);
//     })


export default db;