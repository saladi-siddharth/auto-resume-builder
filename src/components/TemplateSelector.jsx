import { useDispatch, useSelector } from 'react-redux';
import { updateTemplate } from '../store/resumeSlice';

const TemplateSelector = () => {
  const dispatch = useDispatch();
  const currentTemplate = useSelector((state) => state.resume.template);

  const templates = ['modern', 'classic'];

  return (
    <div className="flex gap-4 mb-4">
      {templates.map((template) => (
        <button
          key={template}
          onClick={() => dispatch(updateTemplate(template))}
          className={`px-4 py-2 rounded ${currentTemplate === template ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {template.charAt(0).toUpperCase() + template.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;