function calculateTotal() {
    let total = 0;
    if (document.getElementById("applePie").checked) {
        total += 120;
    }
    if (document.getElementById("chocolateCake").checked) {
        total += 80;
    }
    if (document.getElementById("cheesecake").checked) {
        total += 180;
    }
    document.getElementById("total").textContent = "Общая стоимость: " + total + " руб";
}
