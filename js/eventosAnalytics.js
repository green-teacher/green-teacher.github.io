function eventos(url, evento, origen){
  url
  gtag('event', evento, {
    'event_label' : origen,
  });
  window.open(url, '_self');
}
