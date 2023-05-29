function toastFunction() {
    var toast = document.getElementById("toast");
    toast.className = "toast--visible";
    setTimeout(function () { toast.className = toast.className.replace("toast--visible", ""); }, 3000);
}