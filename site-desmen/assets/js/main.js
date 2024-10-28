document.addEventListener('DOMContentLoaded', function() {
    const beatsLink = document.querySelector('a[href="#beats"]');
    
    if (beatsLink) {
        beatsLink.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            window.location.href = 'beats.html'; // Redireciona para a nova página
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const inicioLink = document.querySelector('a[href="#inicio"]');
    
    if (inicioLink) {
        inicioLink.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            window.location.href = 'index.html'; // Redireciona para a nova página
        });
    }
});

//rolamento da pafina de acordo com a lista:
document.getElementById("link-trailers-us").addEventListener("click", function(e) {
    e.preventDefault(); // Previne o comportamento padrão do link
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Faz a rolagem suave
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const soundKitsLink = document.querySelector('a[href="#sound-kits"]');
    
    if (soundKitsLink) {
        soundKitsLink.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            window.location.href = 'sound-kits.html'; // Redireciona para a nova página
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.getElementById('contact-link');
    console.log('Link de contato encontrado:', contactLink);
    
    if (contactLink) {
        contactLink.addEventListener('click', function(event) {
            console.log('Link de contato clicado');
            window.location.href = 'contact.html';
        });
    } else {
        console.log('Link de contato não encontrado');
    }
});