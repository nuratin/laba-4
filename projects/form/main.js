document.getElementById('submit').addEventListener('click', function() {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let response = document.getElementById('response');

    if (name || surname) {
        response.textContent = `Ответ: Здравствуйте, ${name} ${surname}!`;
    } else {
        response.textContent = 'Ответ: Пожалуйста, введите имя или фамилию!';
    }
});
