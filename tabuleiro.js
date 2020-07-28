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


class Tabuleiro
{
	constructor()
	{
		this.pecas = [];
		this.tabuleiro = new Array(8);
		for(var i = 0; i < 8; i++) {
			this.tabuleiro[i] = new Array(8);
			for(var j = 0; j < 8; j++)
				this.tabuleiro[i][j] = 0; // ID_1 = 0
		}
		this.turno;
		this.fim_de_jogo;
	}
	

	
	init()
	{
		if(this.pecas != false)		//Função de reiniciar
		{
			this.pecas = [];		//
			for(var i = 0; i < 8 ; i++)
				for(var j = 0; j < 8; j++)
					this.tabuleiro[i][j] = 0;
		}
		this.turno = 0;
		this.fim_de_jogo = 0;
		
		
		this.pecas.push(new Peão('Preta',1,0,B_PAWN));
		this.pecas.push(new Peão('Preta',1,1,B_PAWN));
		this.pecas.push(new Peão('Preta',1,2,B_PAWN));
		this.pecas.push(new Peão('Preta',1,3,B_PAWN));
		this.pecas.push(new Peão('Preta',1,4,B_PAWN));
		this.pecas.push(new Peão('Preta',1,5,B_PAWN));
		this.pecas.push(new Peão('Preta',1,6,B_PAWN));
		this.pecas.push(new Peão('Preta',1,7,B_PAWN));
		this.pecas.push(new Torre('Preta',0,0,B_ROOK));
		this.pecas.push(new Cavalo('Preta',0,1,B_KNIGHT));
		this.pecas.push(new Bispo('Preta',0,2,B_BISHOP));
		this.pecas.push(new Rainha('Preta',0,3,B_QUEEN));
		this.pecas.push(new Rei('Preta',0,4,B_KING));
		this.pecas.push(new Bispo('Preta',0,5,B_BISHOP));
		this.pecas.push(new Cavalo('Preta',0,6,B_KNIGHT));
		this.pecas.push(new Torre('Preta',0,7,B_ROOK));
		
		this.pecas.push(new Peão('Branca',6,0,W_PAWN));
		this.pecas.push(new Peão('Branca',6,1,W_PAWN));
		this.pecas.push(new Peão('Branca',6,2,W_PAWN));
		this.pecas.push(new Peão('Branca',6,3,W_PAWN));
		this.pecas.push(new Peão('Branca',6,4,W_PAWN));
		this.pecas.push(new Peão('Branca',6,5,W_PAWN));
		this.pecas.push(new Peão('Branca',6,6,W_PAWN));
		this.pecas.push(new Peão('Branca',6,7,W_PAWN));
		this.pecas.push(new Torre('Branca',7,0,W_ROOK));
		this.pecas.push(new Cavalo('Branca',7,1,W_KNIGHT));
		this.pecas.push(new Bispo('Branca',7,2,W_BISHOP));
		this.pecas.push(new Rainha('Branca',7,3,W_QUEEN));
		this.pecas.push(new Rei('Branca',7,4,W_KING));
		this.pecas.push(new Bispo('Branca',7,5,W_BISHOP));
		this.pecas.push(new Cavalo('Branca',7,6,W_KNIGHT));
		this.pecas.push(new Torre('Branca',7,7,W_ROOK));
		
		
		return this.pecas;
	}
	
	
	
	addPeca(peca)//Adiciona o id da peça na posição correta do tabuleiro
	{
		var id = peca.id;
		var i = peca.posI;
		var j = peca.posJ;	
		this.tabuleiro[i][j] = id;
	}
	
	addRainha(i,j,cor)//Adiciona a rainha( utilizado para promover o peão em uma rainha)
	{
		if(cor == "Branca")
		{
			this.pecas.push(new Rainha('Branca',i,j,W_QUEEN));
			this.tabuleiro[i][j] = W_QUEEN;
		}
		else
		{
			this.pecas.push(new Rainha('Preta',i,j,B_QUEEN));
			this.tabuleiro[i][j] = B_QUEEN;
		}
		
	}
	
