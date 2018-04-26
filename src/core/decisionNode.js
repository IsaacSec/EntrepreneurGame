class DecisionNode {
  constructor() {
    this.id = 0
    this.question = 'none'
    this.character = 'none'
    this.optionYes = 'Yes'
    this.optionNo = 'No'
    this.childrenYes = []
    this.childrenNo = []
    this.effectYes = [0, 0, 0, 0]
    this.effectNo = [0, 0, 0, 0]
  }

  getData() {
    let data = {
      id: this.id,
      text: this.question,
      leftText: this.optionYes,
      rightText: this.optionNo
    }

    return data
  }

  static genNodeFromJSON(json) {
    var node = new DecisionNode()
    
    node.id = json.id
    node.question = json.question
    node.character = json.character
    node.optionYes = json.optionYes
    node.optionNo = json.optionNo
    node.childrenYes = json.childrenYes
    node.childrenNo = json.childrenNo 
    node.effectYes = json.effectYes
    node.effectNo = json.effectNo

    return node
  }
}

export { DecisionNode }
