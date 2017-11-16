
function get(url, cb, dataType){

	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200) {
			if (dataType == 'json') {
				var obj = JSON.parse(xhr.responseText);
				cb(obj);
			} else {
				cb(xhr.responseText);
			}
		}
	}

	xhr.open('GET', url, true);
	xhr.send();
}
function post(url, querystring, cb){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200) {
			cb(xhr.responseText);
		}
	}

	xhr.open('POST', url, true);
	xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xhr.send(querystring);
}
