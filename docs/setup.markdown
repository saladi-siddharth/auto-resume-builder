# Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/saladi-siddharth/auto-resume-builder.git
   ```
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
4. Set up `.env` in `backend/`:
   ```
   MONGO_URI=mongodb://localhost:27017/resume-builder
   JWT_SECRET=your-secret-key
   PORT=5000
   AI_API_KEY=your-ai-api-key
   ```
5. Run MongoDB locally or use a cloud instance.
6. Start backend: `npm run dev` (in `backend/`).
7. Start frontend: `npm run dev` (in `frontend/`).
8. Open `http://localhost:5173/editor`.