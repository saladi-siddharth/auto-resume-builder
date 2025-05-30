import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { renderTemplate } from '../utils/templateRenderer';

const RealTimePreview = () => {
  const resume = useSelector((state) => state.resume.data);
  const template = useSelector((state) => state.resume.template);
  const [previewHtml, setPreviewHtml] = useState('');

  useEffect(() => {
    const html = renderTemplate(resume, template);
    setPreviewHtml(html);
  }, [resume, template]);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg h-full overflow-auto">
      <h2 className="text-2xl font-bold mb-4">Live Preview</h2>
      <div className="bg-white p-4 border" dangerouslySetInnerHTML={{ __html: previewHtml }} />
    </div>
  );
};

export default RealTimePreview;