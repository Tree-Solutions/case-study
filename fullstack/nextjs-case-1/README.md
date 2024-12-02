# Case Study: Simple Post Submission Form

## Objective
Create a minimal Next.js application using the App Router to demonstrate your skills with:
- **Shadcn UI**
- **TanStack React Query**
- **Tailwind CSS**
- **Next.js App Router**

The app will feature a simple form to submit posts, fetch existing posts, and display them.

---

## Requirements

### 1. Frontend Implementation
- Create a page with the following components:
  - A **textarea** for entering post content, styled with Shadcn UI.
  - A **button** to submit the post, styled with Shadcn UI.
  - A list displaying fetched posts below the form.
- Use **React Query** to:
  - Fetch posts from the server.
  - Submit (mutate) new posts to the server.

### 2. Backend Implementation
- Implement a simple API route in Next.js:
  - Maintain a mutable array of posts during runtime.
  - Allow fetching all posts (`GET`).
  - Allow adding a new post (`POST`).
- No database is required—data is stored in memory for the session.

### 3. Styling
- Use **Tailwind CSS** to create a clean, responsive UI.

---

## Expected Functionality
1. When the page loads:
   - Posts are fetched from the backend and displayed in a list.
2. When a user submits the form:
   - The new post is sent to the backend using a `POST` request.
   - The post list is automatically updated to include the new post.

---

## Example API

### `/api/posts`

#### **GET**: Fetch all posts
- Response:
```json
[
  { "id": 1, "content": "This is the first post." },
  { "id": 2, "content": "Hello, world!" }
]
```

#### **POST**: Add a new post
- Request Body:
```json
{ "content": "This is a new post." }
```
- Response:
```json
{ "id": 3, "content": "This is a new post." }
```

---

## Notes
- **Skills Assessed**:
  - Setting up and using Next.js **App Router**.
  - Proper configuration and use of **React Query** for fetching and mutating data.
  - Styling with **Tailwind CSS** and Shadcn components.
- **Time-Friendly**:
  - This is a lightweight implementation focused on fundamental skills rather than complexity.

---

## Deliverables
- A simple Next.js project that meets the requirements.
- Demonstration of a functional form with posts displayed and updated dynamically.

Good luck!
