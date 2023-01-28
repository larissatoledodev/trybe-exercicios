// const employeeGenerator = (fullName) => {
//   const email = fullName.toLowerCase().replace(' ', '_');
//   return { fullName, email: `${email}@trybe.com` }
// }


// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drumond'),
//     id3: callback('Carla Paiva'),
//   }
//   return employees;
// };

// console.log(newEmployees(employeeGenerator));

// const numberCheck = (myNumber, number) => myNumber === number;

// const lottery = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);

//   return callback(myNumber, number) ? 'Parabéns, você ganhou' : 'Tente novamente';
// }

// console.log(lottery(1, numberCheck));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

