import { PowerStatus } from './powerStatus'

class GameRun {
  constructor(startNode) {
    this.timePassed = 0
    this.cardsPassed = 0
    this.powers = [
      new PowerStatus('Clientes'),
      new PowerStatus('Gobierno'),
      new PowerStatus('Empleados'),
      new PowerStatus('Capital')
    ]
    this.runStatus = 'Started'
    this.currentDecisionNode = startNode
    this.decisionHistory = []
  }
}

export { GameRun }
