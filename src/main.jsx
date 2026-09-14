import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BookOpen, BrainCircuit, CalendarDays, ChevronRight, CircleHelp, Code2, FileText, GraduationCap, LayoutDashboard, Menu, Network, Search, ShieldCheck, Sparkles, Target, X } from 'lucide-react';
import './styles.css';

const subjects = [
  { name: 'Data Structures', code: 'CS-301', icon: Code2, tag: 'CSE' },
  { name: 'Computer Networks', code: 'CS-302', icon: Network, tag: 'CSE' },
  { name: 'Database Management', code: 'CS-303', icon: FileText, tag: 'CSE' },
  { name: 'Operating Systems', code: 'CS-304', icon: LayoutDashboard, tag: 'CSE' },
  { name: 'Cyber Security Basics', code: 'CS-305', icon: ShieldCheck, tag: 'Skill' },
  { name: 'Professional Practice', code: 'CS-306', icon: GraduationCap, tag: 'Career' },
];

const quickLinks = [
  { title: 'Notes & Study Material', desc: 'Subject-wise notes and resources', icon: BookOpen },
  { title: 'Previous Year Papers', desc: 'Practice with past exam papers', icon: FileText },
  { title: 'MCQ Practice', desc: 'Test yourself with objective questions', icon: CircleHelp },
  { title: 'AI Study Assistant', desc: 'Ask questions and learn faster', icon: Sparkles },
];

function App() {
  const [active, setActive] = useState('Dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  const nav = ['Dashboard', 'Subjects', 'Notes', 'Question Papers', 'MCQ Practice', 'Study Planner'];

  const filteredSubjects = subjects.filter((s) => `${s.name} ${s.code}`.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="brand">
          <div className="brand-mark"><GraduationCap size={23} /></div>
          <div><strong>GP Seoni</strong><span>Student Portal</span></div>
          <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20}/></button>
        </div>
        <div className="college-chip">Government Polytechnic College<br/>Seoni, Madhya Pradesh</div>
        <nav>
          {nav.map((item) => (
            <button key={item} className={active === item ? 'nav-item active' : 'nav-item'} onClick={() => { setActive(item); setMenuOpen(false); }}>
              <span>{item === 'Dashboard' ? <LayoutDashboard size={18}/> : item === 'Subjects' ? <BookOpen size={18}/> : item === 'Notes' ? <FileText size={18}/> : item === 'Question Papers' ? <FileText size={18}/> : item === 'MCQ Practice' ? <CircleHelp size={18}/> : <CalendarDays size={18}/>}</span>
              {item}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="security-note"><ShieldCheck size={17}/><span>Learning resources<br/><b>Student-focused</b></span></div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22}/></button>
          <div className="crumb">Academic Portal <ChevronRight size={15}/> <b>{active}</b></div>
          <div className="search-box"><Search size={17}/><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search subjects, notes, papers..."/></div>
        </header>

        <section className="content">
          <div className="hero">
            <div>
              <div className="eyebrow"><Sparkles size={15}/> STUDY SMART • BUILD YOUR FUTURE</div>
              <h1>Learn. Practice. <span>Grow.</span></h1>
              <p>A focused learning space for Polytechnic students — organize your subjects, practice exams, and build practical skills.</p>
              <div className="hero-actions">
                <button className="primary" onClick={() => setActive('Subjects')}>Explore Subjects <ChevronRight size={17}/></button>
                <button className="secondary" onClick={() => setActive('MCQ Practice')}><Target size={17}/> Start Practice</button>
              </div>
            </div>
            <div className="hero-card"><div className="hero-icon"><BrainCircuit size={30}/></div><span>AI Study Assistant</span><strong>Learn with guidance</strong><small>Ask • Understand • Revise</small></div>
          </div>

          <div className="section-heading"><div><span className="section-kicker">QUICK ACCESS</span><h2>Everything you need to study</h2></div><button className="text-button" onClick={() => setActive('Subjects')}>View all <ChevronRight size={16}/></button></div>
          <div className="quick-grid">
            {quickLinks.map(({title, desc, icon: Icon}, i) => <button className="quick-card" key={title} onClick={() => setActive(i === 0 ? 'Notes' : i === 1 ? 'Question Papers' : i === 2 ? 'MCQ Practice' : 'AI Study Assistant')}><div className="quick-icon"><Icon size={21}/></div><div><strong>{title}</strong><p>{desc}</p></div><ChevronRight size={18}/></button>)}
          </div>

          <div className="section-heading subjects-head"><div><span className="section-kicker">CURRENT STUDY</span><h2>Subjects & modules</h2></div><span className="semester-badge">3rd Semester</span></div>
          <div className="subject-grid">
            {filteredSubjects.map(({name, code, icon: Icon, tag}) => <button className="subject-card" key={code} onClick={() => setActive('Notes')}><div className="subject-top"><div className="subject-icon"><Icon size={20}/></div><span>{tag}</span></div><strong>{name}</strong><small>{code} · Study material available</small><div className="progress"><i style={{width: `${45 + (code.charCodeAt(3) % 5) * 7}%`}}/></div></button>)}
          </div>
          {filteredSubjects.length === 0 && <div className="empty">No subjects found for “{search}”. Try another search.</div>}

          <div className="lower-grid">
            <section className="notice-card"><div className="card-title"><div><span className="section-kicker">STUDENT HUB</span><h2>What’s coming next</h2></div><CalendarDays size={21}/></div><div className="notice"><b>Study resources</b><span>Upload official notes, syllabus and papers to make this portal useful for every batch.</span></div><div className="notice"><b>Practice zone</b><span>Topic-wise MCQs and mock tests can be added subject by subject.</span></div></section>
            <section className="planner-card"><div className="card-title"><div><span className="section-kicker">YOUR FOCUS</span><h2>Build a study habit</h2></div><Target size={21}/></div><div className="focus-ring"><strong>01</strong><span>Set one small target<br/>for today.</span></div><button className="primary full" onClick={() => setActive('Study Planner')}>Open Study Planner <ChevronRight size={17}/></button></section>
          </div>

          <footer><span>GP Seoni Student Portal</span><span>Learning platform • Built for students</span></footer>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
