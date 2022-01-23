const modal = document.querySelector('.modal');
const titleModalHero = document.querySelector('.title-modal-hero');
const descriptionHero = document.querySelector('.descriptionHero');
const imgHeroModal = document.getElementById('imgHeroModal');

function closeModal(){
    modal.style.display = 'none';
}

function callModalCA(){
    modal.style.display = 'flex';
    titleModalHero.innerHTML = 'Capitão América';
    descriptionHero.innerHTML = 'Um dos melhores lutadores do mundo, Rogers conhece inúmeras técnicas de combate corpo-a-corpo, mesmo se não tem superpoderes. Porém, graças ao soro do Supersoldado, é dono de força, agilidade, resistência, reflexos e capacidade de cura superiores aos dos seres humanos normais.';
    imgHeroModal.src = 'img/modal-capitao-america.jpg';
}

function callModalHF(){
    modal.style.display = 'flex';
    titleModalHero.innerHTML = 'Homem de Ferro';
    descriptionHero.innerHTML = 'A armadura criada por Stark é avançadíssima e possui os os mais incríveis armamentos, como raios repulsores, rajadas sônicas e projeções holográficas, além de emprestar força sobre-humana a seu usuário.';
    imgHeroModal.src = 'img/modal-homem-de-ferro.jpg';
}

function callModalThor(){
    modal.style.display = 'flex';
    titleModalHero.innerHTML = 'Thor';
    descriptionHero.innerHTML = 'Thor é praticamente imortal, pode voar, é dono de força descomunal e invunerabilidade, pode controlar a atmosfera e é uma das pouquíssimas pessoas capazes de levantar o martelo Mjolnir, uma vez que só aqueles de coração puro podem fazê-lo.';
    imgHeroModal.src = 'img/modal-thor.jpg';
}

function callModalCM(){
    modal.style.display = 'flex';
    titleModalHero.innerHTML = 'Capitã Marvel';
    descriptionHero.innerHTML = 'Carol nasceu humana mas se tornou uma híbrida Kree quando foi atingida por uma explosão de uma nave alienígena.';
    imgHeroModal.src = 'img/modal-capita-marvel.jpg';
}

function callModalHulk(){
    modal.style.display = 'flex';
    titleModalHero.innerHTML = 'Hulk';
    descriptionHero.innerHTML = 'O Hulk é dono de colossal força física e pode saltar grandes distâncias graças aos poderosos músculos em suas pernas.';
    imgHeroModal.src = 'img/modal-hulk.jpg';
}

function callModalPN(){
    modal.style.display = 'flex';
    titleModalHero.innerHTML = 'Pantera Negra';
    descriptionHero.innerHTML = "Como o novo rei de Wakanda, T'Challa tenta superar a perda de seu pai T'Chaka, mas está determinado a fazer jus ao seu legado. Quando Wakanda se vê entre dois inimigos determinados a causar sua queda, Pantera Negra deve usar seu novo uniforme e força aguçada, velocidade e sentidos para defender Wakanda do resto do mundo.";
    imgHeroModal.src = 'img/modal-pantera-negra.jpg';
}

function callModalGA(){
    modal.style.display = 'flex';
    titleModalHero.innerHTML = 'Gavião Arqueiro';
    descriptionHero.innerHTML = "O Gavião Arqueiro permaneceu sendo um membro ativo dos Vingadores por anos, com suas habilidades no tiro com arco e flechas especiais inventivas aumentando os poderes super-humanos de seus associados.";
    imgHeroModal.src = 'img/modal-gaviao-arqueiro.jpg';
}

function callModalDE(){
    modal.style.display = 'flex';
    titleModalHero.innerHTML = 'Doutor Estranho';
    descriptionHero.innerHTML = "Doutor Stephen Vincent Strange, mais conhecido como Doutor Estranho, é um super-herói fictício muito poderoso que aparece nos quadrinhos americanos publicados pela Marvel Comics. ... Doutor Estranho serve como o Mago Supremo, o principal protetor da Terra contra ameaças mágicas e místicas.";
    imgHeroModal.src = 'img/modal-doutor-estranho.jpg';
}

function callModalWM(){
    modal.style.display = 'flex';
    titleModalHero.innerHTML = 'Wanda Maximoff';
    descriptionHero.innerHTML = "Ela era na verdade uma órfã que foi reforçada pelo Alto Evolucionário em Monte Wundagore tornando-se uma condutora da Magia do Caos permitindo-lhe manipular a probabilidade e distorcer a própria realidade. Wanda foi treinada por Agatha Harkness para se tornar uma das mais poderosas portadas de magia na Terra.";
    imgHeroModal.src = 'img/modal-wanda-maximoff.jpg';
}

function callModalHA(){
    modal.style.display = 'flex';
    titleModalHero.innerHTML = 'Homem Aranha';
    descriptionHero.innerHTML = "O Homem-Aranha tem força sobre-humana, proporcional à de uma aranha, pode fixar-se a paredes e tetos, incrível agilidade e possui um “sentido de aranha” que o avisa sobre o perigo. Um químico fantástico, criou uma teia de aranha artificial, que pode usar para balançar-se entre prédios e prender vilões.";
    imgHeroModal.src = 'img/modal-homem-aranha.jpg';
}
function callModalFormiga(){
    modal.style.display = 'flex';
    titleModalHero.innerHTML = 'Homem Formiga';
    descriptionHero.innerHTML = "Em sua encarnação como Homem-Formiga, Hank Pym tem o poder de diminuir de tamanho, mas pode manter seu peso e forças normais, além de pode comunicar-se com as formigas através de ondas mentais emitidas de seu capacete e fazer com que obedeçam suas ordens.";
    imgHeroModal.src = 'img/modal-homem-formiga.jpg';
}
function callModalVisao(){
    modal.style.display = 'flex';
    titleModalHero.innerHTML = 'Visão';
    descriptionHero.innerHTML = "O Visão” (The Vision em inglês) é um super-herói fictício de quadrinhos americanos publicados pela Marvel Comics. Ele é um sintezóide e membro dos Vingadores que apareceu pela primeira vez em The Avengers";
    imgHeroModal.src = 'img/modal-visao.jpg';
}