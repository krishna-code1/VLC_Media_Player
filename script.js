
const videoInput = document.querySelector("#video-btn");
const videofile = document.querySelector("#video-file");
const VideoPlayer = document.querySelector("#main");

const inputSelector = ()=>{
      videofile.click();
}

//inside this currentTime and Duration of video func present and progressbar code
const handelInput = (obj)=>{
  
    // console.log("video is selected");
  const selectVideo = obj.target.files[0];//files is array video present at oth idx
  const link = URL.createObjectURL(selectVideo);

  VideoPlayer.innerHTML = "";
  const videoEle = document.createElement("video");
  videoEle.src = link;
  videoEle.setAttribute("class","video");

  VideoPlayer.appendChild(videoEle);

 /***video length code start */
  const videoDuration = document.querySelector("#sp-2");
  videoEle.addEventListener("loadedmetadata", () => {
    const duration = videoEle.duration;

    // format time into minuts and seconds
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    
    videoDuration.textContent = 
      `${minutes}:${seconds.toString().padStart(2, "0")}`;
  });
  /***video length code end*/

/*** video current time func start */
const currTime = document.querySelector("#sp-1");
videoEle.addEventListener("timeupdate", () => {
 const currVideoTime = videoEle.currentTime;
   const minutes = Math.floor(currVideoTime / 60);
   const seconds = Math.floor(currVideoTime % 60);
 
   currTime.textContent = 
    `${minutes}:${seconds.toString().padStart(2, "0")}`;
  
});
/***video cuurtime code end*/

/***  ->>> video progress bar code  -<<<<-----*/
const progressBar = document.querySelector("#duration");

// initial state
progressBar.value = 0;
progressBar.max = 0;
progressBar.disabled = true;

// progress bar works only if video present
progressBar.disabled = false;

videoEle.addEventListener("loadedmetadata", () => {
  progressBar.max = videoEle.duration;
  progressBar.value = 0;
});

videoEle.addEventListener("timeupdate", () => {
  if (!videoEle.duration) return;
  progressBar.value = videoEle.currentTime;
});
// when progresss bar moves video also go that time excat
progressBar.addEventListener("input", () => {
  videoEle.currentTime = progressBar.value;
});

  
}

videoInput.addEventListener("click",inputSelector);
videofile.addEventListener("change",handelInput);

// footer work event listeners added 
/**
 * video controll play and pause video controllers
 * 
 */
const playBtn = document.querySelector("#play");
const videoControl = ()=>{
  // console.log("i am cliking");
  const videoEle = document.querySelector("main video");
  const isPlayIcon = playBtn.classList.contains("fa-play");
  const isPauseIcon = playBtn.classList.contains("fa-pause");

  if (videoEle && isPlayIcon) {
    videoEle.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
  } else if (videoEle && isPauseIcon) {
    videoEle.pause();
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
  }

}
playBtn.addEventListener("click",videoControl);

/*** 
 * in this forward and backward 5 sec
 */
const forwardBtn = document.querySelector("#forward");
const backwardBtn = document.querySelector("#backward");

const forwardVideo = ()=>{
   const videoEle = document.querySelector("main video");
    if (videoEle) {
    videoEle.currentTime += 5;
  }

}

const backwardVideo = ()=>{
  console.log("hii krishna");
   const videoEle = document.querySelector("main video");
    if (videoEle) {
    videoEle.currentTime -= 5;
  }
}

 forwardBtn.addEventListener("click",forwardVideo);
 backwardBtn.addEventListener("click",backwardVideo);
/*** full screen option */
const fullScreen = document.querySelector("#fullScreen");

const watchFullScreen = ()=>{
  const videoEle = document.querySelector("main video");
 if (videoEle) {
    videoEle.requestFullscreen();
  }
}

 fullScreen.addEventListener("click", watchFullScreen);
 /**volume */

const volumeController = document.querySelector("#volume");
const changeVolume = function(){
   const videoEle = document.querySelector("main video");
    if (videoEle) {
    videoEle.volume = this.value; //this connect with volume silder that range 0 t0 1 that comes in videoele volume
  }
}
volumeController.addEventListener("input",changeVolume);

/***main operation click to play ans pause video on screen*/

const main = document.querySelector("#main");
const videoOper = ()=>{
  const videoEle = document.querySelector("main video");
  const isPlayIcon = playBtn.classList.contains("fa-play");
  const isPauseIcon = playBtn.classList.contains("fa-pause");

  if (videoEle && isPlayIcon) {
    videoEle.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");

  } else if (videoEle && isPauseIcon) {
    videoEle.pause();
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
  }

}
main.addEventListener("click",videoOper);//click on screen play or pause video
/** duration of video  */

/***playback rate */

const speedUp = document.querySelector("#speedUp");
const speedDown= document.querySelector("#speedDown");
const speedNormal = document.querySelector("#speedNormal");

const speedVideo = ()=>{
  const videoEle = document.querySelector("main video");
  if(videoEle){
    
    videoEle.playbackRate = 2;
  }
}
const slowVideo = ()=>{
  const videoEle = document.querySelector("main video");
  if(videoEle){
    videoEle.playbackRate = 0.5;
  }
}
const NormalSpeed = ()=>{
   const videoEle = document.querySelector("main video");
  if(videoEle){
    videoEle.playbackRate = 1;
  }
}

speedUp.addEventListener("click",speedVideo);
speedDown.addEventListener("click",slowVideo);
speedNormal.addEventListener("click",NormalSpeed);

// keyboard event listeners  ArrrowRight,Left,Space bar events added like youtube 
const keybordEvent = function(event){
  const videoEle = document.querySelector("main video");
  if (event.code === "Space") {
      event.preventDefault();
      
  const isPlayIcon = playBtn.classList.contains("fa-play");
  const isPauseIcon = playBtn.classList.contains("fa-pause");

  if (videoEle && isPlayIcon) {
    videoEle.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
  } else if (videoEle && isPauseIcon) {
    videoEle.pause();
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
  }
  } 
 
   if(event.code === "ArrowRight"){
    event.preventDefault();
    if (videoEle) {
    videoEle.currentTime += 5;
  }

  }

 if(event.code === "ArrowLeft"){
    event.preventDefault()
    if (videoEle) {
    videoEle.currentTime -= 5;
  }

  }

}
document.addEventListener("keydown",keybordEvent);


// npx live-server - run in vs code