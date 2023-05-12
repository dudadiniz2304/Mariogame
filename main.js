function preload() {
    //carregar a musica de game over
	mario_gameover=loadSound("gameover.wav");
	

    //carregar a musica do pulo
	mario_jump=loadSound("jump.wav");


    //carregar a musica de quando toca na moeda
	mario_coin=loadSound("coin.wav");


    // carrega a musica de pontapé
	mario_kick=loadSound("kick.wav");


    // carrega a musica de quando o mario morre
	mario_die=loadSound("mariodie.wav");
   
    world_start = loadSound("world_start.wav");
    setSprites();
    MarioAnimation();
}


function setup() {
    canvas = createCanvas(1240,336);
    canvas.parent('canvas');//pega o primeiro objeto (o que vem antes do ponto) e coloca no lugar do que está dentro das ""


    instializeInSetup(mario);
   
    video = createCapture(VIDEO); //cria a captura de vídeo (webcam)
    video.size(800,400);//tamanho do vídeo da nossa webcam
    video.parent('game_console');//pega o primeiro objeto (o que vem antes do ponto) e coloca no lugar do que está dentro das ""


    poseNet = ml5.poseNet(video, modelLoaded);//carrega o modelo posenet para o video e chama a função modelLoaded
    poseNet.on('pose', gotPoses);//liga o modelo e chama a função gotPoses


}


function modelLoaded() {
    console.log('Modelo Carregado!');//mostra modelo carregado no console
  }


  function gotPoses(results)
  {
    if(results.length > 0)//se os resultados são maiores que zero
    {
      console.log(results);//mostra os resultados no console
      narizx = results[0].pose.nose.x;//pega a posição x do nariz
      narizy = results[0].pose.nose.y;//pega a posição y do nariz
    }
  }
   
function draw() {
    game();//chama a função game que vai fazer o jogo funcionar e que está no outro js
}

