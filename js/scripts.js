var conditioned = function(year){
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    return true;
  } else {
    return false
  };
};


$(function(){
  $('#leap-year').submit(function(event){
    event.preventDefault();
    var year = parseInt($('#year').val());
    var leapCheck = conditioned(year);

    if (!leapCheck) {
      $('#result p').text("Not a Leap Year");
    } else {
      $('#result p').text("This is a leap year");
    };
  });
});
