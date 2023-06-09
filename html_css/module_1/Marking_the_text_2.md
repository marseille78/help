[Home](../../README.md) / [React JS](../README_HTML_CSS.md)

# Розмітка тексту

## Тег `<dl>`

[Тег `<dl>` (description list)](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element) - це контейнер для списку пар термінів та їх описів, тобто словник. Для розмітки термінів існує тег `<dt>`, а для описів - `<dd>`. Використовується для розмітки списку визначень, наприклад для створення глосарію, телефонного довідника тощо.

https://codepen.io/goit-academy/pen/mdEbJNK

## Тег `<span>`

Універсальний контейнер для дрібного текстового контенту, наприклад окремих слів, частин слів або цілих фраз всередині текстового масиву. Аналогічно тегу `<div>`, не має жодного семантичного значення і використовується для додаткової стилізації.

```html
<p>
  Тег <span class="accent">span</span> - це універсальний контейнер для дрібного
  текстового контенту.
</p>
```

> :information_source: **ЦІКАВО**\
Спану с атрибутом `class="accent"` за допомогою CSS можна буде додати стилі, наприклад інший колір тексту, його розмір тощо.

## Тег `<pre>`

За замовчуванням браузер ігнорує перенесення рядків і більше одного пробілу підряд. Цей тег дозволяє додати переформатований текст з примусовими перенесеннями рядків. Наприклад, розмітка тексту пісні або вірша.

https://codepen.io/goit-academy/pen/vYKBNLr

## Теги `<sup>` і `<sub>`

Призначені для відображення символів у верхньому (`<sup>`, скорочено від superscript) і нижньому (`<sub>`, скорочено від subscript) індексі. Наприклад, для розмітки нескладних математичних або хімічних формул.

https://codepen.io/goit-academy/pen/WNxeQxe

## Тег `<time>`

Дату і час можна написати просто текстом, але краще використовувати спеціальний тег `<time>`. Дата для людини - це текст всередині тегу, а для машини - значення атрибута `datetime` у форматі [ISO 8601](https://uk.wikipedia.org/wiki/ISO_8601).

```html
<p>Останні новини на <time datetime="2019-12-14">14 грудня 2019 року</time>.</p>

<p>
  Засідання відбулося об <time datetime="2018-07-14T11:30">11:30 ранку</time>.
</p>
```

Браузер відобразить тільки текст всередині тегу. Людина побачить зрозумілий текст, а асистивна технологія прочитає атрибут `datetime` і отримає точне значення у потрібному форматі.

## Тег `<address>`

Призначений для зберігання контактної інформації про автора статті, блоку інформації або веб-сторінки загалом. Контактна інформація може бути в будь-який відповідній формі, наприклад, фізична адреса, адреса електронної пошти, посилання на сайт, номер телефону, тег соцмережі.

```html
<address>
  м. Київ, <br />
  Бульвар Лесі Українки, б. 26, <br />
  4й поверх офіс 427
</address>

<address>
  <a href="mailto:mango@mail.pig">mango@mail.pig</a>
  <a href="tel:+1112223344">(111) 222-33-44</a>
</address>
```

Зверніть увагу на тег `<br>`, він використовується для розмітки масиву тексту з примусовими перенесеннями рядків для візуального форматування. Наприклад, розмітка одного рядка адреси на декілька рядків.

> :fire: **УВАГА**\
Тег `<br/>` (скорочено від line break) не використовується для того, щоб примусово додати розриви рядка між тегами або розбити масив тексту на абзаци.

## Теги `<strong>` і `<b>`

Використовуються для виділення важливого слова або цілої фрази всередині тексту. Візуально обидва теги роблять текст жирним, і на перший погляд різниці між ними немає, але це не так.

Тег `<strong>` семантично підкреслює текст як важливий і вказує, що це важливе слово або фраза. Наприклад, виділити попередження або будь-яку частину тексту, на яку користувач повинен насамперед звернути увагу.

```html
<p>
  <strong>Увага!</strong> Завершується термін підписки.
  <strong>Обліковий запис буде призупинений.</strong> Будь-ласка, продовжіть
  підписку або зв'яжіться зі службою підтримки.
</p>
```

Тег `<b>` (скорочено від **bold**) робить текст тільки візуально жирним, привертаючи увагу, але не надаючи особливої важливості.

> :information_source: **ЦІКАВО**\
Для асистивних технологій, наприклад скрінрідера, текст обгорнутий в `<strong>` має особливу важливість і буде додатково виділений інтонацією.

## Теги `<em>` і `<i>`

Використовуються для акцентування уваги на частини тексту. Візуально обидва теги роблять текст курсивним, і на перший погляд різниці між ними немає, але це не так.

Тег `<em>` (скорочено від emphasis) семантично виділяє текст, на який зроблений особливий акцент, що змінює зміст фрази. Наприклад, можна виділити сарказм.

```html
<p>Я <em>в повному захваті</em>, коли затримують зарплату!</p>
```

Тег `<i>` (скорочено від **italic**) робить текст тільки візуально курсивним, привертаючи увагу, але не надаючи особливої важливості. Наприклад, виділити терміни в реченні.

> :information_source: **ЦІКАВО**\
Для асистивних технологій, наприклад скрінрідера, текст обгорнутий в `<em>` має особливий акцент і буде додатково виділений інтонацією.