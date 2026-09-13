# DevStack

A Simple Technology Stack Management Website

DevStack is a simple and responsive web application where users can explore different technologies and build their own technology stack. Users can add their favorite technologies to their stack and manage them easily.

## 🌟Features

- Explore Technologies — Browse different technologies with their category, rating, difficulty, and description.
- Build Your Stack — Add your favorite technologies to your personal stack.
- Toast Notifications — Get instant notifications when a technology is added or when you try to add the same technology again.
- Responsive Design — The website works smoothly on both mobile and desktop devices.

## 💢Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite

## React Questions & Answers

#### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React UI code easier to write and understand.

#### 2. What is the difference between props and state?

Props are used to pass data fro ent to a child component.
State is data managed inside a component that can change over time.

#### 3. What does the useState hook do, and where did you use it in this project?

useState is a React Hook used to store and update data in a component. In this project, I used it to manage the technology list and the user's technology stack.

#### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to run side effects in a React component. I used it to fetch the technology data from the JSON file when the component loads.

#### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list. It allows React to efficiently update the correct item when the list changes.

#### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

In this project, I used it to show an empty stack message when there are no technologies in the user's stack.

```
{stack.length === 0 && (
  <p>Your stack is empty</p>
)}
```

#### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props.

To send something back, the parent can pass a function as a prop, and the child can call that function.

👨‍💻 Project

DevStack — Technology Stack Management Website

Built with ❤️ using React, TypeScript and Tailwind CSS.
