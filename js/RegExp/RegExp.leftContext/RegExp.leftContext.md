[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.leftContext

`RegExp.leftContext` - містить рядок з початку рядка до початку знайденого співставлення.

## Синтаксис:

```javascript
RegExp.leftContext;
RegExp['$`']; 
```

## Опис:

`leftContext` - **властивість** об'єкту [`RegExp`](../RegExp.md) яка містить рядок з початку рядка у якому воконується пошук до знайденого шаблону.

## Приклад:

```javascript
var reg = /(\w+)\@(\w+)/g;
reg.exec('Js RegExp js@code primari or js2@code');
alert( RegExp.leftContext ); // Js RegExp 
```