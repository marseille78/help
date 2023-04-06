[Home](../../README.md) / [JavaScript](../README_JS.md)

# RegExp

**RegExp** - об'єкт регулярного виразу для співставлення з шаблонами.

## Синтаксис:

літеральний вираз:

```
/pattern/flags
```

через конструктор:

```javascript
new RegExp( pattern [, flags])
```

## Параметри:

**pattern** - текст регулярного виразу.

**flags** - не обов'язково. Доступні прапорці:

* `g` - глобальний пошук.
* `i` - ігнорувати регістр символів.
* `m` - багаторядковий пошук.
* `y` - шукає співставлення у властивостях lastIndex регулярного виразу і не шукає в більш пізніших індексах.
* `u` - включає функції Unicode.

> :information_source: `u` підтримують лише браузери Microsoft.

## Опис:

Регулярний вираз це спеціальні коди для пошуку шаблонів у [рядках](../Strings/Strings.md).

Регулярні вираз забезпечує швидкий і легкий спосіб співставлення рядків в шаблон.

**Регулярні вирази застосовують:**

* для перевірки коректності вводу тексту (email, номер тел. і т.п.).
* для заміни одного тексту на інший
* для пошуку тексту

Для створення об'єкту регулярного виразу використовують два способи:

```javascript
const reg1= new RegExp('hi\?');
const reg2= /hi\?/;
```

## Спеціальні символи:

| <!-- --> | <!-- --> |
| ---- | ---- |
| `*` | `0` або більше |
| `+` | `1` або більше |
| `?` | символ може бути або не бути |
| `^` | початок рядка |
| `$` | кінець рядка |
| `.` | будь який символ крім `\n` i `\r` |
| `\` | вказує що наступний символ є спеціальний |
| `/` | початок і кінець шаблону регулярного виразу |
| `\d` | цифра, аналог `[0-9]` |
| `\D` | не цифра |
| `\w` | алфавітно-цифрові символи, аналог `[A-Za-z0-9_]` |
| `\W` | все крім алфавітно-цифрових символів, аналог `[^A-Za-z0-9_]` |
| `\s` | пробіл, табуляція та інші пов'язанні з цим символи, аналог `[\f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​​\u202f\u205f​\u3000]`. |
| `\S` | не пробіли, аналог `[^\f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u202f\u205f​\u3000]`. |
| `\t` | символ табуляції |
| `\r` | повернення каретки |
| `\n` | повернення рядка |
| `\v` | вертикальна табуляція |
| `\f` | нова сторінка |
| `\0` | `null` |
| `\cX` | де `X` від `A` до `Z`. Контрольний символ у рядку. `Z` означає `Ctrl-Z`. |
| `\xhh` | символ з кодом `hh` (два шістнадцяткові числа) |
| `\uhhhh` | символ з кодом `hhhh` (чотири шістнадцяткові числа) |
| `[xyz]` | набір вказаних символів |
| `[^xyz]` | всі символи крім вказаних |
| `\b` | межа слова |
| `\B` | не межа слова |
| `(x)` | знаходить і запам'ятовує. До збережених можна звертатися по властивості [`RegExp.$1..9`](./RegExp.%241..9/RegExp.%241..9.md). |
| `(?: x)` | знаходить але не запам'ятовує. |
| `x*` | `x`, нуль або більше разів |
| `x+` | `x`, один або більше разів |
| `x*?`<br>`x+?` | співставляється як `x*`, `x+` але з можливим ще символом
| `x?` | `x`, нуль або `1` раз |
| `x(?= y)` | якщо за `x` йде `y` |
| `x(?! y)` | якщо за `x` не йде `y` |
| `x1y` | `x` або `y` (`1` - вертикальна риска) |
| `x{n}` | `n` - ціле число. якщо `x` `n` разів. |
| `x{n,}` | `n` - ціле число. Якщо `x` `n` і більше разів. |
| `x{n, m}` | `n`, `m` - ціле число. Якщо `x` від `n` до `m`.

## Властивості:

* [`RegExp.constructor`](./RegExp.constructor/RegExp.constructor.md) - повертає посилання на конструктор.
* [`RegExp.length`](./RegExp.length/RegExp.length.md) - кількість параметрів.
* [`RegExp.lastMatch`](./RegExp.lastMatch/RegExp.lastMatch.md) - рядок який співпав під шаблон.
* [`RegExp.lastParen`](./RegExp.lastParen/RegExp.lastParen.md) - останній знайдений підрядок в дужках.
* [`RegExp.global`](./RegExp.global/RegExp.global.md) - чи використовувати глобальний пошук.
* [`RegExp.ignoreCase`](./RegExp.ignoreCase/RegExp.ignoreCase.md) - чи ігнорувати регістр.
* [`RegExp.multiline`](./RegExp.multiline/RegExp.multiline.md) - чи використовується прапорець `m`.
* [`RegExp.source`](./RegExp.source/RegExp.source.md) - повертає рядок з текстом шаблону
* [`RegExp.sticky`](./RegExp.sticky/RegExp.sticky.md) - чи використовується прапорець `y`.
* [`RegExp.unicode`](./RegExp.unicode/RegExp.unicode.md) - чи використовується прапорець u.
* [`RegExp.$1..9`](./RegExp.%241..9/RegExp.%241..9.md) - дев'ять останніх співпадань по шаблону.

## Методи:

* [`RegExp.Compile()`](./RegExp.Compile/RegExp.Compile.md) - виконує компіляцію регулярного виразу для швидкого виконання.
* [`RegExp.exec()`](./RegExp.exec/RegExp.exec.md) виконує пошук шаблону у рядку і повертає результат.
* [`RegExp.test()`](./RegExp.test/RegExp.test.md) - виконує пошук шаблону у рядку і повертає `true` або `false`.
* [`RegExp.toSource()`](./RegExp.toSource/RegExp.toSource.md) - повертає код об'єкту.
* [`RegExp.toString()`](./RegExp.toString/RegExp.toString.md) - повертає рядкове представлення регулярного виразу.

# Приклад:

Функція для перевірки правильності email:

```javascript
/* дозволені символи від A до z, від 0 до 9 і _.   Перший символ обов'язково має бути буква
*/
function isEmail(email){
  var reg= /^[a-zA-Z][0-9a-zA-Z_]{2,21}@[a-zA-Z]{2,12}\.[a-zA-Z]{2,12}/i;
  return reg.test(email);
}

