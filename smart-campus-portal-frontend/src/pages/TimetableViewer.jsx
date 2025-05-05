const mockSchedule = [
  { day: "Monday", time: "09:00 - 10:30", course: "Math" },
  { day: "Tuesday", time: "10:00 - 11:30", course: "Physics" }
];

const TimetableViewer = () => (
  <div className="p-6 max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Weekly Timetable</h2>
    <table className="w-full table-auto border-collapse border">
      <thead><tr><th>Day</th><th>Time</th><th>Course</th></tr></thead>
      <tbody>{mockSchedule.map((s, i) => (
        <tr key={i}><td>{s.day}</td><td>{s.time}</td><td>{s.course}</td></tr>
      ))}</tbody>
    </table>
  </div>
);
export default TimetableViewer;