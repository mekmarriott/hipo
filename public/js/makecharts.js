'use strict';

	    function plotCharts(){
	    	document.getElementById('charts').style.visibility = "visible";
	    	var results = [["7 Sep 2014","10 Sep 2014","12 Sep 2014","13 Sep 2014","17 Sep 2014"],[1,4,8,16,32]];
		    //chart b
		    var bData = {
				labels : results[0],
				datasets : [
					{
						fillColor : "rgba(172,194,132,0.4)",
						strokeColor : "#ACC26D",
						pointColor : "#fff",
						pointStrokeColor : "#9DB86D",
						data : results[1]
					}
				]
			}
		    var b = document.getElementById('b').getContext('2d');
		    new Chart(b).Line(bData);
		    
		    //chart c
		    var cData = {
				labels : results[0],
				datasets : [
					{
						label: "A1C",
						fillColor: "rgba(220,220,220,0.5)",
			            strokeColor: "rgba(220,220,220,0.8)",
			            highlightFill: "rgba(220,220,220,0.75)",
			            highlightStroke: "rgba(220,220,220,1)",
						data : results[1]
					}
				]
			}
		    var c = document.getElementById('c').getContext('2d');
		    new Chart(c).Bar(cData);

			//chart a
		    var aData = {
				labels : results[0],
				datasets : [
					{
						fillColor : "rgba(172,194,132,0.4)",
						strokeColor : "#ACC26D",
						pointColor : "#fff",
						pointStrokeColor : "#9DB86D",
						data : results[1]
					}
				]
			}
		    var a = document.getElementById('a').getContext('2d');
		    new Chart(a).Line(aData);

		    //chart f
		    var fData = {
				labels : results[0],
				datasets : [
					{
						label: "Treatment Options",
						fillColor: "rgba(220,220,220,0.5)",
			            strokeColor: "rgba(220,220,220,0.8)",
			            highlightFill: "rgba(220,220,220,0.75)",
			            highlightStroke: "rgba(220,220,220,1)",
						data : results[1]
					}
				]
			}
		    var f = document.getElementById('f').getContext('2d');
			new Chart(f).Bar(fData);

		    //chart e
		    var eData = {
			labels : results[0],
			datasets : [
				{
						label: "Steps",
						fillColor: "rgba(220,220,220,0.5)",
			            strokeColor: "rgba(220,220,220,0.8)",
			            highlightFill: "rgba(220,220,220,0.75)",
			            highlightStroke: "rgba(220,220,220,1)",
						data : results[1]
					}
				]
			}
		    var e = document.getElementById('e').getContext('2d');
		    new Chart(e).Bar(eData);

		    //chart d
		    var dData = {
			labels : results[0],
			datasets : [
					{
						fillColor : "rgba(172,194,132,0.4)",
						strokeColor : "#ACC26D",
						pointColor : "#fff",
						pointStrokeColor : "#9DB86D",
						data : results[1]
					}
				]
			}
		    var d = document.getElementById('d').getContext('2d');
		    new Chart(d).Line(dData);
	    }