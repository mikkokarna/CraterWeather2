// spotinfo.js

function readySpotInfo(fn) {
  if (document.body) fn();
  else setTimeout(() => readySpotInfo(fn), 50);
}

readySpotInfo(() => {
  // Luo paneeli
  const panel = document.createElement('div');
  panel.id = 'spotinfo-panel';
  panel.innerHTML = `
    <div class="si-header" id="siHeader">
      <span class="si-title">Spot Info</span>
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
