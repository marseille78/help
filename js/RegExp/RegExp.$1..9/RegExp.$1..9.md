[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.$1..9

**RegExp.$1..9** - повертає дев'ять останіх співпадань по шаблону.

## Синтаксис:

```javascript
RegExp.$1
RegExp.$2
RegExp.$3
RegExp.$4
RegExp.$5
RegExp.$6
RegExp.$7
RegExp.$8
RegExp.$9
```

## Опис:

`$1..9` властивість об'єкту [`RegExp`](../RegExp.md) яка містить дев'ять останіх співпадань по шаблону.

Властивість `$1..9` яка змінюється при кожному співпадані з шаблоном регулярного виразу.

## Приклад:

```javascript
var reg= /(\w+)\s(\w+)\s(\w+)/;
reg.exec('Java Script code');
alert(RegExp.$3+' '+RegExp.$1 +' '+RegExp.$2);
```

```javascript
var re = /(\w+)\s(\w+)/
var str = 'code js' ;
str.replace ( re, '$2, $1');
console.log(RegExp.$1); // "code"
console.log(RegExp.$2); // "js"
alert(str);
```