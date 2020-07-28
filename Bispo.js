class Bispo	 extends Peca
{
	constructor(tipo,posI,posJ,id)
	{
		super(tipo,posI,posJ,id);
	}
	
	
	mover(tabuleiro,i,j)
	{
		var y = this._posJ;
		var x = this._posI;		
		if(Math.abs(this._posI - i) == Math.abs(this._posJ - j))
		{
			if(this._posI - i < 0)
			{
				if(this._posJ - j < 0)//Movimentação para o lado direito sentido para baixo
				{
					while(x+1 != i && y+1 != j && y <8&& x<8) // Checar se as posições são vazias ou não
					{
						if(tabuleiro[x+1][y+1] != 0)
							return -1;
						x++;
						y++;
					}
					if(tabuleiro[i][j] >=7 && this._id == 4)
						return 1;
					if(tabuleiro[i][j] == 0)
						return 1;
					if(tabuleiro[i][j] <= 6 && this._id == 10)
						return 1;
				}
				else//Movimentação para o lado esquerdo sentido para baixo
				{
					while(x+1 != i && y-1 != j && y > 0&& x<8)  // Checar se as posições são vazias ou não
					{
						if(tabuleiro[x+1][y-1] != 0)
							return -1;
						x++;
						y--;
					}
					if(tabuleiro[i][j] >=7 && this._id == 4)
						return 1;
					if(tabuleiro[i][j] == 0)
						return 1;
					if(tabuleiro[i][j] <= 6 && this._id == 10)
						return 1;
				}
			}
			else
			{
				if(this._posJ - j < 0)//Movimentação para o lado direito sentido para cima
				{
					while(x-1 != i && y+1 != j && y < 8 && x > 0) // Checar se as posições são vazias ou não 
					{
						if(tabuleiro[x-1][y+1] != 0)
							return -1;
						x--;
						y++;
					}
					if(tabuleiro[i][j] >=7 && this._id == 4)
						return 1;
					if(tabuleiro[i][j] == 0)
						return 1;
					if(tabuleiro[i][j] <= 6 && this._id == 10)
						return 1;
				}
				else//Movimentação para o lado esquerdo sentido para cima
				{
					while(x-1 != i && y-1 != j && y > 0&& x > 0)  // Checar se as posições são vazias ou não
					{
						if(tabuleiro[x-1][y-1] != 0)
							return -1;
						x--;
						y--;
					}
					if(tabuleiro[i][j] >=7 && this._id == 4)
						return 1;
					if(tabuleiro[i][j] == 0)
						return 1;
					if(tabuleiro[i][j] <= 6 && this._id == 10)
						return 1;
				}
			}
		}
		return -1;
	}
}