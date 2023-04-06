[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.toSource()

`RegExp.toSource()` - повертає код об'єкта.

## Синтаксис:

```javascript
RegExp.toSource();
regObj.toSource();
```

## Параметри:

* `regObj` - об'єкт [`RegExp`](../RegExp.md).

## Опис:

`toSource()` - метод об'єкту [`RegExp`](../RegExp.md) який повертає код об'єкту.

> :information_source: **Не всі браузери підтримують.**

## Приклад:

```javascript
var reg= /abc/i;
if(reg.toSource){
alert(reg.toSource());
}else alert('Ваш браузер не підтримує toSource');
```