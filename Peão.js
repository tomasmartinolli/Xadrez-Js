class Peão extends Peca
{
	constructor(tipo,posI,posJ,id)
	{
		super(tipo,posI,posJ,id);
	}
	
	mover(tabuleiro,i,j)
	{
		if(this._id == 12)//Peões pretos
		{
			if(this._posI - i == -2 && tabuleiro[i][j] == 0 && this._posJ == j && this._posI == 1 && tabuleiro[i-1][j] == 0)//Movimento inicial do peão pode movimenta-lo em até duas casas
				return 1;
			if(this._posI - i == -1 && tabuleiro[i][j] == 0 && this._posJ == j)//Movimentação padrão
				return 1;
			else if(this._posI - i == -1 && this._posJ - j == -1 && tabuleiro[i][j]<=6 && tabuleiro[i][j] != 0)//Captura de uma peça
				return 1;
			else if(this._posI - i == -1 && this._posJ - j == 1 && tabuleiro[i][j]<=6 && tabuleiro[i][j] != 0)//Captura de uma peça
				return 1;
		}
		else//Peões brancos
		{
			if(this._posI - i == 2 && tabuleiro[i][j] == 0 && this._posJ == j && this._posI == 6 && tabuleiro[i+1][j] == 0)//Movimento inicial do peão pode movimenta-lo em até duas casas
				return 1;
			if(this._posI - i == 1 && tabuleiro[i][j] == 0 && this._posJ == j)//Movimentação padrão
				return 1;
			else if(this._posI - i == 1 && this._posJ - j == -1 && tabuleiro[i][j] >= 7)//Captura de uma peça
				return 1;
			else if(this._posI - i == 1 && this._posJ - j == 1 && tabuleiro[i][j] >= 7)//Captura de uma peça
				return 1;
		}
		return -1;
	}
}