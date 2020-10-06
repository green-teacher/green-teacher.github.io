function eventos(url, evento, origen){
  url
  gtag('event', evento, {
    'label' : origen,
  });
  window.open(url, '_self');
}
