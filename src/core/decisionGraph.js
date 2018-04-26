import { DecisionNode } from './decisionNode'

class DecisionGraph {
  constructor() {
    this.currentNode = null
    this.allNodes = null
  }

  getNodeById(id){
    for (i in this.allNodes) {
      if (this.allNodes[i].id == id){
        return this.allNodes[i];
      }
    }
  }

  getRandomChild(isYes){
    let branches

    if (isYes === true) {
      branches = this.currentNode.childrenYes
    } else {
      branches = this.currentNode.childrenNo
    }
    
    let max = branches.length
    let index = Math.floor(Math.random() * max)

    let json = this.getNodeById(branches[index])
    let node = DecisionNode.genNodeFromJSON(json)

    return node
  }

  static loadGraphFromJSON() {
    let json = require('../../settings/decisiongraph-0.0.1.json')
    var tree = new DecisionGraph()
    tree.allNodes = json
    tree.currentNode = DecisionNode.genNodeFromJSON(json[0])
    return tree
  }
}

export { DecisionGraph }