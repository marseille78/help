'use strict';

/* 
new RegExp('pattern', 'flags');
/pattern/f
 */

// const ans = prompt('Введіть ваше ім\'я');

const reg = /n/;

/* 
i - ignore case (ігнорує регістр входжень)
g - global (коли шукаємо багато входжень)
m - multiline (вмикає багаторядковий режим)
*/

/* 
str.search(reg)
str.match(reg)
str.replace(reg, substr)

reg.test(str)
*/

/* 
\d - всі цифри
\w - всі літери
\s - всі пробільні символи
\D - не число
\W - не літера
\S - не пробіл
*/

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));
// console.log('12-34-56'.replace(/-/g, ':'));