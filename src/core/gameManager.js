import { GameRun } from './gameRun'
import { DecisionTree } from './decisionTree'

class GameManager {
  constructor() {
    this.currentGameRun = new GameRun()
    this.gameDecisionTree = DecisionTree.loadTreeFromJSON()
    this.resources = require('./../../settings/resources-0.0.1.json')
  }
}

export { GameManager }
