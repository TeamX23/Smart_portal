const AdminAnalytics = () => {
  const stats = { bookings: 100, maintenance: 20, users: { students: 300, lecturers: 50, admins: 5 } };
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Admin Analytics</h2>
      <p>Total Bookings: {stats.bookings}</p>
      <p>Maintenance Requests: {stats.maintenance}</p>
      <p>Users: Students {stats.users.students}, Lecturers {stats.users.lecturers}, Admins {stats.users.admins}</p>
    </div>
  );
};
export default AdminAnalytics;