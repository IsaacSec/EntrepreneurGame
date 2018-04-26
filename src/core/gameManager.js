import { GameRun } from './gameRun'
import { DecisionGraph } from './decisionGraph'
import { DATA, current } from '../Views/CardView'

class GameManager {
  constructor() {
    this.currentGameRun = new GameRun()
    this.decisionGraph = DecisionGraph.loadGraphFromJSON()
    this.resources = require('./../../settings/resources-0.0.1.json')
    this.offset = DATA.length - 1
  }

  nextCard(_DATA, isYes){
    let nextId = _DATA.length
    let text = 'Card #' + nextId
    let empty = {
      id: nextId,
      text: text,
      leftText: 'left text',
      rightText: 'right text'
    }
    _DATA.push(empty)

    let next = this.decisionGraph.getRandomChild(isYes)
    this.decisionGraph.currentNode = next
    let data = next.getData()
    let toReplace = nextId - this.offset

    _DATA[toReplace].text = data.text
    _DATA[toReplace].leftText = data.leftText
    _DATA[toReplace].rightText = data.rightText

    current.text = data.text

    console.log("New Data", _DATA)
    console.log("next: "+nextId+" toReplace: "+toReplace)
  }
}

export { GameManager }
