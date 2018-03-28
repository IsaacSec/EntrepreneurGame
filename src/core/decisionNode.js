class DecisionNode {
    constructor() {
        this.question = "none";
        this.optionYes = "Yes";
        this.optionNo = "No";
        this.childrenYes = [];
        this.childrenNo = [];
        this.effectYes = [0,0,0,0];
        this.effectNo = [0,0,0,0];
    }

    getRandomChild (isYes) {
        let branches;
        
        if (isYes === true) {
            branches = childYes;     
        } else {
            branches = childNo;
        }
        
        let max = branches.length;
        let index = Math.floor(Math.random() * (max));

        return branches[index];
    }

    static genNodeFromJSON(json){

        var node = new DecisionNode();

        node.question = json.question;
        node.optionYes = json.optionYes;
        node.optionNo = json.childrenYes;
        node.effectYes = json.effectYes;
        node.effectNo = json.effectNo;

        return node;
    }
}

export {DecisionNode};