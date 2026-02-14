document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('losujBtn');
    const wynik = document.getElementById('wynikLosowania');

    btn.addEventListener('click', function() {
        const wszystkieKierunki = document.querySelectorAll('li[class^="status-"]');
        
        if (wszystkieKierunki.length > 0) {
            const randomIndex = Math.floor(Math.random() * wszystkieKierunki.length);
            const wylosowanaLinia = wszystkieKierunki[randomIndex];

            const tekst = wylosowanaLinia.innerText;
            
            const kolor = window.getComputedStyle(wylosowanaLinia).color;

            wynik.innerHTML = `Wylosowano: <span style="color: ${kolor}; font-weight: bold;">${tekst}</span>`;
            
            wynik.style.opacity = 0;
            setTimeout(() => {
                wynik.style.opacity = 1;
                wynik.style.transition = "opacity 0.3s";
            }, 50);
        } else {
            wynik.innerText = "Nie znaleziono żadnych linii do losowania.";
        }
    });
});