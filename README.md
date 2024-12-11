# NVIRI Assignment Reference document

### 1. **Setup the Project Environment**

- **Frontend (React):**
    - Initialize a new React project using Create React App.
    - Install necessary packages like `react-router-dom` for navigation and `axios` for HTTP requests.
- **Backend (Node.js with Express):**
    - Set up a new Node.js project and install Express.
    - Install `sqlite3` for database management.
    - Initialize SQLite database and create tables for `technicians`, `users`, and `appliance_types`.

### 2. **Design Database Schema**

- **Technicians Table:** Fields like technician_id, name, photo, specialization, rating, and description.
- **Users Table:** Fields including user_id, email, and password.
- **Appliance Types Table:** Fields for appliance_id and type_name.

### 3. **Backend API Development**

- **Endpoints:**
    - GET `/locations` to fetch locations for the dropdown.
    - GET `/appliances` to provide search suggestions based on the user’s input.
    - GET `/featured-technicians` to retrieve details of featured technicians.
    - POST `/login` for user and technician login functionalities.
- **Database Interaction:**
    - Implement CRUD operations using SQLite.
    - Securely handle user inputs to prevent SQL injection.

### 4. **Frontend Development**

- **React Components:**
    - **LocationDropdown:** Fetches locations from the backend and displays them.
    - **SearchBar:** Dynamically fetches appliance types as the user types.
    - **TechnicianCarousel:** Displays featured technicians using a carousel component.
- **Login Pages:**
    - Create separate forms for users and technicians.
    - Implement client-side validation using regular expressions for email and password criteria.

### 5. **Integrate Frontend with Backend**

- Use `axios` for making API requests from the React application to the Node.js backend.
- Handle state management in class components using `this.setState` to manage API data.

### 6. **Testing and Validation**

- **Frontend:**
    - Test responsive design across different devices.
    - Validate form inputs before submitting to the backend.
- **Backend:**
    - Ensure all API routes handle errors gracefully and return appropriate error messages.

### 7. **Deployment**

- Deploy the backend and frontend on platforms like Heroku or Netlify.
- Test the deployed application to ensure all functionalities work as expected.

### 8. **Documentation**

- Document the API endpoints.
- Provide a README with setup instructions and a brief overview of the functionalities.
