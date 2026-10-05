document.getElementById('generateBtn').addEventListener('click', function() {
    const promptText = document.getElementById('promptInput').value;
    const comicOutput = document.getElementById('comicOutput');

    if (promptText.trim() === "") {
        alert("Please enter a prompt first!");
        return;
    }

    // Loading State
    comicOutput.innerHTML = `<p>Generating comic for: <strong>"${promptText}"</strong>...</p>`;

    // Demo Output (Backend / AI API integration can be added here)
    setTimeout(() => {
        comicOutput.innerHTML = `
            <div style="border: 2px solid #000; padding: 20px; background: #fff; border-radius: 5px;">
                <h3>Comic Panel Created! 🎨</h3>
                <p><em>"${promptText}"</em></p>
                <div style="margin-top: 15px; background: #e0e0e0; height: 150px; display: flex; align-items: center; justify-content: center;">
                    [ AI Image / Comic Panel Placeholder ]
                </div>
            </div>
        `;
    }, 1500);
});