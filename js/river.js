// $.ajax({
// 				url: "https://matarikiwaka-functions.azurewebsites.net/api/telemetry/river_level",
// 			}).done(function(data) {
// 
// 				$('#wave').css('top', data[0].value);
// 				$('#boat1').css('top', data[0].value-22%);
// 				
// 				)};
$(document).ready(function(){
   $.getJSON('https://matarikiwaka-functions.azurewebsites.net/api/telemetry/river_flow',
   function(data){
    var riverfl= data[0].value;

   $.getJSON('https://matarikiwaka-functions.azurewebsites.net/api/telemetry/wind_speed',
   function(data){
    var windsp= data[0].value;			
	
	var speeds = riverfl + windsp;
	if(speeds < 180)
	{
		// $("#boat1").animate({},4s);
		$("#boat1").addClass('boat1');
		
	}
	else if(speeds > 180)
	{
		// $("#boat1").animate({},1s);
		$("#boat1").addClass('boat1');
		
	}
	});
	
	});
	});
	

// $.ajax({				
// 				url: "https://matarikiwaka-functions.azurewebsites.net/api/telemetry/river_flow",
// 				}).done(function(data) {
// 				
// 					var riverfl= data[0].value;
// 				});
// $.ajax({				
// 				url: "https://matarikiwaka-functions.azurewebsites.net/api/telemetry/wind_speed",
// 				}).done(function(data) {
// 				
// 					var windsp= data[0].value;
// 				});
// 				
				
				
				
				
				
				
				
// 				if($('.battery.lv').width() > 80)
// 				{
// 					$('.battery').css('background','#00fe00');
// 					$('.face:nth-child(2)').css('color','#00fe00');
// 					$('.face:nth-child(1)').css('color','#feff3d');
// 					
// 				}else if($('.battery.lv').width() > 50){
// 					$('.battery').css('background','#feff3d');
// 					$('.face:nth-child(2)').css('color','#feff3d');
// 					$('.face:nth-child(1)').css('color','#fe793d');
// 					
// 				} else if($('.battery.lv').width() > 20)
// 				{
// 					$('.battery').css('background','#fe793d');
// 					$('.face:nth-child(2)').css('color','#fe793d');
// 					$('.face:nth-child(1)').css('color','#red');
// 				} else {
// 					$('.battery').css('background','red');
// 					$('.face:nth-child(2)').css('color','#red');
// 					$('.face:nth-child(1)').css('color','#grey');
// 				}
// 				
// 				
// 			   $("#power").text(data[0].value);