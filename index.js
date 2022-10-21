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
    order.push(

        {
            name: targetItemId.name,
            price: targetItemId.price
        })
    price.push(targetItemId.price);
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

    orderHtml += `
    <h1>Your order is</h1>
    `

    for (let i = 0; i < price.length; i += 1) {
        sum += price[i];

        orderHtml += `
        <p>Item: ${order[i].name}</p>
        <p>Price: $${order[i].price}</p>
        <p></p>

        <p></p>
        `

    }
    orderHtml += `
    <br>
    <p>Total: $${sum}</p>`
  
    return orderHtml;
}


function renderMenu() {
    document.getElementById('menu-here').innerHTML = getMenuHtml();
    document.getElementById('total-order').innerHTML = getOrderHtml();

}




renderMenu();