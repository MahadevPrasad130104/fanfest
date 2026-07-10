'use client';

import { useState } from 'react';

/**
 * FanFest 2026 — single-file Next.js page component.
 *
 * HOW TO USE IN A NEXT.JS APP (App Router):
 * 1. Save this file as: app/fanfest/page.jsx   (route becomes /fanfest)
 * 2. Nothing else to install — styled-jsx ships with Next.js by default.
 * 3. Run `npm run dev` and visit /fanfest
 *
 * HOW TO USE (Pages Router):
 * 1. Save this file as: pages/fanfest.jsx
 * 2. Remove the 'use client' line at the top (Pages Router doesn't need it).
 *
 * Fonts: this uses Google Fonts (Anton + Inter) via a <link> in the JSX,
 * which works but for production Next.js apps it's better to use
 * next/font/google instead — see the note near the bottom of this file.
 */

const PLATFORM_OPTIONS = [
  'YouTube',
  'Instagram',
  'TikTok',
  'Twitch',
  'Podcast',
  'X (Twitter)',
  'Other',
];

const FAQS = [
  {
    q: 'Is there a cost to apply?',
    a: 'No, applying to be a FanFest 2026 creator is completely free.',
  },
  {
    q: 'Do I need a minimum follower count?',
    a: 'We welcome creators of all sizes. Follower count is one factor among many in our review.',
  },
  {
    q: 'When will I hear back?',
    a: 'Shortlisted creators are contacted directly between July 1–15, 2026.',
  },
  {
    q: 'Is travel covered?',
    a: 'Accommodation is covered for verified creators. Travel details are shared during onboarding.',
  },
];

const ABOUT_CARDS = [
  { icon: '🎤', title: 'Live Panels & Talks', body: 'Host your own stage session, Q&A, or join a creator roundtable. Real conversations with your real fans.' },
  { icon: '📸', title: 'Meet & Greet Booths', body: 'Dedicated creator booths where fans can interact, take photos, and grab exclusive merchandise.' },
  { icon: '🤝', title: 'Brand Collaborations', body: 'Connect with top-tier sponsors looking for authentic creator partnerships during the event.' },
  { icon: '🎮', title: 'Live Content Challenges', body: 'Compete in cross-creator content battles, streamed live for the audience and judged by fans.' },
  { icon: '🌐', title: 'Global Streaming Reach', body: 'The entire event is live-streamed to millions worldwide — your content extends far beyond the venue.' },
  { icon: '🎉', title: 'Creator After-Party', body: 'An exclusive closing night celebration — network, celebrate, and create memories off-camera too.' },
];

const PERKS = [
  { num: '01', title: 'All-Access Badge', body: 'Backstage, VIP zones, creator lounge, and all event areas throughout the three days.' },
  { num: '02', title: 'Complimentary Accommodation', body: 'Hotel stay covered for the full duration of the event for verified creators.' },
  { num: '03', title: 'Dedicated Creator Stage', body: 'Your own scheduled time slot on the creator main stage or breakout room.' },
  { num: '04', title: 'Professional Content Crew', body: 'On-site photographers and videographers to capture your moments.' },
  { num: '05', title: 'Promotion Package', body: 'Featured on all official FanFest 2026 social media, website, and email marketing to 500K+ subscribers.' },
  { num: '06', title: 'Exclusive Merch Kit', body: 'Limited-edition FanFest 2026 creator merchandise kit sent to you before the event.' },
];

const CREATOR_TYPES = [
  { emoji: '📹', label: 'YouTubers' },
  { emoji: '🎵', label: 'TikTokers' },
  { emoji: '📸', label: 'Instagrammers' },
  { emoji: '🎙️', label: 'Podcasters' },
  { emoji: '🎮', label: 'Streamers' },
  { emoji: '✍️', label: 'Bloggers' },
  { emoji: '🎨', label: 'Digital Artists' },
  { emoji: '💪', label: 'Fitness Creators' },
  { emoji: '🔍', label: 'Food Creators' },
  { emoji: '👗', label: 'Fashion Creators' },
];

const TIMELINE = [
  { num: 1, date: 'MAY 15 – JUN 30, 2026', title: 'Applications Open', body: 'Submit your creator application form with your details and profile links.' },
  { num: 2, date: 'JULY 1 – JULY 15, 2026', title: 'Review & Selection', body: 'Our team reviews all submissions. Shortlisted creators are contacted directly.' },
  { num: 3, date: 'JULY 20, 2026', title: 'Confirmation & Onboarding', body: 'Selected creators receive official confirmation, event details, and onboarding kit.' },
  { num: 4, date: 'AUGUST 14–16, 2026', title: 'FanFest 2026 — LIVE', body: 'Three days of content, connection, and unforgettable fan experiences.' },
];

