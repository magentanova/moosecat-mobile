var TEMPLATES = {
	buyIt: '\
		<div class="buyIt-wrapper">\
			<h1 class="buyIt-title">bloq</h1> \
			<img class="buyIt-logo" src="images/bloqLogo.png" /> \
			<p class="buyIt-copy"> \
				To play bloq on a mobile device, download it from the app store. \
			</p> \
			<a href="https://itunes.apple.com/us/app/love-island-the-game/id1280910599?mt=8" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/appstore-lrg.svg) no-repeat;width:135px;height:40px;"></a>\
		</div>',
	play: '\
		    <p id="nav" class="day" >\
		    	<a id="tutorial" href="#">how.</a>\
		    	<a href="#" id="restart">restart.</a>\
		    	<a target="_blank" href="http://github.com/magentanova/bloq">github.</a>\
		    	<a id="night" href="#">night.</a>\
		    </p>\
		    <div id="leftSide">\
		        <div id="powerUpContainer">\
		            <div id="shifters">\
		                <i id="shiftLeft" class="material-icons powerUp powerUpLeft">chevron_left</i>\
		                <i id="shiftRight" class="material-icons powerUp powerUpRight">chevron_right</i>\
		            </div>\
		            <i id="flip" class="material-icons powerUp powerUpRight">compare_arrows</i>\
		            <i id="invert" class="material-icons powerUp powerUpLeft">invert_colors</i>\
		            <p></p>\
		        </div>\
		    </div>\
		    <div id="gameContainer">\
			    <p class="advice" id="playButton">play</p>\
		    	<div id="readout">\
		    		<div id="readoutData">\
		                <p id="score">0</p><p id="level">four</p>\
		            </div>\
		            <div id="blockCounter"></div>\
		    	</div>\
		    	<div id="grid"></div>\
		    	<div id="playerRowContainer">\
		    		<div class="row" id="playerRow">\
		    		</div>\
		    	</div>\
		    </div>',
	home: '' + 
'				<div id="home-content">' + 
'					<div id="title-wrapper" class="home">' + 
'							<h1>bloq</h1>' + 
'						</div>' + 
'					<div id="menu-boxes">' + 
'						<div class="row">' +
	'						<div class="menu-item top">' + 
	'							<i id="play" class="material-icons">play_arrow</i>' + 
	'						</div>' + 
	'						<div class="menu-item top">' + 
	'							<i id="tutorial" class="material-icons">help</i>' + 
	'						</div>' + 
						'</div>' + 
'						<div class="row">' +
	'						<div class="menu-item">' + 
	'							<i id="settings" class="material-icons">settings</i>' + 
	'						</div>' + 
	'						<div class="menu-item">' + 
	'							<i id="about" class="material-icons">pets</i>' + 
	'						</div>' + 
						'</div>' + 
'					</div>' + 
'					<h2 id="high-score">high score: <span class="score"></span></h2>' + 
'				</div>',
	about: '' +
	  '  <div class="about-pic">' +
	  '  	<div id="title-wrapper" class="home">' +
	  '      	<h1>Moosecat Productions</h1>' +
	  '      </div>' +
	  '  	<img src="images/moosecat.jpg">' +
	  '  </div>',
	settings: '<div id="settings-container">' +
			'<div class="settings-option">' +
			'	<h4>music</h4>' +
			'	<div class="settings-visual">' +
			'		<div class="switch">' +
			'			<span data-setting="music" class="music slider activated"></span>' +
			'		</div>' +
			'	</div>' +
			'</div>' +
			'<div class="settings-option">' +
			'	<h4>sound</h4>' +
			'	<div class="settings-visual">' +
			'		<div class="switch">' +
			'			<span data-setting="sounds" class="sounds slider activated"></span>' +
			'		</div>' +
			'	</div>' +
			'</div>' +		
	'		<div class="settings-option">' +
			'	<h4>colors</h4>' +
			'	<div class="settings-visual">' +
			'		<div id="colors" class="switch">' +
			'			<span data-setting="origColors" class="colors round slider activated"></span>' +
			'		</div>' +
			'	</div>' +
			'</div>' +		
	'	</div>'
	}
		    	