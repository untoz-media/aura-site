const app = document.querySelector('#app');

app.innerHTML = `
  <header class="site-header shell">
    <a class="brand" href="#top" aria-label="AURA home">
      <span class="brand-mark" aria-hidden="true"><span></span></span>
      <span>AURA-1</span>
    </a>
    <nav class="nav" aria-label="Primary navigation">
      <a href="#features">Features</a>
      <a href="#download">Download</a>
      <a href="#docs">Documentation</a>
      <a href="https://github.com/untoz-media/AURA-1">GitHub</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero shell">
      <div class="hero-copy">
        <div class="eyebrow">AURA-1 · ALPHA 0.1 · PRE-RELEASE</div>
        <h1>AI that lives<br/>on your computer.</h1>
        <p class="hero-text">AURA-1 is Untoz's local-first personal AI assistant — built to run on your own machine, understand your system and grow into a practical everyday companion.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#download">Download Alpha 0.1</a>
          <a class="button button-secondary" href="#docs">Read the docs</a>
        </div>
        <div class="hero-meta">Windows · Local-first · Experimental</div>
      </div>

      <div class="hero-visual" aria-label="Animated AURA Core">
        <div class="planet-glow"></div>
        <div class="aura-core aura-core-large">
          <span class="wing wing-left"></span>
          <span class="wing wing-right"></span>
          <span class="node node-left"></span>
          <span class="node node-right"></span>
          <span class="ring ring-one"></span>
          <span class="ring ring-two"></span>
          <span class="core"></span>
        </div>
      </div>
    </section>

    <section class="manifesto shell">
      <p class="kicker">MEET AURA-1</p>
      <h2>Built closer to you.</h2>
      <p>AURA-1 starts with a simple idea: useful AI does not always need to live in a distant data centre. The current Alpha runs locally, while Untoz builds the interface, memory, orchestration and tools around it.</p>
    </section>

    <section class="feature-grid shell" id="features">
      <article>
        <span class="index">01</span>
        <h3>Local-first</h3>
        <p>Designed to run on your own computer instead of depending on a giant Untoz cloud infrastructure.</p>
      </article>
      <article>
        <span class="index">02</span>
        <h3>System aware</h3>
        <p>Early tools can inspect selected system information such as your operating system and logical CPU count.</p>
      </article>
      <article>
        <span class="index">03</span>
        <h3>Memory & tools</h3>
        <p>The Alpha combines local conversation with memory, calculation, date and time, and controlled project file-name lookup.</p>
      </article>
      <article>
        <span class="index">04</span>
        <h3>Built in public</h3>
        <p>AURA-1 is experimental. Alpha releases are where the product learns, changes and gets better.</p>
      </article>
    </section>

    <section class="core-section shell">
      <div>
        <p class="kicker">AURA CORE</p>
        <h2>A visual identity that feels alive.</h2>
        <p>The AURA Core is more than a logo. It is designed to become a living interface state for listening, thinking, generating and speaking.</p>
      </div>
      <div class="states">
        ${['Idle','Thinking','Generating','Listening','Speaking'].map((state, i) => `
          <div class="state-card">
            <div class="mini-core state-${i}"><span></span></div>
            <strong>${state}</strong>
          </div>`).join('')}
      </div>
    </section>

    <section class="download shell" id="download">
      <div class="download-card">
        <div>
          <p class="kicker">CURRENT RELEASE</p>
          <h2>AURA-1 Alpha 0.1</h2>
          <p>The first public pre-release. Early, experimental and made for testing.</p>
          <div class="release-badges">
            <span>Windows</span><span>Alpha</span><span>Local</span>
          </div>
        </div>
        <div class="download-actions">
          <a class="button button-primary" href="https://github.com/untoz-media/AURA-1" target="_blank" rel="noreferrer">View AURA-1 on GitHub</a>
          <small>Public installer/package download will be added here when the Alpha build is published as a release.</small>
        </div>
      </div>
    </section>

    <section class="docs shell" id="docs">
      <div class="docs-intro">
        <p class="kicker">DOCUMENTATION</p>
        <h2>Start with the Alpha.</h2>
        <p>Everything you need to get AURA-1 running locally and understand what this pre-release can — and cannot — do yet.</p>
      </div>
      <div class="docs-links">
        <a href="https://github.com/untoz-media/AURA-1#readme" target="_blank" rel="noreferrer"><span>Quick start</span><b>↗</b></a>
        <a href="https://github.com/untoz-media/AURA-1/blob/main/docs/web.md" target="_blank" rel="noreferrer"><span>Web interface</span><b>↗</b></a>
        <a href="https://github.com/untoz-media/AURA-1" target="_blank" rel="noreferrer"><span>Repository</span><b>↗</b></a>
        <a href="https://github.com/untoz-media/AURA-1/issues" target="_blank" rel="noreferrer"><span>Report an issue</span><b>↗</b></a>
      </div>
    </section>

    <section class="closing shell">
      <div class="aura-core aura-core-small" aria-hidden="true">
        <span class="ring ring-one"></span><span class="core"></span>
      </div>
      <p class="kicker">AURA-1 BY UNTOZ</p>
      <h2>This is only the beginning.</h2>
      <p>AI that lives on your computer.</p>
    </section>
  </main>

  <footer class="footer shell">
    <span>© 2026 Untoz</span>
    <div><a href="https://github.com/untoz-media/AURA-1">AURA-1 GitHub</a><a href="https://untoz.site">Untoz</a></div>
  </footer>
`;
