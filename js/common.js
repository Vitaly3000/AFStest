$(function () {
  $('.sidebar__item').click(function(){
   
   $('.sidebar-menu').toggleClass('active');
  })
  $('.open-modal').click(function(){
   $('.modal').addClass('active')
  })
  $('.modal-cancel,.modal-overlay').click(function(){
   $('.modal').removeClass('active')
  })
});
