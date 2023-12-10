// Создаем звезды в реальном времени
function createStarsRealTime() {
    const starsContainer = document.getElementById("stars-container");

    // Создаем новую звезду
    function createStar() {
        const star = document.createElement("div");
        star.className = "star";

        // Генерируем случайные координаты для звезд
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        star.style.left = x + "%";
        star.style.top = y + "%";

        starsContainer.appendChild(star);

        // Удаляем звезду после определенного времени (например, 5 секунд)
        setTimeout(() => {
            starsContainer.removeChild(star);
        }, 20000); // 5000 миллисекунд (5 секунд)
    }

    // Создаем новую звезду каждую секунду
    setInterval(createStar, 500);
}

createStarsRealTime();
