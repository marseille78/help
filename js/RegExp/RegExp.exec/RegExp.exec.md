[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

## RegExp.exec()

`RegExp.exec()` - виконує пошук шаблону у рядку і повертає результат.

## Синтаксис:

```javascript
regObj.exec(s)
```

## Параметри:

* `regObj` - об'єкт [`RegExp`](../RegExp.md).
* `s` - рядок який буде співставлятися з шаблоном.

## Опис:

`exec()` - метод об'єкту [`RegExp`](../RegExp.md) який виконує пошук по шаблону регулярного виразу у рядку і повертає результат.

Повертає масив і обновляє властивості об'єкту [`RegExp`](../RegExp.md). Якщо співсталень по шаблону не знайдено то метод `exec()` повертає `null`.

Для отриманя усіх співставлень необхідно використовувати цикл з умовою доки `exec()` не верне `null`.

Якщо необхідно лише дізнатися чи є співпадання по шаблону використовуйте [`RegExp.test()`](../RegExp.test/RegExp.test.md).

## Приклад:

```javascript
var reg= /abc/i;
var mas=reg.exec('en: abcdef');

alert('reg.source: '+reg.source+' reg.multiline: '+reg.multiline+' reg.global: '+reg.global+' reg.ignoreCase:'+reg.ignoreCase+' reg.lastIndex : '+reg.lastIndex +' mas.index: '+mas.index+' mas.input '+mas.input+' масив:'+mas.toString()); 
```

## Результат:

* `mas[]` - результат співставлення.
* `mas.index` - індекс з якого починається співставлення, починається з `0`.
* `mas.input` - рядок який був переданий для пошуку шаблону.
* `reg.lastIndex` - індек з якого почитається наступне співставлення. Якщо відсутній прапорець `'g'` то доріанює `0`.
* `reg.ignoreCase` - чи використовується прапорець `i`. `true`|`false`.
* `reg.global` - чи використовується прапорець `g`. `true`|`false`.
* `reg.multiline` - чи використовується прапорець `m`. `true`|`false`
* `reg.source` - текст шаблону регулярного виразу.

## Приклад пошуку всіх слів які містять першу букву `a`:

```javascript
var reg = /a\w+\s/gi;
var s='RegExp Array Object apply arguments for JavaScript';
var mas;
while ((mas=reg.exec(s))!=null)
alert(mas);
```