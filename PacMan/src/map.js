	

	var output;
	var pacman;
	var wall;
	var ground;
	var coin;
	var coinsInMap = 0;
	var score = 0;
	
	// 1 = <div> class='wall'><div>
	// 2 = <div> class='coin'><div>
	// 3 = <div> class='ground'><div>
	// 4 = <div> class='pacman'><div>
	// 5 = <div> class='blinky'><div>
	
	var map = [
		[1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,2,2,2,2,2,1,2,2,2,2,5,1],
		[1,2,1,1,1,2,1,2,1,1,1,2,1],
		[1,2,1,2,2,2,2,2,2,2,1,2,1],
		[1,2,2,2,1,1,4,1,1,2,2,2,1],
		[1,2,1,2,2,2,2,2,2,2,1,2,1],
		[1,2,1,1,2,2,1,2,2,1,1,2,1],
		[1,2,2,2,2,2,1,2,2,2,2,2,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1]
	];
	var pacman = {
			x: 6,
			y: 4
	}
	
	function loadComplete(){
		output = document.getElementById('output');
		pacman = document.getElementById('pacman');
		loopTimer = setInterval(loop, 50);
	}
	
	function drawWorld()	{
		document.getElementById('world').innerHTML = "";
		for(var y = 0; y < map.length; y = y + 1)	{
			for(var x = 0; x < map[y].length; x = x + 1)	{
				if(map[y][x] === 1){
					document.getElementById('world').innerHTML += "<div class='wall'></div>";
				}
				else if(map[y][x] === 2){
					document.getElementById('world').innerHTML += "<div class='coin'></div>";
					coinsInMap++;
				}
				else if(map[y][x] === 3){
					document.getElementById('world').innerHTML += "<div class='ground'></div>";
				}
				else if(map[y][x] === 4){
					document.getElementById('world').innerHTML += "<div class='pacman'></div>";
				}
				else if(map[y][x] === 5){
					document.getElementById('world').innerHTML += "<div class='blinky'></div>";
				}
			}
			document.getElementById('world').innerHTML += "<br>";
		}
	}
	
	document.onkeydown = function(e)	{
		if(e.keyCode === 37 && map[pacman.y][pacman.x] != 5)	{
			// left
			if(map[pacman.y][pacman.x-1] !== 1)	{
				if(map[pacman.y][pacman.x-1] === 2)	{
					score += 10;
				}
				map[pacman.y][pacman.x] = 3;
				pacman.x = pacman.x - 1;
				if(map[pacman.y][pacman.x] === 5)	{
					map[pacman.y][pacman.x] = 5;
					alert("Game Over!");
				}
				else	{
					map[pacman.y][pacman.x] = 4;
				}
				drawWorld();
			}
		}
		else if(e.keyCode === 38 && map[pacman.y][pacman.x] != 5)	{
			// up
			if(map[pacman.y-1][pacman.x] !== 1)	{
				if(map[pacman.y-1][pacman.x] === 2)	{
					score += 10;
				}
				map[pacman.y][pacman.x] = 3;
				pacman.y = pacman.y - 1;
				if(map[pacman.y][pacman.x] === 5)	{
					map[pacman.y][pacman.x] = 5;
					alert("Game Over!");
				}
				else	{
					map[pacman.y][pacman.x] = 4;
				}
				drawWorld();
			}
		}
		else if(e.keyCode === 39 && map[pacman.y][pacman.x] != 5)	{
			// right
			if(map[pacman.y][pacman.x+1] !== 1)	{
				if(map[pacman.y][pacman.x+1] === 2)	{
					score += 10;
				}
				map[pacman.y][pacman.x] = 3;
				pacman.x = pacman.x + 1;
				if(map[pacman.y][pacman.x] === 5)	{
					map[pacman.y][pacman.x] = 5;
					alert("Game Over!");
				}
				else	{
					map[pacman.y][pacman.x] = 4;
				}
				drawWorld();
			}
		}
		else if(e.keyCode === 40 && map[pacman.y][pacman.x] != 5)	{
			// down
			if(map[pacman.y+1][pacman.x] !== 1)	{
				if(map[pacman.y+1][pacman.x] === 2)	{
					score += 10;
				}
				map[pacman.y][pacman.x] = 3;
				pacman.y = pacman.y + 1;
				if(map[pacman.y][pacman.x] === 5)	{
					map[pacman.y][pacman.x] = 5;
					alert("Game Over!");
				}
				else	{
					map[pacman.y][pacman.x] = 4;
				}
				drawWorld();
			}
		}
	}