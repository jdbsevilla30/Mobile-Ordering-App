import { orderedItems } from './index.js' //import the orderdItems array from index
export function getOrderHtml() //renders customer's total order
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
<input 
class="complete-order"
type="button" 
data-complete="complete"
value="Complete Order" 
>
    `
    if (orderedItems.length < 1) { //if nothing is pushed through orderedItems, clear this
        orderHtml = "";
    }
    return orderHtml;
}