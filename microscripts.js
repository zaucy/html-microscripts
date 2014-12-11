(function() {
	(function() {
		var documentWhenReady = function() {
			if(document.readyState == "complete") {
				var metaTags = document.head.getElementsByTagName("meta");
				for(var metaTagIndex in metaTags) {
					var metaTag = metaTags[metaTagIndex];
					if(metaTag.name == "microscripts" || metaTag.name == "microscript") {
						var content = metaTag.content;
						var wrap = {
							begin: content.substr(0, content.indexOf("*")),
							end: content.substr(content.indexOf("*")+1)
						};
						
						metaTag.remove();
						parseMicroScripts(wrap);
					}
				}
			}
		};
		
		documentWhenReady();
		document.addEventListener("readystatechange", documentWhenReady);
	}());
	
	function stringSplice(str, index, count, add) {
		return str.slice(0, index) + (add || "") + str.slice(index + count);
	}
	
	function stringReplaceSect(str, sectBegin, sectEnd, sect) {
		return str.slice(0, sectBegin) + sect + str.slice(sectEnd);
	}
	
	function parseMicroScripts(wrap) {
		var microScriptBeginIndex = document.documentElement.innerHTML.indexOf(wrap.begin);
		var microScriptEndIndex = document.documentElement.innerHTML.indexOf(wrap.end);
		
		while(microScriptBeginIndex >= 0 && microScriptEndIndex >= 0) {
			var microScript = document.documentElement.innerHTML.slice(microScriptBeginIndex + wrap.begin.length, microScriptEndIndex);
			console.log(microScript);
			document.documentElement.innerHTML = stringReplaceSect(document.documentElement.innerHTML,
				microScriptBeginIndex, microScriptEndIndex + wrap.end.length, eval(microScript));
			
			microScriptBeginIndex = document.documentElement.innerHTML.indexOf(wrap.begin);
			microScriptEndIndex = document.documentElement.innerHTML.indexOf(wrap.end);
		}
	}
	
}());