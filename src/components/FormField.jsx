const FormField = ({ label, name, value, onChange, as = 'input' }) => {
  const Component = as;
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <Component
        name={name}
        value={value || ''}
        onChange={onChange}
        className="w-full p-2 border rounded"
        placeholder={label}
        rows={as === 'textarea' ? 4 : undefined}
      />
    </div>
  );
};

export default FormField;