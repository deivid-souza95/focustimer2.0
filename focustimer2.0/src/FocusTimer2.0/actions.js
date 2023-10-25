import state from "./state.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"

export function clickRunning(){
  timer.countdown()
}

export function reset(){
  state.isRunning = false
  timer.updateDisplay() 
}

export function stop(){
  if(state.isRunning = !state.isRunning){
    timer.countdown(),reset()
  }
}

export function increase() {
  if(state.minutes > 55){
    state.minutes = 55
  }
  state.minutes +=5
  timer.updateDisplay()
}

export function toDecrease(){
  state.minutes -= 5
  if(state.minutes < 0){
    state.minutes = 0
  }
  timer.updateDisplay()
}

// troca do cores dos cardes, play e pause no som
export function tree(){
  state.isMute = document.documentElement.classList.toggle('replacementOne')
  
  if(state.isMute){
    sounds.buttonPressAudioTree.play()
    return
  }
  sounds.buttonPressAudioTree.pause()
}

export function rain(){
  state.isMute = document.documentElement.classList.toggle('replacementTwo')
  
  if(state.isMute){
    sounds.buttonPressAudioRain.play()
    return
  }
  sounds.buttonPressAudioRain.pause()
}

export function storeFront(){
  state.isMute = document.documentElement.classList.toggle('replacementThree')
  if(state.isMute){
    sounds.buttonPressAudioFrontStore.play()
    return
  }
  sounds.buttonPressAudioFrontStore.pause()
}

export function fire(){
  state.isMute = document.documentElement.classList.toggle('replacementFour')
  if(state.isMute){
    sounds.buttonPressAudioFire.play()
    return
  }
  sounds.buttonPressAudioFire.pause()
}