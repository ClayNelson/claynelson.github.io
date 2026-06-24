(function () {
  if (window.__clayNavLoaded) return;
  window.__clayNavLoaded = true;
  if (document.body && document.body.getAttribute('data-no-nav') === 'true') return;

  var links = [
    { label: 'Clay Nelson', href: '/', brand: true },
    { label: 'Writing', href: '/#writing' },
    { label: 'Frameworks', href: '/#frameworks' },
    { label: 'Suite', href: '/#agentic-economics' },
    { label: 'Speaking', href: '/#speaking' }
  ];

  var css =
    '#clay-nav{position:fixed;top:0;left:0;right:0;z-index:1000;' +
    'display:flex;align-items:center;gap:22px;' +
    'padding:0 24px;height:52px;' +
    'font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;' +
    'background:rgba(250,248,243,0.85);backdrop-filter:saturate(180%) blur(12px);' +
    '-webkit-backdrop-filter:saturate(180%) blur(12px);' +
    'border-bottom:1px solid rgba(26,26,26,0.08);}' +
    '#clay-nav .clay-nav-inner{display:flex;align-items:center;gap:22px;' +
    'width:100%;max-width:728px;margin:0 auto;}' +
    '#clay-nav a{text-decoration:none;color:#5F5E5A;font-size:13px;' +
    'letter-spacing:0.02em;transition:color .15s;white-space:nowrap;}' +
    '#clay-nav a:hover{color:#A8641E;}' +
    '#clay-nav a.clay-brand{color:#1A1A1A;font-weight:500;font-size:14px;' +
    'margin-right:auto;letter-spacing:-0.01em;}' +
    '#clay-nav a.clay-brand:hover{color:#A8641E;}' +
    'body{padding-top:52px;}' +
    '@media (max-width:560px){#clay-nav{gap:14px;padding:0 16px;height:48px;}' +
    '#clay-nav .clay-nav-inner{gap:14px;}' +
    '#clay-nav a{font-size:12px;}body{padding-top:48px;}}' +
    '@media (prefers-color-scheme:dark){' +
    '#clay-nav{background:rgba(22,22,20,0.85);border-bottom-color:rgba(237,234,225,0.08);}' +
    '#clay-nav a{color:#A8A59C;}#clay-nav a:hover{color:#D9904E;}' +
    '#clay-nav a.clay-brand{color:#EDEAE1;}#clay-nav a.clay-brand:hover{color:#D9904E;}}';

  var style = document.createElement('style');
  style.id = 'clay-nav-style';
  style.textContent = css;
  document.head.appendChild(style);

  var nav = document.createElement('nav');
  nav.id = 'clay-nav';
  nav.setAttribute('aria-label', 'Site');
  var inner = document.createElement('div');
  inner.className = 'clay-nav-inner';

  links.forEach(function (l) {
    var a = document.createElement('a');
    a.href = l.href;
    a.textContent = l.label;
    if (l.brand) a.className = 'clay-brand';
    inner.appendChild(a);
  });
  nav.appendChild(inner);

  function mount() {
    if (document.getElementById('clay-nav')) return;
    document.body.insertBefore(nav, document.body.firstChild);
  }
  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
