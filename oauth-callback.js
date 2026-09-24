(() => {
  const status = document.getElementById('status');
  const params = new URLSearchParams(window.location.search);
  const hasState = params.has('state');
  const hasSuccess = params.has('code') && params.has('realmId');
  const hasError = params.has('error');

  if (!hasState || (!hasSuccess && !hasError)) {
    status.textContent = 'The QuickBooks authorization response is incomplete. Return to Terminal and try connecting again.';
    return;
  }

  window.location.replace(`http://localhost:8787/callback${window.location.search}`);
})();
