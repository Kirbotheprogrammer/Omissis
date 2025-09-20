        const audio = document.getElementById('background-music');
        const mainImage = document.getElementById('main-image');

        function startMusicAndChangeImage() {
            audio.muted = false; 
            audio.play().then(() => {
                mainImage.src = "Skbidi.png"; 
                mainImage.alt = "Immagine cambiata";
            }).catch((error) => {
                console.error("Errore durante la riproduzione:", error);
            });
        }

        document.body.addEventListener('click', startMusicAndChangeImage, { once: true });

        const targetDate = new Date("2025-09-24T23:59:59").getTime();
        function Muta(){
            if (audio.muted == false) {
                audio.muted = true;
            

            const button = document.querySelector('button');
            button.innerHTML = 'Audio Muted!';
    }
    else {
        audio.muted = false;
        const button = document.querySelector('button');
        button.innerHTML = "Mute!";
    }
        }
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