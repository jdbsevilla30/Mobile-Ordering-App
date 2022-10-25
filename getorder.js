import { orderedItems } from './index.js' //import the orderdItems array from index
import { paymentFormDisplay } from './index.js'
import { paymentForm } from './index.js'
export function getOrderHtml() //renders customer's total order
{
    let orderHtml = ``;
    let orderTotal = 0;
    orderHtml +=
        `
        <div class="customer-cart">
        <h1 class="your-order">Your order</h1>
        `
    for (let i = 0; i < orderedItems.length; i++) {
        orderTotal += orderedItems[i].price;
        orderHtml +=
            `
        <div class="cart-total">
        <div class="cart-item-name">${orderedItems[i].name}</div>
        <div class="cart-remove" data-remove=${orderedItems[i].id} >remove</div>
        <div class="cart-item-price">$${orderedItems[i].price}</div>
    </div>
        `

    }
    orderHtml +=
        `
        <hr>
        <div class="cart-total spacing">
        <div class="cart-item-name">Total Price:</div>
        <div class="cart-item-price">$${orderTotal}</div>
    </div>
    <button type="submit" class="submit-btn" data-complete="complete">Complete Order</button>
</div>
        `
    if (orderedItems.length < 1) { //if nothing is pushed through orderedItems, clear this
        orderHtml = "";

    }
    return orderHtml;
}