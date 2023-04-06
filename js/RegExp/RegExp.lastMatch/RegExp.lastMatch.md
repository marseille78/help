[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.lastMatch

**RegExp.lastMatch** - рядок який співпав під шаблон.

## Синтаксис:

```javascript
RegExp.lastMatch;
RegExp['$&'];
```

## Опис:

`lastMatch` властивість об'єкту [`RegExp`](../RegExp.md) яка містить рядок який співпав по шаблону.

Властивість `RegExp.lastMatch` має псевдонім `RegExp['$&']`.

## Приклад:

```javascript
var reg = /\w+\@\w+/g;
reg.exec('for js@code');
console.log( RegExp.lastMatch ); //js@code
reg.test('Script');
console.log( RegExp.lastMatch ); //js@code
reg.test('3 Довідка javascript code'); //js@code
console.log(RegExp.lastMatch);
reg.test('Java java@code free');
console.log(RegExp.lastMatch); //java@code
```