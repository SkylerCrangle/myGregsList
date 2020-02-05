import _houseService from '../Services/HouseService.js'
import _store from '../store.js'

function _draw() {
  let house = _store.State.house
  let houseElem = document.getElementById("idhouse")
  let template = ''

  house.forEach(house => {
    template += house.Template
  })

  houseElem.innerHTML = template
}

export default class HouseController {
  constructor() {
    console.log("the house controller works")
  }

  addHouse(event) {
    event.preventDefault()

    // NOTE formData is an alias for our submitted form from our html
    let formData = event.target
    // NOTE newcar is an object with all the inputted values from our form
    let newHouse = {
      houseNumber: formData.houseNumber.value,
      streetName: formData.streetName.value,
      city: formData.city.value,
      state: formData.state.value,
      zipCode: formData.zipCode.value,
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      description: formData.description.value,
    }

    console.log(newHouse)
    _houseService.addHouse(newHouse)
    formData.reset()
    // @ts-ignore
    $('#modelId2').modal('toggle');
    _draw()
  }

}