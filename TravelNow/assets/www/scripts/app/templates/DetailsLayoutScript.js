Aria.tplScriptDefinition({
    $classpath : "app.templates.DetailsLayoutScript",
	$constructor: function(){
		var myScroll;
	},    
	$prototype : {
		$displayReady: function(){
						 
			myScroll = new iScroll('wrapper');
						 
			 var cityData = JSON.parse(window.localStorage.getItem("clickedCityDetails"));
			 var eventsData = JSON.parse(window.localStorage.getItem(cityData.cityName));
			 
	         this.initialize('12', '77');


			document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
			document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
		},
						 
		 $dataReady: function(){
		 //JSON Data
		 var cityData = JSON.parse(window.localStorage.getItem("clickedCityDetails"));
		 var eventsData = JSON.parse(window.localStorage.getItem(cityData.cityName));
		 
		 var placeDetailsJson = {};
		 placeDetailsJson.cityDetail = {};
		 
		 placeDetailsJson.cityDetail.name = eventsData.name;
		 placeDetailsJson.cityDetail.description = cityData.desc;
		 placeDetailsJson.cityDetail.imageID = cityData.imageID;
		 
		 placeDetailsJson.events = eventsData;
		 this.data = placeDetailsJson;
		 },

		goHome: function(e){
			e.preventDefault();
			pageEngine.navigate({"pageId": "HOME"});
		},
		bookme: function(){
			alert("coming soon");
		},
		dummyData: function(){
			var myData = {};
//			myData
		},
		 initialize : function (lat, lng) {
			 
			 	var latlng = new Array();
				latlng[0] = new google.maps.LatLng(-23.363882,131.044922);
				latlng[1] = new google.maps.LatLng(-26.363882,131.044922);
				latlng[2] = new google.maps.LatLng(-29.363882,131.044922);
				
				var cityArray = new Array();
				cityArray[0] = "City Name 0";
				cityArray[1] = "City Name 1";
				cityArray[2] = "City Name 2";
				
				var cityDesc = new Array();
				cityDesc[0] = "City Desc 0";
				cityDesc[1] = "City Desc 1";
				cityDesc[2] = "City Desc 2";
			 
				var mapOptions = {
					  	zoom: 4,
					    center: latlng[0],
					    mapTypeId: google.maps.MapTypeId.ROADMAP
				 };
				var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
				
				
				
				for (var i = 0; i < 3; i++) {
				
			  			var contentString = '<div id="content">'+
				      	'<div id="siteNotice">'+
				      	'</div>'+
				      	'<p><b>'+
				      	cityArray[i] +
				      	'</b><p>'+
				      	cityDesc[i] +
				      	'</div>'+
				      	'</div>';
					
					var infowindow = new google.maps.InfoWindow({
				      content: contentString
				  	});
				
					var marker = new google.maps.Marker({
						position: latlng[i],
				      	map: map,
				      	title: 'Uluru (Ayers Rock)'
				  	});
				  	google.maps.event.addListener(marker, 'click', function(marker, infowindow) { return function() {
			          infowindow.open(map, marker);
			        }}(marker, infowindow));
				  }
				
	   }
	}
})