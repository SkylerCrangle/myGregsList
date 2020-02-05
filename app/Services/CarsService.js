import Cars from '../Models/Cars.js'

let testingCars = new Cars()

class CarsService {
  constructor() {
    console.log("Cars service is working")
    //console.log(testingCars)
  }
}

const CARSSERVICE = new CarsService()
export default CARSSERVICE