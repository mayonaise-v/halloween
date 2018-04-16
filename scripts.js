$(document).ready(function(){


	var main_video = "https://www.youtube.com/watch?v=PrsV2lF_g8g&controls-0";
	var viz_reacts = "https://www.youtube.com/watch?v=9NnVIoWWiz8&controls=0";


	var main = "#video-1";
	var not_main = "#video-2";

	var myVideoTwo = Popcorn.smart(not_main, viz_reacts);
	var myVideo = Popcorn.smart(main, main_video);

	//Wait for second video to load
	myVideoTwo.on("canplayall", function(){
		$(".viz-reacts").hide();
	});

	$(".selfie").hide();
	$(".lights-off").show();
	$(".lights-on").hide();
	$(".play-button").show();
	$(".pause-button").show();
	$(".home").show();

	myVideo.cue(260,function(){
		myVideo.pause();
		$(".full-movie").hide();
		$(".viz-reacts").hide();
		$(".selfie").show();
		$(".lights-off").show();
		$(".lights-on").hide();
		$(".play-button").show();
		$(".pause-button").show();
		$(".home").show();
	});

	$('#playButton').click(function(){
		myVideo.play();
	});

	$('#pauseButton').click(function(){
		myVideo.pause();
	});
	$('#selfie-click').click(function(){

		$("#flash").show();
		// setTimeout(function(){
		// 		$("#flash").hide();
		// }, 150);
		$("#flash").fadeOut(600);

		$(".full-movie").hide();
		$(".viz-reacts").show();
		$(".selfie").hide();
		$(".lights-off").show();
		$(".lights-on").hide();
		$(".play-button").show();
		$(".pause-button").show();
		$(".home").show();
		myVideoTwo.play();
	});
	$(".lights-off").click(function () {
	  $("#the-lights").css({'display' : 'block'});
	  $("#the-lights").fadeTo("slow",0.8);
	  $(".lights-off").hide();
	  $(".lights-on").show();
		$(".play-button").show();
		$(".pause-button").show();
		$(".home").show();
	});

	$(".lights-on").click(function () {
	  $("#the-lights").css({'display' : 'block'});
	  $("#the-lights").fadeTo("slow",0);
	  $(".lights-off").show();
	  $(".lights-on").hide();
		$(".play-button").show();
		$(".pause-button").show();
		$(".home").show();
	});

	$(".home").click(function () {
	  location.reload(true);
	});
});
