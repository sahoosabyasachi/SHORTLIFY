# Shortlify

A modern and secure URL shortening service that transforms long URLs into short, shareable links. Built with React, Node.js, Express, MongoDB, and JWT authentication.

---

## 🚀 Features

- User Registration & Login
- JWT Authentication with Cookies
- Secure Password Hashing using bcrypt
- Create Short URLs
- Redirect to Original URLs
- View User-Specific URLs
- Responsive UI with Tailwind CSS
- Protected Backend Routes

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- cookie-parser
- cors

---


## 🔐 Authentication

Shortlify uses JWT-based authentication.

1. Users register or log in.
2. The server creates a JWT token.
3. The token is stored in a cookie.
4. Protected routes verify the token before granting access.

---

## 📡 API Routes

### Authentication

#### Register

```http
POST /register
```

#### Login

```http
POST /login
```

#### Logout

```http
POST /logout
```

#### Get Current User

```http
GET /user
```

### URL Management

#### Create Short URL

```http
POST /shorten
```

#### Get User URLs

```http
GET /urls
```

#### Redirect to Original URL

```http
GET /:shortId
```

---

## 🌟 Future Improvements

- Custom Short URLs
- Click Analytics
- QR Code Generation
- User Dashboard
- URL Expiration
- Rate Limiting
- Dark Mode

---
