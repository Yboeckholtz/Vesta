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
    $(document).ready(function(){
    $.getJSON("assets/products/sample_products.json", function(data){
        var product_data = '';
        $.each(data, function (key, value){
            product_data += '<tr class="productItem">';
            product_data += '<td>'+value.article_number+'</td>';
            product_data += '<td>'+value.name+'</td>';
            product_data += '<td>'+value.stock+'</td>';
            product_data += '<td>'+'&euro;'+ value.price+'</td>';
            product_data += '<td id="keyboardViewButtonTr">'
                +"<button type=\"button\" class=\"btn addFree\">Add Free</button>"
                +"<button type=\"button\" class=\"btn addToCart\">Add to Cart</button>"
                +'</td>';
            product_data += '</tr>';
        });
        $('#productTable').append(product_data);
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

        //add to cart function
        $(document).ready(function (){
            $(".productItem").click(function (e){
                e.preventDefault();

            })
        })
});

//cart function
function localStorageTest(){
    localStorage.setItem('cartNumbers');
    console.log("test")
}
