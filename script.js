/* Esta función hace falta copiarla para obtener las variables de la URL */
function GetQueryString (variable) {
	var url = window.location.href;
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params[variable];
};

function setup() {
    createCanvas(800, 800);
    noStroke();
    frameRate(3);
}

function dibuja_nodo(x, y) {
    stroke(0, 255);
    fill(0,100);
    ellipse(x, y, 10, 10);
}

function draw() {
    background(255);
    
    var posicion = GetQueryString("posicion");
	

	for (var i = 0; i < parseInt(posicion); i ++) {
            dibuja_nodo(Math.random()*800, Math.random()*800);
	}
}

