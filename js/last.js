var myPlayer = videojs('my-video');
videojs("my-video").ready(function(){
	var myPlayer = this;
	myPlayer.play();
});