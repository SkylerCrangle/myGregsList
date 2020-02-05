import House from '../Models/House.js'
import _store from '../store.js'
//let testingHouse = new House()
class HouseService {

  addHouse(newHouse) {
    newHouse = new House(newHouse)
    _store.State.house.push(newHouse)
    console.log(_store.State.cars)
  }
  constructor() {
    console.log("house service")
  }
}

const HOUSESERVICE = new HouseService()
export default HOUSESERVICE