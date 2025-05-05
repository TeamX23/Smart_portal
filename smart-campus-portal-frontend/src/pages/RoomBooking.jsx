import { useState } from 'react';

const RoomBooking = () => {
  const [form, setForm] = useState({ date: '', time: '', room: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Book a Room</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="date" type="date" onChange={handleChange} className="w-full p-2 border" required />
        <input name="time" type="time" onChange={handleChange} className="w-full p-2 border" required />
        <select name="room" onChange={handleChange} className="w-full p-2 border" required>
          <option value="">Select Room</option>
          <option>Room A</option>
          <option>Room B</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Book</button>
      </form>
      {submitted && <p className="mt-4 text-green-600">Room booked successfully!</p>}
    </div>
  );
};
export default RoomBooking;