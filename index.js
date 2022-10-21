import { menuArray } from './data.js'


document.addEventListener('click', function (e) {
    if (e.target.dataset.add) {
        handleOrder(e.target.dataset.add)
    }

})
let orderedArray = [];

function handleOrder(tweetId) {
    const targetTweetObj = menuArray.filter(function (tweet) {
        return tweet.id === tweetId
    })[0]

  


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
        <p>${menu.order}</p>
      
        `
    })
    return menuHtml;
}




function renderMenu() {
    document.getElementById('menu-here').innerHTML = getMenuHtml();

}


renderMenu();