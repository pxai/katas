import Board from './board';
import Game from './game'
import Player from './player'

describe('Game', () => {
  let player1 : Player;
  let player2 : Player;
  let board: Board;

  beforeEach(() => {
    player1 = new Player("X");
    player2 = new Player("Y"); 
    board = new Board();
  });

  it('can be created', () => {
    expect(new Game(board, new Player(""), new Player(""))).toBeInstanceOf(Game)
  });

  it('there are two players in the game', () => {
    const game = new Game(board, player1, player2)
    expect(game.players.length).toEqual(2);
  });

  it('has nine fields', () => {
    const game = new Game(board, player1, player2)
    expect(game.fields.length).toEqual(9)
  });


  it('player puts in position', () => {
    const game = new Game(board, player1, player2)
    expect(game.board.isEmpty(0, 0)).toBe(true);

    expect(game.play(player1, 0, 0)).toBe(true);

    expect(game.board.isEmpty(0, 0)).toBe(false);
  })

  it('is game over when all fields in a row are taken', () => {
    const game = new Game(board, player1, player2);

    expect(game.isOver()).toBe(false);
    game.play(player1, 0, 0)
    game.play(player1, 0, 1)
    game.play(player1, 0, 2)
    expect(game.isOver()).toBe(true);
    
  })

  it('is game over when all fields in a column are taken', () => {
    const game = new Game(board, player1, player2);

    expect(game.isOver()).toBe(false);
    game.play(player1, 0, 0)
    game.play(player1, 1, 0)
    game.play(player1, 2, 0)
    expect(game.isOver()).toBe(true);
    
  })

});

