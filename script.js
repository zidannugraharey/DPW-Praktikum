function startCountdown(targetDate, elementId) {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = target - now;

        if (distance < 0) {
            document.getElementById(elementId).innerHTML = "Acara Telah Dimulai";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        document.getElementById(elementId).innerHTML = `
            <div class="time-box">
                <div class="time-number">${days}</div>
                <div class="time-label">Hari</div>
            </div>
            <div class="time-box">
                <div class="time-number">${hours}</div>
                <div class="time-label">Jam</div>
            </div>
            <div class="time-box">
                <div class="time-number">${minutes}</div>
                <div class="time-label">Menit</div>
            </div>
            <div class="time-box">
                <div class="time-number">${seconds}</div>
                <div class="time-label">Detik</div>
            </div>
        `;
    }, 1000);
}

// AKAD
startCountdown("June 15, 2040 08:00:00", "countdown-akad");

// RESEPSI
startCountdown("June 15, 2040 11:00:00", "countdown-resepsi");