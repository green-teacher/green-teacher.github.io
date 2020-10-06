function eventos(url, evento, origen){
  gtag('event', evento, {
    'event_label' : origen,
  });
  window.open(url, '_self');
}
