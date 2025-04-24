// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle (would need more implementation)
document.querySelector('button.md\\:hidden').addEventListener('click', function() {
    alert('Menú móvil se abriría aquí en una implementación completa');
});