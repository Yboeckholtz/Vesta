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

var shopcart = [];

    $(document).ready(function() {
        outputCart();
//add to cart functionality
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
        //retrieve touchView products
//retrieve keyboardView products
        $('#data-table').DataTable({
            "paging": false,
            "ajax": "assets/products/sample_products.json",
            "columns": [
                {"data": "article_number"},
                {"data": "name"},
                {"data": "stock"},
                {"data": "price"},
                {"defaultContent": "<button class='addToCart'>Add to Cart</button><button class='addFree'>Add Free</button>"}
            ]
        });

})







