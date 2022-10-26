import { menuArray } from "./data.js"
export function getMenuHtml() {
    let menuHtml = ``
    menuArray.forEach(function (menu) {
        let ingredients = ``
        menu.ingredients.forEach(function (content, index) {
            if (index !== menu.ingredients.length - 1) {
                content += ", "
            }
            ingredients += content;
        })
        menuHtml += `
        <div class="menu-item">
        <div class="item-pic">${menu.emoji}</div>
        <div class="item-info">
            <div class="item-name" id="menu-${menu.id}">${menu.name}</div>
            <div class="item-ingredients">${ingredients}</div>
            <div class="item-price">$${menu.price}</div>
        </div>
        <button class="menu-item-add-btn" data-add="${menu.id}">+</button>
    </div>
        `
    })
    return menuHtml;
}