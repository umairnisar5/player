const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//play & pause video
function toggleVideoStatus() {
   if (video.pause) {
       video.play();
   } else {
       video.pause();
   }
}

// update play/pause icon
function updatePlayIcon(){
   if(video.pause) {
       play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
   } else {
       play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
   }
}


// update progress & timestamp 
function updateProgress(){
   progress.value = (video.currentTime / video.duration) *
   100;
   //get minutes
   let mins = math.floor(video.currentTime / 60);
   if (mins <10) {
       mins = '0' + String(mins);
   }
   //get seconds
   let secs = math.floor(video.currentTime / 60);
   if (secs <10) {
       mins = '0' + String(mins);
   }
   timestamp.innerHTML = '${mins}:${secs}';
}

//set video time to progress
function setVideoProgress(){
 video
}

//stop video 
function stopVideo(){
video.currentTime = 0;
video.pause();
}

// event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate",updateProgress);
 

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);


