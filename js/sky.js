// import java().util.Date;

 function getNowFormatDate() {
    var date = new Date();
	var hour =  date.getHours();
   if(hour > 19 || hour < 5)
   {
      $("body").addClass('body1');
      $('#snm').attr('src','img/moon.png');
   }

}


// edit by Chen OLO
$(document).ready(function(){
	$('#snm').on('click',function(){
		var src = $(this).attr('src');
		if(src == 'img/moon.png'){
			$(this).attr('src','img/sun.png');
			$("body").removeClass('body1');
			$('#content').removeClass('content-night');
			$('#stars').addClass('stars1');


		} else {
			$(this).attr('src','img/moon.png');
			$("body").addClass('body1');
			$('#content').addClass('content-night');
      $('#stars').removeClass('stars1');

		}

	})

});
