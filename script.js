
const videoInput = document.querySelector("#video-btn");
const videofile = document.querySelector("#video-file");
const VideoPlayer = document.querySelector("#main");


const inputSelector = ()=>{
      videofile.click();
}
const handelInput = (obj)=>{
    // console.log("video is selected");
  const selectVideo = obj.target.files[0];//files is array video present at oth idx
  const link = URL.createObjectURL(selectVideo);

  VideoPlayer.innerHTML = "";
  const videoEle = document.createElement("video");
  videoEle.src = link;
  videoEle.setAttribute("class","video");

  VideoPlayer.appendChild(videoEle);
  // videoEle.controls = true;
  
  
}

videoInput.addEventListener("click",inputSelector);
videofile.addEventListener("change",handelInput);

// footer work
/**
 * video controll play and pause video controllers
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

 /**volume */

const volumeController = document.querySelector("#volume");
const changeVolume = function(){
   const videoEle = document.querySelector("main video");
    if (videoEle) {
    videoEle.volume = this.value; //this coonetc with volume silder that range 0 t0 1 that comes in videoele volume
  }
}
volumeController.addEventListener("input",changeVolume)

