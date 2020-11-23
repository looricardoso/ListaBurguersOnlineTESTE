const iniciar = async () => {
    const lista = document.getElementById('lista-burguers');
    const tabela = document.getElementById('tabelaBurguers');
    const response = await fetch('/Burguers');
    const result = await response.json();

    result.forEach(bg => {
        tabela.insertAdjacentHTML('beforeend', `<li>${bg.nome}</li>`);
    });
}

document.addEventListener('DOMContentLoaded', iniciar);