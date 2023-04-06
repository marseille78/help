[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.ignoreCase

`RegExp.ignoreCase` - чи ігнорувати регістр.

## Синтаксис:

```javascript
regObj.ignoreCase
```

## Параметри:

`regObj` - об'єкт [`RegExp`](../RegExp.md).

## Опис:

`ignoreCase` - властивість об'єкта `RegExp` має тип `Boolean`. Якщо вказано прапор `i` то властивість дорівнює `true` інакше `false`

## Приклад:

```javascript
var reg=new RegExp('a*','i');
alert(reg.ignoreCase);
```

```javascript
var reg=new RegExp('a*');
alert(reg.ignoreCase);
```