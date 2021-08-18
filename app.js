function shopping(Quantity, Price, productPrice, isIncress) {
    const subTotal = document.getElementById('subtotal');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');
    let quantity = document.getElementById(Quantity);
    const price = document.getElementById(Price);
    let quantity1 = parseInt(quantity.value);
    if (isIncress) {
        quantity1 = quantity1 + 1;
    } else {
        quantity1 = quantity1 - 1;
    }
    if (quantity1 >= 0) {
        quantity.value = quantity1;
        price.innerText = quantity1 * productPrice;
    }
    subTotal.innerText = calculateSubTotal();
    tax.innerText = calculateSubTotal() / 10;
    total.innerText = calculateSubTotal() + parseFloat(tax.innerText);
}
function productTotal(product) {
    const productInput = document.getElementById(product);
    return parseInt(productInput.value);
}
function calculateSubTotal() {
    const phoneTotal = productTotal('mobile-quantity') * 1219;
    const caseTotal = productTotal('case-quantity') * 59;
    return phoneTotal + caseTotal;
}
document.getElementById('mobile-quantity-incress').addEventListener('click', function () {
    shopping('mobile-quantity', 'mobile-price', 1219, true)
})
document.getElementById('mobile-quantity-decress').addEventListener('click', function () {
    shopping('mobile-quantity', 'mobile-price', 1219, false)
})
document.getElementById('case-quantity-incress').addEventListener('click', function () {
    shopping('case-quantity', 'case-price', 59, true)
})
document.getElementById('case-quantity-decress').addEventListener('click', function () {
    shopping('case-quantity', 'case-price', 59, false)
})