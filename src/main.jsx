import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BookOpen, BrainCircuit, CalendarDays, CheckCircle2, ChevronRight, CircleHelp, Clock3, Code2, FileText, GraduationCap, LayoutDashboard, Menu, Network, Plus, Search, Send, ShieldCheck, Sparkles, Target, X } from 'lucide-react';
import './styles.css';

const subjects = [
  { name: 'Data Structures', code: 'CS-301', icon: Code2, tag: 'CSE', topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees'] },
  { name: 'Computer Networks', code: 'CS-302', icon: Network, tag: 'CSE', topics: ['OSI Model', 'TCP/IP', 'IP Addressing', 'DNS', 'Routing'] },
  { name: 'Database Management', code: 'CS-303', icon: FileText, tag: 'CSE', topics: ['SQL', 'Keys', 'Normalization', 'ER Model', 'Transactions'] },
  { name: 'Operating Systems', code: 'CS-304', icon: LayoutDashboard, tag: 'CSE', topics: ['Processes', 'Threads', 'Memory', 'File Systems', 'Scheduling'] },
  { name: 'Cyber Security Basics', code: 'CS-305', icon: ShieldCheck, tag: 'Skill', topics: ['CIA Triad', 'Phishing', 'Passwords', '2FA', 'Linux Basics'] },
  { name: 'Professional Practice', code: 'CS-306', icon: GraduationCap, tag: 'Career', topics: ['Resume', 'Communication', 'Interview', 'Projects', 'Teamwork'] },
];

const notes = [
  { subject: 'Computer Networks', type: 'Notes', title: 'OSI Model — 7 Layers', desc: 'Layer-by-layer revision guide with key functions and examples.' },
  { subject: 'Data Structures', type: 'Notes', title: 'Stack & Queue Basics', desc: 'Concepts, operations, complexity and common exam questions.' },
  { subject: 'Cyber Security Basics', type: 'Quick Guide', title: 'CIA Triad & Common Threats', desc: 'Short revision sheet for confidentiality, integrity and availability.' },
  { subject: 'Database Management', type: 'Notes', title: 'SQL Fundamentals', desc: 'SELECT, WHERE, ORDER BY, GROUP BY and basic joins.' },
];

const papers = [
  { semester: '3rd Semester', subject: 'Computer Networks', year: 'Previous Year', status: 'Practice set' },
  { semester: '3rd Semester', subject: 'Data Structures', year: 'Previous Year', status: 'Practice set' },
  { semester: '3rd Semester', subject: 'Database Management', year: 'Question Bank', status: 'Revision' },
];

const mcqs = [
  { q: 'Which layer of the OSI model is responsible for routing?', options: ['Transport', 'Network', 'Session', 'Presentation'], answer: 1, topic: 'Computer Networks' },
  { q: 'Which data structure follows LIFO?', options: ['Queue', 'Array', 'Stack', 'Linked List'], answer: 2, topic: 'Data Structures' },
  { q: 'What does CIA stand for in information security?', options: ['Control, Internet, Access', 'Confidentiality, Integrity, Availability', 'Cyber, Identity, Authentication', 'Code, Integrity, Access'], answer: 1, topic: 'Cyber Security Basics' },
  { q: 'Which SQL command is used to retrieve data?', options: ['SELECT', 'INSERT', 'DELETE', 'UPDATE'], answer: 0, topic: 'Database Management' },
  { q: 'Which component manages processes and hardware resources?', options: ['Compiler', 'Browser', 'Operating System', 'Database'], answer: 2, topic: 'Operating Systems' },
];

const initialTasks = [
  { id: 1, title: 'Revise OSI Model', subject: 'Computer Networks', done: true },
  { id: 2, title: 'Practice 10 MCQs', subject: 'Mixed Practice', done: false },
  { id: 3, title: 'Read SQL basics', subject: 'Database Management', done: false },
];

function App() {
  const [active, setActive] = useState('Dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [mcqIndex, setMcqIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const nav = ['Dashboard', 'Subjects', 'Notes', 'Question Papers', 'MCQ Practice', 'Study Planner', 'AI Study Assistant'];
  const query = search.trim().toLowerCase();
  const filteredSubjects = useMemo(() => subjects.filter((s) => `${s.name} ${s.code} ${s.topics.join(' ')}`.toLowerCase().includes(query)), [query]);

  const go = (page) => { setActive(page); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const answerMcq = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === mcqs[mcqIndex].answer) setScore((s) => s + 1);
  };
  const nextMcq = () => { setSelected(null); setMcqIndex((i) => (i + 1) % mcqs.length); };

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks((items) => [...items, { id: Date.now(), title: newTask.trim(), subject: 'Personal target', done: false }]);
    setNewTask('');
  };
  const toggleTask = (id) => setTasks((items) => items.map((t) => t.id === id ? { ...t, done: !t.done } : t));

  const askAI = async () => {
    const question = aiQuestion.trim();
    if (!question || aiLoading) return;
    setAiLoading(true); setAiAnswer('');
    try {
      const res = await fetch('/api/study-assistant', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      setAiAnswer(data.answer);
    } catch (err) {
      setAiAnswer(`AI assistant is not connected yet. You can still use the portal's notes and practice tools. (${err.message})`);
    } finally { setAiLoading(false); }
  };

  const pageTitle = active === 'Dashboard' ? 'Student Dashboard' : active;

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="brand"><div className="brand-mark"><GraduationCap size={23}/></div><div><strong>GP Seoni</strong><span>Student Portal</span></div><button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20}/></button></div>
        <div className="college-chip">Government Polytechnic College<br/>Seoni, Madhya Pradesh</div>
        <nav>{nav.map((item) => <button key={item} className={active === item ? 'nav-item active' : 'nav-item'} onClick={() => go(item)}><span>{item === 'Dashboard' ? <LayoutDashboard size={18}/> : item === 'Subjects' ? <BookOpen size={18}/> : item === 'Notes' ? <FileText size={18}/> : item === 'Question Papers' ? <FileText size={18}/> : item === 'MCQ Practice' ? <CircleHelp size={18}/> : item === 'Study Planner' ? <CalendarDays size={18}/> : <BrainCircuit size={18}/>}</span>{item}</button>)}</nav>
        <div className="sidebar-bottom"><div className="security-note"><ShieldCheck size={17}/><span>Learning resources<br/><b>Student-focused</b></span></div></div>
      </aside>

      <main className="main">
        <header className="topbar"><button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22}/></button><div className="crumb">Academic Portal <ChevronRight size={15}/> <b>{pageTitle}</b></div><div className="search-box"><Search size={17}/><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search subjects, topics, notes..."/></div></header>

        <section className="content">
          {active === 'Dashboard' && <Dashboard go={go} filteredSubjects={filteredSubjects} />}
          {active === 'Subjects' && <Subjects filteredSubjects={filteredSubjects} go={go} />}
          {active === 'Notes' && <Notes search={query} />}
          {active === 'Question Papers' && <Papers />}
          {active === 'MCQ Practice' && <MCQPractice mcq={mcqs[mcqIndex]} index={mcqIndex} selected={selected} score={score} answer={answerMcq} next={nextMcq} />}
          {active === 'Study Planner' && <Planner tasks={tasks} newTask={newTask} setNewTask={setNewTask} addTask={addTask} toggleTask={toggleTask} />}
          {active === 'AI Study Assistant' && <AIAssistant question={aiQuestion} setQuestion={setAiQuestion} answer={aiAnswer} loading={aiLoading} ask={askAI} />}
          <footer><span>GP Seoni Student Portal</span><span>Learning platform • Built for students</span></footer>
        </section>
      </main>
    </div>
  );
}

