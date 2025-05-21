import prompt from "picoprompt";
import { faker } from "@faker-js/faker";

// const firstName = prompt ("What`s your name? ");
// console.log(`Hey ${firstName}`);

const firstName = faker.person.firstName();
console.log(`Hey ${firstName}`);

const fullName = faker.person.fullName();
console.log(`Hey ${fullName}`);

const job = faker.person.jobTitle();
console.log(`Working as an ${job}`);

const internet = faker.internet.domainName();
console.log(`What is your domain name? ${internet}`);

const location = faker.location.country();
console.log(`Where do you live?  ${location}`);

const city = faker.location.city();
console.log(`In which city? ${city}`);

