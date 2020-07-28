class Peca
{
	constructor(tipo,posI,posJ,id)
	{
		this._tipo = tipo;
		this._posI = posI;
		this._posJ = posJ;
		this._id = id;
	}
	
	
	mover()
	{
	}
	
	get posI()
	{
		return this._posI;
	}
	
	get posJ()
	{
		return this._posJ;
	}
	
	get id()
	{
		return this._id;
	}
	
	set posI(i)
	{
		this._posI = i;
	}
	
	set posJ(j)
	{
		this._posJ = j;
	}
	
}