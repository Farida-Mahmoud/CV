document.addEventListener("DOMContentLoaded", function() {
    // Resume Download Button
    document.getElementById("download-resume").addEventListener("click", function() {
        alert("Resume download functionality coming soon!");
    });

    // Repo Buttons Alert
    document.querySelectorAll(".repo-btn").forEach(button => {
        button.addEventListener("click", function() {
            alert("Redirecting to project repository...");
        });
    });

    // Location Button Alert
    document.getElementById("location").addEventListener("click", function() {
        alert("Farida Mahmoud is based in Cairo, Egypt!");
    });
});
