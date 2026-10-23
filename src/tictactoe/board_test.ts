import Board from "./board";

describe('Board', () => {

it('is empty', () => {
    const board = new Board()
    expect(board.isEmpty(0, 0)).toBe(true);
  })
  
  it('The player Board exists', () => {
    expect(new Board()).toBeInstanceOf(Board)
  });
});