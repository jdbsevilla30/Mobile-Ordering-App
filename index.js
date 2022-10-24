import { menuArray } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { getMenuHtml } from './getmenu.js'
import { getOrderHtml } from './getorder.js'
export let orderedItems = []

export const paymentFormDisplay = document.getElementById('container');
export const paymentForm = document.getElementById('payment-form')
const submitButton = document.getElementById('submit-btn');

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
    else if (e.target.dataset.complete && orderedItems.length > 0) {
        paymentFormDisplay.classList.toggle('hidden')

    }
    
    renderOrder();
})

paymentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const paymentFormData = new FormData(paymentForm);
    const fullName = paymentFormData.get('fullName')
    paymentFormDisplay.classList.toggle('hidden')
    renderPrompt(fullName);
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
    document.getElementById('total-order').innerHTML = getOrderHtml();
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

function renderPrompt(name) {
    let orderPrompt = document.getElementById('order-prompt');
    let prompt = ``;
    prompt +=

        `
    <div class="thank-you-message"> 
    <p>Thanks, ${name}! Your order is on its way!</p>
    <div>
    `
    orderPrompt.innerHTML += prompt;
}

function checkForOrders() {
    if (orderedItems.length < 1) {
        paymentFormDisplay.classList.toggle('hidden')
        
    }
}

renderMenu();