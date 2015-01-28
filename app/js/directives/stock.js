angular.module('tradity').

	config(function($tooltipProvider){
		$tooltipProvider.setTriggers({
			'show': 'hide'
		});
	}).

	directive('stock', function($compile) {
		return function(scope, element, attrs) {
			element.bind('mouseenter',function(){
				console.log('enter')
			})
		};
	});
