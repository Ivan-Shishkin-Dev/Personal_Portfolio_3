// ── Theme: read pref + inject toggle into the header ──────────────
(function () {
  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }
  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t); } catch (e) {}
    updateToggle();
  }
  function updateToggle() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    var t = currentTheme();
    btn.querySelector('.glyph').textContent = t === 'dark' ? '☾' : '☀';
    btn.querySelector('.label').textContent = t === 'dark' ? 'Night' : 'Day';
    btn.setAttribute('aria-label', t === 'dark' ? 'Switch to day mode' : 'Switch to night mode');
  }
  function injectToggle() {
    var meta = document.querySelector('.site-head .meta');
    if (!meta || meta.querySelector('.theme-toggle')) return;
    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.type = 'button';
    btn.innerHTML = '<span class="glyph"></span><span class="label"></span>';
    btn.addEventListener('click', function () {
      setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
    meta.appendChild(btn);
    updateToggle();
  }
  injectToggle();
})();

// ── Portrait carousel ─────────────────────────────────────────────
(function () {
  var root = document.querySelector('[data-portrait]');
  if (!root) return;
  var track   = root.querySelector('.portrait-track');
  var slides  = root.querySelectorAll('.portrait-slide');
  var prev    = root.querySelector('.portrait-nav.prev');
  var next    = root.querySelector('.portrait-nav.next');
  var counter = root.querySelector('.portrait-counter');
  var caption = root.querySelector('.portrait-caption');
  var i = 0;
  var n = slides.length;

  function render() {
    track.style.transform = 'translateX(-' + (i * 100) + '%)';
    counter.textContent = (i + 1) + ' / ' + n;
    var cap = slides[i].getAttribute('data-caption') || '';
    var date = slides[i].getAttribute('data-date') || '';
    caption.classList.add('fade');
    setTimeout(function () {
      caption.innerHTML = cap + (date ? '<span class="date">' + date + '</span>' : '');
      caption.classList.remove('fade');
    }, 150);
  }
  function go(d) { i = (i + d + n) % n; render(); }

  prev.addEventListener('click', function () { go(-1); });
  next.addEventListener('click', function () { go(1); });

  // Keyboard nav when carousel area is focused
  root.tabIndex = 0;
  root.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
  });

  // Touch / swipe
  var startX = 0, dx = 0, dragging = false;
  var viewport = root.querySelector('.portrait-viewport');
  viewport.addEventListener('touchstart', function (e) {
    dragging = true; startX = e.touches[0].clientX; dx = 0;
  }, { passive: true });
  viewport.addEventListener('touchmove', function (e) {
    if (!dragging) return; dx = e.touches[0].clientX - startX;
  }, { passive: true });
  viewport.addEventListener('touchend', function () {
    if (!dragging) return; dragging = false;
    if (Math.abs(dx) > 30) go(dx < 0 ? 1 : -1);
  });

  render();
})();
