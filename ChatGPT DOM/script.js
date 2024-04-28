document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById("addBtn");
    const removeBtn = document.getElementById("removeBtn");
    const animateBtn = document.getElementById("animateBtn");
    const styleBtn = document.getElementById("styleBtn");
    const countBtn = document.getElementById("countBtn");
    const elementContainer = document.getElementById("elementContainer");

    // Função para adicionar um novo elemento ao clicar no botão "Adicionar Elemento"
    addBtn.addEventListener("click", function() {
        const newElement = document.createElement("div");
        newElement.textContent = "Novo Elemento";
        newElement.classList.add("element");
        elementContainer.appendChild(newElement);
    });

    // Função para remover o último elemento adicionado ao clicar no botão "Remover Elemento"
    removeBtn.addEventListener("click", function() {
        const elements = document.querySelectorAll(".element");
        if (elements.length > 0) {
            const lastElement = elements[elements.length - 1];
            elementContainer.removeChild(lastElement);
        }
    });

    // Função para animar o primeiro elemento ao clicar no botão "Animar Elemento"
    animateBtn.addEventListener("click", function() {
        const firstElement = document.querySelector(".element");
        if (firstElement) {
            firstElement.style.transition = "transform 0.5s ease-in-out";
            firstElement.style.transform = "translateX(200px)";
            // Após a animação, restaura a posição original
            setTimeout(function() {
                firstElement.style.transform = "none";
            }, 500);
        }
    });

    // Função para estilizar todos os elementos criados ao clicar no botão "Estilizar Todos"
    styleBtn.addEventListener("click", function() {
        const elements = document.querySelectorAll(".element");
        elements.forEach(function(element) {
            element.style.backgroundColor = "#ffcc00";
            element.style.color = "#fff";
            element.style.padding = "10px";
            element.style.borderRadius = "5px";
        });
    });

    // Função para contar quantos elementos existem na página com a classe ".element"
    countBtn.addEventListener("click", function() {
        const elementsCount = document.querySelectorAll(".element").length;
        alert(`Total de elementos: ${elementsCount}`);
    });
});
