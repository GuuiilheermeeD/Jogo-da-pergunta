function handleNo() {
    const noButton = document.getElementById("noBtn");
    const yesButton = document.getElementById("yesBtn");
    const maxWidth = window.innerWidth - 200;
    const maxHeight = window.innerHeight - 100;

    // Gera uma posição aleatória dentro da tela
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    // Move o botão "Não" para a nova posição
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Aumenta o tamanho do botão "Sim"
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize * 1.1) + "px";
}