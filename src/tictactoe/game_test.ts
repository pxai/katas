import Board3 from './board3';
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
    board = {
      fields: Array(9).fill(""),
      play: jest.fn(() => true),
      isEmpty: jest.fn(() => true),
      isOver: jest.fn(() => false),
      allTaken: jest.fn(() => false)
    };
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

    expect(game.play(player1, 0, 0)).toBe(true);
    expect(board.play).toHaveBeenCalledWith("X", 0, 0);
  })

  it('delegates game-over checks to the board', () => {
    const game = new Game(board, player1, player2);

    expect(game.isOver()).toBe(false);
    expect(board.isOver).toHaveBeenCalledTimes(1);
  })

  it('players take turns taking fields until the game is over', () => {
      const game = new Game(new Board3(), player1, player2);

      expect(game.isOver()).toBe(false);

      game.play(player1, 0, 0)
      game.play(player2, 0, 1)
      game.play(player1, 0, 2)
      game.play(player2, 1, 0)
      game.play(player1, 1, 1)
      game.play(player2, 1, 2)
      game.play(player1, 2, 0)

      expect(game.isOver()).toBe(true);
  })

});

