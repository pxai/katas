import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;


  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.m_score1 += 1;
    else
      this.m_score2 += 1;
  }

  getScore(): string {
    let score: string = '';
    if (this.m_score1 === this.m_score2) {
      score = this.mScore(this.m_score1)
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      score = this.caseB();
    } else {
      score = this.caseC();
    }
    return score;
  }
  
  private caseB (): string {
    let score = '';
    const minusResult: number = this.m_score1 - this.m_score2;
    if (minusResult === 1) score = 'Advantage player1';
    else if (minusResult === -1) score = 'Advantage player2';
    else if (minusResult >= 2) score = 'Win for player1';
    else score = 'Win for player2';

    return score
  }

  private caseC (): string {
    return `${this.tempScore(this.m_score1)}-${this.tempScore(this.m_score2)}`
  }

  private mScore (score: number): string {
    return ['Love-All', 'Fifteen-All' , 'Thirty-All'][score] || 'Deuce'
  }

    private tempScore (score: number): string {
    return ['Love', 'Fifteen' , 'Thirty', 'Forty'][score]
  }
}
