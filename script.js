$( "#contactbutton").click(function() {
    profpic();
  });

  function profpic() {
    $('#body').append($('#contact-card').html());
    alert('hi');
  }