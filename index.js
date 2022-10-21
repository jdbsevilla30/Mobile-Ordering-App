import { menuArray } from './data.js'

let order = []
let price = []


document.addEventListener('click', function (e) {
    if (e.target.dataset.add) {
        handleOrder(e.target.dataset.add)
    }

})

function handleOrder(itemId) {
    let totalPricePerPiece = 0;
    const targetItemId = menuArray.filter(function (item) {
        return item.id === itemId;
    })[0]
    //   order.push(targetItemId.name += targetItemId.name);
    price.push(targetItemId.price += price);
    renderMenu();
}



function getMenuHtml() {
    let menuHtml = ``

    menuArray.forEach(function (menu) {
        let ing = ``
        menu.ingredients.forEach(function (content, index) {
            //     console.log(index, content)

            if (index !== menu.ingredients.length - 1) {
                content += ", "
            }
            ing += content;
        })

        menuHtml += `
        <p class="product-name" id=menu-${menu.id}>${menu.name}</p>
        <p class="product-ingredients">${ing}</p>
        <p class="product-price">$${menu.price}</p>
        <i class="fa-thin fa-plus" data-add=${menu.id}></i>

      
        `
    })
    return menuHtml;
}


function getOrderHtml() {
    let orderHtml = ``;
    let sum = 0;
    for (let i = 0; i < price.length; i += 1) {
        sum += price[i];
    }
    orderHtml += `
    <br>
    <br>
    <br>
    Your order is
    <p>Item: ${order}</p>
    <p>${order.length}</p>
    <p>${sum}</p>
    <p></p>
    `
    return orderHtml;
}


function renderMenu() {
    document.getElementById('menu-here').innerHTML = getMenuHtml();
    document.getElementById('total-order').innerHTML = getOrderHtml();

}




renderMenu();