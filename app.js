let totalElem = document.getElementById("total")
let itemsListElem = document.getElementById("items-list")
let menuElem = document.getElementById("menu")
let template = ``
let check = ["hello", "hi"]
let order = []
console.log(check[1]);
const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    quantity: 0
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    quantity: 0
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    quantity: 0
}]
drawMenu('toppings')
drawMenu('containers')
drawMenu('ice creams')
drawMenu('reset template')
function drawMenu(type) {
    switch (type) {
        case 'toppings':
            template = `<div class="col-12">
            <h2>Toppings</h2>
            </div>`
            toppings.forEach(i => {
                template += ` <div class="col-4 p-3" )>
                <div class="items-inner" onclick="addTopping('${i.name}', 'topping')">
                    <img class="items-img"
                        src="${i.image}"
                        alt="${i.name}">
                    <p>${i.name} $ ${i.price}</p>
                </div>
            </div>`
            })
            menuElem.innerHTML = template
            break
        case 'containers':
            template += `<div class="col-12">
                <h2>Containers</h2>
                </div>`
            containers.forEach(i => {
                template += ` <div class="col-4 p-3" onclick="addItem('${i.name}', 'container')">
                    <div class="items-inner">
                        <img class="items-img"
                            src="${i.image}"
                            alt="${i.name}">
                        <p>${i.name} $ ${i.price}</p>
                    </div>
                </div>`
                menuElem.innerHTML = template
            })
        // TODO add final element maybe refator to not use switch unnecessarily 
    }


}

function addTopping(name, itemType) {
    console.log(name);
    switch (itemType) {
        case 'topping':
            console.log("adding topping");
            const item = toppings.find(t => t.name == name)


            break
        case 'container':
            const container = containers.find(item => item.name == name)

            break
        case 'ice cream':

            break
    }





}