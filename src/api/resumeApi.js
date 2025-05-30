import axios from 'axios';

const API_URL = 'http://localhost:5000/api/resumes';

export const createResume = (data) => {
  return axios.post(`${API_URL}/create`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
};

export const generateResume = (prompt) => {
  return axios.post(`${API_URL}/generate`, { prompt }, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
};

export const getResume = (id) => {
  return axios.get(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
};

export const downloadResume = (id) => {
  return axios.get(`${API_URL}/${id}/download`, {
    responseType: 'blob',
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
};