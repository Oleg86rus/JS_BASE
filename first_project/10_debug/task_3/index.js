/*
const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary;

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
   const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
   totalJuniorDevelopersSalary += salaryWithTax;
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);

В данном коде totalJuniorDevelopersSalary выводит почему-то значение NaN.

Исправьте все ошибки, чтобы программа работала правильно. Также выполните следующие условия: баг должен быть исправлен при помощи console.log либо debugger, в коде должен присутствовать минимум один console.log либо debugger.
 */

const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;
let salaryWithTax = 0;
console.log(totalJuniorDevelopersSalary);

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
    salaryWithTax = salaryOfJuniorDeveloper - salaryOfJuniorDeveloper * taxPercentage/100;
    totalJuniorDevelopersSalary += salaryWithTax;
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);