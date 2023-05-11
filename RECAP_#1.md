Here's a recap guide on how we set up the React project, added routing, and implemented a Navbar that allows navigation between different pages:

Project Setup:

Created a new React project using the create-react-app command.
Installed the required dependencies such as react-router-dom for routing.
Folder Structure:

Created a pages folder to store individual page components (Home.js, About.js, Contact.js).
Created a components/navbar folder to store the Navbar component (Navbar.js).
Created a components/navbar/Navbar.css file to style the Navbar component.
Navbar Component (Navbar.js):

Imported necessary dependencies: React, useState, and useNavigate from react-router-dom.
Defined the Navbar functional component and initialized the activeButton state using the useState hook.
Implemented the handleButtonClick function to update the active button and navigate to the respective path using the useNavigate hook.
Rendered the Navbar UI with buttons for Home, About, and Contact, applying the active class based on the activeButton state.
Navbar Styles (Navbar.css):

Defined CSS styles for the Navbar component, including positioning, width, background color, padding, and button styles.
Page Components (Home.js, About.js, Contact.js):

Created individual page components using functional components, returning JSX with the respective page content wrapped in a div element.
Routing and Navigation (index.js):

Imported dependencies: createRoot from react-dom/client, BrowserRouter, Route, and Routes from react-router-dom.
Rendered the app using createRoot instead of ReactDOM.render (as recommended in React 18) to wrap the app with the new root API.
Wrapped the entire app in Router from react-router-dom.
Added the Navbar component above the Routes component to display the navbar on every page.
Defined routes using the Route component with the corresponding paths and elements (e.g., <Route path="/" element={<Home />} />).
Content Styles (Navbar.css):

Added the .content class with styles to create spacing between the content and the navbar.