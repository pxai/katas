type Direction = 'N' | 'W' | 'E' | 'S'

function isDirection(direction: string): direction is Direction {
  return ['N', 'W', 'E', 'S'].includes(direction)
}

export default class MarsRover {
  private x: number
  private y: number
  private direction: Direction

  constructor(x: number, y: number, direction: string) {
    if (x < 0 || x > 9 || y < 0 || y > 9) {
      throw new Error('Invalid coordinates')
    }

    if (!isDirection(direction)) {
      throw new Error('Invalid direction')
    }

    this.x = x
    this.y = y
    this.direction = direction
  }

  get position(): string {
    return `(${this.x}, ${this.y}, ${this.direction})`
  }

  command(to: string): void {
    if (!['R', 'L', 'M'].includes(to)) {
      throw new Error('Wrong command')
    }

    if (to === 'L') {
      this.turnLeft()
    } else if (to === 'R') {
      this.turnRight()
    } else {
      this.move()
    }
  }

  processCommands(commands: string): void {
    for (const command of commands) {
      this.command(command)
    }
  }

  private turnLeft(): void {
    const left: Direction[] = ['S', 'W', 'N', 'E']
    const nextIndex = (left.indexOf(this.direction) + 1) % 4
    this.direction = left[nextIndex]
  }

  private turnRight(): void {
    const right: Direction[] = ['S', 'E', 'N', 'W']
    const nextIndex = (right.indexOf(this.direction) + 1) % 4
    this.direction = right[nextIndex]
  }

  private move(): void {
    if (this.direction === 'S') {
      this.y = this.y === 0 ? 9 : this.y - 1
    }
  }
}
