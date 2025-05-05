const mockNotifications = [
  { id: 1, message: "Campus closed Friday." },
  { id: 2, message: "Room booking confirmed." }
];

const Notifications = () => (
  <div className="p-6 max-w-2xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Notifications</h2>
    <ul>{mockNotifications.map(n => (
      <li key={n.id} className="p-2 mb-2 bg-yellow-100 border-l-4 border-yellow-600">{n.message}</li>
    ))}</ul>
  </div>
);
export default Notifications;