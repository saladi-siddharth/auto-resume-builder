import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateResumeData } from '../store/resumeSlice';
import axios from 'axios';

const PromptInput = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/resumes/generate', { prompt }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      dispatch(updateResumeData(response.data.resume.data));
    } catch (error) {
      console.error('Error generating resume:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold mb-2">Generate Resume with AI</label>
      <textarea
        className="w-full p-2 border rounded"
        rows="4"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="E.g., Generate a resume for a software engineer with 5 years of experience"
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Generating...' : 'Generate Resume'}
      </button>
    </div>
  );
};

export default PromptInput;