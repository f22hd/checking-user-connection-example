
window.addEventListener("online",checkConnection);
window.addEventListener("offline",checkConnection);

function checkConnection(){
    var offline_element = document.getElementById("offline");
    const displayValue = navigator.onLine ? 'none' : 'block';
    offline_element.style.display = displayValue;  
}
