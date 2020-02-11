// Regular javascript data in an array of objects
var jsData = [
	{
		name : "Peter" , 
		age : 40
	},
	{
		name : "Steven" ,
		age : 25
	}
];

var i;

// JSON data
var jsonData = [
	{
		"name" : "Lucy" , 
		"age" : 12
	},
	{
		"name" : "Mark" , 
		"age" : 77
	}
];

// Retrieveing json data from an external file
var storedJson = JSON.parse(myData);

// Clears results section
function clearResults(){
	document.getElementById('result1').innerHTML = '';
	document.getElementById('result2').innerHTML = '';
	document.getElementById('result3').innerHTML = '';
}

// Function that writes the data stored in an array to the result box
function writeData(){
	for(i = 0; i < jsData.length; i++){
		document.getElementById('result1').innerHTML += 
			'<h2><b>Person ' + (i+1) + ': </b>' + jsData[i].name + ' is ' + jsData[i].age + ' years old</h2>';
	}
	for(i = 0; i < jsonData.length; i++){
		document.getElementById('result2').innerHTML +=
			'<h2><b>Person ' + (i+1) + ': </b>' + jsonData[i].name + ' is ' + jsonData[i].age + ' years old</h2>';
	}
	for(i = 0; i < storedJson.length; i++){
		document.getElementById('result3').innerHTML +=
			'<h2><b>Person ' + (i+1) + ': </b>' + storedJson[i].name + ' is ' + storedJson[i].age + ' years old</h2>';
	}
	// ajax method
	$.ajax({
		url : 'js/MOCK_DATA.json' , 
		type : 'GET' ,
		data : 'json' ,
		success : function(data){
			console.log(data);
			document.getElementById('resultAjax').innerHTML = 
			'<div class="col-12">' + 
				'<h2 class="display-2 text-center">From AJAX</h2><br>' + 
			'</div>';
			for(i = 0; i < data.length; i++){
				document.getElementById('resultAjax').innerHTML += 
				'<div class="col-md-6 col-xl-4">' +
					'<h3><b>Person ' + (i+1) + ': </b>' + data[i].first_name + ' ' + data[i].last_name + '</h3>' +
					'<p><b>Gender:</b> ' + data[i].gender + '<br>' +
					'<b>Email Address:</b> ' + data[i].email + '<br>' +
					'<b>City:</b> ' + data[i].city + '<br>' +
					'<b>Catch Phrase:</b> ' + data[i].catch_phrase + '</p>' +
				'</div>';
			}
		},
		error : function(){
			console.log('Error. Failed to load database');
		}
	});
}

// Function that allows something to happen when the h1 tag is clicked
$(document).ready(function(){
	$('#clickFunction').click(function(){
		clearResults();
		writeData();
	});
});