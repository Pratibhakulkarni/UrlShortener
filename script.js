const urlMap = {};

function generateShortCode() {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = 6;
    let shortCode = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        shortCode += charset[randomIndex];
    }
    return shortCode;
}

function encodeURL(longURL) {
    const shortCode = generateShortCode();
    urlMap[shortCode] = longURL;
    return shortCode;
}

function decodeURL(shortCode) {
    return urlMap[shortCode];
}

async function shortURL() {
    const longURL = document.getElementById("url").value;
    const shortCode = encodeURL(longURL);
    document.getElementById('result').innerHTML = `
        Shortened URL: <a href="#" onclick="redirectToOriginal('${shortCode}')">https://example.com/${shortCode}</a>`;
}

function redirectToOriginal(shortCode) {
    const originalURL = decodeURL(shortCode);
    if (originalURL) {
        window.location.href = originalURL;
    } else {
        alert('Original URL not found');
    }
}
