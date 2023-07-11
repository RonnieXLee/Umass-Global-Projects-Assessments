### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
	- React is a JavaScript library for building user interfaces. It provides a way to efficiently render and update the UI components of a web application. React follows a component-based approach, where the UI is divided into reusable and independent components, making it easier to manage and maintain complex UI structures. React is a popular choice for web development due to its efficiency, reusability, and developer-friendly features. 
	- You would use React when:
		- Building Single-Page Applications (SPAs)
		- Creating Reusable UI Components
		- Collaborative Development 
		- Performance Optimization

- What is Babel?
	- Babel is a popular JavaScript compiler that allows developers to write modern JavaScript code and convert it into a backward-compatible version that can run in older browsers or environments that do not support the latest JavaScript features.

- What is JSX?
	- JSX (JavaScript XML) is an extension syntax for JavaScript that allows developers to write HTML-like code directly within JavaScript code. It is primarily associated with React, a popular JavaScript library for building user interfaces.

- How is a Component created in React?
	- In React, a component is created by defining a JavaScript function or class that returns JSX (JavaScript XML) code representing the structure and content of the component's rendered output. There are two common ways to create components in React: functional components and class components: Functional Components (using function syntax); Class Components (using class syntax).

- What are some difference between state and props?
	- State and props are both important concepts in React that deal with data and its management within components. Here are some differences between state and props:
		- Nature
			- State: State is a component's internal data that can be changed over time. It represents the mutable values specific to a component.
			- Props: Props (short for properties) are passed down to a component from its parent component. They are read-only and cannot be modified within the component receiving them.
		- Source of Data
			- State: State is defined and managed within a component. It is typically initialized in the constructor or by using the useState hook.
			- Props: Props are received from the parent component and are passed down to child components. They are set by the parent component and cannot be modified by the receiving component.
		- Mutability
			- State: State values can be updated and modified within the component using the setState function (in class components) or the state update function returned by the useState hook (in functional components).
			- Props: Props are read-only and should not be modified within the component receiving them. They are meant to be used as immutable data passed from the parent component.
		- Component Scope
			- State: State is local to the component in which it is defined. Each instance of a component has its own separate state.
			- Props: Props are passed from a parent component to child components, allowing data to flow down the component tree. Props are accessible within the receiving component and its child components.
		- Updates and Rerendering
			- State: When state is updated using setState or the state update function, React triggers a rerender of the component and its child components to reflect the updated state.
			- Props: Props changes in the parent component can trigger rerendering of the child components that receive those props. However, props themselves do not trigger rerenders within the receiving component.
		- Ownership
			- State: Each component manages its own state. State is owned and controlled by the component itself.
			- Props: Props are owned by the parent component and passed down to child components. Child components cannot directly modify the props they receive.

- What does "downward data flow" refer to in React?
	- "Downward data flow" refers to the unidirectional flow of data in React from parent components to child components. It is a guiding principle in React that encourages a clear and predictable data flow within the component hierarchy.
	- In a downward data flow architecture, data is passed from a parent component to its child components through props. Parent components are responsible for managing the state and passing it down to child components as props. Child components receive the data as props and use it to render their own UI or pass it further down to their own child components.

- What is a controlled component?
	- A controlled component is a React component that derives its state values from props and notifies changes to its parent component through callback functions. In other words, the parent component has full control over the state of the controlled component.

- What is an uncontrolled component?
	- An uncontrolled component is a React component that maintains its own internal state without relying on the parent component for controlling or manipulating its state. Unlike controlled components, uncontrolled components manage their state internally using references to DOM elements.

- What is the purpose of the `key` prop when rendering a list of components?
	- The key prop is used when rendering a list of components in React to give each component a unique identifier. It helps React efficiently update and reorder the components in the list by providing a way to differentiate between them.
	- The primary purpose of the key prop is to optimize the reconciliation process during updates. When React renders a list of components, it needs a way to determine which components have changed, been added, or been removed. The key prop serves as a hint for React to track the identity of each component.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
	- Using an array index as a key prop when rendering a list of components is generally considered a poor choice. While it may be tempting to use the array index as a quick solution, it can lead to several issues and unintended consequences. Here are some reasons why using an array index as a key prop is discouraged: Lack of Stability, Inefficient Reconciliation, Limited Reusability, Key Collision Potential.

- Describe useEffect.  What use cases is it used for in React components?
	- useEffect is a hook in React that allows you to perform side effects in functional components. It enables you to incorporate lifecycle behaviors into your components, such as fetching data, subscribing to events, or manipulating the DOM.
	- The useEffect hook takes two arguments: a function and an optional dependency array. The function provided to useEffect is the effect itself, which will be executed after the component has rendered. The effect function can perform asynchronous operations, update component state, interact with the DOM, or subscribe/unsubscribe to event listeners.
	- The dependency array is an optional second argument to useEffect. It specifies the values that the effect depends on. By default, if the dependency array is not provided, the effect will run after every render. If the dependency array is empty ([]), the effect will run only once after the initial render. If the dependency array contains specific values, the effect will run whenever any of those values change between renders.
	- Use cases for useEffect include: Fetching Data, Subscriptions and Event Listeners, Updating the DOM, Cleaning Up Effects, Optimizing Performance.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
	- useRef is a hook in React that returns a mutable ref object. The ref object can hold a value and persists across component renders without causing the component to re-render. It allows you to access and modify the DOM or other values that persist between renders without triggering a re-render.
	- Changes to a ref value do not cause a re-render of the component. Therefore, updating the current property of a useRef object or accessing the value of a ref does not trigger a re-render. It allows you to store mutable data or reference DOM elements without affecting the component's rendering behavior.

- When would you use a ref? When wouldn't you use one?
	- You would use a ref in React when you need to interact with the DOM directly or when you want to store mutable values that persist across component renders without triggering re-renders. Here are some scenarios where using a ref is appropriate: Accessing DOM elements, Managing focus or text selection, Integrating with third-party libraries, Caching values.
	- You would not use a ref in react when: Managing state, Passing data between parent and child components, Conditional rendering.
	
- What is a custom hook in React? When would you want to write one?
	- A custom hook in React is a JavaScript function that uses React's built-in hooks and provides a specific functionality or behavior that can be shared and reused across multiple components. It allows you to encapsulate reusable logic and stateful behavior in a concise and reusable way.
	- You would want to write a custom hook in the following situations: Reuse of logic, Abstraction of complex behavior, Organizing related functionality, Sharing code across projects.
