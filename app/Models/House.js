export default class House {
  constructor(data) {
    //console.log("house model")
    this.houseNumber = data.houseNumber
    this.streetName = data.streetName
    this.city = data.city
    this.state = data.state
    this.zipCode = data.zipCode
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.description = data.description
  }

  get Template() {
    return `
    <div class="col-4">
      <h2>${this.houseNumber}</h2>
      <h3>${this.streetName}</h3>
      <p>${this.city}</p>
      <p>${this.state}</p>
      <p>${this.zipCode}</p>
      <p>${this.bedrooms}</p>
      <p>${this.bathrooms}</p>
      <p>${this.description}</p>
    </div>
    `
  }

}

