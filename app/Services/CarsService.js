import _store from "../store.js"
import Cars from '../Models/Cars.js'

//let testingCars = new Cars()

class CarsService {
  addCar(newCar) {
    newCar = new Cars(newCar)
    _store.State.cars.push(newCar)
    console.log(_store.State.cars)
  }
  constructor() {
    console.log("Cars service is working")
    //console.log(testingCars)
  }
}

const CARSSERVICE = new CarsService()
export default CARSSERVICE