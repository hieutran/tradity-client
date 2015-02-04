'use strict';

angular.module('tradity')
	/**
	 * @ngdoc service
	 * @name tradity.stock
	 * @description
	 * # stock
	 * Get stock info with the isin over differen api's
	 */
	.factory('stock', function ($http) {
		var wikifolioApi = 'http://wf.superbarne.de/api/v1';
		return {
			getComments:function(isin){
				return $http.get(wikifolioApi+'/comments?underlyingISIN='+isin+'&limit=3').then(function(res){
					return res.data;
				}).catch(function(err){
					console.log(err)
				})
			}
		}
	})

