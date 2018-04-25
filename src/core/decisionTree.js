import { DecisionNode } from './decisionNode'

class DecisionTree {
  constructor() {
    this.startNode = null
  }

  static loadTreeFromJSON() {
    let json = require('../../settings/decisiontree-0.0.1.json')
    var tree = new DecisionTree()
    tree.startNode = DecisionTree.genTreeFromJSON(json)

    return tree
  }

  static genTreeFromJSON(json) {
    var node = DecisionNode.genNodeFromJSON(json)
    console.log(node.question)

    let jsonYes = json.childrenYes
    let jsonNo = json.childrenNo

    for (var i = 0; i < jsonYes.length; i++) {
      var subNode = DecisionTree.genTreeFromJSON(jsonYes[i])
      node.childrenYes.push(subNode)
    }

    for (var i = 0; i < jsonNo.length; i++) {
      var subNode = DecisionTree.genTreeFromJSON(jsonNo[i])
      node.childrenNo.push(subNode)
    }

    return node
  }
}

export { DecisionTree }
