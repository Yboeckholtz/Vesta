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
//retrieve products from json file
    $(document).ready(function() {


        //categorie filter
        $('.nav-link').click(function(){
            var category = $(this).attr('id');

            if(category == 'all'){
                $('product_item').addClass('hide');
                setTimeout(function(){
                    $('.product')
                }, 300);
            }
        })
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

        $(".productItem").click(function(e){
            e.preventDefault();
            console.log("item clicked")
        })

    });
    //Search function
//     function searchTable() {
//     var input, filter, found, table, tr, td, i, j;
//     input = document.getElementById("searchBar")[0];
//     filter = input.value.toUpperCase();
//     table = document.getElementById("productTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td");
//     for (j = 0; j < td.length; j++) {
//     if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
//     found = true;
// }
// }
//     if (found) {
//     tr[i].style.display = "";
//     found = false;
// } else {
//     tr[i].style.display = "none";
// }
// }
// }




