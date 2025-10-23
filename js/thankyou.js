// thankyou.js — personalize thank-you
(function() {
  const params = new URLSearchParams(location.search);
  let name = params.get('name') || '';
  if (!name) {
    try { name = sessionStorage.getItem('name') || ''; } catch (err) {}
  }
  const slot = document.getElementById('ty-name');
  if (slot) { slot.textContent = name ? name : ''; }
})();