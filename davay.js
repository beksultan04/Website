document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    const linksContainer = document.getElementById("university-links");

    // Добавляем обработчик на кнопку submit
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        // Показываем уже существующие ссылки из HTML
        linksContainer.classList.add("show");
    });

    // Улучшаем стили для поля поиска
    const searchBox = document.getElementById("search");
    if (searchBox) {
        searchBox.style.border = "2px solid #FF5722";
        searchBox.style.borderRadius = "5px";
        searchBox.style.padding = "10px";
        searchBox.style.fontSize = "16px";
    }

    // Фильтрация значений выпадающих списков
    function filterOptions() {
        let searchInput = searchBox.value.toLowerCase();
        let selects = document.querySelectorAll("select");

        selects.forEach(select => {
            for (let option of select.options) {
                let text = option.text.toLowerCase();
                if (text.includes(searchInput) || option.value === "") {
                    option.style.display = "";
                } else {
                    option.style.display = "none";
                }
            }
        });
    }
});
