# 🚀 DevStack

DevStack is a modern web application where users can explore different programming technologies, view their details, and build their own personalized tech stack.

## ✨ Features

- 🔍 **Explore Technologies** — Browse different programming languages and technologies with their logos, ratings, descriptions, and other information.
- ⭐ **Build Your Own Stack** — Add your favorite technologies to your personal stack and manage them easily.
- 📱 **Responsive Design** — The website is fully responsive and works smoothly on mobile, tablet, and desktop devices.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite

## 📂 Project Data

The technology information is stored in a JSON file and loaded into the React application using `fetch()`.

---

# ❓ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript.

It makes React components easier to write and understand because we can create the UI structure directly inside JavaScript.

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store and manage data inside a component that can change over time.

In short:

- Props → Data comes from the parent.
- State → Data is managed inside the component.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage changing data in a React component.

In this project, I used `useState` to manage the selected technologies in the user's personal stack.

For example, when a user adds or removes a technology, the state is updated.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.

I used `useEffect` to fetch the technology data from the JSON file when the component loads.

This allows the application to get the data and then display it on the page.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which item has changed, been added, or removed.

For example:

```jsx
{
  technologies.map((technology) => (
    <TechnologyCard key={technology.id} technology={technology} />
  ));
}
```

Here, `technology.id` is used as the unique key.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI based on a condition.

For example, when the user's stack is empty, I show an empty-stack message:

```jsx
{
  myStack.length === 0 ? (
    <p>Your stack is empty.</p>
  ) : (
    myStack.map((item) => <StackCard key={item.id} item={item} />)
  );
}
```

If there are no technologies in the stack, the empty message is displayed.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component sends data to a child component using **props**.

For example:

```jsx
<TechnologyCard technology={technology} />
```

The child receives the data through props.

A child can communicate back to the parent by calling a function that the parent passes as a prop.

For example:

```jsx
<TechnologyCard technology={technology} onAdd={handleAdd} />
```

The child can then call `onAdd()` when the user clicks a button.

So:

**Parent → Child:** Props

**Child → Parent:** Callback function through props
