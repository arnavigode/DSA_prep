/**
 * O = omaron ===> (big o) ==> worst caes condition
 
 * o(n²) => Loop within loop
 * o(n) => propotional
 * o(log n) => devide and conquer
 * o(1) => constant
 */

// TC:o(n) =>

function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
logItems(5);
/** this ran n times so it has TC ==> o(n) */

/////////////////////////////////////////////////////////////////////////////////////////////

// TC:o(2n) =>

function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}
logItems(5);
/** this ran n times for i and n times for j
 *  so it has TC ==> o(n) + o(n)==> o(2n)
 * but it is good practice to drop constants
 * so the tc will be o(n)
 */

/////////////////////////////////////////////////////////////////////////////////////////////

// TC:o(n²) =>

function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
logItems(5);
/** it has TC ==> o(n) * o(n)==> o(n²)
 * so the tc will be o(n²)
 */

/////////////////////////////////////////////////////////////////////////////////////////////

// Drop non-dominants:
function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  for (let k = 0; k < n; k++) {
    console.log(k);
  }
}
logItems(5);

/** it has TC ==> o(n) * o(n)==> o(n²) + 0(n)
 * so the tc will be o(n² + n)
 * but n² is dominant here an n is non- dominant
 * so will drop n and keep n²
 * which means our TC is o(n²)
 */

/////////////////////////////////////////////////////////////////////////////////////////////

// TC:o(1) =>

function addItem(n) {
  return n + n;
}
logItems(5);
/** it has TC ==> o(1)==> as it is returning one operation
 * so the tc will be o(n²)
 */

/////////////////////////////////////////////////////////////////////////////////////////////

// TC:o(log n) =>
// searching a number in sorted array
// searching 1 in arr using devide and conquer
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// we can cut arr in half and check if it is not in 2nd half we will cut it off
let arr2 = [1, 2, 3, 4];
// now will repeat same process
let arr3 = [1, 2];
// still we dont have exact number repeat same process
let arrfinal = [1];

// this process ran 3 times to get exact output 
// that is o(log n)

/////////////////////////////////////////////////////////////////////////////////////////////

let array = [11, 3, 23, 7];
// push pop ==> TC ==> o(1)
// shift unshift ==> o(n)
// slice ==> o(n)
