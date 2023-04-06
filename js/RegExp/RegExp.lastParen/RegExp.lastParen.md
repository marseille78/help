[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.lastParen

`RegExp.lastParen` - містить останій знайдений підрядок в дужках.

## Синтаксис:

```javascript
RegExp.lastParen;
RegExp['$+'] 
```

## Опис:

`lastParen` властивість об'єкту [`RegExp`](../RegExp.md) яка містить останій знайдений підрядок в дужках (якщо такий є).

## Приклад:

```javascript
var reg = /(\w+)\@(\w+)/g;
reg.exec('1 js@code primari or js2@code');
alert( RegExp.lastParen);
```