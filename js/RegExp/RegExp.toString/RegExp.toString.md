[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.toString()

`RegExp.toString()` - повертає рядкове представленя регулярного виразу.

## Синтаксис:

```javascript
regObj.toString();
```

## Параметри:

* `regObj` - об'єкт [`RegExp`](../RegExp.md).

## Опис:

`toString()` - **метод** об'єкту [`RegExp`](../RegExp.md) який повертає рядкове представлення регулярного виразу.

## Приклад:

```javascript
var reg= /abc/i;

alert(reg.toString());
```