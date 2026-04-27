const input = document.getElementById('input');
const translateBtn = document.getElementById('translateBtn');
const output = document.getElementById('output');

async function translateText() {
    const text = input.value;
    
    if (!text.trim()) {
        output.textContent = "Введіть текст для перекладу.";
        return;
    }

    output.textContent = "Переклад...";

    const safeText = encodeURIComponent(text);
    const email = "test@example.com"; // Потрібно для API
    const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en&de=${email}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.responseData && data.responseData.translatedText) {
            output.textContent = data.responseData.translatedText;
        } else {
            output.textContent = "Помилка перекладу.";
        }
    } catch (error) {
        console.error("Помилка:", error);
        output.textContent = "Сталася помилка сервера.";
    }
}

translateBtn.addEventListener('click', translateText);