// Digitinize Creative — menu, header state, hero timecode. No dependencies.
(function () {
  var header = document.querySelector('.site-header');
  var btn = document.querySelector('.menu-btn');
  var links = document.getElementById('nav-links');
  function setOpen(open) {
    header.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    btn.querySelector('path').setAttribute('d', open ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16');
  }
  if (btn) {
    btn.addEventListener('click', function () { setOpen(btn.getAttribute('aria-expanded') !== 'true'); });
    links.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hero monitor timecode — HH:MM:SS:FF at 25 fps, runs only while the monitor is on screen.
  var tc = document.getElementById('tc');
  var frame = document.querySelector('.hero .frame');
  if (tc && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    var frames = 3748 + 8; // starts on 00:01:24:08
    var last = 0, running = false, rafId = null;
    function pad(n, w) { n = String(n); while (n.length < w) n = '0' + n; return n; }
    function tick(now) {
      if (!running) { rafId = null; return; }
      if (now - last >= 1000 / 25) {
        last = now;
        var f = frames % 25, s = Math.floor(frames / 25) % 60,
            m = Math.floor(frames / 1500) % 60, h = Math.floor(frames / 90000);
        tc.textContent = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(f, 2);
        frames++;
      }
      rafId = requestAnimationFrame(tick);
    }
    new IntersectionObserver(function (entries) {
      running = entries[0].isIntersecting;
      if (running && rafId === null) { last = 0; rafId = requestAnimationFrame(tick); }
    }, { threshold: 0 }).observe(frame);
  }
})();
