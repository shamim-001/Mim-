// contact.js — client-side submit redirect with basic spam prevention
(function() {
  const form = document.querySelector('form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // honeypot
    const hp = document.getElementById('website');
    if (hp && hp.value.trim() !== '') { return; } // silently drop
    
    if (!form.reportValidity()) { return; }
    
    const nameInput = document.getElementById('fullName');
    const name = (nameInput && nameInput.value || '').trim();
    try { sessionStorage.setItem('name', name); } catch (err) {}
    const url = 'thank-you.html' + (name ? ('?name=' + encodeURIComponent(name)) : '');
    window.location.href = url;
  });
})();