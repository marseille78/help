[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.rightContext

`RegExp.rightContext` - містить рядок з кінця знайденого співставлення до кінця рядка.

## Синтаксис:

```javascript
RegExp.rightContext;
RegExp["$'"]; 
```

## Опис:

`rightContext` - **властивість** об'єкту [`RegExp`](../RegExp.md) яка містить рядок з кінця знайденого шаблону до кінця рядка у кому виконувався пошук.

## Приклад:

```javascript
var reg = /(\w+)\@(\w+)/g;
reg.exec('Js RegExp js@code primari or js2@code');
alert(RegExp.rightContext); // primari or js2@code
```