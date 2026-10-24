import Board3 from "./board3";

describe('Board', () => {

it('is empty', () => {
    const board = new Board3()
    expect(board.isEmpty(0, 0)).toBe(true);
  })

  it('The player Board exists', () => {
    expect(new Board3()).toBeInstanceOf(Board3)
  });

  it('detects all fields are taken', () => {
    const board = new Board3()

    expect(board.allTaken()).toBe(false);
    [0, 1, 2].forEach(i => {
      [0, 1, 2].forEach(j => board.play("X", i, j));
    });
    expect(board.allTaken()).toBe(true);
  })

  it('detects a completed row', () => {
    const board = new Board3();

    expect(board.isOver()).toBe(false);
    [0, 1, 2].forEach(j => board.play("X", 0, j));
    expect(board.isOver()).toBe(true);
  });

  it('detects a completed column', () => {
    const board = new Board3();

    expect(board.isOver()).toBe(false);
    [0, 1, 2].forEach(i => board.play("X", i, 0));
    expect(board.isOver()).toBe(true);
  });

  it('detects a completed left-to-right diagonal', () => {
    const board = new Board3();

    [0, 1, 2].forEach(i => board.play("X", i, i));
    expect(board.isOver()).toBe(true);
  });

  it('detects a completed right-to-left diagonal', () => {
    const board = new Board3();

    [0, 1, 2].forEach(i => board.play("O", i, 2 - i));
    expect(board.isOver()).toBe(true);
  });
});