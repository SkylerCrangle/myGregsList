import House from '../Models/House.js'
let testingHouse = new House()
class HouseService {
  constructor() {
    console.log("house service")
  }
}

const HOUSESERVICE = new HouseService()
export default HOUSESERVICE