function Dashboard({ go, filteredSubjects }) {
  return <>
    <div className="hero"><div><div className="eyebrow"><Sparkles size={15}/> STUDY SMART • BUILD YOUR FUTURE</div><h1>Learn. Practice. <span>Grow.</span></h1><p>A focused learning space for Polytechnic students — organize your subjects, practice exams, and build practical skills.</p><div className="hero-actions"><button className="primary" onClick={() => go('Subjects')}>Explore Subjects <ChevronRight size={17}/></button><button className="secondary" onClick={() => go('MCQ Practice')}><Target size={17}/> Start Practice</button></div></div><button className="hero-card" onClick={() => go('AI Study Assistant')}><div className="hero-icon"><BrainCircuit size={30}/></div><span>AI Study Assistant</span><strong>Learn with guidance</strong><small>Ask • Understand • Revise</small></button></div>
    <div className="section-heading"><div><span className="section-kicker">QUICK ACCESS</span><h2>Everything you need to study</h2></div><button className="text-button" onClick={() => go('Subjects')}>View all <ChevronRight size={16}/></button></div>
    <div className="quick-grid">{[
      ['Notes & Study Material','Subject-wise notes and resources',BookOpen,'Notes'],['Previous Year Papers','Practice with past exam papers',FileText,'Question Papers'],['MCQ Practice','Test yourself with objective questions',CircleHelp,'MCQ Practice'],['AI Study Assistant','Ask questions and learn faster',Sparkles,'AI Study Assistant']
    ].map(([title,desc,Icon,page]) => <button className="quick-card" key={title} onClick={() => go(page)}><div className="quick-icon"><Icon size={21}/></div><div><strong>{title}</strong><p>{desc}</p></div><ChevronRight size={18}/></button>)}</div>
    <div className="section-heading subjects-head"><div><span className="section-kicker">CURRENT STUDY</span><h2>Subjects & modules</h2></div><span className="semester-badge">3rd Semester</span></div>
    <div className="subject-grid">{filteredSubjects.map(({name,code,icon:Icon,tag},i) => <button className="subject-card" key={code} onClick={() => go('Notes')}><div className="subject-top"><div className="subject-icon"><Icon size={20}/></div><span>{tag}</span></div><strong>{name}</strong><small>{code} · Study material available</small><div className="progress"><i style={{width:`${52+i*8}%`}}/></div></button>)}</div>
    <div className="lower-grid"><section className="notice-card"><div className="card-title"><div><span className="section-kicker">STUDENT HUB</span><h2>Build your study routine</h2></div><CalendarDays size={21}/></div><div className="notice"><b>Study resources</b><span>Notes, question papers and revision material are organized into dedicated sections.</span></div><div className="notice"><b>Practice zone</b><span>Use MCQs to check your understanding before exams.</span></div></section><section className="planner-card"><div className="card-title"><div><span className="section-kicker">YOUR FOCUS</span><h2>One target at a time</h2></div><Target size={21}/></div><div className="focus-ring"><strong>01</strong><span>Set one small target<br/>for today.</span></div><button className="primary full" onClick={() => go('Study Planner')}>Open Study Planner <ChevronRight size={17}/></button></section></div>
  </>;
}

