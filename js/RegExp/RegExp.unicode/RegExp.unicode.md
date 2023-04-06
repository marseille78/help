[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.unicode

`RegExp.unicode` - чи використовується прапарець `u`.

## Синтаксис:

```javascript
regObj.unicode
```

## Параметри:

`regObj` - об'єкт [`RegExp`](../RegExp.md).

## Опис:

`unicode` - властивість об'єкта [`RegExp`](../RegExp.md) має тип `Boolean`. Якщо вказано прапорець u то властивість дорівнює `true` інакше `false`

> :information_source: **Не усі браузери підтримують.**

## Приклад:

```javascript
var reg=new RegExp('a*','m');
alert(reg.unicode);
```