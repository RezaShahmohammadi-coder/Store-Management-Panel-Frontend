import AdminLayout from "../../Components/Structure/ActivePanel";

export default function Dashboard() {
  return (
    <AdminLayout activePage="dashboard">
      
      {/* ─── هر چیزی اینجا بنویسی می‌شود همان children و وسط صفحه رندر می‌شود ─── */}
      <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '16px' }}>
        <h2 style={{ color: '#1e293b', marginBottom: '10px' }}>سلام رئیس! وقتت بخیر.</h2>
        <p style={{ color: '#64748b' }}>به پنل مدیریتِ شیک و جدیدت خوش آمدی. از سایدبار سمت راست می‌توانید بخش‌های مختلف را مدیریت کنی.</p>
      </div>
      
    </AdminLayout>
  );
}