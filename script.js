$( "#contactbutton").click(function() {
    profpic();
  });

  function profpic() {
    setTimeout(function(){ $('#body').prepend($('#contact-card').html()); }, 200);
    
        $( "#body" ).addClass( "body-move" ) 
    
  }