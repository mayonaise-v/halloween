
// Gives the home icon functionality, hides everything except
// the "Hunger games" logo
$("#home").click(function(){
  console.log("Show me this");
  $(".main-logo").show();
  $(".philosophy").hide();
  $(".how2eat").hide();
  $(".nutritional").hide();
  $(".full-movie").hide();
  $(".lights-off").hide();
  $(".lights-on").hide();
});

// Gives the movie text functionality, and displays the video
// viewer and option to turn off the lights while hiding everything else
$("#mov-click").click(function(){
  console.log("Show me this");
  $(".main-logo").hide();
  $(".philosophy").hide();
  $(".how2eat").hide();
  $(".nutritional").hide();
  $(".full-movie").show();
  $(".lights-off").show();
  $(".lights-on").hide();
});

// Gives the philosophy text functionality, hides everything except
// the philosophy text and the gif
$("#ph-click").click(function(){
  console.log("Show me this");
  $(".main-logo").hide();
  $(".philosophy").show();
  $(".how2eat").hide();
  $(".nutritional").hide();
  $(".full-movie").hide();
  $(".lights-off").hide();
  $(".lights-on").hide();
});

// Gives the eating instructions functionality, hides everything except
// for the instructions themself
$("#instr-click").click(function(){
  console.log("Show me this");
  $(".main-logo").hide();
  $(".philosophy").hide();
  $(".how2eat").show();
  $(".nutritional").hide();
  $(".full-movie").hide();
  $(".lights-off").hide();
  $(".lights-on").hide();
});

// Gives the nutritional info functionality, hides everything except
// the image of the nutritional information
$("#nutr-click").click(function(){
  console.log("Show me this");
  $(".main-logo").hide();
  $(".philosophy").hide();
  $(".how2eat").hide();
  $(".nutritional").show();
  $(".full-movie").hide();
  $(".lights-off").hide();
  $(".lights-on").hide();
});

// Gives the light-off icon functionality, darkens the background
// so users can focus on the movie
$(".lights-off").click(function () {
  $("#the-lights").css({'display' : 'block'});
  $("#the-lights").fadeTo("slow",0.8);
  $(".lights-off").hide();
  $(".lights-on").show();
});

// Gives the light-on icon functionality, brightens the backgroud
// once the users are done
$(".lights-on").click(function () {
  $("#the-lights").css({'display' : 'block'});
  $("#the-lights").fadeTo("slow",0);
  $(".lights-off").show();
  $(".lights-on").hide();
});

// The home page that loads initially, shows only the "Hunger games" logo
$(document).ready(function(){
	console.log("Ready");
  $(".main-logo").show();
  $(".philosophy").hide();
  $(".how2eat").hide();
  $(".nutritional").hide();
  $(".full-movie").hide();
  $(".lights-off").hide();
  $(".lights-on").hide();
});
