$(document).ready(function(){
  function openSubmenu(menu){
      $('.'+menu).addClass('sub_active');
  }
  function closeSubmenu(){
    $('.subnav').removeClass('sub_active');
  }

  $('.submenu').hover(
    function(){
      var menu = $(this).attr('id');
      openSubmenu(menu);
  },
  function(){
      closeSubmenu();
  });

  $('#burguer').on('click', function(){
    console.log('quiero burguer');
    $('.burguer_show').slideToggle();
  });

});
