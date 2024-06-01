
async function uploadPDF() {
    const pdfUpload = document.getElementById('pdfUpload').files[0];
    if (!pdfUpload) {
        alert("Please select a PDF file to upload.");
        return;
    }

    const formData = new FormData();
    formData.append('file', pdfUpload);
    // Display the PDF (for simplicity, using URL.createObjectURL)
    const pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.innerHTML = `<iframe src="${URL.createObjectURL(pdfUpload)}" width="100%" height="500px"></iframe>`;

    // Mock API call to backend (replace with actual API endpoint)
    const response = await fetch('https://api.example.com/extract', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        const data = await response.json();
        document.getElementById('extractedData').textContent = JSON.stringify(data, null, 2);
    } else {
        document.getElementById('extractedData').textContent = 'Failed to extract data.';
    }
}
