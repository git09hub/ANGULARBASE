app.controller("ImageCompressionController",function($scope){
	console.log("ImageCompressionController .working");
var myFile='';

	  $("#file").on('change',function(){
			var file = document.getElementById('file').files[0];
			alert(file.name+'---'+file.size);
			    // Create an image
			    var img = document.createElement("img");
				// Create a file reader
			    var reader = new FileReader();
			    // Set the image once loaded into file reader
				var canvas = document.createElement("canvas");
			    reader.onload = function(e)
			    {
			        img.src = e.target.result;

			        //var canvas = $("<canvas>", {"id":"testing"})[0];
			        var ctx = canvas.getContext("2d");
			        ctx.drawImage(img, 0, 0);

			        var MAX_WIDTH = 400;
			        var MAX_HEIGHT = 300;
			        var width = img.width;
			        var height = img.height;

			        if (width > height) {
			          if (width > MAX_WIDTH) {
			            height *= MAX_WIDTH / width;
			            width = MAX_WIDTH;
			          }
			        } else {
			          if (height > MAX_HEIGHT) {
			            width *= MAX_HEIGHT / height;
			            height = MAX_HEIGHT;
			          }
			        }
			        canvas.width = width;
			        canvas.height = height;
			        var ctx = canvas.getContext("2d");
			        ctx.drawImage(img, 0, 0, width, height);
			    }
					var dataurl = canvas.toDataURL("image/png");
					alert('data url---'+dataurl);

					document.getElementById("image").src = dataurl;
					//document.getElementById('image').setAttribute( 'src', dataurl);

					var	blob = dataURItoBlob(dataurl);
					alert(blob.size);
					myFile = blobToFile(blob, file.name);
					//var f=new File(blob,"image/png");
					alert(myFile.size+'----'+myFile.name);
		});


		//converts data url to blob
	function dataURItoBlob(dataURI) {
	  // convert base64 to raw binary data held in a string
	  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
	  var byteString = atob(dataURI.split(',')[1]);

	  // separate out the mime component
	  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

	  // write the bytes of the string to an ArrayBuffer
	  var ab = new ArrayBuffer(byteString.length);

	  // write the ArrayBuffer to a blob, and you're done
	  var blob = new Blob([ab], {type: mimeString});
	  return blob;

	}

	//blob to file
	function blobToFile(theBlob, fileName){
		//A Blob() is almost a File() - it's just missing the two properties below which we will add
		theBlob.lastModifiedDate = new Date();
		theBlob.name = fileName;
		return theBlob;
	}


  $scope.add = function() {
    var f = document.getElementById('file').files[0],
        r = new FileReader();
      alert(f.name+'---'+f.size);
      // Create a file reader
      var reader = new FileReader();
			// Load files into file reader
			reader.readAsDataURL(f);
			var img = document.createElement("img");
      // Set the image once loaded into file reader
      reader.onload = function(e)
      {
          img.src = e.target.result;
          var canvas = document.createElement("canvas");
          //var canvas = $("<canvas>", {"id":"testing"})[0];
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);

          var MAX_WIDTH = 400;
          var MAX_HEIGHT = 300;
          var width = img.width;
          var height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);
          var dataurl = canvas.toDataURL("image/png");
          alert('data url---'+dataurl);
          document.getElementById('image').src = dataurl;
          //var file = canvas.mozGetAsFile(f.name,"image/png");
          //alert(file.name+'---'+file.size);
      }
      // Post the data
      /*
      var fd = new FormData();
      fd.append("name", "some_filename.jpg");
      fd.append("image", dataurl);
      fd.append("info", "lah_de_dah");
      */
  }

});
