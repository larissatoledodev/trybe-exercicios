let divisors = 1;
let numberToBeVerified = 31;

for (let number = 2; number <= numberToBeVerified; number += 1) {
  if (numberToBeVerified % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToBeVerified + ' é primo');
else console.log(numberToBeVerified + ' não é primo');