	addCavalo(i,j,cor)//Adiciona o cavalo( utilizado para promover o peão em um cavalo)
	{
		if(cor == "Branca")
		{
			this.pecas.push(new Cavalo('Branca',i,j,W_KNIGHT));
			this.tabuleiro[i][j] = W_KNIGHT;
		}
		else
		{
			this.pecas.push(new Cavalo('Preta',i,j,B_KNIGHT));
			this.tabuleiro[i][j] = B_KNIGHT;
		}
		
	}
	
	addBispo(i,j,cor)//Adiciona o bispo( utilizado para promover o peão em um bispo)
	{
		if(cor == "Branca")
		{
			this.pecas.push(new Bispo('Branca',i,j,W_BISHOP));
			this.tabuleiro[i][j] = W_BISHOP;
		}
		else
		{
			this.pecas.push(new Bispo('Preta',i,j,B_BISHOP));
			this.tabuleiro[i][j] = B_BISHOP;
		}
		
	}
	
	addTorre(i,j,cor)//Adiciona o torre( utilizado para promover o peão em uma torre)
	{
		if(cor == "Branca")
		{
			this.pecas.push(new Torre('Branca',i,j,W_ROOK));
			this.tabuleiro[i][j] = W_ROOK;
		}
		else
		{
			this.pecas.push(new Torre('Preta',i,j,B_ROOK));
			this.tabuleiro[i][j] = B_ROOK;
		}
		
	}
	
	rmPeca(i,j)//Remove a peça da posição correspondente do tabuleiro
	{
		this.tabuleiro[i][j] = 0;
		for(var count = 0; this.pecas[count]; count ++)
		{
			if(i == this.pecas[count].posI && j == this.pecas[count].posJ)
			{
				this.pecas.splice(count,1);
				
			}
		}
	}
	
	getPeca(i,j)//Retorna qual peça está na posição correspondente
	{
		for(var count = 0; this.pecas[count]; count ++)
		{
			if(i == this.pecas[count].posI && j == this.pecas[count].posJ && this.turno == 0 && this.pecas[count].id <=6 && this.pecas[count].id != 0)
			{
				return this.pecas[count];
			}
			if(i == this.pecas[count].posI && j == this.pecas[count].posJ && this.turno == 1 && this.pecas[count].id >=7)
			{
				return this.pecas[count];
			}
		}
		return null;
	}
	
	
	getRepresentacao()//Retorna o tabuleiro
	{
		return this.tabuleiro;
	}
	
	getfim_de_jogo()//Retorna o status de fim de jogo
	{
		return this.fim_de_jogo;
	}
	
	getturno()
	{
		return this.turno;
	}
	
	moverPeca(peca,i,j)//Retorna caso seja possível mover a peça e qual tipo de movimentação foi feita
	{
		for(var count = 0; this.pecas[count]; count ++)
		{
			if(peca.posI == this.pecas[count].posI && peca.posJ == this.pecas[count].posJ)
			{
				if(this.pecas[count].mover(this.tabuleiro,i,j)==1)
				{
					if(this.tabuleiro[i][j] == 1)//Caso o rei branco tenha sido capturado
					{
						this.fim_de_jogo = 2;
						this.turno = 2;
					}
					if(this.tabuleiro[i][j] == 7)//Caso o rei preto tenha sido capturado
					{
						this.fim_de_jogo = 1;
						this.turno = 2;
					}
					this.tabuleiro[this.pecas[count].posI][this.pecas[count].posJ] = 0;//Remove a peça da posição em que ela estava
					if(this.turno == 1)//Alterna a vez dos jogadores
						this.turno = 0;
					else if(this.turno == 0)
						this.turno = 1;
					if(this.pecas[count].id == 6 && i == 0)//Retorna que um peão chegou na posição de promoção
					{
						if(this.tabuleiro[i][j] == 0)
							return 3;
						else
							return 4;
					}
					if(this.pecas[count].id == 12 && i == 7)
					{
						if(this.tabuleiro[i][j] == 0)
							return 5;
						else
							return 6;
					}
					if(this.tabuleiro[i][j] != 0)//Retorna 2 caso não tenha ocorrido captura e 1 caso tenha ocorrido uma captura 
						return 1;
					else
						return 2;
				}
			}
		}
		return false;

	}

}











