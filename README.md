# CivicLink Backend

A backend application that bridges the gap between Nigerian government structure and its citizens. This project aims to demystify the Nigerian government structure and make it more accessible to the general public.

## 🚀 Features

- RESTful API architecture
- MVC (Model-View-Controller) design pattern
- TypeScript for type safety and better development experience
- MongoDB integration for data persistence
- Express.js for robust routing and middleware support

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **Environment Management:** dotenv
- **Data and Schema Validation:** Joi

## 📁 Project Structure

The project follows the MVC architecture pattern with the following structure:

```
src/
├── controllers/    # Request handlers and business logic
├── models/         # Database models and schemas
├── routes/         # API route definitions
├── services/       # Business logic and data processing
├── middlewares/    # Custom middleware functions
├── utils/          # Utility functions and helpers
└── app.ts          # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jvstln/civiclink-backend.git
cd civiclink-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file from `.env.example` (and configure/populate it with your own values):

```bash
cp .env.example .env
```

### Development

To run the application in development mode:

```bash
npm run dev
```

### Production Build

To build and run the application in production mode:

```bash
npm run build
npm start
```

## 📝 API Documentation

---

### States API

#### Get All States and Their Local Government Areas

Retrieves a list of all Nigerian states along with their respective Local Government Areas (LGAs).

**Endpoint:** `GET /states`

**Description:**
This endpoint returns a comprehensive list of all states in Nigeria and their corresponding Local Government Areas. The data is structured as an object where each state is a key, and its value is an array of LGAs.

**Response Body:**

```json
{
  "success": true,
  "message": "States and sub regions retrieved successfully",
  "data": {
    "StateName": [
      "LGA1",
      "LGA2",
      "LGA3"
      // ... more LGAs
    ]
    // ... more states
  }
}
```

---

## 👥 Authors

- Group 3 Backend Dev (Learnable)
