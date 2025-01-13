import './App.css';
import NavBar from './components/navbar';
import { useState } from 'react';
function App() {
  const [selectedContent, setSelectedContent] = useState('Home');
  const handleNavClick = (content) => {
    setSelectedContent(content);
  };
  return (
    <div>
    <NavBar onNavClick={handleNavClick}/>
    <div className="body">
    {selectedContent === 'Home' && <div className="cnt"><h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>✨ About Me ✨</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
        Hello there! 👋 I'm a <strong>JavaScript Developer</strong> with expertise in{' '}
        <em>React</em>, <em>React Native</em>, and <em>Electron</em>. Currently, I am pursuing my{' '}
        <strong>Computer Engineering</strong> degree at{' '}
        <span style={{ color: '#16a085', fontWeight: 'bold' }}>MPSTME, NMIMS</span>. My passion for
        technology drives me to build impactful and innovative solutions. 🚀
      </p>
      <p style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
        I enjoy turning ideas into reality. Whether it's creating sleek user interfaces 🌟 or
        developing seamless cross-platform experiences 🔗, I thrive on solving challenges and
        delivering value through code.
      </p>
      <p style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
        Beyond coding, I’m passionate about <strong>cricket</strong> 🏏, which keeps me disciplined and
        energized. I also love brainstorming and bringing new product ideas to life. 💡 I'm
        constantly exploring new technologies to blend innovation with real-world impact.
      </p>
      <p style={{ fontSize: '1.2rem' }}>Let’s connect and build something extraordinary! 🌍✨</p></div>}
    {selectedContent === 'Skills' && <div className="cnt">Skills</div>}
    {selectedContent === 'Projects' && <div className="cnt">Projects</div>}
    {selectedContent === 'Education' && <div className="cnt">Education</div>}
    {selectedContent === 'Contact' && <div className="cnt">Contact</div>}
    </div>
    </div>
  );
}

export default App;
