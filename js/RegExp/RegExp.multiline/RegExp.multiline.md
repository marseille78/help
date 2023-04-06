[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.multiline

`RegExp.multiline` - чи використовується прапарець `m`.

## Синтаксис:

```javascript
regObj.ignoreCase
```

## Параметри:

`regObj` - об'єкт [`RegExp`](../RegExp.md).

## Опис:

`multiline` - властивість об'єкта [`RegExp`](../RegExp.md) має тип `Boolean`. Якщо вказано прапор `m` то властивість дорівнює `true` інакше `false`

## Приклад:
```javascript
var reg=new RegExp('a*','m');
alert(reg.multiline);
```

```javascript
var reg=new RegExp('a*');
alert(reg.multiline);
```