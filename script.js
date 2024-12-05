function generateNicknames() {
    const name = document.getElementById('nameInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (!name) {
        resultDiv.innerHTML = "<p>Пожалуйста, введите имя.</p>";
        return;
    }

    const nicknames = [
        `${name}чик`,
        `${name}уля`,
        `${name}ос`,
        `Супер-${name}`,
        `${name}-Бро`,
        `${name}ик`,
        `Дружище-${name}`
    ];

    // Shuffle the nicknames array
    const shuffled = nicknames.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    resultDiv.innerHTML = `<p>Клички для "${name}":</p><ul>${selected.map(n => `<li>${n}</li>`).join('')}</ul>`;
}