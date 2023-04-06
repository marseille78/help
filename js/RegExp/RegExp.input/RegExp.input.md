[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.input

**RegExp.input** - рядок з який співпадає з шаблоном.

## Синтаксис:

```javascript
RegExp.input;
RegExp.$_;
```

## Опис:

`input` - **властивість** об'єкту [`RegExp`](../RegExp.md) яка містить рядок з яким було співставлення по шаблону і який співпадає з шаблоном.

Властивість [`RegExp`](../RegExp.md).input має псевдонім `RegExp.$_`.

## Приклад:

```javascript
var reg = new RegExp('js');
reg.test('js code');
console.log(RegExp.input); // js code
reg.test('JavaScript');
console.log(RegExp.input); // js code
reg.test('Довідка js');
console.log(RegExp.input); // Довідка js
```