    var sixtseven = false
    let video = document.getElementById("image-container");
    if (sixtseven == false){
        video.onclick = function(){
        document.getElementById("Andrea").className = "Alletto";
        video.innerHTML = '<iframe class="Sigma" width="1175" height="661" src="https://www.youtube.com/embed/ozMUtZEEVSM" title="HO INSTALLATO IOS 26 SULL&#39;IPHONE 11 PRO DI 6 ANNI FA! 😳 L&#39;iPhone SUPPORTATO PIÙ VECCHIO! esplode?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        sixtseven = true;
        }
    }
    if (sixtseven == true) {
        console.log("Sigma, funziona");
        video.onclick = function(){
            console.log("Sigma, funziona");
            video.innerHTML = '<img id="main-image" src="Click.png" alt="Immagine iniziale">';
            sixtseven = false;
    }
}
        const targetDate = new Date("2025-09-24T23:59:59").getTime();
        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            if (timeLeft > 0) {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                document.getElementById("countdown").innerHTML = 
                    `${days}d ${hours}h ${minutes}m ${seconds}s`;
            } else {
                document.getElementById("countdown").innerHTML = "The SpainLands is out!";
                clearInterval(interval);
            }
        }

    

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown();