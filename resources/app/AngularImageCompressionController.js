app.controller('AngularImageCompressionController',function($scope,$http){
  $().ready(function() {

        $('#area u').click(function() {
            $('input[name=photo]').trigger('click');
        });

        $('input[name=photo]').change(function(e) {
            var file = e.target.files[0];
            // CANVAS RESIZING
            canvasResize(file, {
                width: 300,
                height: 300,
                crop: false,
                quality: 80,
                rotate: 0,
                callback: function(data, width, height) {
                    alert('data - size---'+data.length);
                    // SHOW AS AN IMAGE
                    // =================================================
                    var img = new Image();
                    img.onload = function() {
                        $(this).css({
                            'margin': '10px auto',
                            'width': width,
                            'height': height
                        }).appendTo('#area div');
                    };

                    $(img).attr('src', data);
                      var	blob = dataURItoBlob(data);
                    	alert(blob.size);
                    	var myFile = blobToFile(blob, "my-image.png");
                    	alert(myFile.size+'----'+myFile.name);

                      /*var fd = new FormData();
                      fd.append('file', myFile);
                      //post myFile to db from here
                      $http.post('http://localhost:4444/api/containers/scoopymongoPicsdb/upload', fd, {
                            transformRequest: angular.identity,
                            headers: {'Content-Type': undefined}
                        }).success(function (reponse) {
                            //cb(reponse);
                            //filedetails = reponse;
                            console.log("file upload reponse" + JSON.stringify(reponse));
                        }).error(function (error) {
                            //cb(error);
                            console.log("reponse" + JSON.stringify(error));
                        });*/

                }
            });

        });
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

        var ia = new Uint8Array(ab);
         for (var i = 0; i < byteString.length; i++) {
             ia[i] = byteString.charCodeAt(i);
         }

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

})
