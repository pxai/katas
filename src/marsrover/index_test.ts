import MarsRover from './index'

describe('MarsRover', () => {
  it('is defined', () => {
    expect(MarsRover).toBeDefined()
  })

  it('throws an exception with invalid coordinates', () => {
    expect(() => new MarsRover(-1, 0, 'N')).toThrow('Invalid coordinates')
  })

  it('throws an exception with an invalid direction', () => {
    expect(() => new MarsRover(0, 0, 'X')).toThrow('Invalid direction')
  })

  it('shows the initial position', () => {
    const marsRover = new MarsRover(0, 0, 'S')

    expect(marsRover.position).toBe('(0, 0, S)')
  })

  it('throws an exception for an invalid command', () => {
    const marsRover = new MarsRover(0, 0, 'S')

    expect(() => marsRover.command('X')).toThrow('Wrong command')
  })

  it('processes a sequence of commands', () => {
    const marsRover = new MarsRover(0, 0, 'S')

    marsRover.processCommands('MRM')

    expect(marsRover.position).toBe('(0, 9, E)')
  })

  it.each([
    ['S', 'W'],
    ['W', 'N'],
    ['N', 'E'],
    ['E', 'S']
  ])('turns left from %s to %s', (start, expected) => {
    const marsRover = new MarsRover(0, 0, start)

    marsRover.command('L')

    expect(marsRover.position).toBe(`(0, 0, ${expected})`)
  })

  it.each([
    ['S', 'E'],
    ['E', 'N'],
    ['N', 'W'],
    ['W', 'S']
  ])('turns right from %s to %s', (start, expected) => {
    const marsRover = new MarsRover(0, 0, start)

    marsRover.command('R')

    expect(marsRover.position).toBe(`(0, 0, ${expected})`)
  })

  it.each([
    [9, 8],
    [8, 7],
    [7, 6],
    [6, 5],
    [5, 4],
    [4, 3],
    [3, 2],
    [2, 1],
    [1, 0],
    [0, 9]
  ])('moves south from y=%i to y=%i', (startY, expectedY) => {
    const marsRover = new MarsRover(0, startY, 'S')

    marsRover.command('M')

    expect(marsRover.position).toBe(`(0, ${expectedY}, S)`)
  })
})
