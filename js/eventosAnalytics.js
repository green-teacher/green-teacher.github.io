function cursosLink(url, origen){
  cursos = 'cursos-' + origen
  console.log(cursos)
  gtag('event', cursos);
  window.open('./cursos.html', '_self');
}
