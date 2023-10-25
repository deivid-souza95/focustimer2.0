import { controls, cards } from "./elements.js" // puxando a funcao para registro dos botoes
import * as actions from "./actions.js"

// funcao de registros dos clicks nos botoes
export function registerControls(){
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function"){
      return
    }

    actions[action]()
  })
}

export function registerCards(){
  cards.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function"){
      return
    }
    actions[action]()
  })
}