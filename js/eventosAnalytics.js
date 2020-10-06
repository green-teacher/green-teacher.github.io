function eventos(url, evento, origen){
  gtag('event', evento, {
    'event_label' : 'navbar',
  });
  window.open(url, '_self');
}
