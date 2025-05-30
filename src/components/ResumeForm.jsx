import { useDispatch, useSelector } from 'react-redux';
import { updateResumeData } from '../store/resumeSlice';
import FormField from './FormField';
import { debounce } from 'lodash';
import axios from 'axios';

const ResumeForm = ({ resumeId }) => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume.data);

  const debouncedUpdate = debounce((data) => {
    dispatch(updateResumeData(data));
  }, 300);

  const handleChange = (e) => {
    debouncedUpdate({ [e.target.name]: e.target.value });
  };

  const addExperience = () => {
    dispatch(updateResumeData({
      experience: [...resume.experience, { company: '', role: '', startDate: '', endDate: '', description: '' }]
    }));
  };

  const addEducation = () => {
    dispatch(updateResumeData({
      education: [...resume.education, { institution: '', degree: '', year: '' }]
    }));
  };

  const addSkill = () => {
    dispatch(updateResumeData({
      skills: [...resume.skills, '']
    }));
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...resume.skills];
    newSkills[index] = value;
    dispatch(updateResumeData({ skills: newSkills }));
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/resumes/${resumeId}/download`, {
        responseType: 'blob',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resume.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Resume Editor</h2>
      <FormField label="Full Name" name="name" value={resume.name} onChange={handleChange} />
      <FormField label="Email" name="email" value={resume.email} onChange={handleChange} />
      <FormField label="Phone" name="phone" value={resume.phone} onChange={handleChange} />
      <FormField label="Summary" name="summary" value={resume.summary} onChange={handleChange} as="textarea" />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Experience</h3>
        {resume.experience.map((exp, index) => (
          <div key={index} className="border p-4 mb-2 rounded">
            <FormField label="Company" name={`experience[${index}].company`} value={exp.company} onChange={handleChange} />
            <FormField label="Role" name={`experience[${index}].role`} value={exp.role} onChange={handleChange} />
            <FormField label="Start Date" name={`experience[${index}].startDate`} value={exp.startDate} onChange={handleChange} />
            <FormField label="End Date" name={`experience[${index}].endDate`} value={exp.endDate} onChange={handleChange} />
            <FormField label="Description" name={`experience[${index}].description`} value={exp.description} onChange={handleChange} as="textarea" />
          </div>
        ))}
        <button onClick={addExperience} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Add Experience</button>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Education</h3>
        {resume.education.map((edu, index) => (
          <div key={index} className="border p-4 mb-2 rounded">
            <FormField label="Institution" name={`education[${index}].institution`} value={edu.institution} onChange={handleChange} />
            <FormField label="Degree" name={`education[${index}].degree`} value={edu.degree} onChange={handleChange} />
            <FormField label="Year" name={`education[${index}].year`} value={edu.year} onChange={handleChange} />
          </div>
        ))}
        <button onClick={addEducation} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Add Education</button>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Skills</h3>
        {resume.skills.map((skill, index) => (
          <FormField
            key={index}
            label={`Skill ${index + 1}`}
            name={`skills[${index}]`}
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
          />
        ))}
        <button onClick={addSkill} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Add Skill</button>
      </div>
      <button onClick={handleDownload} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Download PDF</button>
    </div>
  );
};

export default ResumeForm;