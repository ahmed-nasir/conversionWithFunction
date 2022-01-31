function simpleInterestCalculator(p, r, n) {
    let roi = r / 100;
    let interest = p * roi * n;
    return interest;
}
let principle = 5000;
let rateOfInterest = 5;
let time = 2;
let interest = simpleInterestCalculator(principle, rateOfInterest, time);

console.log(interest);