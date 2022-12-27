class Vehcicle {
  move() {
    console.log("O veiculo está se movemndo.");
  }
}

class Car extends Vehcicle {
  move() {
    console.log("O carro está se movemndo.");
  }
}

class Ship extends Vehcicle {
  move() {
    console.log("O navio está se movemndo.");
  }
}

class Aircraft extends Vehcicle {
  move(speed) {
    console.log(`A aeronave está se voando a ${speed} km/h.`);
  }
}

const delorean = new Car()
const blackpearl = new Ship()
const epoch = new Aircraft()

// delorean.move()
// blackpearl.move()
// epoch.move(80)

function start(vehicle) {
  console.log("\nIniciando um veículo...")
  vehicle.move()
}

start(delorean)
start(blackpearl)
start(epoch)