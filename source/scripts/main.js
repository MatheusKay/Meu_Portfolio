$('.secao_skills_skills_carrossel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }
    ]
});

const botaoDestaque = document.getElementById('projetos_destaque')
const botaoTodos = document.getElementById('todos_projetos')
const secaoDestaque = document.querySelector('.secao_projetos_destaques')
const secaoTodos = document.querySelector('.secao_projetos_todos')

botaoDestaque.addEventListener('click', function() {
    secaoDestaque.classList.remove('secao_projetos--is-disabled')
    secaoTodos.classList.add('secao_projetos--is-disabled')
})

botaoTodos.addEventListener('click', function() {
    secaoTodos.classList.remove('secao_projetos--is-disabled')
    secaoDestaque.classList.add('secao_projetos--is-disabled')
})