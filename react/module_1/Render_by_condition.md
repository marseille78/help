[Home](../../README.md) / [React JS](../README_REACT.md)

# Рендер за умовою

Для рендеру розмітки за умовою використовуються оператори розгалужень та умов. Умови можна перевіряти перед поверненням розмітки або прямо в JSX.

> :information_source: **ІНФОРМАЦІЯ**\
Якщо за умовою нічого не повинно бути відрендерено, можна повернути null, undefined або false, вони не рендеряться.

## `if` за допомогою логічного оператора `&&`

Читається як: якщо умова приводиться до `true`, то рендерим розмітку.

```JavaScript
const Mailbox = ({ unreadMessages }) => {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <p>You have {unreadMessages.length} unread messages.</p>
      )}
    </div>
  );
};
```

## `if...else` за допомогою тернарного оператора

Читається як: якщо умова приводиться до `true`, рендерим розмітку після `?`, інакше – рендерим розмітку після `:`.

```JavaScript
const Mailbox = ({ username, unreadMessages }) => {
  return (
    <div>
      <h1>Hello {username}</h1>
      {unreadMessages.length > 0 ? (
        <p>You have {unreadMessages.length} unread messages.</p>
      ) : (
        <p>No unread messages.</p>
      )}
    </div>
  );
};
```

Останній приклад можна записати по-іншому, результат буде однаковий.

```JavaScript
const Mailbox = ({ name, unreadMessages }) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>
        {unreadMessages.length > 0
          ? `You have ${unreadMessages.length} unread messages.`
          : "No unread messages."}
      </p>
    </div>
  );
};
```

Нехай у компоненті продукту ще є його доступна кількість.

```JavaScript
const Product = ({ imgUrl, name, price, quantity }) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <h1>Quantity: {quantity < 20 ? "Few left" : "In stock"}</h1>
    <button type="button">Add to cart</button>
  </div>
);
```

## Додаткові матеріали

* [Умовний рендеринг](https://reactjs.org/docs/conditional-rendering.html)
* [All the Conditional Renderings in React](https://www.robinwieruch.de/conditional-rendering-react/)