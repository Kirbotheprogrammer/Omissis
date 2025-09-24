let video = document.getElementById("flag");
let trailer = document.getElementById("container")


video.onclick = function(){
    if(document.getElementById("flag").getAttribute("href") == "#play"){

        trailer.innerHTML = '<a onclick="event.preventDefault()" href="#" id="play" > <iframe width="1840" height="1035" src="https://www.youtube.com/embed/MIQ-iFrRIpg?autoplay=1&vq=hd1080" title="An Erasmus movie 2   The Spainlands" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></a>';
        document.getElementById("flag").setAttribute("href", "#");
    } else {
        document.getElementById("flag").setAttribute("href", "#play");
        trailer.innerHTML = ' ';
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
            var scrollpos = localStorage.getItem('scrollpos');
            if (scrollpos) window.scrollTo(0, scrollpos);
        });

        window.onbeforeunload = function(e) {
            localStorage.setItem('scrollpos', window.scrollY);
        };
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