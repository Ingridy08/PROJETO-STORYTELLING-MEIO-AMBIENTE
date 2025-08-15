const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "qual dessas atitudes você acha mais fácil começar hoje?",
        alternativas: [
            {
                texto: "Realizar a luz ao sair do cômodo economiza energia",
                afirmacao: "Pequenas ações diárias já fazem diferença" 
            },
texto: "Fechar a torneira ao escovar os dentes economiza até 20 litros por dia",
                afirmacao: "Preservar a água é preservar a vida"
            }
        ]
    },
    {
        enunciado: "Qual dessas frases você sente que mais representa você?",
        alternativas: [ 
            {
                texto: " A reciclagem reduz a quantidade de lixo nos aterros",
                afirmacao: " transformar o destino do lixo também transformar o mundo"
            },
            {
                texto: "As florestas ajudam a regular o clima e produzem oxigênio",
                afirmacao: "A natureza é essencial para o equilibrio da vida "
            }
        ]
    },
    {
        enunciado: "Por que devemos agir agora?",
        alternativas: [
            {
                texto: "A mudança climática afeta principalmente os mais vulneráveis",
                afirmacao: "cuidar do planeta é também um ato de justiça"
            },
            {
                texto: "Ainda da tempo de frear os danos, mais é preciso união",
                afirmacao: "se cada um fizer a sua parte, tudo pode mudar"
            }
        ]
    },
    {
        enunciado: "O que mais te inspira quando pensa em proteger a natureza?",
        alternativas: [
            {
                texto: "Plantas ajudam a limpar o ar e regular a temperatura ",
                afirmacao: "a natureza respira, e nos faz respirar também"
            },
            {
                texto: "As áreas verdes melhoram a saúde física e mental das pessoas",
                afirmacao: "onde há verde,  há vida,paz e equilibrio"
            }
        ]
    },
    {
        enunciado: "Quais dessas ações você gostaria de incentivar em outros pessoas?",
        alternativas: [
            {
                texto: "Ensinar crianças sobre meio ambiente, forma adultos mais consientes ",
                afirmacao: "educar é plantar sementes de mudanças"
            },
            {
                texto: "Participar de multiroes de limpeza ajuda a recuperar espaços naturais",
                afirmacao: "juntos, podemos reconstruir o que foi destruído"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
