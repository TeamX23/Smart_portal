import { useState } from 'react';

const MaintenanceForm = () => {
  const [form, setForm] = useState({ location: '', issue: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Report Issue</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="location" placeholder="Location" onChange={handleChange} className="w-full p-2 border" required />
        <textarea name="issue" placeholder="Issue description" onChange={handleChange} className="w-full p-2 border" rows="4" required />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
      {submitted && <p className="mt-4 text-green-600">Issue submitted!</p>}
    </div>
  );
};
export default MaintenanceForm;