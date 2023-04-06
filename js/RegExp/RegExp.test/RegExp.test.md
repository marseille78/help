[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.test()

`RegExp.test()` - виконує пошук шаблону у рядку і повертає `true` або `false`.

## Синтаксис:

```javascript
regObj.test(s)
```

## Параметри:

* `regObj` - об'єкт [`RegExp`](../RegExp.md).
* `s` - рядок який буде співставлятися з шаблоном.

## Опис:

`test()` - **метод** об'єкту [`RegExp`](../RegExp.md) який виконує пошук по шаблону регулярного виразу у рядку і повертає `true` якщо співпадає по шаблону, і `false` якщо не знайдено.

Використовуйте `RegExp.test()` якщо необхідно просто дізнатися чи є співпадання по шаблону. Якщо необхідна детальніша інформація використовуйте [`RegExp.exec()`](../RegExp.exec/RegExp.exec.md).

## Приклад:

```javascript
var reg= /abc/i;
var b=reg.test('en: abcdef');

alert(b);
```