import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"

export function clickRunning(){

  timer.countdown()
}

export function reset(){
  timer.updateDisplay()
  stop()
}