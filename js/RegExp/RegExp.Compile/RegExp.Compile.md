[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.compile()

`RegExp.compile()` - виконує компіляцію регулярного виразу для швидкого виконання.

## Синтаксис:

```javascript
regObj.compile(pattern, [flags])
```

## Параметри:

* `regObj` - об'єкт [`RegExp`](../RegExp.md).
* `pattern` - рядок з шаблоном регулярного виразу.
* `flags` - прапорці регулярного виразу.

## Опис:

`compile()` - **метод** об'єкту [`RegExp`](../RegExp.md) який виконує компіляцію регулярного виразу в внутрішній формат для більш швидкого виконання.

## Приклад:

```javascript
var reg = new RegExp('abc');
alert( reg.compile('(w+)','gi') ); // /(w+)/gi
```