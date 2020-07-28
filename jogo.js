function JogoXadrez() {
	// Identificador de cada peça
	const W_KING   = 1;  // "&#9812" ♔
	const W_QUEEN  = 2;  // "&#9813" ♕
	const W_ROOK   = 3;  // "&#9814" ♖
	const W_BISHOP = 4;  // "&#9815" ♗
	const W_KNIGHT = 5;  // "&#9816" ♘
	const W_PAWN   = 6;  // "&#9817" ♙
	const B_KING   = 7;  // "&#9818" ♚
	const B_QUEEN  = 8;  // "&#9819" ♛
	const B_ROOK   = 9;  // "&#9820" ♜
	const B_BISHOP = 10; // "&#9821" ♝
	const B_KNIGHT = 11; // "&#9822" ♞
	const B_PAWN   = 12; // "&#9823" ♟
	
	var tabuleiro = new Tabuleiro();
	var substituir = 0;

	var pecas = tabuleiro.init();//Receber as posições iniciais das peças
	for(var i = 0 ; i<pecas.length ; i++)//Adicionar as peças ao tabuleiro
	{
		tabuleiro.addPeca(pecas[i]);
	}

	this.getTabuleiro = function() //Retorna o tabuleiro
	{
		 return tabuleiro.getRepresentacao();
	}

	this.reiniciar = function() //Reinicia o jogo
	{
		
		pecas = tabuleiro.init();
		for(var i = 0 ; i<pecas.length ; i++)
		{
			tabuleiro.addPeca(pecas[i]);
		}
		
	}


	this.getPeca = function(i, j) //Retorna a peça na posição i(x) e j(y)
	{
		return tabuleiro.getPeca(i,j);
	}

	this.moverPeca = function(peca, i, j) //Retorna se possível realizar a movimentação ou não
	{
		var retorno = tabuleiro.moverPeca(peca,i,j);
		if(retorno != false)
		{
			switch(retorno)
			{
				case 1:											//Caso alguma peça tenha sido capturada
					tabuleiro.rmPeca(i,j);
				case 2:											//Movimentação padrão
					peca.posI = i;
					peca.posJ = j;
					tabuleiro.addPeca(peca);
					break;
				case 3:											//Caso um peão branco tenha chego na posição inicial do outro lado do tabuleiro sem ser através de uma captura
					tabuleiro.rmPeca(peca.posI,peca.posJ);
					substituir = 1;
					break;
				case 4:											//Caso um peão branco tenha chego na posição inicial do outro lado do tabuleiro através de uma captura
					tabuleiro.rmPeca(peca.posI,peca.posJ);
					tabuleiro.rmPeca(i,j);
					substituir = 1;
					break;
				case 5:											//Caso um peão preto tenha chego na posição inicial do outro lado do tabuleiro sem ser através de uma captura
					tabuleiro.rmPeca(peca.posI,peca.posJ);
					substituir = 1;
					break;
				case 6:											//Caso um peão preto tenha chego na posição inicial do outro lado do tabuleiro através de uma captura
					tabuleiro.rmPeca(peca.posI,peca.posJ);
					tabuleiro.rmPeca(i,j);
					substituir = 1;
					break;
			}
			return true;
		}
		else
			return false;
	}
	
	this.substituicao = function(peca, i, j)//Função qual peça substituirá o peão na promoção
	{
		substituir = 0;
		switch(peca)
		{
			case 'c':
			case 'C':
				if(tabuleiro.getturno() == 0)
					tabuleiro.addCavalo(i,j,"Preta");
				else
					tabuleiro.addCavalo(i,j,"Branca");
				return 1;
				break;
			case 'b':
			case 'B':
				if(tabuleiro.getturno() == 0)
					tabuleiro.addBispo(i,j,"Preta");
				else
					tabuleiro.addBispo(i,j,"Branca");
				return 1;
				break;
			case 't':
			case 'T':
				if(tabuleiro.getturno() == 0)
					tabuleiro.addTorre(i,j,"Preta");
				else
					tabuleiro.addTorre(i,j,"Branca");
				return 1;
				break;
			case 'r':
			case 'R':
				if(tabuleiro.getturno() == 0)
					tabuleiro.addRainha(i,j,"Preta");
				else
					tabuleiro.addRainha(i,j,"Branca");
				return 1;
				break;
			default:
				return 0;
		}
	}
	
	this.getsub = function()//Retorna substituir para checar se houve uma promoção
	{
		return substituir;
	}
	
	this.fim_de_jogo = function()//Retorna qual jogador ganhou o jogo ou 0 caso nenhum ainda tenha ganho
	{
		return tabuleiro.getfim_de_jogo();
	}
}
