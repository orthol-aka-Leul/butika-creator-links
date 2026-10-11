import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Send, Youtube, Instagram, Play, Clapperboard, Bot, Globe2, Sparkles, Heart, ExternalLink, Zap } from 'lucide-react';
import './styles.css';

const creator = {
  name: 'call me ቡቲካ',
  handle: '@callmesimon21',
  bio: 'Habeshan memes, movie moments & stories that live rent-free in your head.',
  avatarImage: '/profile.jpg',
  status: 'NEW VIDEOS EVERY WEEK',
};

const links = [
  {
    id: 'youtube',
    title: 'Watch on YouTube',
    description: 'Full videos, rankings & deep dives',
    url: 'https://youtube.com/@MillionviewsYT1',
    icon: Youtube,
    className: 'youtube',
    label: 'WATCH NOW',
  },
  {
    id: 'telegram',
    title: 'ቦላቦ ፈረስ AppStore Telegram',
    description: 'Community, updates & exclusive drops',
    url: 'https://t.me/googlehasbeen',
    icon: Send,
    className: 'telegram',
    label: 'COMMUNITY',
  },
  {
    id: 'bot',
    title: 'Asquala Films Telegram Bot',
    description: 'Your next entertainment rabbit hole',
    url: 'https://t.me/halowbot',
    icon: Bot,
    className: 'bot',
    label: 'INTERACTIVE',
  },
 
  {
    id: 'instagram',
    title: 'Follow on Instagram',
    description: 'Reels, edits & behind the scenes',
    url: 'https://www.instagram.com/mrest3t?mdxt=MTg4MjFheWRqdW84Yg==',
    icon: Instagram,
    className: 'instagram',
    label: 'FOLLOW',
  },
  {
    id: 'other',
    title: 'Explore All Projects',
    description: 'More sites, tools & things I make',
    url: 'https://orthol-aka-leul.github.io/DEVELOPER-WEB/',
    icon: Globe2,
    className: 'other',
    label: 'DISCOVER',
  },
];
const featured = [
  { number: '01', title: 'Call me ቡቲካ memes', subtitle: 'Laugh or not you decide? You decide.', icon: Zap },
  { number: '02', title: 'MOVIE MOMENTS', subtitle: 'Scenes worth replaying.', icon: Clapperboard },
  { number: '03', title: 'FAN THEORIES', subtitle: 'Look closer. Think deeper.', icon: Sparkles },
];

function App() {
  return <main className="page-shell">
    <div className="ambient ambient-one" aria-hidden="true" />
    <div className="ambient ambient-two" aria-hidden="true" />
    <header className="topbar">
      <a className="wordmark" href="#home" aria-label="call me ቡቲካ home">
        <span className="wordmark-icon"><Play size={14} fill="currentColor" /></span><span>call me ቡቲካ</span>
      </a>
      <div className="topbar-note"><span className="live-dot" /> CREATOR HUB</div>
    </header>
    <section className="hero" id="home">
      <div className="hero-orbit orbit-a" aria-hidden="true" /><div className="hero-orbit orbit-b" aria-hidden="true" />
      <div className="avatar-wrap">
        <div className="avatar-ring">
          <div className="avatar-inner">
            <img className="avatar-photo" src={creator.avatarImage} alt="call me ቡቲካ profile" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'grid'; }} />
            <div className="avatar-fallback">ቡ</div>
          </div>
        </div>
        <span className="avatar-spark spark-one">✦</span><span className="avatar-spark spark-two">✧</span>
      </div>
      <div className="eyebrow"><span className="eyebrow-line" /> {creator.status} <span className="eyebrow-line" /></div>
      <h1>ENTER MY<br /><span>UNIVERSE.</span></h1>
      <p className="hero-bio">{creator.bio}</p>
      <div className="hero-tags"><span><Sparkles size={13} /> MEMES</span><span><Clapperboard size={13} /> MOVIES</span><span><Heart size={13} /> FANDOM</span></div>
    </section>
    <section className="links-section" aria-labelledby="links-heading">
      <div className="section-heading"><div><p className="section-kicker">THE PORTAL</p><h2>Find me <span>everywhere.</span></h2></div><span className="link-count">0{links.length} LINKS</span></div>
      <div className="link-list">
        {links.map(({ id, title, description, url, icon: Icon, className, label }, index) =>
          <a className={`link-card ${className}`} href={url} target="_blank" rel="noreferrer" key={id} style={{ '--delay': `${index * 70}ms` }}>
            <span className="link-icon"><Icon size={22} strokeWidth={1.8} /></span>
            <span className="link-copy"><span className="link-title">{title}</span><span className="link-description">{description}</span></span>
            <span className="link-label">{label}</span><span className="link-arrow"><ArrowUpRight size={19} /></span>
          </a>
        )}
      </div>
      <p className="small-note"><ExternalLink size={12} /> Choose your portal and come hang out.</p>
    </section>
    <section className="interests" aria-labelledby="interests-heading">
      <div className="section-heading compact-heading"><div><p className="section-kicker">WHAT YOU'LL FIND</p><h2>Made for the <span>obsessed.</span></h2></div></div>
      <div className="interest-grid">
        {featured.map(({ number, title, subtitle, icon: Icon }) => <article className="interest-card" key={number}>
          <div className="interest-top"><span>{number}</span><Icon size={19} /></div><h3>{title}</h3><p>{subtitle}</p>
        </article>)}
      </div>
    </section>
    <footer className="footer"><a className="footer-brand" href="#home">call me ቡቲካ<span>®</span></a><p>Built for the fandom. Powered by orthol.</p><a className="back-top" href="#home">BACK TO TOP ↑</a></footer>
  </main>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
