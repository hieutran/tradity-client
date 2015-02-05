'use strict';

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

angular.module('tradity')
	/**
	 * @ngdoc service
	 * @name tradity.stock
	 * @description
	 * # stock
	 * Get stock info with the isin over differen api's
	 */
	.factory('stock', function ($http) {
		var wikifolioApi = 'https://wfapi.tradity.de/api/v1';
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

