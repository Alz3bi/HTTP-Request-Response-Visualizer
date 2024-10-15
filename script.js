function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

document.getElementById('sendRequestBtn').addEventListener('click', async () => {
    const url = document.getElementById('urlInput').value;
    const method = document.getElementById('methodSelect').value;
    const loadingIndicator = document.getElementById('loading');
    loadingIndicator.style.display = 'block';

    if (!isValidURL(url)) {
        alert('Please enter a valid URL.');
        return;
    }

    try {
        const response = await fetch(url, { method });
        const headers = [...response.headers.entries()]
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');
        const body = await response.text();

        document.getElementById('statusCode').innerText = response.status;
        document.getElementById('headers').innerText = headers;
        document.getElementById('responseBody').innerText = body;
    } catch (error) {
        document.getElementById('statusCode').innerText = 'Error';
        document.getElementById('headers').innerText = '';
        document.getElementById('responseBody').innerText = 'Could not fetch the URL. Check if the URL is correct.';
    } finally {
        loadingIndicator.style.display = 'none';
    }
});
