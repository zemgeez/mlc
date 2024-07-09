


document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#myForm'); 
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        submit(form); 
    });
});
 

              function submit(form){ 
    const formData = new FormData(form);
    let hasData = false;
    for (let [key, value] of formData.entries()) {
        console.log(key, value);
        hasData = true; 
    }

    if (hasData) {
        console.log("Form data submitted. Redirecting to /predict.html...");
     
        window.location.href = "/predict.html";
                  }
    else {
        window.alert("retry");
                  }
}


function download() {
    window.print();
}
function showreport() {
    var x = document.getElementById("report");
    var reportButton = document.getElementById("showreport");

    if (x.style.display === "none" || x.style.display === "") {

        reportButton.innerHTML = "Generating Report...";
        
        setTimeout(() => {
            x.style.display = "block";
            reportButton.innerHTML = "Hide Report";
        }, 2000); 

        // setting up some inner function 

    } else {
        x.style.display = "none";
        reportButton.innerHTML = "Show Report";
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


