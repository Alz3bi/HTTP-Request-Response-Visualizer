document.getElementById('sendRequestBtn').addEventListener('click', async () => {
    const url = document.getElementById('urlInput').value;

    try {
        const response = await fetch(url);
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
    }
});
