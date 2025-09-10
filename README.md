# Linkodkod

A Express JS + React(running on Vite) full stack project with Posts and users simulating Linkedin.

## Quick Start

1. **Clone and install:**

   ```bash
   git clone <repository-url>
   cd server
   npm install
   cd ..
   cd client
   npm install
   ```

2. **Environment Setup**
   Create a `.env` file in the project root:

    ```env
    # JWT secret key
    SECRET=YOUR_JWT_SECRET

    ```

3. **Start the server:**

   ```bash
   cd server
   npm run start
   ```

4. **Start the game (in new terminal):**
   ```bash
   cd client
   npm run dev
   ```

## Tech Stack

- **Backend:** Node.js, Express.js, JavaScript (ES Modules)
- **Databases:**
  - local Json files.
- **Frontend:** Type script with React.

---

## Project Overview

This project demonstrates a full-stack JavaScript/Typescript application:

- **Server** (`/server`): REST API handling data persistence and business logic
- **Client** (`/client`): react app using the api in the backendv

---

## Folder Structure

```

C:\JSProjects\Linkodkod\
├───client
│   ├───public
│   └───src
│       ├───application-layout #layout components
│       ├───assets #Images used in code.
│       ├───components #All components used in pages
│       ├───contexts #useContexts created for the project
│       ├───interfaces #Data types needed for type validation
│       ├───pages #Page for the web app.
│       └───styles #CSS files for app design.
└───server
    ├───controllers #express server controllers for endpoints
    ├───DAL #Data layor with Json files.
    ├───middleware
    ├───public #folder where images are stored for static to access.
    ├───routers #endpoint routers
    └───services #server services for access to DAL layor

```

### Post Management

| Method   | Endpoint                   | Description          |
| -------- | -------------------------- | -------------------- |
| `POST`   | `/api/posts/create_riddle` | Create a new post    |
| `GET`    | `/api/posts`               | Get all posts        |
| `GET`    | `/api/posts/:id`           | read post by id      |
| `PUT`    | `/api/posts/update/:id`    | Update existing post |
| `DELETE` | `/api/posts/delete/:id`  | Delete post          |

### User Management

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| `POST` | `/api/auth/signup` | Register a user     |
| `PUT`  | `/api/auth/login`  | existing user login |
| `GET`  | `/api/auth/logout` | user logout         |

```

```
