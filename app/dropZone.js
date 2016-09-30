(function() {
	angular.module("giti").controller("FileUploadCtrl", FileUploadCtrl)

	function FileUploadCtrl($scope) {
		
//		$scope.fileUploaded {
//			name: mypicture
//			path: localStorage.setItem(
//			"data"	, JSONdata	
//			)
//		}
$scope.showsearch(){
	
	var data={
		preview: $scope.upload,
		path: $scope.upload
		}
		var JSON= JSON.stringify(data);
		localStorage.setItem("data",JSONdata)
		}
		$scope.getData=function(){
		var data=localStorage.getItem("data")
		var parsedData = JSON.parse(data);
		}
		}

		localStorage.setItem("data",data)

}
	

)();