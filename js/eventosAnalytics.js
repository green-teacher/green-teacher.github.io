function eventos(url, evento, origen){
  url
  gtag('event', evento, {
    'event-label' : origen,
  });
  window.open(url, '_self');
}
