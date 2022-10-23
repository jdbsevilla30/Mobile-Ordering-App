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
        <div class="restaurant-menu">
        <p class="emoji">${menu.emoji}</p>
        <p class="product-name" id=menu-${menu.id}>${menu.name}</p>
        <p class="product-ingredients">${ingredients}</p>
        <p class="product-price">$${menu.price}</p>
        <i class="fa-thin fa-plus add-btn" data-add=${menu.id}></i>
        </div>
        `
    })
    return menuHtml;
}