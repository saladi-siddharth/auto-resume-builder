# Auto Resume Builder
A modern resume builder with real-time preview, AI-powered content generation, and PDF download. Built with React, Node.js, Express, MongoDB, and Tailwind CSS.

## Features
- Real-time resume preview
- AI-generated resume content from user prompts
- Downloadable ATS-friendly PDFs
- Multiple templates (modern, classic)

## Setup
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
4. Set up `.env` in `backend/` with `MONGO_URI`, `JWT_SECRET`, `PORT`, `AI_API_KEY`.
5. Run MongoDB locally or use a cloud instance.
6. Start backend: `npm run dev` (in `backend/`).
7. Start frontend: `npm run dev` (in `frontend/`).
8. Open `http://localhost:5173/editor`.

## Demo
- Enter a prompt to generate a resume.
- Edit fields and see real-time updates.
- Download the resume as a PDF.