// Captura os elementos
const searchBtn = document.querySelector('.main-search-btn');
const inputs = document.querySelectorAll('.search-item input');

searchBtn.addEventListener('click', () => {
    // Organiza os dados
    const searchData = {
        categoria: inputs[0].value,
        horario: inputs[1].value,
        palavrasChave: inputs[2].value
    };
    
    console.log("Realizando busca com:", searchData);
    alert("Buscando por: " + (searchData.categoria || "Todas as categorias"));
});

// Atalho: apertar Enter para buscar
inputs.forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchBtn.click();
    });
});