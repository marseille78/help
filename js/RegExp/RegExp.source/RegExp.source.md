[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.source

`RegExp.source` - повертає рядок з текстом шаблону.

## Синтаксис:

```javascript
regObj.source
```

## Параметри:

`regObj` - об'єкт [`RegExp`](../RegExp.md).

## Опис:

`source` - властивість об'єкта [`RegExp`](../RegExp.md) яка містить текст шаблону без `/` і без прапорців.

## Приклад:

```javascript
var reg=new RegExp('a*','m');
alert(reg.source);
```