function cursosLink(url, origen){
  gtag('event', 'cursos', {
   'event_category': origen,
   'event_label': url,
   'event_callback': function(){document.location = url;}
 });
}
