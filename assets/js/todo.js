console.log('connected');


  $('ul').on('click','li',function(){
    $(this).toggleClass('completed');
  });

$('ul').on('click','.delete',function(e){
  $(this).parent().fadeOut('2s',function(){
    $(this).remove();
  });
  e.stopPropagation();
});
$('input[type="text"]').keypress(function(e){
  if(e.which==13){
    var newtodo=$(this).val();
    $(this).val('');
    $('ul').append('<li>'+'<span class=delete> <i class="far fa-trash-alt"></i> </span>'+newtodo+'</li>');
  }
});

$('.fa-plus').click(function(){
  $('input[type="text').fadeToggle('.7s');
})
