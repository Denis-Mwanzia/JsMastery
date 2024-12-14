/* 
  Variable can be defined as container that holds/stores data values
  3 ways to declear variable
  01. let - allows you declear variables whose values can be reassigned later. Has block scope
  02. const - allows you declear constant varibles whose values cannot be reassigned. Has block scope
  03. var - older way of declearing variable with function scope
*/

// Example using 50/30/20 Budgeting model
let user = 'Denis Mwanzia';
var income = 30000;
const basicNeeds = 0.5 * income;
const discretionary = 0.3 * income;
const savings = 0.2 * income;
let budget = { user, income, basicNeeds, discretionary, savings };

console.table(budget);
