import ResumeForm from '../components/ResumeForm';
import RealTimePreview from '../components/RealTimePreview';
import TemplateSelector from '../components/TemplateSelector';
import PromptInput from '../components/PromptInput';

const Editor = () => {
  const resumeId = 'mock-resume-id'; // Replace with actual resume ID from backend

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-auto">
        <TemplateSelector />
        <PromptInput />
        <ResumeForm resumeId={resumeId} />
      </div>
      <div className="w-1/2 p-4 bg-gray-50">
        <RealTimePreview />
      </div>
    </div>
  );
};

export default Editor;