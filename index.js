import { menuArray } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

let order = []
let price = []

function getOrderHtml() {
    let orderHtml = ``;
    let sum = 0;
    orderHtml += `
        <h1>Your order is </h1>
        `
    for (let i = 0; i < order.length; i++) {
        sum += price[i];

        orderHtml += `
            <br>
             <p>Item: ${order[i].name}</p>
           <p>Price: $${order[i].price}</p>
              <input type="button" data-remove=${order[i].id} value="remove">
            <br>
            `
    }

    orderHtml += `Your total is: ${sum}`
    if (order.length < 1) {
        orderHtml = "";
    }
    return orderHtml;
}

document.addEventListener('click', function (e) {
    if (e.target.dataset.add) {
        handleOrder(e.target.dataset.add)
        renderOrder();
    }

    else if (e.target.dataset.remove) {
        handleRemove(e.target.dataset.remove);
        renderOrder();
    }
})

function handleRemove(itemId) {
    let orderHtml = ``;
    order = order.filter(function (obj) {
        return obj.id !== itemId
    })
    console.log(order);

}



function renderMenu() {
    document.getElementById('menu-here').innerHTML = getMenuHtml();
}

function renderOrder() {
    document.getElementById('total-order').innerHTML = getOrderHtml();
}

function handleOrder(itemId) {
    let totalPricePerPiece = 0;
    const targetItemId = menuArray.filter(function (item) {
        return item.id === itemId;
    })[0]
    order.push(
        {
            name: targetItemId.name,
            price: targetItemId.price,
            id: uuidv4()
        })
    price.push(targetItemId.price);
    console.log("order lists: " + JSON.stringify(order))
    renderMenu();
}


function getMenuHtml() {
    let menuHtml = ``

    menuArray.forEach(function (menu) {
        let ing = ``
        menu.ingredients.forEach(function (content, index) {
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
renderMenu();