
function submit() {


    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('form');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Example: Fetch all form data
            const formData = new FormData(form);
            for (let [key, value] of formData.entries()) {
                console.log(key, value);


            }

        });
    });
}

function download() {
    window.print();
}

function showreport() {
    var x = document.getElementById("report");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("showreport").innerHTML = "Hide Report";
    } else {
        x.style.display = "none";
        document.getElementById("showreport").innerHTML = "Show Report";
    }   
}









function handleFileUpload(event) {
    const files = event.target.files;
    if (files.length > 0) {
        const file = files[0];
        console.log("Selected file:", file.name);

        // Check if the file is an image
        if (file.type.startsWith('image/')) {
            // Create a URL for the file
            const fileUrl = URL.createObjectURL(file);

            // Optionally, remove any existing previews
            const existingPreview = document.querySelector('.image-preview');
            if (existingPreview) {
                existingPreview.remove();
            }

            // Create an image element
            const img = document.createElement('img');
            img.src = fileUrl;
            img.classList.add('image-preview'); // Add a class for styling
            img.style.maxWidth = '200px'; // Example styling
            img.style.maxHeight = '200px';
            img.onload = function() {
                // Revoke the object URL after the image is loaded to free memory
                URL.revokeObjectURL(img.src);
            };

            // Append the image to the body or a specific element
            document.body.appendChild(img); // Or append it to another element
        } else {
            alert('Please upload an image file.');
        }
    }
}
































        // Optionally, send the form data using fetch() or another AJAX method
        // Example:
        // fetch('your-endpoint', {
        //     method: 'POST',
        //     body: formData,
        // }).then(response => {
        //     if (response.ok) {
        //         return response.json();
        //     }
        //     throw new Error('Network response was not ok.');
        // }).then(data => {
        //     console.log(data);
        // }).catch(error => {
        //     console.error('There has been a problem with your fetch operation:', error);
        // });