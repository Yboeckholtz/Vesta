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

$(document).ready(function() {
//         //add to cart functionality (onclick)
    outputCart();
    $(document).on('click', '.productItem', function(){
        var productInfo = $(this.dataset)[0];
        productInfo.qty = 1;
        var productInCart = false;

        $.each(shopcart, function(index, value){
            if(value.id == productInfo.id){
                value.qty=parseInt(value.qty) + parseInt(productInfo.qty);
                productInCart = true;
            }
        })

        if(!productInCart){
            shopcart.push(productInfo);
        }
        sessionStorage["sc"]=JSON.stringify(shopcart);
        outputCart();
    });

//output cart
    function outputCart(){
        if(sessionStorage["sc"] != null){
            shopcart = JSON.parse(sessionStorage["sc"].toString());
            console.log(sessionStorage["sc"]);
        }
        var holderHTML = "";
        var total = 0;

        $.each(shopcart, function(index, value){
            console.log(value);
            var subtotal = value.qty * value.price;
            total = (value.price * value.qty);
            holderHTML += '<div class="col-5">' + value.name + '</div>' +
                '<div class="col-1">' + value.qty + '</div>' +
                '<div class="col-2">' + '&euro;' + value.price + '</div>' +
                '<div class="col-3">' + '&euro;' + subtotal.toFixed(2) + '</div>'
        })
        // holderHTML += '<div>'+ total +'</div>';
        $('#output').html(holderHTML);
    }

    //categorie filter
    $('[data-selected]')
    $('#data-table').DataTable({
        "paging": false,
        "ajax": "assets/products/sample_products.json",
        "columns": [
            {"data": "article_number"},
            {"data": "name"},
            {"data": "stock"},
            {"data": "price", render: $.fn.dataTable.render.number( ',', '.', 2, '&euro; ' )},
            {"defaultContent": "<button class='addToCart'>Add to Cart</button><button class='addFree'>Add Free</button>"}
        ]
    });

})

const Cart = {
    items: [''],

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
    constructor(id, article_number, name, stock, price) {
        this.id = id;
        this.article_number = article_number;
        this.name = name;
        this.stock = stock;
        this.price = price;
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

    filterProducts(products){}
}

Cart.reset();
Cart.add('apenkots');
console.log(Cart.items);

//filter function
// $(".nav-link").click(function() {
//     var category = $(this).attr('id');
//     if (category != "all") {
//         $(".productCard").hide();
//         $(".productCard").each(function() {
//             if ($(this).find(".productItem").attr('categories') == category) {
//                 $(this).show() //show that div
//             }
//         })
//     } else {
//         $(".productCard").show();
//     }
// })

//load in items to touchview
$(function(){
    $.getJSON("assets/products/sample_products.json", function(response) {
        $.each(response.data, function (i, el) {
            let card = $($('#productCard-template').html());
            card.find('#cardName').html( el.name );
            card.find('#cardPrice').html( '&euro;' + el.price );
            card.find('.productItem').attr('data-price', el.price)
                .attr('data-article-number', el.article_number)
                .attr('data-id', el.id)
                .attr('data-name', el.name)
                .attr('data-stock', el.stock)
                .attr('data-categories', el.categories);
            $('#touchViewProducts').append(card);
        });
    });
});





