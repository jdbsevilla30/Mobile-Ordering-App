import { menuArray } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { getMenuHtml } from './getmenu.js'
import { getOrderHtml } from './getorder.js'
export let orderedItems = []

export const paymentFormDisplay = document.getElementById('payment-form');
export const paymentForm = document.getElementById('payment-form')
const submitButton = document.getElementById('submit-btn');

document.addEventListener('click', function (e) {
    if (e.target.dataset.add) {
        handleOrder(e.target.dataset.add)
        console.log("add")
    }

    else if (e.target.dataset.remove) {
        handleRemove(e.target.dataset.remove);
    }
    // else if (e.target.dataset.clear) {
    //     orderedItems = [];

    // }
    else if (e.target.dataset.complete && orderedItems.length > 0) {
        paymentFormDisplay.classList.toggle('hide')
        console.log("Complete Order pressed")
    }

    renderOrder();
})

paymentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const paymentFormData = new FormData(paymentForm);
    const fullName = paymentFormData.get('fullName')
    paymentFormDisplay.classList.toggle('hide')
    renderPrompt(fullName);
    document.getElementById('total-order').classList.add('hide');
    console.log("pay pressed");
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
        <section class="thank-you">
        <h1 class="thank-you-text">Thanks, ${name}! Your order is on its way!</h1>
    </section>
    `
    orderPrompt.innerHTML += prompt;
}
renderMenu();