function Subjects({ filteredSubjects, go }) {
  const [selected, setSelected] = useState(filteredSubjects[0]?.code || null);
  const current = filteredSubjects.find((s) => s.code === selected);
  return <><div className="page-intro"><span className="section-kicker">ACADEMIC CONTENT</span><h1>Subjects & Modules</h1><p>Choose a subject to see its current module outline and jump into study material.</p></div><div className="subject-page-grid"><div className="subject-list">{filteredSubjects.map(({name,code,icon:Icon,tag}) => <button key={code} className={selected===code?'subject-row selected':'subject-row'} onClick={() => setSelected(code)}><span className="subject-icon"><Icon size={19}/></span><span><strong>{name}</strong><small>{code} · {tag}</small></span><ChevronRight size={17}/></button>)}</div>{current && <section className="module-panel"><div className="module-head"><div className="subject-icon"><current.icon size={21}/></div><div><span className="section-kicker">MODULE OUTLINE</span><h2>{current.name}</h2><small>{current.code}</small></div></div><div className="topic-list">{current.topics.map((topic,i)=><button key={topic} onClick={() => go('Notes')}><span>{String(i+1).padStart(2,'0')}</span><b>{topic}</b><ChevronRight size={16}/></button>)}</div><button className="primary full" onClick={() => go('Notes')}>Open Study Material <BookOpen size={16}/></button></section>}</div></>;
}

function Notes({ search }) {
  const filtered = notes.filter((n) => `${n.subject} ${n.title} ${n.desc}`.toLowerCase().includes(search));
  return <><div className="page-intro"><span className="section-kicker">STUDY LIBRARY</span><h1>Notes & Study Material</h1><p>Short, exam-friendly resources. Official college material can be added as it becomes available.</p></div><div className="resource-grid">{filtered.map((n)=><article className="resource-card" key={n.title}><div className="resource-icon"><BookOpen size={20}/></div><span className="resource-tag">{n.type}</span><h3>{n.title}</h3><b>{n.subject}</b><p>{n.desc}</p><button className="text-button">Open resource <ChevronRight size={15}/></button></article>)}</div>{filtered.length===0&&<div className="empty">No study resources match “{search}”.</div>}</>;
}

