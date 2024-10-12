function calculateTotal() {
    let total = 0;

    const items = [
        { id: 'espresso', qtyId: 'espresso-qty' },
        { id: 'americano', qtyId: 'americano-qty' },
        { id: 'latte', qtyId: 'latte-qty' },
        { id: 'cappuccino', qtyId: 'cappuccino-qty' },
        { id: 'chocolate-cake', qtyId: 'chocolate-cake-qty' },
        { id: 'blueberry-cake', qtyId: 'blueberry-cake-qty' },
        { id: 'apple-tart', qtyId: 'apple-tart-qty' }
    ];

    items.forEach(item => {
        const checkbox = document.getElementById(item.id);
        const quantityField = document.getElementById(item.qtyId);

        if (checkbox.checked) {
            if (quantityField.value === 0) {
                quantityField.value = 1;
            }
            const quantity = parseInt(quantityField.value);
            const price = parseInt(checkbox.getAttribute('data-price'));
            total += price * quantity;
        }
    });

    document.getElementById('total').textContent = `Итого: ${total} р.`;
}

function placeOrder() {
    const surname = document.getElementById('surname').value;
    const name = document.getElementById('name').value;
    const total = document.getElementById('total').textContent;

    alert(`Заказчик: ${surname} ${name}\n${total}`);
}
