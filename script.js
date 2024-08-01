console.log("welcome to spotify");
//initialize the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
{songName:"Warriyo-Mortals [NCS Release]",filePath:"1.mp3",coverPath:"covers/10.jpg"},
{songName:"Cielo-Muma-Muma",filePath:"2.mp3",coverPath:"covers/cover1.jpg"},
{songName:"DEAF KEV-Invicible",filePath:"3.mp3",coverPath:"covers/3.jpg"},
{songName:" Babuji-salam-e-Ishq",filePath:"4.mp3",coverPath:"covers/4.jpg"},
{songName:" Tumhari kasam-salam-e-Ishq",filePath:"5.mp3",coverPath:"covers/5.jpg"},
{songName:" Ya Rabba--salam-e-Ishq",filePath:"6.mp3",coverPath:"covers/6.jpg"},
{songName:"Na Jaana--salam-e-Ishq",filePath:"7.mp3",coverPath:"covers/7.jpg"},
{songName:"Bhula Dena--salam-e-Ishq",filePath:"8.mp3",coverPath:"covers/8.jpg"}, 
{songName:" Dil Kya Kare-salam-e-Ishq",filePath:"9.mp3",coverPath:"covers/9.jpg"},
{songName:" Tenu Leke-salam-e-Ishq",filePath:"10.mp3",coverPath:"covers/13.jpg"},
]
songItems.forEach( (element,i)=>{
    element.getElementsByTagName('img')[0]=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    })
//handle play pouse click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
              gif.style.opacity = 1;

       
    }  
    else{
     audioElement.pause();
     masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }
})
 //listen to events 
 audioElement.addEventListener('timeupdate',()=>{
     //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    
  })
  myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
 })
 const makeAllplays=()=>{

    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
      element.classList.remove('fa-play-circle');
      element.classList.add('fa-pause-circle');

    })
  }
 Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeAllplays();
     songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
     audioElement.src =  `${songIndex+1}.mp3`;;
    masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     gif.style.opacity = 1;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        

    })
   })
   
   document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src =  `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    gif.style.opacity = 1;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
       
   })
  
   document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
     }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    gif.style.opacity = 1;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
       
   })
  