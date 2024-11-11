# Country Viewer

This project combines **NestJS** for the backend API and **Next.js** for the frontend interface, offering a full-stack solution with server-side rendering and API capabilities.

## Prerequisites

- **Node.js** (v18.x.x or later recommended)
- **npm** (comes with Node.js) or **yarn** (optional)

## Project Structure

```plaintext
.
├── backend/             # NestJS project directory
│   ├── package.json
│   └── ...
├── frontend/            # Next.js project directory
│   ├── package.json
│   └── ...
└── README.md
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/BrunoHenrique00/develops-today-test.git
cd develops-today-test
```

### 2. Install Dependencies

Navigate to each directory and install the dependencies:

#### Backend (NestJS)

```bash
cd backend
npm install
```

#### Frontend (Next.js)

```bash
cd ../frontend
npm install
```

Note: if you have trouble when installing the frontend, the chart library may be the issue.

Just run:
```bash
npm install react-charts@beta --legacy-peer-deps
```

### 3. Set Up Environment Variables

Create `.env` files in the `frontend` if needed.


#### Frontend (`frontend/.env`)

```env
# Sample frontend environment variables
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 4. Running the Applications

#### Backend (NestJS)

Navigate to the backend directory and start the NestJS server:

```bash
cd backend
npm run start:dev
```

The NestJS server should start on `http://localhost:3000` by default.

#### Frontend (Next.js)

Navigate to the frontend directory and start the Next.js server:

```bash
cd ../frontend
npm run dev
```

The Next.js server should start on `http://localhost:3001` as Nest js is using 3000.

### 5. Accessing the Application

- **Frontend**: [http://localhost:3000](http://localhost:3001)
- **Backend API**: [http://localhost:5000/api](http://localhost:3000)