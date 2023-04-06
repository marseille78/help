[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.global

`RegExp.global` - чи використовувати глобальний пошук.

## Синтаксис:

```javascript
regObj.global
```

## Параметри:


`regObj` - об'єкт [RegExp](../RegExp.md).

## Опис:

`global` - властивість об'єкту [`RegExp`](../RegExp.md) яка вказує чи використовувати глобальний пошук чи лише раз шукати. `global` містить `true` якщо вказаний прапорець `g` або `false`.

Властивість `RegExp.global` не можна напряму змінювати.

## Приклад:

```javascript
reg = new RegExp('a*','g');
alert(reg.global); //true
```