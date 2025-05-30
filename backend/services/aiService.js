const axios = require('axios');

exports.generateResumeData = async (prompt) => {
  const mockResponse = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    summary: 'Experienced software engineer with 5 years in full-stack development.',
    experience: [
      {
        company: 'Tech Corp',
        role: 'Software Engineer',
        startDate: '2020-01',
        endDate: 'Present',
        description: 'Developed scalable web applications using React and Node.js.'
      }
    ],
    education: [
      {
        institution: 'State University',
        degree: 'B.S. Computer Science',
        year: '2019'
      }
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB']
  };
  return mockResponse;
};