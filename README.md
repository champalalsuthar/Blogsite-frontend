# Blogsite – Public Website Frontend

Welcome to the frontend of the Blog Post Management System. This site is designed for readers and visitors to browse, filter, and read blog posts.

## 🚀 Features

- **Home Page:** Introductory content or featured highlights
- **Contact Page:** Static contact info display
- **About Us Page:** Information about the website
- **Blogs Page:** 
    - Displays all active blog posts
    - Pagination support
    - Category filtering
    - Sorting by date/time
- **Blog Detail Page:** Full details of a single blog post

## 🔌 Integrated APIs (from Backend)

1. **Fetch All Active Blog Posts**
     - **Endpoint:** `GET /api/blogpost/getAllBlogPosts`
     - **Example Request:**
         ```
         GET /api/blogpost/getAllBlogPosts
         ```

2. **Get Blog Post by ID**
     - **Endpoint:** `POST /api/blogpost/getBlogPostById`
     - **Payload:**
         ```json
         {
             "id": "blog_post_id_here"
         }
         ```

## 🧱 Tech Stack

| Technology    | Usage               |
|---------------|---------------------|
| React.js      | UI development      |
| Axios         | API calls           |
| React Router  | Routing between pages|
| Tailwind / CSS| Styling             |

## 🏁 Getting Started

1. **Clone the Repository**
     ```bash
     git clone https://github.com/champalalsuthar/Blogsite-frontend
     cd Blogsite-frontend
     ```

2. **Install Dependencies**
     ```bash
     npm install
     ```

3. **Start the Development Server**
     ```bash
     npm run dev
     ```

The app runs at: [http://localhost:5173](http://localhost:5173)

## 🔗 Backend API Reference

This frontend connects with the following backend repository:  
👉 [Blogsite Backend](https://github.com/champalalsuthar/Blogsite-backend)

