//toggle function
function toggle() {
    $('.keyboardViewSection').toggle();
    $('.touchViewSection').toggle();

    var x = document.getElementById("toggleBtn");
    if (x.innerHTML === "Keyboard View") {
        x.innerHTML = "Touch View";
    } else {
        x.innerHTML = "Keyboard View";
    }
}
//

var shopcart = [];

//remove from cart function
var removeCartItemButtons = document.getElementsByClassName('close')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i ++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}

function updateCartTotal() {
    var carItemContainer = document.getElementsByClassName('shopcardProducts')[0]

}


//
// const TouchView = {
//     filterProducts: function(){
//
//     }
// }


const Cart = {
    items: [''],

    get price(){
      return [...this.items.values()].reduce((price, item) => price += item.price, 0);
    },

    reset: function(){
        this.items = [];
    },

    add: function(x){
        if(this.items.indexOf(x) != -1) {
            this.items.push(x);
        }
    },

    remove: function(x){
        this.items.splice(this.items.indexOf(x), 1);
    },

    checkout: function (){
        //do checkout
    }
}

const Product = class{
    constructor(id, article_number, name, stock, price, categorie) {
        this.id = id;
        this.article_number = article_number;
        this.name = name;
        this.stock = stock;
        this.price = price;
        this.categorie = categorie;
    }
};

const Assortment = class {
    constructor() {
        this.products = [];
    }

    loadProducts(products) {
        let self = this;
        products.forEach(function(i, el){
            let pr = new Product(el.id, el.name);
            self.products.push(pr);
        });
    }
}

Cart.reset();
Cart.add('test');
console.log(Cart.items);

//load in items to touchview
$(function(){
    $.getJSON("assets/products/sample_products.json", function(response) {
        $.each(response.data, function (i, el) {
            let card = $($('#productCard-template').html());
            card.find('#cardName').html( el.name);
            card.find('#cardPrice').html( '&euro;' + el.price );
            card.find('.productItem').attr('data-price', el.price)
                .attr('data-article-number', el.article_number)
                .attr('data-id', el.id)
                .attr('data-name', el.name)
                .attr('data-stock', el.stock)
                .attr('data-categorie', el.categorie);
            $('#touchViewProducts').append(card);
        });
    });
});

function addToCart(){
    var value = $(this).val(); // 
    var getDataVal = $(this).find('.productItem').getAttribute('data-name', 'data-price');
    var total = 0;
    console.log(this.data-name)
}

$(document).ready(function() {
//onclick function adds data of product to the template and add template to cart



//         //add to cart functionality (onclick)
//     outputCart();
//     $(document).on('click', '.productItem', function(){
//         var productInfo = $(this.dataset)[0];
//         productInfo.qty = 1;
//         var productInCart = false;
//
//         $.each(shopcart, function(index, value){
//             if(value.id == productInfo.id){
//                 value.qty=parseInt(value.qty) + parseInt(productInfo.qty);
//                 productInCart = true;
//             }
//         })
//
//         if(!productInCart){
//             shopcart.push(productInfo);
//         }
//         sessionStorage["sc"]=JSON.stringify(shopcart);
//         outputCart();
//     });

//output cart
//     function outputCart(){
//         if(sessionStorage["sc"] != null){
//             shopcart = JSON.parse(sessionStorage["sc"].toString());
//             // console.log(sessionStorage["sc"]);
//         }
//         var holderHTML = "";
//         var total = 0;
//
//         $.each(shopcart, function(index, value){
//             // console.log(value);
//             var subtotal = value.qty * value.price;
//             total = (value.price * value.qty);
//             holderHTML += '<div class="col-5">' + value.name + '</div>' +
//                 '<div class="col-1">' + value.qty + '</div>' +
//                 '<div class="col-2">' + '&euro;' + value.price + '</div>' +
//                 '<div class="col-3">' + '&euro;' + subtotal.toFixed(2) + '</div>' +
//                 '<button type="button" class="close"> <span aria-hidden="true">&times;</span> </button>'
//         })
//         // holderHTML += '<div>'+ total +'</div>';
//         $('#output').html(holderHTML);
//     }

    //datatable output
    $('[data-selected]')
    $('#data-table').DataTable({
        "paging": false,
        "ajax": "assets/products/sample_products.json",
        "columns": [
            {"data": "article_number"},
            {"data": "name"},
            {"data": "stock"},
            {"data": "price", render: $.fn.dataTable.render.number( ',', '.', 2, '&euro; ')},
            {"defaultContent": "<button class='addToCart'>Add to Cart</button><button class='addFree'>Add Free</button>"}
        ]
    });
})

