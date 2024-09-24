const menu = [
    {name:"Magherita",price:8},
    {name:"Pepperoni",price:10},
    {name:"Hawaian",price:10},
    {name:"Veggie",price:9}
]

const cashInRegister = 100
const orderQueue = []

function addNewPizza(pizzaObj){
    menu.push(pizzaObj)
}

function placeOrder()