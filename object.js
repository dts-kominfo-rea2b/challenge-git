const tesla = {
    color: "red",
    sunproof: false,
    horn: () => console.log("tinn!"),
    steering: () => console.log("brm")
}

console.log(tesla.steering())
console.log('tesla.color :>> ', tesla.color)
tesla.color = "blue"
console.log('tesla.color :>> ', tesla.color)

function Car(color, sunproof) { 
    this.color = color
    this.sunproof = sunproof
    this.horn = () => console.log("tong!"),
    this.steering = () => console.log("wing")
}

const bmw = new Car("green", false)

console.log('tesla :> ', tesla)
console.log('bmw :> ', bmw)
