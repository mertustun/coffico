const menu = [
    {
        id: 0,
        title: "Cappuccino Classic Cold",
        category: "Cappuccino",
        price: 9.95,
        img: "https://mikelcoffee.com/wp-content/uploads/2022/04/03-big-cold-cup-ready-540x570_0000_cappuccino-latte-cold-002_resized-lbox-540x570-ffffff.jpg",
        desc: `A small twist in the order of preparation of the ingredients is enough to change the entire taste experience`
    },
    {
        id: 1,
        title: "Cappuccino Mocha Cold",
        category: "Cappuccino",
        price: 11.25,
        img: "https://mikelcoffee.com/wp-content/uploads/2022/04/seasonal-front-angle-03-big-cold-cup-ready-540x570_cappuccino-mocha_resized-lbox-540x570-ffffff.jpg",
        desc: `Our signature cold Cappuccino with Mocha ice cream create the perfectly indulgent Cappuccino Mocha.`
    },
    {
        id: 2,
        title: "Cappuccino Flat White Cold",
        category: "Cappuccino",
        price: 8.75,
        img: "https://mikelcoffee.com/wp-content/uploads/2022/07/01-front-angle-540x570_cappuccino-flat-white-cold-002_resized-lbox-540x570-ffffff.jpg",
        desc: `Strong taste of double Espresso combined with cold fresh milk.`
    },
    {
        id: 3,
        title: "Hot Filtered Coffee",
        category: "Classics",
        price: 6.5,
        img: "https://mikelcoffee.com/wp-content/uploads/2022/04/02-mid-hot-cup-ready-540x570_0008_filter-hot-ok_resized-lbox-540x570-ffffff.jpg",
        desc: `The aromas of freshly ground coffee are released after distillation giving a rich taste.`
    },
    {
        id: 4,
        title: "Nescafe Hot",
        category: "Classics",
        price: 4.75,
        img: "https://mikelcoffee.com/wp-content/uploads/2022/04/02-mid-hot-cup-ready-540x570_0007_nes-hot-ok_resized-lbox-540x570-ffffff.jpg",
        desc: `The familiar hot instant coffee!`
    },
    {
        id: 5,
        title: "Frappe",
        category: "Classics",
        price: 12.5,
        img: "https://mikelcoffee.com/wp-content/uploads/2022/04/seasonal-front-angle-03-big-cold-cup-ready-540x570_frappe_resized-lbox-540x570-ffffff.jpg",
        desc: `Ideal stirring time for perfect cream lasting until the last sip.`
    },
    {
        id: 6,
        title: "Espresso Classic Hot",
        category: "Espresso",
        price: 7,
        img: "https://mikelcoffee.com/wp-content/uploads/2022/04/01-small-hot-cup-ready-540x570_0007_espresso-hot-ok_resized-lbox-540x570-ffffff.jpg",
        desc: `The exact amount of freshly roasted coffee combined with the ideal distillation create the perfect tasting result.`
    },
    {
        id: 7,
        title: "Espresso Americano Cold",
        category: "Espresso",
        price: 7.5,
        img: "https://mikelcoffee.com/wp-content/uploads/2022/04/02-middle-cold-cup-ready-540x570_0006_americano-cold-ok_resized-lbox-540x570-ffffff.jpg",
        desc: `Classic Americano with ice.`
    },
    {
        id: 8,
        title: "Espresso Macchiato Cold",
        category: "Espresso",
        price: 9.75,
        img: "https://mikelcoffee.com/wp-content/uploads/2022/04/02-middle-cold-cup-ready-540x570_0002_espresso-macchiato-cold-ok_resized-lbox-540x570-ffffff.jpg",
        desc: `Cold Espresso with a small amount of cold foamed milk.`
    }
]

const btnContainer = document.querySelector('.btn-container')
const menuContainer = document.querySelector('.menu-item-container')

// to seperate the categories menu array the reduce method used and prev value set as "All".
const categories = menu.reduce((prevValue, curValue) => {
    if(!prevValue.includes(curValue.category)) prevValue.push(curValue.category)
    return prevValue
}, ["All"])
function CategorizedItems() {
// Create the all buttons by using categorized new array which is categories.
    const btnCategorized = categories.map(item => {
        return `<button class="categorized-btn" data-id="${item}"> ${item.toUpperCase()}</button>`
    }).join("")
    btnContainer.innerHTML = btnCategorized

// add event the buttons to display on the page when the click them by forEach and filter methdos. 
    const filterEvent = document.querySelectorAll('.categorized-btn')

    filterEvent.forEach(button => {
        button.addEventListener('click', (button_data_id) => {
            const clickedCategory = button_data_id.target.dataset.id
            //console.log(clickedCategory)
            
            const menu_category = menu.filter((menu_item) => {
                if(menu_item.category === clickedCategory) {
                    return menu_item
                }
            })
            if(clickedCategory === "All"){
                menuList(menu)
            }else{
                menuList(menu_category)
            }
        })
    })
}

//this function is set below to display the contents on the page.
function menuList(products){
    let MenuDisplay = products.map(content => {
        return `<div class="menu-items">
        <img src=${content.img} alt=${content.title} class="photo">
        <div class="menu-info">
            <div class="menu-title">
                <h4>${content.title}</h4>
                <h4 class="price"> &dollar; ${content.price}</h4>
            </div>
            <div class="menu-text">
                ${content.desc}
            </div>
        </div>
      </div> `
    }).join("")
    menuContainer.innerHTML = MenuDisplay
}

menuList(menu)
CategorizedItems()
