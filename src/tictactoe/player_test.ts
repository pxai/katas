import Player from "./player";

describe('Game', () => {
  it('The player class exists', () => {
    expect(new Player("")).toBeInstanceOf(Player)
  });


  it('The player has a name parameters', () => {
    const player = new Player("name1")
    expect(player.name).toEqual("name1")
  });
});