export default function FanFestPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const togglePlatform = (name:string) => {
    setPlatforms((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your API route / Firebase Function / form service.
    // e.g. await fetch('/api/apply', { method: 'POST', body: new FormData(e.target) })
    setSubmitted(true);
  };

  return (
    <>
      {/* Google Fonts — swap for next/font/google in production, see bottom note */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <header className="site-header">
        <div className="navrow">
          <div className="logo">
            FAN<span className="fest">FEST</span> 2026
          </div>
          <button className="btn-apply" onClick={() => scrollTo('apply')}>
            Apply Now
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="eyebrow">🎬 OPEN APPLICATIONS — LIMITED SPOTS</div>
        <h1>
          CREATE.
          <br />
          <span className="accent">CONNECT.</span>
          <br />
          DOMINATE.
        </h1>
        <p>
          FanFest 2026 is calling on creators like you to be part of the biggest fan-powered
          event of the year. Share your world, grow your audience, and make history.
        </p>
        <div className="hero-ctas">
          <button className="btn-primary-lg" onClick={() => scrollTo('apply')}>
            Apply as a Creator
          </button>
          <button className="btn-outline" onClick={() => scrollTo('about')}>
            Learn More
          </button>
        </div>
        <div className="stats">
          <div className="stat"><b>AUG 14–16</b><span>Event Dates</span></div>
          <div className="stat"><b>2026</b><span>Edition</span></div>
          <div className="stat"><b>50K+</b><span>Expected Fans</span></div>
          <div className="stat"><b>200+</b><span>Creator Spots</span></div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <span className="eyebrow-red">WHAT IS FANFEST 2026</span>
          <h2 className="section-title">
            WHERE CREATORS
            <br />
            MEET THEIR FANS
          </h2>
          <p className="section-lead">
            Three days of panels, activations, live streams, brand collaborations, and
            unforgettable fan moments — all under one roof.
          </p>
          <div className="grid-cards">
            {ABOUT_CARDS.map((c) => (
              <div className="card" key={c.title}>
                <div className="icon-box">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="eyebrow-red">CREATOR PERKS</span>
          <h2 className="section-title">WHAT YOU GET</h2>
          <p className="section-lead">
            Every creator who joins FanFest 2026 gets a full support package designed to help
            you shine.
          </p>
          <div className="perks-grid">
            {PERKS.map((p) => (
              <div className="perk-card" key={p.num}>
                <div className="perk-num">{p.num}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="eyebrow-red">ELIGIBILITY</span>
          <h2 className="section-title">WHO CAN APPLY?</h2>
          <p className="section-lead">
            We welcome creators across every niche, platform, and audience size. If you
            create — this is for you.
          </p>
          <div className="creator-grid">
            {CREATOR_TYPES.map((c) => (
              <div className="creator-box" key={c.label}>
                <span className="emoji">{c.emoji}</span>
                <span className="label">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="eyebrow-red">KEY DATES</span>
          <h2 className="section-title" style={{ marginBottom: 44 }}>
            APPLICATION TIMELINE
          </h2>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div className="tl-item" key={t.num}>
                {i !== TIMELINE.length - 1 && <div className="tl-line" />}
                <div className="tl-num">{t.num}</div>
                <div className="tl-date">{t.date}</div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply">
        <div className="container">
          <div className="form-card">
            {submitted ? (
              <>
                <h2 className="form-title">YOU'RE IN THE QUEUE 🎉</h2>
                <p className="form-sub">
                  Thanks for applying. We'll review your submission and be in touch within
                  5–7 business days.
                </p>
              </>
            ) : (
              <>
                <h2 className="form-title">APPLY AS A CREATOR</h2>
                <p className="form-sub">
                  Fill in the form below and we'll review your application within 5–7
                  business days.
                </p>

                <form onSubmit={handleSubmit}>
                  <span className="form-section-label">Personal Information</span>
                  <div className="field">
                    <label>First Name <span className="req">*</span></label>
                    <input type="text" name="firstName" placeholder="e.g. Alex" required />
                  </div>
                  <div className="field">
                    <label>Last Name <span className="req">*</span></label>
                    <input type="text" name="lastName" placeholder="e.g. Rivera" required />
                  </div>
                  <div className="field">
                    <label>Email Address <span className="req">*</span></label>
                    <input type="email" name="email" placeholder="hello@yoursite.com" required />
                  </div>
                  <div className="field">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="+91 9876543210" />
                  </div>
                  <div className="field">
                    <label>Country <span className="req">*</span></label>
                    <select name="country" required defaultValue="">
                      <option value="" disabled>Select your country</option>
                      <option>India</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>City</label>
                    <input type="text" name="city" placeholder="e.g. Mumbai" />
                  </div>

                  <span className="form-section-label">Creator Profile</span>
                  <div className="field">
                    <label>Primary Creator Handle / Name <span className="req">*</span></label>
                    <input type="text" name="handle" placeholder="@yourname" required />
                  </div>
                  <div className="field">
                    <label>Content Niche <span className="req">*</span></label>
                    <select name="niche" required defaultValue="">
                      <option value="" disabled>Select your niche</option>
                      <option>Gaming</option>
                      <option>Fashion</option>
                      <option>Food</option>
                      <option>Fitness</option>
                      <option>Comedy</option>
                      <option>Music</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Primary Platform(s) <span className="req">*</span></label>
                    <div className="checkbox-list">
                      {PLATFORM_OPTIONS.map((p) => (
                        <div className="checkbox-row" key={p}>
                          <input
                            type="checkbox"
                            id={`platform-${p}`}
                            checked={platforms.includes(p)}
                            onChange={() => togglePlatform(p)}
                          />
                          <label htmlFor={`platform-${p}`}>{p}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="field" style={{ marginTop: 22 }}>
                    <label>Total Followers / Subscribers <span className="req">*</span></label>
                    <select name="followers" required defaultValue="">
                      <option value="" disabled>Select range</option>
                      <option>Under 10K</option>
                      <option>10K–50K</option>
                      <option>50K–200K</option>
                      <option>200K–1M</option>
                      <option>1M+</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Link to your channel / profile <span className="req">*</span></label>
                    <input type="text" name="profileUrl" placeholder="https://" required />
                  </div>
                  <div className="field">
                    <label>Tell us about yourself &amp; why you'd like to join</label>
                    <textarea name="pitch" placeholder="Share a bit about your content and audience..." />
                  </div>

                  <hr className="divider" />

                  <div className="checkbox-list">
                    <div className="checkbox-row">
                      <input type="checkbox" id="agree-terms" required />
                      <label htmlFor="agree-terms">
                        I agree to the FanFest 2026 Terms &amp; Conditions and Privacy Policy *
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="submit-btn">Submit Application</button>
                  <p className="form-footnote">
                    By submitting, you consent to be contacted about your application.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="eyebrow-red">FAQ</span>
          <h2 className="section-title" style={{ marginBottom: 8 }}>
            COMMON QUESTIONS
          </h2>
          <div style={{ marginTop: 32 }}>
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  className={`faq-item${open ? ' open' : ''}`}
                  key={f.q}
                  onClick={() => setOpenFaq(open ? null : i)}
                >
                  <div className="faq-q">
                    {f.q}
                    <span className="faq-toggle">+</span>
                  </div>
                  <div className="faq-a">
                    <p>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer>
        <div className="flogo">
          FAN<span className="fest">FEST</span> 2026
        </div>
        <div className="fdate">August 14–16, 2026</div>
        <div className="flinks">
          <a href="#apply">Apply</a> · <a href="#about">About</a> · <a href="mailto:hello@fanfest2026.com">Contact</a>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --bg: #0a0a0a;
          --bg-2: #141414;
          --card: #161616;
          --border: #262626;
          --red: #ff3b3b;
          --red-dim: #e02f2f;
          --orange: #ff8c3b;
          --text: #f5f5f5;
          --muted: #9a9a9a;
        }
        * { box-sizing: border-box; }
        html, body {
          margin: 0; padding: 0; background: var(--bg); color: var(--text);
          font-family: 'Inter', sans-serif; scroll-behavior: smooth;
        }
        h1, h2, h3, .display {
          font-family: 'Anton', sans-serif; letter-spacing: 0.5px;
          text-transform: uppercase; line-height: 1.05;
        }
        a { color: inherit; text-decoration: none; }
        button { font-family: inherit; cursor: pointer; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

        .site-header {
          position: sticky; top: 0; z-index: 50;
          background: rgba(10, 10, 10, 0.9); backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--border);
        }
        .navrow {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 24px; max-width: 1100px; margin: 0 auto;
        }
        .logo { font-size: 22px; font-weight: 800; letter-spacing: 0.5px; }
        .logo .fest { color: var(--red); }
        .btn-apply {
          background: var(--red); color: #fff; font-weight: 700; padding: 12px 26px;
          border-radius: 999px; border: none; font-size: 15px;
          transition: transform .15s ease, background .15s ease;
        }
        .btn-apply:hover { background: var(--red-dim); transform: translateY(-1px); }

        .hero {
          padding: 64px 24px 0; text-align: center;
          background: radial-gradient(ellipse at 50% 0%, rgba(255, 59, 59, 0.12), transparent 60%), var(--bg);
          border-bottom: 1px solid var(--border);
        }
        .eyebrow {
          color: var(--red); font-weight: 700; font-size: 13px; letter-spacing: 2px;
          display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 20px;
        }
        .hero h1 { font-size: 44px; margin: 0 0 4px; }
        .hero h1 .accent { color: var(--red); }
        .hero p { color: var(--muted); max-width: 600px; margin: 24px auto; font-size: 16px; line-height: 1.6; }
        .hero-ctas { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin: 28px 0 44px; }
        .btn-outline {
          border: 1px solid #444; color: #fff; padding: 14px 30px; border-radius: 999px;
          font-weight: 600; background: transparent;
          transition: border-color .15s ease, background .15s ease;
        }
        .btn-outline:hover { border-color: #888; background: #1a1a1a; }
        .btn-primary-lg { background: var(--red); color: #fff; font-weight: 700; padding: 16px 34px; border-radius: 999px; border: none; font-size: 16px; }
        .btn-primary-lg:hover { background: var(--red-dim); }

        .stats { display: flex; justify-content: center; gap: 60px; flex-wrap: wrap; padding: 36px 24px; border-bottom: 1px solid var(--border); }
        .stat b { display: block; font-family: 'Anton', sans-serif; color: var(--orange); font-size: 28px; letter-spacing: 1px; }
        .stat span { color: var(--muted); font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; }

        section { padding: 64px 24px; border-bottom: 1px solid var(--border); }
        .eyebrow-red { color: var(--red); font-weight: 700; font-size: 13px; letter-spacing: 2px; margin-bottom: 10px; display: block; }
        .section-title { font-size: 36px; margin: 0 0 16px; }
        .section-lead { color: var(--muted); font-size: 16px; line-height: 1.6; max-width: 640px; margin: 0 0 40px; }

        .grid-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .card { background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 28px; transition: border-color .2s ease, transform .2s ease; }
        .card:hover { border-color: #3a3a3a; transform: translateY(-3px); }
        .icon-box { width: 52px; height: 52px; border-radius: 12px; background: rgba(255, 59, 59, 0.12); display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px; }
        .card h3 { font-family: 'Inter', sans-serif; text-transform: none; font-size: 19px; font-weight: 700; margin: 0 0 10px; letter-spacing: 0; }
        .card p { color: var(--muted); font-size: 14.5px; line-height: 1.55; margin: 0; }

        .perks-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .perk-card { background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 26px; display: flex; gap: 18px; }
        .perk-num { font-family: 'Anton', sans-serif; color: var(--red); font-size: 30px; min-width: 44px; }
        .perk-card h3 { font-family: 'Inter', sans-serif; text-transform: none; font-size: 18px; font-weight: 700; margin: 0 0 8px; letter-spacing: 0; }
        .perk-card p { color: var(--muted); font-size: 14.5px; line-height: 1.55; margin: 0; }

        .creator-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .creator-box { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 32px 12px; text-align: center; transition: border-color .2s ease, transform .2s ease; }
        .creator-box:hover { border-color: #3a3a3a; transform: translateY(-3px); }
        .creator-box .emoji { font-size: 32px; margin-bottom: 14px; display: block; }
        .creator-box span.label { font-weight: 600; font-size: 15px; }

        .timeline { position: relative; padding-left: 56px; }
        .tl-item { position: relative; padding-bottom: 44px; }
        .tl-item:last-child { padding-bottom: 0; }
        .tl-line { position: absolute; left: -38px; top: 36px; bottom: -8px; width: 2px; background: linear-gradient(var(--red), var(--orange)); }
        .tl-num { position: absolute; left: -56px; top: 0; width: 36px; height: 36px; border-radius: 50%; background: var(--red); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 15px; color: #fff; }
        .tl-date { color: var(--orange); font-weight: 700; font-size: 13px; letter-spacing: 1px; margin-bottom: 6px; }
        .tl-item h3 { font-family: 'Inter', sans-serif; text-transform: none; font-size: 19px; font-weight: 700; margin: 0 0 8px; letter-spacing: 0; }
        .tl-item p { color: var(--muted); font-size: 14.5px; line-height: 1.55; margin: 0; }

        .form-card { background: var(--card); border: 1px solid var(--border); border-radius: 24px; padding: 48px; }
        .form-title { font-size: 34px; margin: 0 0 12px; }
        .form-sub { color: var(--muted); margin: 0 0 36px; line-height: 1.6; }
        .form-section-label { color: var(--red); font-weight: 700; font-size: 12.5px; letter-spacing: 2px; margin: 32px 0 20px; text-transform: uppercase; display: block; }
        .field { margin-bottom: 22px; }
        .field label { display: block; font-size: 12.5px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #c9c9c9; margin-bottom: 10px; }
        .field label .req { color: var(--red); }
        .field input[type=text], .field input[type=email], .field input[type=tel], .field select, .field textarea {
          width: 100%; background: #0d0d0d; border: 1px solid #2c2c2c; border-radius: 10px;
          padding: 14px 16px; color: #fff; font-size: 15px; font-family: inherit; transition: border-color .15s ease;
        }
        .field input::placeholder, .field textarea::placeholder { color: #666; }
        .field input:focus, .field select:focus, .field textarea:focus { outline: none; border-color: var(--red); }
        .field textarea { resize: vertical; min-height: 100px; }
        .checkbox-list { display: flex; flex-direction: column; gap: 16px; }
        .checkbox-row { display: flex; align-items: flex-start; gap: 12px; }
        .checkbox-row input[type=checkbox] { width: 20px; height: 20px; flex: none; margin-top: 2px; accent-color: var(--red); background: #0d0d0d; border: 1px solid #444; }
        .checkbox-row label { color: var(--red); font-weight: 700; font-size: 14.5px; line-height: 1.4; text-transform: none; letter-spacing: 0; margin: 0; }
        hr.divider { border: none; border-top: 1px solid var(--border); margin: 32px 0; }
        .submit-btn { width: 100%; background: var(--red); color: #fff; font-weight: 700; font-size: 17px; padding: 18px; border: none; border-radius: 999px; margin-top: 8px; }
        .submit-btn:hover { background: var(--red-dim); }
        .form-footnote { color: var(--muted); font-size: 13.5px; text-align: center; margin-top: 16px; }

        .faq-item { border-bottom: 1px solid var(--border); padding: 22px 0; cursor: pointer; }
        .faq-item:first-child { border-top: 1px solid var(--border); }
        .faq-q { display: flex; align-items: center; justify-content: space-between; font-size: 17px; font-weight: 600; }
        .faq-toggle { color: var(--red); font-size: 22px; font-weight: 400; transition: transform .2s ease; flex: none; margin-left: 16px; }
        .faq-item.open .faq-toggle { transform: rotate(45deg); }
        .faq-a { max-height: 0; overflow: hidden; transition: max-height .25s ease; }
        .faq-item.open .faq-a { max-height: 200px; }
        .faq-a p { color: var(--muted); font-size: 14.5px; line-height: 1.6; margin: 14px 0 0; }

        footer { padding: 56px 24px 40px; text-align: center; }
        footer .flogo { font-size: 22px; font-weight: 800; color: #8a8a8a; margin-bottom: 12px; }
        footer .flogo .fest { color: var(--red); opacity: 0.85; }
        footer .fdate { color: var(--muted); font-size: 14px; margin-bottom: 18px; }
        footer .flinks { color: #777; font-size: 13.5px; }
        footer .flinks a { color: var(--red); }

        @media (max-width: 860px) {
          .grid-cards { grid-template-columns: 1fr; }
          .perks-grid { grid-template-columns: 1fr; }
          .creator-grid { grid-template-columns: repeat(2, 1fr); }
          .hero h1 { font-size: 32px; }
          .section-title { font-size: 28px; }
          .form-card { padding: 28px 20px; }
          .stats { gap: 32px; }
        }
      `}</style>
    </>
  );
}

