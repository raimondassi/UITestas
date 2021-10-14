$(function(){
    var name = $('#name');
    var price = $('#price');
    var quantity = $('#quantity');

    var products = JSON.parse(localStorage.getItem('products'));
    if (products === null) {
        products = [];
    }

    $('#enterButton').click(function(event) {
        event.preventDefault();
        let procucts = createProductObject(name.val(), price.val(), quantity.val());
        saveProduct(procucts);
        cleanUp();
    });
 
    function saveProduct(product) {
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }

    function createProductObject(name, price, quantity) {
        let product = {
            name: name,
            price: price,
            quantity: quantity
        }

        return product;
    }

    function cleanUp(){
        name.val('');
        price.val('');
        quantity.val('');
    }
    
});