import { object } from "./db.js"

;(function app() {
    renderCars()
})()

function renderCars() {
    const carsList = document.querySelector('.car-list')
    const html = object.hotCars.map(carInfo => {
        return `
          <div class="col col-sm-12 col-md-6 col-lg-4">
                         <div class="car-item">
                            <div class="car-item-img">
                                <img src="${carInfo.image}" alt="">
                                <a href="form.html">
                                <i class="cart-icon fa-solid fa-cart-plus">
                                </i>
                                
                                </a>
                            </div>
                            <div class="car-item-content">
                                <h2 class="car-name">${carInfo.name}</h2>
                                <div class="car-parameter">
                                    <div class="parameter">
                                        <i class="fa-solid fa-gear"></i>
                                        <p class="parameter-name">automatic</p>
                                    </div>
                                    <div class="parameter">
                                        <i class="fa-solid fa-gas-pump"></i>
                                        <p class="parameter-name">diesel</p>
                                    </div>
                                    <div class="parameter">
                                        <i style="color: rgb(255, 106, 0)" class="fa-solid fa-road"></i>
                                        <p class="parameter-name">${carInfo.km}km</p>
                                    </div>
                                </div>
                                <hr style="width: calc(100% + 30px); transform: translateX(-15px); border-color: #f8f8f8">
                                <div class="car-item-bottom">
                                    <div class="car-item-rating">
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div class="car-item-price">
                                        <span>Giá: </span>
                                        <span class="price">${carInfo.price}</span>
                                        <span>/mo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        `
    })
    carsList.innerHTML = html.join('')
}

