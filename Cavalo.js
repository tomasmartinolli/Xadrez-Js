class Cavalo extends Peca
{
	constructor(tipo,posI,posJ,id)
	{
		super(tipo,posI,posJ,id);
	}
	
	mover(tabuleiro,i,j)
	{
		var x = Math.abs(this._posI - i);
		var y = Math.abs(this._posJ - j);
		if(x == 2 && y == 1)//Movimentação sendo com 2 de diferença no eixo i e 1 de diferença no eixo j
		{
			if(this._id == 5 && tabuleiro[i][j] >= 7)
				return 1;
			if(this._id == 5 && tabuleiro[i][j] == 0)
				return 1;
			if(this._id == 11 && tabuleiro[i][j] <= 6)
				return 1;
		}
		else if(y == 2 && x == 1)//Movimentação sendo com 2 de diferença no eixo j e 1 de diferença no eixo i
		{
			if(this._id == 5 && tabuleiro[i][j] >= 7)
				return 1;
			if(this._id == 5 && tabuleiro[i][j] == 0)
				return 1;
			if(this._id == 11 && tabuleiro[i][j] <= 6)
				return 1;
		}
		return -1;
	}
}