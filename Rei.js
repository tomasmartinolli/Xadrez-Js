class Rei extends Peca
{
	constructor(tipo,posI,posJ,id)
	{
		super(tipo,posI,posJ,id);
	}
	
	
	mover(tabuleiro,i,j)
	{
		var y = Math.abs(this._posI - i);
		var x = Math.abs(this._posJ - j);
		if(this._id == 1 && x <= 1 && y <= 1 && tabuleiro[i][j]>=7)//O movimento do rei deve ser de no máximo 1 em x e/ou y 
		{
			return 1;
		}
		else if(this._id == 1 && x <= 1 && y <= 1 && tabuleiro[i][j]==0)
		{
			return 1;
		}
		else if(this._id == 7 && x <= 1 && y <= 1 && tabuleiro[i][j]<=6)
		{
			return 1;
		}
		return -1;
	}
}