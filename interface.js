var jogo = new JogoXadrez();

function init() {
	gerar_tabuleiro();
	atualizar_jogo();
}

function select(i,j) {
	var tabuleiro = document.getElementById('tabuleiro');
	var obj = tabuleiro.rows[i].cells[j]

	if (select.obj_clicado === undefined || select.obj_clicado === null) {
		var peca = jogo.getPeca(i, j);

		if (peca == null)
			return;

		select.obj_clicado = obj;
		select.obj_bgcolor = obj.style.backgroundColor;
		select.peca = peca;
		obj.style.backgroundColor = "green";
	} else if (jogo.moverPeca(select.peca, i, j)) {
		select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
		select.obj_clicado = null;
		if(jogo.getsub() == 1)//Checar promoção do peão
		{
			var x = 0;
			while(x == 0)
			{
				var resp = prompt('Digite a peça a ser trocada na promoção:(b para Bispo, c para Cavalo,  r para Rainha e t para Torre):', '');//Receber qual peça será usada na promoção
				x = jogo.substituicao(resp, i, j);
				if(x == 0)
					alert("Letra invalida");
			}
		}
		atualizar_jogo();
		if(jogo.fim_de_jogo() == 1)//Checar fim de jogo
		{
			alert("O jogador das peças brancas ganhou o jogo!");
		}
		if(jogo.fim_de_jogo() == 2)
		{
			alert("O jogador das peças pretas ganhou o jogo!");
		}
	} else {
		alert("Movimento invalido!");
		select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
		select.obj_clicado = null;
	}
}

function atualizar_jogo() {
	const pecas = ["", "♔", "♕", "♖", "♗", "♘", "♙", "♚", "♛", "♜", "♝", "♞", "♟"];
	let tabuleiro = document.getElementById('tabuleiro');
	let tabData = jogo.getTabuleiro();

	for (var i = 0, n = tabuleiro.rows.length; i < n; i++) {
		for (var j = 0, m = tabuleiro.rows[i].cells.length; j < m; j++) {
			obj = tabuleiro.rows[i].cells[j]
				obj.innerHTML = pecas[tabData[i][j]];
		}
	}
}

function reiniciar_jogo() {
	jogo.reiniciar();
	atualizar_jogo();
}

function gerar_tabuleiro() {
	var table = "<table id=\"tabuleiro\">";
	var color = false;

	for (var i = 0; i < 8; i++) {
		table += "<tr>";
		for (var j = 0; j < 8; j++) {
			if (color) {
				table += "<td id=\"i" + i + "j" + j + "\" bgcolor=\"silver\" onclick=\"select(" + i + "," + j + ");\"></td>";
			} else {
				table += "<td id=\"i" + i + "j" + j + "\" bgcolor=\"white\" onclick=\"select(" + i + "," + j + ");\"></td>";
			}

			color = !color;
		}
		table += "</tr>";
		color = !color;
	}
	table += "</table>";
	document.write(table);
}

init();
