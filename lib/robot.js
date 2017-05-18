// 'use strict';

class Robot{



constructor(bearing='north', coordinates=[0,0]) {
  this.bearing = bearing
  this.coordinates = coordinates
}

orient(direction) {
  var directions = [ 'north', 'east', 'south', 'west' ]
  if (directions.includes(direction)) {
    this.bearing = direction
  } else {
    throw new Error('Invalid Robot Bearing')
  }
}

turnRight() {
  var directions = [ 'north', 'east', 'south', 'west' ]
  if (this.bearing !== 'west'){
    var i = directions.indexOf(this.bearing)
    this.bearing = directions[i+1]
  } else {
    this.bearing = 'north'
  }
}

turnLeft() {
  var directions = [ 'north', 'east', 'south', 'west' ]
  if (this.bearing !== 'north'){
    var i = directions.indexOf(this.bearing)
    this.bearing = directions[i-1]
  } else {
    this.bearing = 'west'
  }
}

at(num1, num2){
  this.coordinates = [num1, num2]
}

advance(){
  if (this.bearing === 'north') {
    this.coordinates = [this.coordinates[0],this.coordinates[1]+1]
  } else if (this.bearing === 'south') {
    this.coordinates = [this.coordinates[0],this.coordinates[1]-1]
  } else if (this.bearing === 'east') {
    this.coordinates = [this.coordinates[0]+1,this.coordinates[1]]
  } else if (this.bearing === 'west') {
    this.coordinates = [this.coordinates[0]-1,this.coordinates[1]]
  }
}

instructions(phrase) {
  var commands = phrase.split("")
  var arr = []
  commands.forEach(function(command){
    switch(command){
      case "L":
        arr.push("turnLeft")
        break

      case "R":
        arr.push("turnRight")
        break

      case "A":
        arr.push("advance")
        break

    }
  })
  return arr
}

place(obj) {
  this.orient(obj.direction)
  this.at(obj.x, obj.y)
}

evaluate(phrase){
  var self = this
  let steps = self.instructions(phrase)
  steps.forEach(function(step){
    switch(step){
      case "turnLeft":
        self.turnLeft()
        break

      case "turnRight":
        self.turnRight()
        break

      case "advance":
        self.advance()
        break
    }
  })
}

}
