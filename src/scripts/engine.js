//constantes que armazenam campos do HTML
const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck =  document.querySelector(".keys-check input");

//variável que mapeia as teclas em um array
let mapedKeys = [];
//variável que armazena o caminho dos áudios
let audio = new Audio("/src/tunes/a.wav");

//constante que invoca a função de executar o audio de acordo com as teclas
const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();

    console.log(mapedKeys);

    //constante que invoca arrow function, onde é criado
    //uma classe e a cada 150ms ela exclui essa classe
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

//chamada da arrow function que 'escuta' o evento por click
//acessando a propriedade dataset do html através do atributo key  
pianoKeys.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener("click", ()=> playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

//arrow function que invoca a chamada das teclas através do teclado
document.addEventListener("keydown", (e)=>{
    if(mapedKeys.includes(e.key)){
        playTune(e.key);
    }
});

//constate responsável pelo controle de volume
const handleVolume = (e) =>{
    audio.volume = e.target.value;
    console.log(e.target.value);
};

//constante que cria e mostra/oculta a classe 'hide' do html
const showHideKeys = () =>{
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

//chamadas de verificador de chaves e volume
volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys);