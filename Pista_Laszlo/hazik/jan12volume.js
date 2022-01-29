/*   # volume

Create a volume visualizer application.

You have two buttons:
- volume up: increase the volume by 1
- volume down: decrease the volume by 1

The maximum volume is 12, the minimum volume is 0.

The initial volume is 0.

**Example**

![volume.gif](volume.gif)

**Hints**
- Create the volume bars as formatted `div` elements
- Format the volume bars using CSS classes (e.g. `.volume-bar`, `.red`, `.green`, `.blue`)
- The volume bars can be displayed as flex items
- It might be easier if you change the whole HTML whenever the volume changes, instead of manually adding and removing DOM elements

---

## bonus 1

Let the initial volume be 2, instead of 0

## bonus 2

Create a mute button, which toggles the volume level between the current level
and zero.

## bonus 3

When you reach the maximum or minimum volume, disable the respective buttons.

When you mute the volume, the mute button should display `unmute`. When you
unmute the volume, the button should show `mute*/



let volumeButton = document.querySelector('.volumeButton')
let volumeLevel = 20;
let muteVolumeLevel = 0;
let currentVolume ;
let mute = document.querySelector('.mute');
let volumeLine = document.querySelector('.volumeLine')
let volumeDown = document.querySelector('.decrease')
let volumeUp = document.querySelector('.increase');

function volumeIndicator(){
    if(volumeLevel == 0){
        volumeLine.style.backgroundColor = "#4149c3";
    } else if (volumeLevel > 0 && volumeLevel < 90){
        volumeLine.style.backgroundColor = "#2cd23e";
    } else if(volumeLevel > 80 && volumeLevel < 120){
        volumeLine.style.backgroundColor = "#e53629";
    }
}
volumeIndicator()




//volume down
volumeDown.addEventListener('click', ()=> {
    volumeLevel = volumeLevel - 10;
    if(volumeLevel < 0){
        volumeLevel =0
    }

    if(volumeLevel == 0){
        volumeDown.classList.add('disabled')
    }else if (volumeLevel > 0 && volumeLevel < 110){
        volumeDown.classList.remove('disabled')
        volumeUp.classList.remove('disabled')
    }
    
    volumeButton.style.left = `${volumeLevel}px`
    currentVolume = volumeLevel
    volumeIndicator() 
});

//volume up
volumeUp.addEventListener('click', ()=>{
    volumeLevel = volumeLevel + 10;
    if(volumeLevel > 110){
        volumeLevel = 110  
    }
    if(volumeLevel == 110){
        volumeUp.classList.add('disabled')
    }else if (volumeLevel < 1100 && volumeLevel > 0){
        volumeDown.classList.remove('disabled')
        volumeUp.classList.remove('disabled')
    }

    

    volumeButton.style.left = `${volumeLevel}px`
    currentVolume = volumeLevel
    volumeIndicator()
})

//mute volume
mute.addEventListener('click', ()=>{
    if(volumeLevel != 0){
        volumeButton.style.left = `${muteVolumeLevel}px`
        currentVolume = volumeLevel
        volumeLevel = 0;
    } else{
        volumeButton.style.left = `${currentVolume}px`
        volumeLevel = currentVolume;
    }

    if(!mute.classList.contains('mute2')){
        mute.innerHTML = '<i class="fas fa-volume-off"></i>'
    } else{
        mute.innerHTML = '<i class="fas fa-volume-mute"></i>'
    }

    mute.classList.toggle("mute2")
    volumeIndicator()
    
       
})

