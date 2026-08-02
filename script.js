// আপনার সিক্রেট ৪ ডিজিটের পাসকোডটি এখানে দিন (যেমন:1908 )
const SECRET_PIN = "1908"; 

function unlock() {
    const input = document.getElementById("pinInput").value;
    const error = document.getElementById("errorMsg");

    if (input === SECRET_PIN) {
        document.getElementById("lock-screen").classList.add("hidden");
        document.getElementById("letter-screen").classList.remove("hidden");
    } else {
        error.style.display = "block";
    }
}

function openLetter() {
    document.querySelector(".envelope").classList.add("hidden");
    document.getElementById("letterContent").classList.remove("hidden");
}

function goToCake() {
    document.getElementById("letter-screen").classList.add("hidden");
    document.getElementById("cake-screen").classList.remove("hidden");
}

function blowCandle() {
    const flame = document.getElementById("flame");
    
    if (flame.style.display !== "none") {
        flame.style.display = "none";
        document.getElementById("wishMsg").classList.remove("hidden");

        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });
    }
}
