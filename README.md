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

OfficialSchema looks like this

```json
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
```

#### Get All Government Officials

Retrieves a list of all government officials with their details.

**Endpoint:** `GET /officials`

**Description:**
This endpoint returns a list of all government officials, including their personal information, positions, and jurisdictions. The data includes officials at various levels of government (federal, state, local).

**Query Parameters:**

- `category` (optional): Filter officials by category name
- `level` (optional): Filter officials by government level (federal/state/local)
- `state` (optional): Filter officials by state
- `position` (optional): Filter officials by position
- `jurisdiction` (optional): Filter officials by jurisdiction
- `name` (optional): Filter officials by name
- `search` (optional): Search officials across multiple fields (name, position, jurisdiction, state, description, category name, category description)

**Response Body:**

```json
{
  "success": true,
  "messages": "officials retrieved successfully",
  "data": [
    ...<OfficialSchema>(s)
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
- `category`: Category the official belongs to
- `createdAt`: Timestamp of when the record was created
- `updatedAt`: Timestamp of when the record was last updated

**Example Usage:**

```
GET /officials?level=federal&state=lagos
GET /officials?category=governance-and-representation
GET /officials?search=minister
```

#### Get Official by ID

Retrieves detailed information about a specific government official.

**Endpoint:** `GET /officials/:officialId`

**Description:**
This endpoint returns detailed information about a specific government official identified by their unique ID. The ID must be a valid MongoDB ObjectId.

**URL Parameters:**

- `officialId`: The unique identifier of the official (MongoDB ObjectId or \_id)

**Response Body:**

```json
{
  "success": true,
  "messages": "official retrieved successfully",
  "data": <OfficialSchema>
}
```

**Error Responses:**

- **404 Not Found**
  ```json
  {
    "success": false,
    "message": "Official not found"
  }
  ```
- **400 Bad Request**
  ```json
  {
    "success": false,
    "message": "Invalid officialId format"
  }
  ```

---

### Official Fields API

This API provides endpoints to retrieve distinct values for various fields used in the officials data.

#### Get Available Levels

Retrieves a list of all distinct government levels.

**Endpoint:** `GET /official-fields/levels`

**Response Body:**

```json
{
  "success": true,
  "message": "Levels fetched successfully",
  "data": ["federal", "state", ...]
}
```

#### Get Available States

Retrieves a list of all distinct states.

**Endpoint:** `GET /official-fields/states`

**Response Body:**

```json
{
  "success": true,
  "message": "States fetched successfully",
  "data": ["lagos", "abuja", "rivers", ...]
}
```

#### Get Available Positions

Retrieves a list of all distinct government positions.

**Endpoint:** `GET /official-fields/positions`

**Response Body:**

```json
{
  "success": true,
  "message": "Positions fetched successfully",
  "data": ["governor", "senator", "minister", ...]
}
```

#### Get Available Jurisdictions

Retrieves a list of all distinct jurisdictions.

**Endpoint:** `GET /official-fields/jurisdictions`

**Response Body:**

```json
{
  "success": true,
  "message": "Jurisdictions fetched successfully",
  "data": ["lagos state", "federal ministry of health", ...]
}
```

---

### Categories API

#### Get All Categories

Retrieves a list of all available categories.

**Endpoint:** `GET /categories`

**Query Parameters:**

- `name` (optional): Filter categories by name

**Response Body:**

```json
{
  "status": "success",
  "message": "Categories fetched successfully",
  "data": [
    {
      "_id": "string",
      "name": "string",
      "description": "string"
    }
  ]
}
```

#### Get Category by ID

Retrieves detailed information about a specific category.

**Endpoint:** `GET /categories/:categoryId`

**URL Parameters:**

- `categoryId`: The unique identifier of the category (MongoDB ObjectId)

**Response Body:**

```json
{
  "status": "success",
  "message": "Category fetched successfully",
  "data": {
    "_id": "string",
    "name": "string",
    "description": "string"
  }
}
```

**Error Responses:**

- **404 Not Found**
  ```json
  {
    "status": "error",
    "message": "Category not found"
  }
  ```
- **400 Bad Request**
  ```json
  {
    "status": "error",
    "message": "Invalid categoryId format"
  }
  ```

#### Get Category by Name

Retrieves a category by its name.

**Endpoint:** `GET /categories?name=<nameOfCategory>`

**URL Query Parameters:**

- `name`: The name of the category

**Response Body:**

```json
{
  "status": "success",
  "message": "Category fetched successfully",
  "data": {
    "_id": "string",
    "name": "string",
    "description": "string"
  }
}
```

**Available Categories:**

- governance-and-representation
- taxes-and-levies
- health-services
- markets-and-small-business
- public-safety-and-security
- social-services
- electricity-and-power
- water-and-sanitation
- jobs-and-youth-empowerment
- housing-and-urban-planning
- roads-and-infrastructure
- education

---

## 👥 Authors

- Group 3 Backend Devs (Learnable)
