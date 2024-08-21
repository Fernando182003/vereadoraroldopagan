let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolando para baixo
        header.style.top = '-60px'; // Esconde o cabeçalho ajustando a altura correspondente ao cabeçalho
    } else {
        // Rolando para cima
        header.style.top = '0';
    }
    
    lastScrollTop = scrollTop;
});

document.addEventListener("DOMContentLoaded", function() {
    const socialIcons = document.querySelectorAll(".social-buttons img");

    socialIcons.forEach(function(icon) {
        icon.style.width = "70px";
        icon.style.height = "70px";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const headerLogo = document.querySelector(".header-logo");

    if (headerLogo) {
        headerLogo.style.maxHeight = "200px"; // Ajusta a altura máxima da logo
        headerLogo.style.width = "auto"; // Mantém a proporção da logo
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const leadershipSupport = document.querySelector(".leadership-support");
    const fieldBox = document.querySelector(".field-box");

    // Calculate the position of the leadershipSupport element relative to fieldBox
    const fieldBoxRect = fieldBox.getBoundingClientRect();
    const supportTopPosition = fieldBoxRect.bottom + window.scrollY + 20; // 20px margin from fieldBox bottom
    const supportLeftPosition = fieldBoxRect.left + window.scrollX;

    // Position the leadershipSupport element
    leadershipSupport.style.position = "absolute";
    leadershipSupport.style.top = `${supportTopPosition}px`;
    leadershipSupport.style.left = `${supportLeftPosition}px`;
});


document.addEventListener("DOMContentLoaded", function() {
    const leadershipSupport = document.querySelector(".leadership-support");
    const fieldBox1 = document.querySelector(".field-box:nth-child(1)"); // Primeiro box
    const fieldBox2 = document.querySelector(".field-box:nth-child(2)"); // Segundo box

    if (fieldBox1 && fieldBox2 && leadershipSupport) {
        // Calcula a posição do meio entre as duas boxes
        const box1Bottom = fieldBox1.getBoundingClientRect().bottom + window.scrollY;
        const box2Top = fieldBox2.getBoundingClientRect().top + window.scrollY;
        const middlePosition = (box1Bottom + box2Top) / 2;

        // Calcula a largura e posiciona o texto no centro horizontal
        const containerWidth = document.querySelector(".container").offsetWidth;
        const textWidth = leadershipSupport.offsetWidth;
        const leftPosition = (containerWidth - textWidth) / 2;

        // Posiciona o texto
        leadershipSupport.style.position = "absolute";
        leadershipSupport.style.top = `${middlePosition}px`;
        leadershipSupport.style.left = `${leftPosition}px`;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const leadershipSupport = document.querySelector(".leadership-support");
    const fieldBox1 = document.querySelector(".field-box:nth-child(1)"); // Primeiro box
    const fieldBox2 = document.querySelector(".field-box:nth-child(2)"); // Segundo box

    if (fieldBox1 && fieldBox2 && leadershipSupport) {
        const box1Bottom = fieldBox1.getBoundingClientRect().bottom + window.scrollY;
        const box2Top = fieldBox2.getBoundingClientRect().top + window.scrollY;
        const middlePosition = (box1Bottom + box2Top) / 2;

        leadershipSupport.style.position = "absolute";
        leadershipSupport.style.top = `${middlePosition}px`;
        leadershipSupport.style.left = "50%";
        leadershipSupport.style.transform = "translateX(-50%)";
    }
});