function Papers() { return <><div className="page-intro"><span className="section-kicker">EXAM PREPARATION</span><h1>Question Papers</h1><p>Practice sets are ready here; replace or extend them with verified college/university papers later.</p></div><div className="paper-list">{papers.map((p)=><article className="paper-row" key={p.subject}><div className="paper-icon"><FileText size={21}/></div><div><strong>{p.subject}</strong><small>{p.semester} · {p.year}</small></div><span>{p.status}</span><button className="secondary dark">Practice <ChevronRight size={15}/></button></article>)}</div></>;
}

function MCQPractice({ mcq,index,selected,score,answer,next }) { const correct=selected!==null&&selected===mcq.answer; return <><div className="page-intro"><span className="section-kicker">OBJECTIVE PRACTICE</span><h1>MCQ Practice</h1><p>Question {index+1} of {mcqs.length} · Score: {score}</p></div><section className="quiz-card"><div className="quiz-meta"><span>{mcq.topic}</span><span>Question {index+1}/{mcqs.length}</span></div><h2>{mcq.q}</h2><div className="option-grid">{mcq.options.map((option,i)=><button key={option} disabled={selected!==null} className={`option ${selected!==null?(i===mcq.answer?'correct':i===selected?'wrong':''):''}`} onClick={()=>answer(i)}><span>{String.fromCharCode(65+i)}</span>{option}</button>)}</div>{selected!==null&&<div className={correct?'answer-note good':'answer-note'}>{correct?'Correct! Nice work.':`Not quite. The correct answer is ${mcq.options[mcq.answer]}.`}<button className="primary" onClick={next}>Next Question <ChevronRight size={16}/></button></div>}</section></> }

function Planner({tasks,newTask,setNewTask,addTask,toggleTask}) { const done=tasks.filter(t=>t.done).length; return <><div className="page-intro"><span className="section-kicker">PERSONAL PRODUCTIVITY</span><h1>Study Planner</h1><p>Turn your study goals into small, trackable tasks.</p></div><section className="planner-board"><div className="planner-summary"><div><span className="section-kicker">TODAY</span><h2>{done}/{tasks.length} tasks complete</h2></div><div className="planner-progress"><i style={{width:`${tasks.length?done/tasks.length*100:0}%`}}/></div></div><div className="add-task"><input value={newTask} onChange={(e)=>setNewTask(e.target.value)} onKeyDown={(e)=>e.key==='Enter'&&addTask()} placeholder="Add a study target..."/><button className="primary" onClick={addTask}><Plus size={16}/> Add</button></div><div className="task-list">{tasks.map(t=><button className={t.done?'task done':'task'} key={t.id} onClick={()=>toggleTask(t.id)}><CheckCircle2 size={19}/><span><strong>{t.title}</strong><small>{t.subject}</small></span></button>)}</div></section></> }

function AIAssistant({question,setQuestion,answer,loading,ask}) { return <><div className="page-intro"><span className="section-kicker">AI LEARNING</span><h1>AI Study Assistant</h1><p>Ask for explanations, examples, revision plans or exam-style practice. The API key stays on the server.</p></div><section className="ai-card"><div className="ai-header"><div className="ai-avatar"><BrainCircuit size={25}/></div><div><h2>Study with AI</h2><span>Clear explanations • Step-by-step learning</span></div></div><div className="prompt-chips">{['Explain OSI model simply','Give me 10 SQL MCQs','Make a revision plan'].map((p)=><button key={p} onClick={()=>setQuestion(p)}>{p}</button>)}</div><textarea value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder="Ask a study question..." rows={5}/><button className="primary ask-button" onClick={ask} disabled={loading||!question.trim()}>{loading?'Thinking...':'Ask AI'} <Send size={16}/></button>{answer&&<div className="ai-answer"><span className="section-kicker">AI RESPONSE</span><div>{answer}</div></div>}</section></> }

createRoot(document.getElementById('root')).render(<App />);
