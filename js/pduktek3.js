var _linkIndex	= -1;
		var _myPath		= 'PGlmcmFtZSBhbGxvdz0nZW5jcnlwdGVkLW1lZGlhJyBhbGxvd2Z1bGxzY3JlZW49J2FsbG93ZnVsbHNjcmVlbicgYWxsb3d0cmFuc3BhcmVuY3k9J3RydWUnIGNsYXNzPSdpZnJhbWUnIGZyYW1lYm9yZGVyPScwJyBmcmFtZXNwYWNpbmc9JzAnIGdlc3R1cmU9J21lZGlhJyBoZWlnaHQ9JzEwMHZoJyBpZD0nbWFpbl9pZnJhbWUnIHNjcm9sbGluZz0nbm8nIHNyYz0naHR0cHM6Ly9saXZlLXNwb3J0cy5kdWt0ZWsub25saW5lJyB3aWR0aD0nMTAwdncnLz4=';
		document.getElementById(atob('Zmlyc3RfY29udGVudA==')).innerHTML = atob(_myPath);
      	var _myLocation = window.location.href;
		const _url 		= new URL(_myLocation);		
		eval(atob('ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5faWZyYW1lJykuc3JjID0gJ2h0dHBzOi8vbGl2ZS1zcG9ydHMuZHVrdGVrLm9ubGluZScrX3VybC5wYXRobmFtZQ=='));

        var _changeState = function(_title, _path){
            window.history.pushState({"pageTitle":_title},"", _path);
			document.title = _title;
        }
		const iframeDomain = "aHR0cHM6Ly9saXZlLXNwb3J0cy5kdWt0ZWsub25saW5l";    
		window.onmessage = event => {
        	if(event.origin === atob(iframeDomain)) {
				var _jsonMessage = JSON.parse(event.data);
				if(_jsonMessage.type == "changeUrl"){
            		_changeState(_jsonMessage.title, _jsonMessage.path);				
					document.title = _jsonMessage.title;
				} else if(_jsonMessage.type == "copyToClipboard"){
					navigator.clipboard.writeText(_jsonMessage.text);
				}
            }
        };	 

		function setCookie(cName, cValue, expDays) {
			let date = new Date();
			date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
			const expires = "expires=" + date.toUTCString();
			document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
		
		}		
		
		function getCookie(cName) {
		  const name 		= cName + "=";
		  const cDecoded 	= decodeURIComponent(document.cookie); //to be careful
		  const cArr 		= cDecoded .split('; ');
		  var res 			= -1;
		  cArr.forEach(val => {
			  if (val.indexOf(name) === 0) res = val.substring(name.length);
		  })
		  return res;
		}
		
		
		var _links			= [
			'https://carrierdestined.com/h9wy87em5h?key=20cb5df32b0cb6d71e91c2556d91f27a',
			'https://zajukrib.net/4/3184875',
			'https://xszpuvwr7.com/2017599/',
			'https://naazex.com/gosl/InNpZCI6MTM0NTI1OCwic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjExODA1MzIs?si1=&si2='
		];
		
	var _directLinkUrl = '';	
	var _get = function(name){
		if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
		  return decodeURIComponent(name[1]);
	}
	function generateCode(){
		_linkIndex 			= parseInt(getCookie('linkIndex'));
		/*var _links			= [
			'https://carrierdestined.com/h9wy87em5h?key=20cb5df32b0cb6d71e91c2556d91f27a',
			'https://zajukrib.net/4/3184875',
			'https://xszpuvwr7.com/2017599/',
			'https://t.co/MiE9STbRvP'
		];*/
		
		
		if(_linkIndex >= _links.length || _linkIndex < 0){
			_linkIndex = 0;
		}
		if(typeof _get('loc') != 'undefined'){
			_directLinkUrl 	= atob(_get('loc'));
		} else {
			_directLinkUrl 	= _links[_linkIndex];
		}
		_linkIndex 		= _linkIndex+1;
		setCookie('linkIndex', _linkIndex, 1);
		
	}
		
	generateCode();		
	//var _directLinkUrl = 'https://carrierdestined.com/h9wy87em5h?key=20cb5df32b0cb6d71e91c2556d91f27a';
	//var _directLinkUrl = _links[_linkIndex];
	

	var _mqStandAlone 	= '(display-mode: standalone)';
	var _displayMode 	= 'browser';
	if (navigator.standalone || window.matchMedia(_mqStandAlone).matches) {
		_displayMode 	= 'standalone';
	}

	if(_displayMode != 'standalone'){	
		if(document.referrer != ''){
			var _documentRef 	= new URL(document.referrer);
			var _documentSelf 	= new URL(window.location.href);
			if(_documentRef.host != _documentSelf.host){
				var _targetLinkBody = window.location.href;
				var _linkBody = '<a id="adsTarget" style="background:rgba(255,255,255,0.5);left:0px;top:0px;display:block;position:absolute;width:100vw;height:100vh;" href="'+_targetLinkBody+'" target="_blank"><div style="width:100vw;height:100vh;text-align:center;"><button id="blanjut" style="padding-top:48%;background:#5AB2FF;color:#FFFFFF;padding:5px 10px;">Tekan untuk lanjut menonton</button></div></a>';
				$('body').append(_linkBody);
				$('#adsTarget').on('click', function(){		
					generateCode();
					setTimeout(function(){
						window.location.href = _directLinkUrl;
					}, 10);
				});
			}
		} else {
			var _targetLinkBody = window.location.href;
			var _linkBody = '<a id="adsTarget" style="background:rgba(255,255,255,0.5);left:0px;top:0px;display:block;position:absolute;width:100vw;height:100vh;" href="'+_targetLinkBody+'" target="_blank"><div style="width:100vw;height:100vh;text-align:center;"><button id="blanjut" style="padding-top:48%;background:#5AB2FF;color:#FFFFFF;padding:5px 10px;">Tekan untuk lanjut menonton</button></div></a>';
			$('body').append(_linkBody);
			$('#adsTarget').on('click', function(){
				generateCode();
				setTimeout(function(){
					window.location.href = _directLinkUrl;
				}, 10);			
			});
		}	
	}
