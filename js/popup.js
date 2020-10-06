function cleanPopup(){
  $('.popup').removeClass('popactive');
}

function openPopup(poptarget){
  console.log('hoa');
  cleanPopup();
  $(poptarget).addClass('popactive').fadeIn();
}

function closePopup(poptarget){
  $('.popactive').fadeOut();
  cleanPopup();
}

$('.popup_opener').on('click', function(){
  var poptarget = '#' + $(this).attr('poptarget');
  openPopup(poptarget);
})

$('.popup_close').on('click', function(){
  closePopup();
});
