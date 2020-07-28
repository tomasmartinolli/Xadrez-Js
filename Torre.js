class Torre extends Peca
{
	constructor(tipo,posI,posJ,id)
	{
		super(tipo,posI,posJ,id);
	}
	
	
	mover(tabuleiro,i,j)
	{
		if(this._posI == i)//Movimentação horizontal
		{
			var y = this._posJ;
			if(y > j)//para lado esquerdo
			{
				while(y-1 != j)// Checar se as posições são vazias ou não
				{
					if(tabuleiro[i][y-1] != 0)
						return -1;
					y--;
				}
			}
			else//para lado direito
			{
				while(y+1 != j)// Checar se as posições são vazias ou não
				{
					if(tabuleiro[i][y+1] != 0)
						return -1;
					y++;
				}
			}
			if(tabuleiro[i][j] >=7 && this._id == 3)//última posição deve ser ou um espaço vazio ou uma peça da outra cor
				return 1;
			if(tabuleiro[i][j] == 0)
				return 1;
			if(tabuleiro[i][j] <= 6 && this._id == 9)
				return 1;
		}
		else if(this._posJ == j)//Movimentação vertical
		{
			var x = this._posI;
			if(x > i)//para cima
			{
				while(x-1 != i)// Checar se as posições são vazias ou não
				{
					if(tabuleiro[x-1][j] != 0)
						return -1;
					x--;
				}
			}
			else//para baixo
			{
				while(x+1 != i)// Checar se as posições são vazias ou não
				{
					if(tabuleiro[x+1][j] != 0)
						return -1;
					x++;
				}
			}
			if(tabuleiro[i][j] >=7 && this._id == 3)//última posição deve ser ou um espaço vazio ou uma peça da outra cor
				return 1;
			if(tabuleiro[i][j] == 0)
				return 1;
			if(tabuleiro[i][j] <= 6 && this._id == 9)
				return 1;
		}
		return -1;
	}
}