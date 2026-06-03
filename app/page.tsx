export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'column',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px', color: '#333' }}>Jennifer Montil</h1>
      <p style={{ fontSize: '24px', color: '#f97316' }}>Full Stack Developer</p>
      <p style={{ marginTop: '20px', color: '#666' }}>Portfolio is live! 🎉</p>
      <a href="#projects" style={{ marginTop: '30px', color: '#f97316', textDecoration: 'underline' }}>View Work</a>
    </div>
  );
}
