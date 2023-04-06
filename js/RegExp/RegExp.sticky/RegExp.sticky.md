[Home](../../../README.md) / [JavaScript](../../README_JS.md) / [RegExp](../RegExp.md)

# RegExp.sticky

`RegExp.sticky` - чи вказано прапорець `y`.

## Синтаксис:

```javascript
regObj.sticky
```

## Параметри:

`regObj` - об'єкт [`RegExp`](../RegExp.md).

## Опис:

`sticky` - властивість об'єкту [`RegExp`](../RegExp.md) яка має тип `Boolean` і дорівнює `true` якщо вказано прапорець y або `false` якщо не вказано.

> :information_source: **Не підтримують усі браузери.**

## Приклад:

```javascript
var reg=new RegExp('a*','y');alert(reg.sticky);
```

Функція яка перевіряє чи підтримує браузер прапорец `y`:

```javascript
function isRegExpSticky(){
try{
new RegExp('','y');
return true;}
catch(e){
  return false;
}}

alert(isRegExpSticky());
```