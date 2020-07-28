class Rainha extends Peca
{
	constructor(tipo,posI,posJ,id)
	{
		super(tipo,posI,posJ,id);
	}
	
	mover(tabuleiro,i,j)
	{
		var y = this._posJ;
		var x = this._posI;		
		if(Math.abs(this._posI - i) == Math.abs(this._posJ - j))//Movimentação diagonal
		{
			if(this._posI - i < 0)
			{
				if(this._posJ - j < 0)//Movimentação para o lado direito sentido para baixo
				{
					while(x+1 != i && y+1 != j && y <8&& x<8)  // Checar se as posições são vazias ou não
					{
						if(tabuleiro[x+1][y+1] != 0)
							return -1;
						x++;
						y++;
					}
					if(tabuleiro[i][j] >=7 && this._id == 2)
						return 1;
					if(tabuleiro[i][j] == 0)
						return 1;
					if(tabuleiro[i][j] <= 6 && this._id == 8)
						return 1
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
					if(tabuleiro[i][j] >=7 && this._id == 2)
						return 1;
					if(tabuleiro[i][j] == 0)
						return 1;
					if(tabuleiro[i][j] <= 6 && this._id == 8)
						return 1
				}
			}
			else
			{
				if(this._posJ - j < 0)//Movimentação para o lado direito sentido para cima
				{
					while(x-1 != i && y+1 != j && y < 8 && x > 0)  // Checar se as posições são vazias ou não
					{
						if(tabuleiro[x-1][y+1] != 0)
							return -1;
						x--;
						y++;
					}
					if(tabuleiro[i][j] >=7 && this._id == 2)
						return 1;
					if(tabuleiro[i][j] == 0)
						return 1;
					if(tabuleiro[i][j] <= 6 && this._id == 8)
						return 1
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
					if(tabuleiro[i][j] >=7 && this._id == 2)
						return 1;
					if(tabuleiro[i][j] == 0)
						return 1;
					if(tabuleiro[i][j] <= 6 && this._id == 8)
						return 1
				}
			}
		}
		else//Movimentação horizontal e vertical
		{
			if(this._posI == i)//Movimentação horizontal
			{
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
				if(tabuleiro[i][j] >=7 && this._id == 2)//A última posição deve ser ou um espaço vazio ou uma peça da outra cor
					return 1;
				if(tabuleiro[i][j] == 0)
					return 1;
				if(tabuleiro[i][j] <= 6 && this._id == 8)
					return 1;
			}
			else if(this._posJ == j)//Movimentação vertical
			{
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
				if(tabuleiro[i][j] >=7 && this._id == 2)//A última posição deve ser ou um espaço vazio ou uma peça da outra cor
					return 1;
				if(tabuleiro[i][j] == 0)
						return 1;
				if(tabuleiro[i][j] <= 6 && this._id == 8)
					return 1;
			}
		}
		return -1;
	}
}
	
	