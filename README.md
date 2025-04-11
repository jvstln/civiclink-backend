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

### Coding Style (Brief Guide)

- Prefer named exports to default exports
- Prefer functions over classes in controllers and services
- Do not use try..catch in controllers and routes. Instead throw `ResponseError` (which can be found in `/src/utils/error.ts`), Errors will be caught by express error middleware (a new feature in express v5)

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
  }
}
```

---

### Officials API

#### Get All Government Officials

Retrieves a list of all government officials with their details.

**Endpoint:** `GET /officials`

**Description:**
This endpoint returns a list of all government officials, including their personal information, positions, and jurisdictions. The data includes officials at various levels of government (federal, state, local).

**Response Body:**

```json
{
  "success": true,
  "messages": "officials retrieved successfully",
  "data": [
    {
      "name": "string",
      "position": "string",
      "jurisdiction": "string",
      "level": "string",
      "state": "string",
      "description": "string",
      "email": "string",
      "phone": "string",
      "categories": ["string"],
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

**Response Fields:**

- `name`: Full name of the official
- `position`: Current position/role
- `jurisdiction`: Area of responsibility
- `level`: Government level (federal/state/local)
- `state`: State of jurisdiction
- `description`: Additional information about the official
- `email`: Contact email address
- `phone`: Contact phone number
- `categories`: Array of categories the official belongs to
- `createdAt`: Timestamp of when the record was created
- `updatedAt`: Timestamp of when the record was last updated

---

## 👥 Authors

- Group 3 Backend Devs (Learnable)
