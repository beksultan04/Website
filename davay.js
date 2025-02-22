document.addEventListener("DOMContentLoaded", function () {
    const examLevelSelect = document.getElementById("exam-level");

    function toggleContainer(checkboxId, containerId) {
        document.getElementById(checkboxId).addEventListener("change", function () {
            const container = document.getElementById(containerId);
            container.classList.toggle("hidden", !this.checked);
        });
    }

    function updateSliderValue(sliderId, valueId) {
        const slider = document.getElementById(sliderId);
        const valueDisplay = document.getElementById(valueId);
        valueDisplay.textContent = slider.value; // Устанавливаем начальное значение

        slider.addEventListener("input", function () {
            valueDisplay.textContent = this.value; // Обновляем при движении
        });
    }

    toggleContainer("gpaCheck", "gpa-container");
    toggleContainer("ieltsCheck", "ielts-container");
    toggleContainer("toeflCheck", "toefl-container");

    // Обновляем значения слайдеров
    updateSliderValue("gpa", "gpa-value");
    updateSliderValue("ielts", "ielts-value");
    updateSliderValue("toefl", "toefl-value");
    
    if (examLevelSelect) {
        new Choices(examLevelSelect, {
            removeItemButton: true,
            searchEnabled: true,
            placeholder: true,
            placeholderValue: "Search",
            searchPlaceholderValue: "Search",
            noResultsText: "Ничего не найдено"
        });
    }

    const checkboxes = [
        { id: "gpaCheck", container: "gpa-container" },
        { id: "ieltsCheck", container: "ielts-container" },
        { id: "toeflCheck", container: "toefl-container" }
    ];

    checkboxes.forEach(({ id, container }) => {
        const checkbox = document.getElementById(id);
        const containerElement = document.getElementById(container);

        if (checkbox && containerElement) {
            checkbox.addEventListener("change", function () {
                containerElement.style.display = this.checked ? "block" : "none";
            });
        }
    });
});

function applyFilter(id) {
    const inputElement = document.getElementById(id);
    if (inputElement) {
        alert(`Фильтр ${id.toUpperCase()} применен: ${inputElement.value}`);
    }
}
