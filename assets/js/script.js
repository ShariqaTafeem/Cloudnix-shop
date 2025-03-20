function showPage(pageId) {
    // Hide all pages
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('themePage').style.display = 'none';
    document.getElementById('productPage').style.display = 'none';
    document.getElementById('pricingPage').style.display = 'none';

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
}
function submitForm() {
    alert("Form submitted successfully!");
    // Add your form submission logic here
}