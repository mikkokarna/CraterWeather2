// spotinfo.js

function readySpotInfo(fn) {
  if (document.body) fn();
  else setTimeout(() => readySpotInfo(fn), 50);
}

readySpotInfo(() => {
  // Luo Spot Info -paneeli
  const panel = document.createElement('div');
  panel.id = 'spotinfo-panel';
  panel.innerHTML = `
    <div class="si-header" id="siHeader">
      <div class="si-brand">
        <!-- Karttaneula-logo -->
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10Z"
                fill="none" stroke="#222" stroke-width="2"/>
          <circle cx="12" cy="11" r="2.5" stroke="#222" stroke-width="2" fill="none"/>
        </svg>
        <span class="si-title">Spot Info</span>
      </div>
      <button class="si-toggle" id="siToggle" title="Piilota / näytä" aria-expanded="true">–</button>
    </div>
    <div class="si-body" id="siBody">
      <p>Tähän tulee valitun spotin lisätiedot.</p>
    </div>
  `;
  document.body.appendChild(panel);

  // Minimointi
  const siToggle = panel.querySelector('#siToggle');
  const siHeader = panel.querySelector('#siHeader');
  function setCollapsed(collapsed) {
    panel.classList.toggle('collapsed', collapsed);
    siToggle?.setAttribute('aria-expanded', (!collapsed).toString());
  }
  setCollapsed(false);

  siToggle.addEventListener('click', e => {
    e.stopPropagation();
    setCollapsed(!panel.classList.contains('collapsed'));
  });
  siHeader.addEventListener('click', () => {
    if (panel.classList.contains('collapsed')) setCollapsed(false);
  });
});