alert( isEmail('email_example@ukr.net') );  
```

Приклад функції яка витягує з рядка email адреси:

```javascript
  function extractEmail(s){
  var reg = /\w+\@\w+\.\w+/gi;
  var res=[];
  while ((mas=reg.exec(s))!=null)
  res[res.length]=mas;
return res;
}

alert(extractEmail('Приклад емайлу: email@gmail.com, mail@ukr.net'));
```

Функція перевірки правильності введення мобільного номеру в Україні:

```javascript
function isTelUkr(tel){
  var reg= /^\+380[0-9]{7}/i;
  return reg.test(tel);
}

alert( isTelUkr('+380961234567') );
```

Функція яка витягує ім'я файлу з повного шляху:

```javascript
function PathExtFile(f){
  var reg= /[0-9a-zA-Zа-яА-Я\s_\-+]*\.\w{1,12}$/i;
  return reg.exec(f);
}

alert( PathExtFile('C:\\path\\files назва 2.txt') ); // \\ - екрануємо символ \
alert( PathExtFile('/home/usr/bin/picture.jpg') ); 
```

Функція яка витягує каталог (папку) з повного імені файлу:

```javascript
function PathExt(f){
  var reg= /^[0-9a-zA-Zа-яА-Я\s_\-+\/\\:]+[\\?|\/?]/i;
  return reg.exec(f);
}

alert( PathExt('C:\\path\\files назва 2.txt') ); //  \\ - екрануємо символ \
alert( PathExt('/home/usr/bin/picture.jpg') );
```

* [RegExp.$1..9](./RegExp.%241..9/RegExp.%241..9.md)
* [RegExp.compile()](./RegExp.Compile/RegExp.Compile.md)
* [RegExp.constructor](./RegExp.constructor/RegExp.constructor.md)
* [RegExp.exec()](./RegExp.exec/RegExp.exec.md)
* [RegExp.global](./RegExp.global/RegExp.global.md)
* [RegExp.ignoreCase](./RegExp.ignoreCase/RegExp.ignoreCase.md)
* [RegExp.input](./RegExp.input/RegExp.input.md)
* [RegExp.lastIndex](./RegExp.lastIndex/RegExp.lastIndex.md)
* [RegExp.lastMatch](./RegExp.lastMatch/RegExp.lastMatch.md)
* [RegExp.lastParen](./RegExp.lastParen/RegExp.lastParen.md)
* [RegExp.leftContext](./RegExp.leftContext/RegExp.leftContext.md)
* [RegExp.length](./RegExp.length/RegExp.length.md)
* [RegExp.multiline](./RegExp.multiline/RegExp.multiline.md)
* [RegExp.rightContext](./RegExp.rightContext/RegExp.rightContext.md)
* [RegExp.source](./RegExp.source/RegExp.source.md)
* [RegExp.sticky](./RegExp.sticky/RegExp.sticky.md)
* [RegExp.test()](./RegExp.test/RegExp.test.md)
* [RegExp.toSource()](./RegExp.toSource/RegExp.toSource.md)
* [RegExp.toString()](./RegExp.toString/RegExp.toString.md)
* [RegExp.unicode](./RegExp.unicode/RegExp.unicode.md)