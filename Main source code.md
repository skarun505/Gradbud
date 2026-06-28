<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Study in Moldova — Gradbud</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --black: #1A1A1A;
    --dark: #111111;
    --orange: #F5620F;
    --white: #FFFFFF;
    --off-white: #F7F7F7;
    --muted: #6B6B6B;
    --border: #E0E0E0;
    --error: #E53E3E;
  }

  html { scroll-behavior: smooth; scroll-padding-top: 70px; }

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: var(--off-white);
    color: var(--black);
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* NAV */
  nav {
    background: var(--dark);
    padding: 14px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .logo { line-height: 1; }

  .logo-text {
    font-weight: 800;
    font-size: 22px;
    color: var(--white);
    letter-spacing: -0.3px;
    display: block;
  }

  .logo-text span { color: var(--orange); }

  .logo-tagline {
    font-size: 9px;
    letter-spacing: 2.5px;
    color: rgba(255,255,255,0.35);
    text-transform: lowercase;
    display: block;
    margin-top: 2px;
  }

  .nav-cta {
    background: var(--orange);
    color: var(--white);
    font-weight: 700;
    font-size: 13px;
    padding: 10px 16px;
    border-radius: 6px;
    text-decoration: none;
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* HERO */
  .hero {
    background: var(--dark);
    padding: 40px 20px 52px;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 240px; height: 240px;
    background: var(--orange);
    opacity: 0.05;
    border-radius: 50%;
  }

  .hero-eyebrow {
    display: inline-block;
    background: rgba(245,98,15,0.15);
    color: var(--orange);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 6px 12px;
    border-radius: 4px;
    margin-bottom: 18px;
    border: 1px solid rgba(245,98,15,0.2);
  }

  .hero h1 {
    font-weight: 800;
    font-size: 30px;
    line-height: 1.15;
    color: var(--white);
    margin-bottom: 16px;
    letter-spacing: -0.5px;
  }

  .hero h1 em {
    font-style: normal;
    color: var(--orange);
  }

  .hero-sub {
    font-size: 15px;
    color: rgba(255,255,255,0.65);
    margin-bottom: 32px;
    line-height: 1.7;
  }

  .btn-primary {
    display: block;
    width: 100%;
    background: var(--orange);
    color: var(--white);
    font-weight: 700;
    font-size: 15px;
    padding: 17px 24px;
    border-radius: 8px;
    text-align: center;
    text-decoration: none;
    border: none;
    cursor: pointer;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  /* TRUST BAR */
  .trust-bar {
    background: #1e1e1e;
    padding: 14px 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px 16px;
    justify-content: center;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .trust-item {
    color: rgba(255,255,255,0.75);
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .trust-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: var(--orange);
    flex-shrink: 0;
  }

  /* SECTIONS */
  .section { padding: 44px 20px; }

  .section-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--orange);
    margin-bottom: 10px;
  }

  .section-title {
    font-weight: 800;
    font-size: 22px;
    line-height: 1.25;
    color: var(--black);
    margin-bottom: 8px;
    letter-spacing: -0.3px;
  }

  .section-sub {
    font-size: 14px;
    color: var(--muted);
    margin-bottom: 24px;
    line-height: 1.65;
  }

  /* HIGHLIGHTS */
  .highlights-grid {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .highlight-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 18px;
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }

  .highlight-icon {
    width: 40px; height: 40px;
    background: rgba(245,98,15,0.08);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }

  .highlight-title {
    font-weight: 700;
    font-size: 14px;
    color: var(--black);
    margin-bottom: 3px;
  }

  .highlight-desc {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.55;
  }

  /* PART TIME BANNER */
  .parttime-banner {
    background: var(--orange);
    border-radius: 10px;
    padding: 20px;
    margin-top: 14px;
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }

  .parttime-icon { font-size: 24px; flex-shrink: 0; margin-top: 2px; }

  .parttime-title {
    font-weight: 700;
    font-size: 15px;
    color: var(--white);
    margin-bottom: 6px;
    line-height: 1.3;
  }

  .parttime-desc {
    font-size: 13px;
    color: rgba(255,255,255,0.85);
    line-height: 1.6;
  }

  /* REALITY CHECK */
  .reality-section {
    background: var(--dark);
    padding: 44px 20px;
  }

  .reality-section .section-label { color: rgba(245,98,15,0.8); }
  .reality-section .section-title { color: var(--white); }
  .reality-section .section-sub { color: rgba(255,255,255,0.55); }

  .reality-grid {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .reality-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 10px;
    padding: 16px 18px;
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }

  .reality-check {
    color: var(--orange);
    font-size: 16px;
    margin-top: 1px;
    flex-shrink: 0;
    font-weight: 700;
  }

  .reality-text {
    font-size: 13px;
    color: rgba(255,255,255,0.75);
    line-height: 1.6;
  }

  .reality-text strong {
    color: var(--white);
    font-weight: 700;
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
  }

  /* VIDEO SLIDER */
  .video-section {
    padding: 44px 0 44px 20px;
    background: var(--off-white);
    overflow: hidden;
  }

  .video-section-header {
    padding-right: 20px;
    margin-bottom: 20px;
  }

  .video-slider {
    display: flex;
    gap: 14px;
    overflow-x: auto;
    padding-right: 20px;
    padding-bottom: 4px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .video-slider::-webkit-scrollbar { display: none; }

  .video-slide {
    flex: 0 0 72vw;
    max-width: 280px;
    scroll-snap-align: start;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    background: var(--black);
    aspect-ratio: 9/16;
  }

  .video-slide video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 12px;
  }

  .video-label {
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    background: rgba(0,0,0,0.65);
    color: white;
    font-size: 12px;
    font-weight: 500;
    padding: 7px 10px;
    border-radius: 6px;
    backdrop-filter: blur(4px);
    pointer-events: none;
  }

  .slider-hint {
    font-size: 12px;
    color: var(--muted);
    margin-top: 12px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* PROCESS */
  .process-section {
    padding: 44px 20px;
    background: var(--white);
  }

  .process-steps { display: flex; flex-direction: column; margin-top: 24px; }

  .process-step {
    display: flex;
    gap: 16px;
    padding-bottom: 24px;
  }

  .process-step:last-child { padding-bottom: 0; }

  .step-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
  }

  .step-num {
    width: 34px; height: 34px;
    background: var(--orange);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 13px;
    flex-shrink: 0;
  }

  .step-line {
    width: 2px;
    flex: 1;
    background: var(--border);
    margin-top: 6px;
  }

  .process-step:last-child .step-line { display: none; }

  .step-content { padding-top: 5px; }

  .step-title {
    font-weight: 700;
    font-size: 14px;
    color: var(--black);
    margin-bottom: 3px;
  }

  .step-desc {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.6;
  }

  /* COUNSELOR */
  .counselor-section {
    background: var(--dark);
    padding: 44px 20px;
  }

  .counselor-section .section-label { color: rgba(245,98,15,0.8); }
  .counselor-section .section-title { color: var(--white); }

  .counselor-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 22px;
    margin-top: 20px;
  }

  .counselor-name {
    font-weight: 800;
    font-size: 18px;
    color: var(--white);
    margin-bottom: 3px;
  }

  .counselor-role {
    font-size: 12px;
    color: var(--orange);
    font-weight: 600;
    margin-bottom: 14px;
    letter-spacing: 0.3px;
  }

  .counselor-bio {
    font-size: 13px;
    color: rgba(255,255,255,0.65);
    line-height: 1.7;
    margin-bottom: 18px;
  }

  .counselor-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .counselor-stat {
    background: rgba(255,255,255,0.05);
    border-radius: 8px;
    padding: 12px;
    text-align: center;
  }

  .stat-num {
    font-weight: 800;
    font-size: 20px;
    color: var(--orange);
    display: block;
  }

  .stat-label {
    font-size: 11px;
    color: rgba(255,255,255,0.5);
    margin-top: 2px;
    line-height: 1.4;
  }

  /* FORM */
  .form-section {
    padding: 44px 20px;
    background: var(--off-white);
  }

  .form-card {
    background: var(--white);
    border-radius: 14px;
    padding: 24px 20px;
    border: 1px solid var(--border);
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }

  .form-title {
    font-weight: 800;
    font-size: 20px;
    color: var(--black);
    margin-bottom: 5px;
    letter-spacing: -0.3px;
  }

  .form-sub {
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 24px;
    line-height: 1.55;
  }

  .form-group { margin-bottom: 16px; }

  .form-label {
    display: block;
    font-size: 12px;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 5px;
    letter-spacing: 0.2px;
  }

  .form-label .req { color: var(--error); margin-left: 2px; }

  input, select {
    width: 100%;
    padding: 13px 14px;
    border: 1.5px solid var(--border);
    border-radius: 8px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    color: var(--black);
    background: var(--white);
    transition: border-color 0.2s;
    appearance: none;
    -webkit-appearance: none;
  }

  input:focus, select:focus {
    outline: none;
    border-color: var(--orange);
  }

  select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B6B6B' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 40px;
    cursor: pointer;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .other-course-field { display: none; margin-top: 10px; }
  .other-course-field.visible { display: block; }

  .marks-note {
    font-size: 11px;
    color: var(--muted);
    margin-top: 5px;
  }

  .intake-options {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .intake-option {
    border: 1.5px solid var(--border);
    border-radius: 8px;
    padding: 12px 14px;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    transition: border-color 0.2s, background 0.2s;
  }

  .intake-option:has(input:checked) {
    border-color: var(--orange);
    background: rgba(245,98,15,0.04);
  }

  .intake-option input[type="radio"] {
    width: 16px; height: 16px;
    margin: 0; padding: 0;
    flex-shrink: 0;
    accent-color: var(--orange);
    margin-top: 2px;
  }

  .intake-name {
    font-weight: 700;
    font-size: 13px;
    color: var(--black);
    display: block;
  }

  .intake-badge {
    display: inline-block;
    background: var(--orange);
    color: white;
    font-size: 9px;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 3px;
    margin-left: 5px;
    letter-spacing: 0.3px;
  }

  .intake-note {
    font-size: 11px;
    color: var(--muted);
    margin-top: 2px;
    display: block;
  }

  .submit-btn {
    width: 100%;
    background: var(--orange);
    color: var(--white);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
    font-size: 15px;
    padding: 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    margin-top: 8px;
  }

  .submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .form-privacy {
    font-size: 11px;
    color: var(--muted);
    text-align: center;
    margin-top: 12px;
    line-height: 1.5;
  }

  /* SUCCESS */
  .success-state { display: none; text-align: center; padding: 36px 16px; }
  .success-state.visible { display: block; }
  .form-fields.hidden { display: none; }

  .success-icon { font-size: 44px; margin-bottom: 14px; }

  .success-title {
    font-weight: 800;
    font-size: 20px;
    color: var(--black);
    margin-bottom: 8px;
  }

  .success-sub {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.6;
  }

  /* FOOTER */
  footer {
    background: var(--dark);
    padding: 28px 20px;
    text-align: center;
  }

  .footer-logo {
    font-weight: 800;
    font-size: 20px;
    color: var(--white);
    margin-bottom: 2px;
  }

  .footer-logo span { color: var(--orange); }

  .footer-tagline {
    font-size: 9px;
    color: rgba(255,255,255,0.3);
    letter-spacing: 2px;
    text-transform: lowercase;
    margin-bottom: 16px;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 14px;
  }

  .footer-links a {
    font-size: 12px;
    color: rgba(255,255,255,0.4);
    text-decoration: none;
  }

  .footer-copy {
    font-size: 11px;
    color: rgba(255,255,255,0.2);
  }

  /* RESPONSIVE */
  @media (max-width: 360px) {
    .form-row { grid-template-columns: 1fr; }
    .hero h1 { font-size: 26px; }
    .video-slide { flex: 0 0 82vw; }
  }

  @media (min-width: 480px) {
    .hero h1 { font-size: 36px; }
    .video-slide { flex: 0 0 60vw; max-width: 260px; }
  }

  @media (min-width: 768px) {
    .hero { padding: 64px 40px 72px; }
    .hero h1 { font-size: 48px; }
    .section { padding: 60px 40px; }
    .highlights-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .reality-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .video-section { padding: 60px 0 60px 40px; }
    .video-slide { flex: 0 0 260px; max-width: 260px; }
    .form-card { padding: 36px 32px; }
    .counselor-section { padding: 60px 40px; }
    .process-section { padding: 60px 40px; }
    .reality-section { padding: 60px 40px; }
  }

  @media (prefers-reduced-motion: reduce) {
    * { transition: none !important; scroll-behavior: auto !important; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="logo">
    <span class="logo-text">Grad<span>bud.</span></span>
    <span class="logo-tagline">dreams to degrees</span>
  </div>
  <a href="#apply" class="nav-cta">Talk to a Counselor</a>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-eyebrow">Study in Moldova — September 2026 Intake Open</div>
  <h1>Why study in India<br>when <em>Moldova exists?</em></h1>
  <p class="hero-sub">Internationally recognised degrees in BBA, MBA, Veterinary Medicine and MBBS — the freedom to earn while you study, at a similar cost to colleges in India. Talk to a counselor from Dr. Ashish's team and find out if Moldova is the right move for you.</p>
  <a href="#apply" class="btn-primary">Talk to a Counselor →</a>
</section>

<!-- TRUST BAR -->
<div class="trust-bar">
  <div class="trust-item"><div class="trust-dot"></div>September 2026 Intake Open</div>
  <div class="trust-item"><div class="trust-dot"></div>Limited Seats</div>
  <div class="trust-item"><div class="trust-dot"></div>Free Counseling Session</div>
</div>

<!-- HIGHLIGHTS -->
<section class="section" style="background: var(--white);">
  <div class="section-label">Why Moldova</div>
  <div class="section-title">A degree abroad that actually makes sense</div>
  <p class="section-sub">Most students never consider Moldova — not because it isn't good, but because nobody explained it properly. BBA, MBA, Veterinary Medicine, MBBS — all available, all internationally recognised.</p>

  <div class="highlights-grid">
    <div class="highlight-card">
      <div class="highlight-icon">🎓</div>
      <div>
        <div class="highlight-title">Internationally recognised degrees</div>
        <div class="highlight-desc">BBA, MBA, Veterinary Medicine, and MBBS from recognised European universities — accepted by employers and institutions worldwide.</div>
      </div>
    </div>
    <div class="highlight-card">
      <div class="highlight-icon">🌍</div>
      <div>
        <div class="highlight-title">Early international exposure</div>
        <div class="highlight-desc">Living and studying independently in Europe builds a mindset that no Indian campus can replicate.</div>
      </div>
    </div>
    <div class="highlight-card">
      <div class="highlight-icon">📋</div>
      <div>
        <div class="highlight-title">Low entry barrier</div>
        <div class="highlight-desc">Open to 12th pass students. No entrance exam. No cutthroat competition for limited government seats.</div>
      </div>
    </div>
    <div class="highlight-card">
      <div class="highlight-icon">💰</div>
      <div>
        <div class="highlight-title">Similar cost to India</div>
        <div class="highlight-desc">Tuition and living costs are comparable to private colleges in India — with an international degree at the end of it.</div>
      </div>
    </div>
  </div>

  <div class="parttime-banner">
    <div class="parttime-icon">⚡</div>
    <div>
      <div class="parttime-title">The real reason this works: you can earn while you study</div>
      <div class="parttime-desc">Students in Moldova are permitted to work part-time during their degree. Whether you're a student looking to support yourself or a parent thinking about the financial picture — this is the detail that changes everything. Across all programs — BBA, MBA, Veterinary Medicine, MBBS — students in Moldova are legally permitted to work part-time.</div>
    </div>
  </div>
</section>

<!-- REALITY CHECK -->
<section class="reality-section">
  <div class="section-label">Be Informed</div>
  <div class="section-title">What you should know before deciding</div>
  <p class="section-sub">We believe in giving you the full picture — not just the highlights.</p>

  <div class="reality-grid">
    <div class="reality-card">
      <div class="reality-check">✓</div>
      <div class="reality-text">
        <strong>This is not a migration pathway</strong>
        Moldova does not offer post-study stay-back options. This is purely an education decision, not a route to permanent residency abroad.
      </div>
    </div>
    <div class="reality-card">
      <div class="reality-check">✓</div>
      <div class="reality-text">
        <strong>Students manage their own life</strong>
        Living independently in another country requires maturity. Students handle their own day-to-day responsibilities — which is also what makes the experience genuinely valuable.
      </div>
    </div>
    <div class="reality-card">
      <div class="reality-check">✓</div>
      <div class="reality-text">
        <strong>Part-time work is permitted, not guaranteed</strong>
        Students can legally work part-time. How much they earn depends on their own initiative and the opportunities they pursue.
      </div>
    </div>
    <div class="reality-card">
      <div class="reality-check">✓</div>
      <div class="reality-text">
        <strong>Our counselors will tell you everything</strong>
        If Moldova isn't the right fit, we'll say so. We only move forward when we genuinely believe this is the right decision.
      </div>
    </div>
  </div>
</section>

<!-- VIDEO SLIDER -->
<section class="video-section">
  <div class="video-section-header">
    <div class="section-label">Hear From Students</div>
    <div class="section-title">Real students. Real experiences.</div>
    <p class="section-sub">Not scripts. Not actors. Students across programs who made the decision and are living it.</p>
  </div>
  <div class="video-slider">
    <div class="video-slide">
      <video src="Patricks BBA Testimonial 2 March edited.mp4" playsinline controls preload="metadata"></video>
      <div class="video-label">Student Testimonial — Moldova</div>
    </div>
    <div class="video-slide">
      <video src="BBA Airport Testimonial (1).mp4" playsinline controls preload="metadata"></video>
      <div class="video-label">Why I chose Moldova over a private college</div>
    </div>
  </div>
  <div class="slider-hint">← Swipe to see more</div>
</section>

<!-- PROCESS -->
<section class="process-section">
  <div class="section-label">What Happens Next</div>
  <div class="section-title">Simple. No pressure. No rush.</div>
  <p class="section-sub">Here's exactly what to expect after you reach out.</p>
  <div class="process-steps">
    <div class="process-step">
      <div class="step-left"><div class="step-num">1</div><div class="step-line"></div></div>
      <div class="step-content">
        <div class="step-title">You share your details</div>
        <div class="step-desc">Fill the form below — no documents needed at this stage.</div>
      </div>
    </div>
    <div class="process-step">
      <div class="step-left"><div class="step-num">2</div><div class="step-line"></div></div>
      <div class="step-content">
        <div class="step-title">A counselor from Dr. Ashish's team calls you</div>
        <div class="step-desc">Someone who knows Moldova inside out will reach out within 24 hours to understand your situation and answer every question honestly.</div>
      </div>
    </div>
    <div class="process-step">
      <div class="step-left"><div class="step-num">3</div><div class="step-line"></div></div>
      <div class="step-content">
        <div class="step-title">You decide — with full information</div>
        <div class="step-desc">No pressure, no urgency tactics. If Moldova is right for you, we'll show you exactly how to get there. If it isn't, we'll tell you that too.</div>
      </div>
    </div>
    <div class="process-step">
      <div class="step-left"><div class="step-num">4</div><div class="step-line"></div></div>
      <div class="step-content">
        <div class="step-title">We handle everything from here</div>
        <div class="step-desc">Applications, documentation, visa guidance — all of it. You focus on getting ready. We handle the process.</div>
      </div>
    </div>
  </div>
</section>

<!-- COUNSELOR -->
<section class="counselor-section">
  <div class="section-label">Your Counselor</div>
  <div class="section-title">Talk to someone who actually knows Moldova</div>
  <div class="counselor-card">
    <div class="counselor-name">Dr. Ashish's Team</div>
    <div class="counselor-role">Study Abroad Counselors — Moldova Specialists</div>
    <div class="counselor-bio">Dr. Ashish and his team have been placing students in Moldova for over a decade — across BBA, MBA, Veterinary Medicine, and MBBS programs. They know the universities, the student life, the costs, the challenges, and the opportunities from personal experience, not brochures. Your session is a real conversation, not a sales pitch.</div>
    <div class="counselor-stats">
      <div class="counselor-stat">
        <span class="stat-num">500+</span>
        <div class="stat-label">Students placed in Moldova</div>
      </div>
      <div class="counselor-stat">
        <span class="stat-num">12yrs</span>
        <div class="stat-label">Moldova expertise</div>
      </div>
      <div class="counselor-stat">
        <span class="stat-num">100%</span>
        <div class="stat-label">Honest assessment policy</div>
      </div>
      <div class="counselor-stat">
        <span class="stat-num">Free</span>
        <div class="stat-label">Initial counseling session</div>
      </div>
    </div>
  </div>
</section>

<!-- FORM -->
<section class="form-section" id="apply">
  <div class="form-card">
    <div class="form-title">Talk to a Counselor</div>
    <p class="form-sub">Share a few details and someone from Dr. Ashish's team will reach out within 24 hours.</p>

    <form id="gradbudForm">
      <div class="form-fields">

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Full Name <span class="req">*</span></label>
            <input type="text" name="name" placeholder="Your name" required>
          </div>
          <div class="form-group">
            <label class="form-label">Phone Number <span class="req">*</span></label>
            <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">City <span class="req">*</span></label>
          <input type="text" name="city" placeholder="Which city are you from?" required>
        </div>

        <div class="form-group">
          <label class="form-label">Program of Interest <span class="req">*</span></label>
          <select name="program" id="programSelect" required onchange="handleProgramChange(this)">
            <option value="">Select a program</option>
            <option value="BBA in Moldova">BBA in Moldova</option>
            <option value="MBA in Moldova">MBA in Moldova</option>
            <option value="Veterinary Medicine in Moldova">Veterinary Medicine in Moldova</option>
            <option value="MBBS in Moldova">MBBS in Moldova</option>
            <option value="other">Other — I'll specify below</option>
          </select>
          <div class="other-course-field" id="otherCourseField">
            <input type="text" name="other_program" placeholder="Please specify course and country">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Highest Qualification <span class="req">*</span></label>
          <select name="qualification" required>
            <option value="">Select qualification</option>
            <option value="10th">10th (SSLC)</option>
            <option value="12th">12th (Plus Two / HSE)</option>
            <option value="diploma">Diploma</option>
            <option value="degree">Degree (Undergraduate)</option>
            <option value="postgraduate">Postgraduate</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Percentage / Grade in Last Qualification <span class="req">*</span></label>
          <select name="marks" required>
            <option value="">Select range</option>
            <option value="90+">90% and above</option>
            <option value="80-90">80% – 90%</option>
            <option value="70-80">70% – 80%</option>
            <option value="60-70">60% – 70%</option>
            <option value="below-60">Below 60%</option>
            <option value="not-complete">Still studying — results not yet complete</option>
          </select>
          <div class="marks-note">Select "Still studying" if you haven't received your results yet.</div>
        </div>

        <div class="form-group">
          <label class="form-label">Preferred Intake <span class="req">*</span></label>
          <div class="intake-options">
            <label class="intake-option">
              <input type="radio" name="intake" value="September 2026" required>
              <div>
                <span class="intake-name">September 2026 <span class="intake-badge">Recommended</span></span>
                <span class="intake-note">Applications closing soon — limited seats available</span>
              </div>
            </label>
            <label class="intake-option">
              <input type="radio" name="intake" value="February 2027">
              <div>
                <span class="intake-name">February 2027</span>
                <span class="intake-note">Next available intake — more time to prepare</span>
              </div>
            </label>
          </div>
        </div>

        <button type="submit" class="submit-btn">Request My Free Counseling Session →</button>
        <p class="form-privacy">Your details are shared only with Gradbud's counseling team. We do not share your information with third parties.</p>
      </div>

      <div class="success-state" id="successState">
        <div class="success-icon">✅</div>
        <div class="success-title">We've received your details</div>
        <p class="success-sub">Someone from Dr. Ashish's team will call you within 24 hours.</p>
      </div>
    </form>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">Grad<span>bud.</span></div>
  <div class="footer-tagline">dreams to degrees</div>
  <div class="footer-links">
    <a href="#">Privacy Policy</a>
    <a href="#">Terms</a>
  </div>
  <div class="footer-copy">© 2026 Gradbud. All rights reserved.</div>
</footer>

<script>
  function handleProgramChange(select) {
    const otherField = document.getElementById('otherCourseField');
    if (select.value === 'other') {
      otherField.classList.add('visible');
      otherField.querySelector('input').required = true;
    } else {
      otherField.classList.remove('visible');
      otherField.querySelector('input').required = false;
    }
  }

  document.getElementById('gradbudForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const btn = form.querySelector('.submit-btn');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const response = await fetch('https://formspree.io/f/xwvdodrz', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        document.querySelector('.form-fields').classList.add('hidden');
        document.getElementById('successState').classList.add('visible');
        window.scrollTo({ top: document.getElementById('apply').offsetTop - 80, behavior: 'smooth' });
      } else {
        btn.textContent = 'Request My Free Counseling Session →';
        btn.disabled = false;
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      btn.textContent = 'Request My Free Counseling Session →';
      btn.disabled = false;
      alert('Something went wrong. Please try again.');
    }
  });
</script>

</body>
</html>

