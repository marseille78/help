[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.lastIndex

`RegExp.lastIndex` - повертає або встановлює індекс з якого починати наступний пошук.

## Синтаксис:

```javascript
regObj.lastIndex
```

## Параметри:

* `regObj` - об'єкт [`RegExp`](../RegExp.md).

## Опис:

`lastIndex` властивість об'єкту [`RegExp`](../RegExp.md) яка повертає або встановлює індекс з якого починати наступний пошук.

## Приклад:

```javascript
alert( RegExp.length ); //2
var s="JavaScript";
reg = /\a/g;
var t;
while((a=reg.exec(s))!=null){
 alert(a.index);
}
```