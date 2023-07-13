### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
	- The purpose of React Router is to enable routing functionality in React applications. It provides a way to handle navigation and rendering of different components based on the URL in a declarative manner. React Router allows you to create a single-page application with multiple "pages" or views without requiring a full page refresh.

- What is a single page application?
	- A single-page application (SPA) is a web application or website that functions as a single, cohesive page without the need for page reloads or full page refreshes. In an SPA, the initial HTML, CSS, and JavaScript resources are loaded once, and subsequent interactions or changes are handled dynamically within the same page. 

- What are some differences between client side and server side routing?
	- Here are some key differences between client-side routing and server-side routing:
	- Client-Side Routing:
		- Routing is handled by the client-side JavaScript framework or library.
		- Navigation and rendering of different views/pages occur on the client-side without full page reloads.
		- The initial HTML, CSS, and JavaScript are loaded once, and subsequent route changes only update the necessary components or content.
		- URLs are typically managed using the browser's History API to provide bookmarkable and shareable links.
		- SPA (Single-Page Application) architectures commonly use client-side routing.
	- Server-Side Routing:
		- Routing is handled by the server.
		- Navigation triggers a request to the server, which responds with a new HTML page.
		- Full page reloads occur with each route change, resulting in a complete re-rendering of the page.
		- URLs correspond to specific server-side routes and resources.
		- Traditional multi-page applications often use server-side routing.

- What are two ways of handling redirects with React Router? When would you use each?
	- Two ways of handling redirects with React Router are:
		- Using the <Redirect> component: This approach is suitable for defining static redirects within the route configuration. It is used when you want to redirect the user immediately without any additional logic or user interaction.
		- Programmatically using useNavigate or history: This approach allows you to perform redirects programmatically based on certain conditions or user interactions. It provides flexibility in determining when and where to redirect the user during runtime.
	- The choice between these approaches depends on whether you need a static redirect defined in the route configuration or if you require dynamic redirect logic based on runtime conditions or user interactions.

- What are two different ways to handle page-not-found user experiences using React Router?
	- Two different ways to handle page-not-found user experiences using React Router are:
		- Define a <Route> component with a path="*" to handle unmatched routes and render a custom "404 Not Found" component or redirect the user to an error page.
		- Define a custom 404 component and place it outside the <Switch> component in your route configuration to be rendered when no other routes match the URL. 

- How do you grab URL parameters from within a component using React Router?
	- You can grab URL parameters from within a component using React Router by using the useParams() hook provided by React Router.
	
- What is context in React? When would you use it?
	- Context in React is a feature that allows you to share data across the component tree without passing props manually at every level. It provides a way to manage global state or share common data and functions between components.
	- You would use context when you have data or functionality that needs to be accessible by multiple components in your application, such as user authentication, theme settings, or language preference.

- Describe some differences between class-based components and function
  components in React.
	- Class-based components vs function components:
		- Syntax: Class-based components use the `class` keyword, function components are regular functions.
		- State Management: Class-based components have built-in state management, function components can use hooks.
		- Lifecycle Methods: Class-based components have lifecycle methods, function components use the `useEffect` hook.
		- Code Organization: Class-based components require more boilerplate, function components are simpler.
		- Performance: Function components are generally more performant.
		- React Hooks: Class-based components do not support React Hooks.

- What are some of the problems that hooks were designed to solve?
	- Hooks in React were designed to solve problems such as complex component logic, code reuse and organization, separation of concerns, performance optimization, and reducing the learning curve associated with class-based components.