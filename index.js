import { menuArray } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import {getMenuHtml()} from './getmenu.js'

let orderedItems = []

function getOrderHtml() //renders customer's total order
{
    let orderHtml = ``;
    let orderTotal = 0;
    orderHtml +=
        `
        <h1 class="header">Your order is </h1>
        `
    for (let i = 0; i < orderedItems.length; i++) {
        orderTotal += orderedItems[i].price;

        orderHtml +=
            `
        <p class="ordered-item-name">Item: ${orderedItems[i].name}</p>
        <p class="ordered-item-price">Price: $${orderedItems[i].price}</p>
        <input 
        class="remove-btn"
        type="button" 
        data-remove=${orderedItems[i].id} 
        value="remove">
        `
    }
    orderHtml +=
        `
<i class="fa-regular fa-minus clear-btn" data-clear="clear"></i> 
<p class="purchase-total">Your total is: $${orderTotal}</p>
    `
    if (orderedItems.length < 1) { //if nothing is pushed through orderedItems, clear this
        orderHtml = "";
    }
    return orderHtml;
}

document.addEventListener('click', function (e) {
    if (e.target.dataset.add) {
        handleOrder(e.target.dataset.add)
    }

    else if (e.target.dataset.remove) {
        handleRemove(e.target.dataset.remove);

    }
    else if (e.target.dataset.clear) {
        orderedItems = [];
    }
    renderOrder();
})

function handleRemove(itemId) {
    let orderHtml = ``;
    orderedItems = orderedItems.filter(function (obj) {
        return obj.id !== itemId
    })
}



function renderMenu() {
    document.getElementById('menu-here').innerHTML = getMenuHtml();
}

function renderOrder() {
    document.getElementById('total-orders').innerHTML = getOrderHtml();
}

function handleOrder(itemId) {
    let totalPricePerPiece = 0;
    const targetItemId = menuArray.filter(function (item) {
        return item.id === itemId;
    })[0]
    orderedItems.push(
        {
            name: targetItemId.name,
            price: targetItemId.price,
            id: uuidv4()
        })
    renderMenu();
}



renderMenu();