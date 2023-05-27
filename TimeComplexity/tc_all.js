/**
 * O = omaron ===> (big o) ==> worst caes condition
 */

// TC:o(n) =>

function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
logItems(5);
/** this ran n times so it has TC ==> o(n) */

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

// TC:o(n²) =>

function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
logItems(5);
/** this ran n times for i and n times for j
 *  so it has TC ==> o(n) * o(n)==> o(n²)
 * so the tc will be o(n²)
 */

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/arnavigode/DSA_prep.git
// git push -u origin main
