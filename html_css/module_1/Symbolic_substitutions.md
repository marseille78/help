[Home](../../README.md) / [React JS](../README_HTML_CSS.md)

# Символьні підстановки

Не всі символи можна набрати на клавіатурі. Наприклад, символ зареєстрованого торгового знака & reg;, торгової марки & trade;, авторського права & copy;. для введення подібних знаків використовують символьні підстановки.

> :information_source: **ЦІКАВО**\
У стандарті кодування `Unicode` зберігаються знаки майже всіх мов світу, а також спеціальні та службові символи. Символьні підстановки - це `посилання-мнемоніки`, на підставі яких браузер знає, який Unicode-символ потрібно відобразити.

Символьні підстановки - це спеціальні рядки, що перетворюються браузерами в символи. Підстановку можна здійснити декількома способами.

* `&мнемокод;` - вставлення символу за його «мнемокодом», тобто іменем
* `&#КОД10;` - вставлення символу за його десятковим кодом
* `&#xКОД16;` - вставлення символу за його шістнадцятковим кодом

Наприклад, символ авторського права © можна додати наступним чином.

```html
<p>Всі права захищені &copy; Lex, 2020</p>
<p>Всі права захищені &#169; Lex, 2020</p>
<p>Всі права захищені &#xa9; Lex, 2020</p>
```

Символьні підстановки застосовуються не тільки для вставлення символів, яких немає на клавіатурі, але так само для символів, що мають спеціальне призначення в HTML. Наприклад, якщо потрібно вивести на сторінку текст, що містить теги як текст.

```html
<p>Для напівжирного тексту, виділіть його тегами <strong> і </strong>.</p>
```

Символи `<` і `>` - це частина синтаксису HTML, відкривають і закривають теги. Тому безпосереднє вставлення їх у код сторінки призведе до інтерпретації `<strong>` і `</strong>` як тегів. У такому разі, замість символів < і >, необхідно використовувати символьні підстановки `&lt;` і `&gt;`.

```html
<p>
  Для напівжирного тексту, виділіть його тегами &lt;strong&gt; і &lt;/strong&gt;.
</p>
```

Є [офіційна сторінка W3C](https://dev.w3.org/html5/html-author/charref) і [сервіс від Toptal](https://www.toptal.com/designers/htmlarrows/symbols/), де можна знайти мнемоніку для будь-якого символу.

> :information_source: **ЦІКАВО**\
Спецсимволи, що не мають мнемоніки, можуть зовсім не відображатися або ж відображатися некоректно в певних браузерах. У такому разі, їх замінюють на іконки (зображення).