function cursosLink(url, origen){
  gtag('event', origen, {
   'event_category': 'cursos',
   'event_label': url,
   'event_callback': function(){document.location = url;}
 });
}
