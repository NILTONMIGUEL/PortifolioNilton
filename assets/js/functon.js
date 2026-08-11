// ==========================================
// EFEITO DE PARTÍCULAS NO CANVAS
// ==========================================
const canvas = document.getElementById('particles-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particlesArray = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });

    resizeCanvas();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.8;
            this.speedY = (Math.random() - 0.5) * 0.8;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        draw() {
            ctx.fillStyle = `rgba(0, 229, 255, ${this.opacity})`; // Cor neon/ciano (ajuste se preferir)
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particlesArray = [];
        const numberOfParticles = Math.floor((canvas.width * canvas.height) / 12000);
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function connectParticles() {
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                const dx = particlesArray[a].x - particlesArray[b].x;
                const dy = particlesArray[a].y - particlesArray[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.strokeStyle = `rgba(0, 229, 255, ${1 - distance / 100 * 0.8})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        connectParticles();
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
}

// --- 1. BANCO DE DADOS EXPANDIDO DE ARTIGOS ---
const articlesData = {
    'post-1': {
        id: 'post-1',
        category: 'Game Dev',
        tag: 'Game Dev',
        title: 'Variáveis no C# para Unity',
        date: 'Publicado 10 de agosto de 2026',
        image: 'assets/images/variaveis.jpg',
        content: `
              <p><b>🎮 Variáveis em C#</b>
            Variáveis são como "caixinhas" com nome que guardam informações na memória do seu jogo — por exemplo, a vida do jogador, a velocidade, o nome do personagem ou se ele está pulando.
            A importância delas é enorme: são as variáveis que permitem ao código lembrar, alterar e tomar decisões em tempo real. É graças a elas que o placar aumenta, a vida diminui ao tomar dano e o personagem só pula quando está no chão.
            Em resumo: sem variáveis, o jogo seria uma imagem parada. Com elas, tudo ganha estado, memória e movimento. Dominar variáveis é o primeiro passo para criar suas próprias mecânicas na Unity! 🚀</p>
            
            <h2>Variáveis </h2>
            <ul>
                <li><strong>O que é uma variável?:</strong> é uma caixa reservada na memória RAM, para guardar algum valor dentro dela.</li>
                <li><strong>Como declarar as variáveis?:</strong> 
                    <span class="t">int</span> <span class="v">vidaPlayer</span> <span class="o">=</span> <span class="n">10</span><span class="p">;</span><br>
                    <br>
                    <span class="t"> int </span><b>←</b> tipo da variável;
                    <br>
                    <span class="v">vidaPlayer </span><b> ←</b> nome da variável;
                    <br>
                    <span class="o"> = </span><b>←</b> sinal de atribuição, receber;
                    <br>
                    <span class="n"> 10 </span><b>←</b> valor que a variável vai guardar;<br>
                    <strong style="background-color:red">Obs: todas as sentenças de código obrigatoriamente terminam com ; (ponto e vírgula).</strong>
                </li>
            </ul>

            <h2>Exemplo de declaração de variáveis na Unity</h2>
            <p><span class="t"> int </span> <span class="v"> vidaPlayer</span> <span class="o">= </span> <span class="n">10</span><span class="p";</span></p>
            <p>Declarando mais de uma variável na mesma linha:</p>
            <p><span class="t"> int </span> <span class="v"> vidaPlayer </span> <span class="o"> = </span> <span class="n"> 10 </span> <span class="o"> , </span> <span class="v"> danoAtaque </span> <span class="o"> = </span> <span class="n"> 5 </span> <span class="p"> ; </span></p>
            <p><strong style="background-color:red">Obs: ambos devem ser do mesmo tipo</strong></p>
            
            <p><strong><em>Tipos de variáveis Básicas:</em></strong></p>
            <ul>
                <li><span class="t">int:</span> Números inteiros.</li>
                <li><span class="t">float:</span> Números com ponto flutuante (decimais).</li>
                <li><span class="t">string:</span> Textos entre aspas duplas.</li>
                <li><span class="t">bool:</span> Valores booleanos (true/false).</li>
            </ul>
            <p><span class="t"> int </span> <span class="v">vidaPlayer </span> <span class="o"> = </span> <span class="n"> 10 </span> <span class="p">;<span></strong></p>
            <p><span class="t"> float</span> <span class="v">forcaDoPulo</span> <span class="o">=</span> <span class="n">5.5f</span> <span class="p">;</span></strong> (necessita do <strong style="color:orangered">f</strong> no final)</p>
            <p><span class="t">bool</span> <span class="v">playerEstaVivo</span> <span class="o">=</span> <span class="n">true</span> <span class="p">;</span></strong></p>
            <p><span class="t">string</span> <span class="v">nomeDoPlayer</span> <span class="o">=</span> <span class="s">"Nilton"</span> <span class="p">;</span></p>
            <h2>Variáveis Locais e Globais</h2>
            <ul>
                <li><b style="color:orange">Variáveis Globais ⇐</b> criadas fora de métodos, acessíveis em toda a classe.</li>
                <li><b style="color:orange">Variáveis Locais ⇐</b> criadas dentro de métodos, acessíveis apenas no escopo do método.</li>
            </ul>
        `
    },
    'post-2': {
        id: 'post-2',
        category: 'Game Dev',
        tag: 'Game Dev',
        title: 'Métodos no C# para Unity',
        date: 'Publicado 10 de agosto de 2026',
        image: 'assets/images/metodoscsharp.jpg',
        content: `
            <p><b>🎮 Métodos em C# — o que são e para que servem?</b><br>
            Um método é um bloco de código com nome que executa uma ação específica. Pense nele como uma "receita": você escreve os passos uma única vez e pode chamá-lo pelo nome quando precisar.</p>

            <p style="color:red"><b style="color:red">obs:</b> antes de usar o <span class="s">this</span> é importante declarar as váriaveis antes.<br>
            o <span class="s">this </span> só existe na classe. <br>
            <b style="color:orange">Como Estudar sem o <span class="s"> this </span> ?

            <ul>
               
                <li style="color:white"> 1- criar variaveis normais <br>
                    <span class="t">int</span> <span class="v">numero1</span> <span class="o">=</span> <span class="n">10</span> <span class="p">;</span><br>
                    <span class="t">int</span> <span class="v">numero2</span> <span class="o">=</span> <span class="n">4</span> <span class="p">;</span><br>
                </li>

                 <li style="color:white"> 2- onde tem <span class="s">this.</span> você coloca o valor da variável normal<br>
                    <b style="color:red">EX:</b><br>
                    <span class="k">void</span> <span class="m">Somar</span> <span class="p">(</span> <span class="p">)</span><br>
                    <span class="p">{</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="t">int</span> <span class="v">resultado</span> <span class="o">=</span> <span class="v">numero1</span> <span class="o">+</span> <span class="v">numero2</span> <span class="p">;</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="t">Debug</span> <span class="p">.</span> <span class="m">Log</span> <span class="p">(</span> <span class="v">resultado</span> <span class="p">)</span> <span class="p">;</span><br>
                    <span class="p">}</span><br>
                    <strong style="color:red">você passa apenas a variável , isso serve para todos</strong>
                </li>

                <strong style="color:white"> forma certa </strong> <br>
                <b style="color:red">EX:</b><br>
                <span class="k">void</span> <span class="m">Somar</span> <span class="p">(</span> <span class="p">)</span><br>
                <span class="p">{</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="t">int</span> <span class="v">resultado</span> <span class="o">=</span> <span class="v">numero1</span> <span class="o">+</span> <span class="v">numero2</span> <span class="p">;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="t">Debug</span> <span class="p">.</span> <span class="m">Log</span> <span class="p">(</span> <span class="v">resultado</span> <span class="p">)</span> <span class="p">;</span><br>
                <span class="p">}</span><br> <br>
                <strong style="color:red"> forma errada </strong> <br>
                <span class="k">void</span> <span class="m">Somar()</span> <br>
                <span class="p">{</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="t"> int </span> <span class="v">resultado</span> <span class="o">=</span> <span class="s">this.</span> <span class="v">numero1</span> <span class="o">+</span> <span class="s">this.</span> <span class="v">numero2</span> <span class="p">;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="t">Debug.Log(<span class="v">resultado</span>);</span><br>
                <span class="p">}</span>

            </ul>
            </p>
            <h2> Agora podemos Iniciar o estudo de Métodos </h2>
            <strong style="color:white"> primeiramente crie as variáveis </strong> <br>
            <span class="t">int</span> <span class="v">numero1</span> <span class="o">=</span> <span class="n">10</span> <span class="p">;</span><br>
            <span class="t">int</span> <span class="v">numero2</span> <span class="o">=</span> <span class="n">4</span> <span class="p">;</span><br>
            <p> coloque o valor que desejar, essas variaveis vão servir para para usar-mos como parâmetros.</p>
            <h2>Criando os Métodos</h2>
            <ul>
                <li><strong>Método sem retorno e sem parâmetros:</strong><br>
                    <span class="k">void</span> <span class="m">Somar()</span> <br>
                    <span class="p">{</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="t"> int </span> <span class="v">resultado</span> <span class="o">=</span> <span class="s">this.</span> <span class="v">numero1</span> <span class="o">+</span> <span class="s">this.</span> <span class="v">numero2</span> <span class="p">;</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="t">Debug.Log(<span class="v">resultado</span>);</span><br>
                    <span class="p">}</span>
                    <p><b>Chamando o método:</b> <br>
                    <span class="m">Somar();</span></p>
                </li>
                <li>
                    <h3 >1- Métodos sem retorno e com parâmetros</h3>
                    <br>
                    <span class="k">void</span> <span class="m">Multiplicacao</span> <span class="p">(</span> <span class="t">int</span> <span class="v">numero1</span> <span class="p">,</span> <span class="t">int</span> <span class="v">numero2</span> <span class="p">)</span><br>
                    &nbsp;&nbsp;&nbsp;<span class="p">{</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="t">int</span> <span class="v">resultado</span> <span class="o">=</span> <span class="v">numero1</span> <span class="o">*</span> <span class="v">numero2</span> <span class="p">;</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="t">Debug</span> <span class="p">.</span> <span class="m">Log</span> <span class="p">(</span> <span class="v">resultado</span> <span class="p">)</span> <span class="p">;</span><br>
                    &nbsp;&nbsp;&nbsp;<span class="p">}</span><br>
                    <br>
                    <strong>usando o métodos com parâmetros</strong>
                    <br>
                    <span class="m">Multiplicacao</span> <span class="p">(</span> <span class="k">this</span> <span class="p">.</span> <span class="v">numero1</span> <span class="p">,</span> <span class="k">this</span> <span class="p">.</span> <span class="v">numero2</span> <span class="p">)</span> <span class="p">;</span><br>
                    <br>
                    <h3>2- Métodos com retorno sem parâmetros</h3><br>
                    <span class="t">int</span> <span class="m">Somar</span> <span class="p">(</span> <span class="p">)</span><br>
                    &nbsp;&nbsp;&nbsp;<span class="p">{</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="t">int</span> <span class="v">resultado</span> <span class="o">=</span> <span class="k">this</span> <span class="p">.</span> <span class="v">numero1</span> <span class="o">+</span> <span class="k">this</span> <span class="p">.</span> <span class="v">numero2</span> <span class="p">;</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="v">resultado</span> <span class="p">;</span><br>
                    &nbsp;&nbsp;&nbsp;<span class="p">}</span><br>
                    <strong style="color:white; background-color:rgb(131, 38, 4)">retorno do tipo int</strong>
                    <br>
                    <br>
                    <strong>usando o método</strong><br>
                    <span class="t">Debug</span> <span class="p">.</span> <span class="m">Log</span> <span class="p">(</span> <span class="m">Somar</span> <span class="p">(</span> <span class="p">)</span> <span class="p">)</span> <span class="p">;</span><br>
                    <br>
                    <strong style="color:aqua; background-color: rgb(131, 38, 4);">usamos o Debug.Log() ⇐ </strong> <i>para mostrar o resultado, mas também podemos salvar o retorno dentro de uma variável
                    </i>
                    <br>
                    <br>
                    <h3>Métodos com Retorno e parâmetros </h3><br>
                    <span class="t">int</span> <span class="m">Multiplicacao</span> <span class="p">(</span> <span class="t">int</span> <span class="v">numero1</span> <span class="p">,</span> <span class="t">int</span> <span class="v">numero2</span> <span class="p">)</span><br>
                    &nbsp;&nbsp;&nbsp;<span class="p">{</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="t">int</span> <span class="v">resultado</span> <span class="o">=</span> <span class="v">numero1</span> <span class="o">*</span> <span class="v">numero2</span> <span class="p">;</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="v">resultado</span> <span class="p">;</span><br>
                    &nbsp;&nbsp;&nbsp;<span class="p">}</span><br>
                    <strong>Salvando o retorno dentro de uma variável</strong>
                    <br>
                    <span class="t">int</span> <span class="v">retorno</span> <span class="o">=</span> <span class="m">Multiplicacao</span> <span class="p">(</span> <span class="k">this</span> <span class="p">.</span> <span class="v">numero1</span> <span class="p">,</span> <span class="k">this</span> <span class="p">.</span> <span class="v">numero2</span> <span class="p">)</span> <span class="p">;</span><br>
                    <br>
                    <strong>mostrando o resultado do retorno </strong> <br>
                    <span class="t">Debug</span> <span class="p">.</span> <span class="m">Log</span> <span class="p">(</span> <span class="v">retorno</span> <span class="p">)</span> <span class="p">;</span><br>
                </li>
            </ul>
        `
    },
    'post-3': {
        id: 'post-3',
        category: 'Game Dev',
        tag: 'Game Dev',
        title: 'Métodos start e update C# para Unity',
        date: 'Publicado 11 de agosto de 2026',
        image: 'assets/images/void_updatePadroesUnity.jpg',
        content: `
            <span style="color: orangered;">void Start() ⇐ </span> <span>é chamado apenas uma vez assim que inicia o game</span> <br>
            <span style="color: orangered;">void Update() ⇐ </span> <span>é chamado a cada frame do jogo , ele roda em loop infinito</span> <br>
            <strong>Como ele é visto no Unity ?</strong> <br>
            <span class="k">using</span> <span class="v">UnityEngine</span> <span class="p">;</span><br>
            <span class="k">public</span> <span class="k">class</span> <span class="v">Metodos</span> : <span class="t">MonoBehaviour</span><br>
            <span class="p">{</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//declaramos variáveis</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="k">void</span> <span class="m">Start</span> <span class="p">(</span> <span class="p">)</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//iniciamos as variáveis , start roda 1 vez quando é iniciado</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span><br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="k">void</span> <span class="m">Update</span> <span class="p">(</span> <span class="p">)</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//colocamos códigos de captura de teclas ou botões, roda a 60 fps</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span><br>
            <span class="p">}</span><br>
        `
    },
    'post-4': {
        id: 'post-4',
        category: 'Game Dev',
        tag: 'Game Dev',
        title: 'print e debug.log',
        date: 'Publicado 11 de agosto de 2026',
        image: 'assets/images/print_debuglog.jpg',
        content: `
            <span style="color: orangered;"> mostrando algo na tela ⇐ </span> <span>qual melhor print ou debug.log ?</span><br>
            <span class="k">using</span> <span class="v">UnityEngine</span> <span class="p">;</span><br>
            <br>
            <span class="k">public</span> <span class="k">class</span> <span class="v">Metodos</span> : <span class="t">MonoBehaviour</span><br>
            <span class="p">{</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="k">void</span> <span class="m">Start</span> <span class="p">(</span> <span class="p">)</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//print só funciona para classe que tenha MonoBehaviour nela</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="m">print</span> <span class="p">(</span> <span class="s">"hello world"</span> <span class="p">)</span> <span class="p">;</span><br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//debug.log ela funciona em todas as classes é ideal para printar algo no console</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="t">Debug</span> <span class="p">.</span> <span class="m">Log</span> <span class="p">(</span> <span class="s">"hello world"</span> <span class="p">)</span> <span class="p">;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span><br>
            <span class="p">}</span><br>
            <br>
        `
    }
    ,
    'post-5': {
        id: 'post-5',
        category: 'Game Dev',
        tag: 'Game Dev',
        title: 'Incremento e Decremento',
        date: 'Publicado 11 de agosto de 2026',
        image: 'assets/images/incrementoEdecremento.jpg',
        content: `
            <h3>Incremento e Decremento </h3>
            <span class="k">using</span> <span class="v">UnityEngine</span> <span class="p">;</span><br>
            <br>
            <span class="k">public</span> <span class="k">class</span> <span class="v">Metodos</span> : <span class="t">MonoBehaviour</span><br>
            <span class="p">{</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//criando as variáveis</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="t">int</span> <span class="v">numero</span> <span class="p">;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="k">void</span> <span class="m">Start</span> <span class="p">(</span> <span class="p">)</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//iniciando a variável com 0 , mas mesmo se não declarar como 0 ele já faz automaticamente</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="v">numero</span> <span class="o">=</span> <span class="n">0</span> <span class="p">;</span><br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//dizendo que meu numero que é 0 recebe ele mesmo que é 0 + 1 que fica 1</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="v">numero</span> <span class="o">=</span> <span class="v">numero</span> <span class="o">+</span> <span class="n">1</span> <span class="p">;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//podemos fazer o mesmo assim também</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="v">numero</span> <span class="o">+</span> <span class="o">=</span> <span class="n">1</span> <span class="p">;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//ou</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="v">numero</span> <span class="o">+</span> <span class="o">+</span> <span class="p">;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//todos estão incrementando em 1</span><br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//outro teste vamos incrementar em 10 ou qualquer valor que você quiser , façam teste</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="v">numero</span> <span class="o">=</span> <span class="v">numero</span> <span class="o">+</span> <span class="n">10</span> <span class="p">;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//outra forma</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="v">numero</span> <span class="o">+</span> <span class="o">=</span> <span class="n">10</span> <span class="p">;</span><br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//vejamos que não colocamos o numero++ porque ele só incrementa de 1 em 1</span><br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//--------------------------------------------------------------------------------------------</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//  DECREMENTANTO AGORA</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//--------------------------------------------------------------------------------------------</span><br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//dizendo que meu numero que é 0 recebe ele mesmo que é 0 - 1 que fica -1</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="v">numero</span> <span class="o">=</span> <span class="v">numero</span> <span class="o">-</span> <span class="n">1</span> <span class="p">;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//podemos fazer o mesmo assim também</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="v">numero</span> <span class="o">-</span> <span class="o">=</span> <span class="n">1</span> <span class="p">;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//ou</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="v">numero</span> <span class="o">-</span> <span class="o">-</span> <span class="p">;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//todos estão incrementando em 1</span><br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//outro teste vamos decrementar em 10 ou qualquer valor que você quiser , façam teste</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="v">numero</span> <span class="o">=</span> <span class="v">numero</span> <span class="o">-</span> <span class="n">10</span> <span class="p">;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//outra forma</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="v">numero</span> <span class="o">-</span> <span class="o">=</span> <span class="n">10</span> <span class="p">;</span><br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">//vejamos que não colocamos o numero-- porque ele só decrementa de 1 em 1</span><br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span><br>
            <span class="p">}</span><br>
            <br>
            <br>
            <br>
        `
    }
};

let selectedCategory = 'all';

// --- 2. GERENCIADOR DE VISUALIZAÇÃO E ROTEAMENTO ---
function hideAllViews() {
    document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));
}

function showLandingPage() {
    hideAllViews();
    document.getElementById('landing-view').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showFullBlog() {
    hideAllViews();
    document.getElementById('full-blog-view').classList.add('active');
    renderBlogGrid();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openArticle(articleId) {
    const data = articlesData[articleId];
    if (!data) return;

    document.getElementById('art-tag').innerText = data.tag;
    document.getElementById('art-title').innerText = data.title;
    document.getElementById('art-date').innerText = data.date;
    document.getElementById('art-img').src = data.image;
    document.getElementById('art-body').innerHTML = data.content;

    hideAllViews();
    document.getElementById('article-view').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 3. RENDERIZAÇÃO E FILTRAGEM DOS ARTIGOS DO BLOG ---
function renderBlogGrid() {
    const grid = document.getElementById('full-blog-grid');
    if (!grid) return;
    const searchVal = (document.getElementById('blog-search')?.value || '').toLowerCase();
    grid.innerHTML = '';

    Object.values(articlesData).forEach(article => {
        const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchVal) || 
                              (article.excerpt && article.excerpt.toLowerCase().includes(searchVal)) || 
                              article.tag.toLowerCase().includes(searchVal);

        if (matchesCategory && matchesSearch) {
            const card = document.createElement('article');
            card.className = 'blog-card';
            card.innerHTML = `
                <img src="${article.image}" alt="${article.title}" class="blog-img">
                <div class="blog-content">
                    <span class="blog-tag">${article.tag}</span>
                    <h3 class="blog-title">${article.title}</h3>
                    <p class="blog-excerpt">${article.excerpt || ''}</p>
                    <button class="blog-btn" onclick="openArticle('${article.id}')">
                        Ler Artigo <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            `;
            grid.appendChild(card);
        }
    });
}

function setCategoryFilter(category, buttonEl) {
    selectedCategory = category;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    buttonEl.classList.add('active');
    renderBlogGrid();
}

function filterArticles() {
    renderBlogGrid();
}