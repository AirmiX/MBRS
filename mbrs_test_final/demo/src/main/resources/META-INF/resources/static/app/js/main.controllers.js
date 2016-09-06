var demoApp = angular.module('demoApp.controllers', ['ui.bootstrap']);

demoApp.controller('CountryController', function($scope, $location, $routeParams, $uibModal,
	 countryService) {
	
	$scope.reverse = true;
	
	$scope.changeReverse = function() {
		$scope.countryList = $scope.countryList.slice().reverse();
	}
	
	$scope.maxSize = 5;
	
	$scope.open = function () {
		if(!$routeParams.if) {
		}
		var modalInstance = $uibModal.open({
			  animation: true,
		      templateUrl: 'myModalContent.html',
		      controller: 'addEditCountryConfirmationController',
		      size : 'sm',
		      resolve: {
		          country: function () {
		            return $scope.country;
		          }
		      }
		});	
		
		modalInstance.result.then(function () {
				$location.path('/countryList');
		    }, function () {
		});
		
	}
	
	$scope.alerts = [];
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
	
	$scope.getAll = function() {
		countryService.getAll($scope.search, $scope.page-1)
				.success(function(data, status, headers) {
					$scope.countryList = data;
					$scope.hideSpinner = true;
					$scope.totalItems = headers('total-items');
				})
				.error(function() {
					$scope.showError = true;
					$scope.hideSpinner = true;
				});
	};
	
	$scope.remove = function(id) {
		countryService.remove(id)
				.success(function(data) {
					$scope.getAll();
					$scope.alerts.push({msg: 'Country with ID ' + id + ' successufully deleted', type: 'success'});
				})
				.error(function() {
					$scope.alerts.push({msg: 'Error while deleting Country with ID ' + id + '!', type: 'danger'});
				});
	};
	
	$scope.addEditHeading;
	
	$scope.initAddEditPage = function () {
		if ($routeParams.id) {
			$scope.addEditHeading = 'Edit';
		}
		else {
			$scope.addEditHeading = 'Add';
		}
	}
	
	$scope.getOne = function() {
		$scope.country = {};
		if ($routeParams.id) {  // edit stranica
			countryService.getOne($routeParams.id)
					.success(function(data) {
						$scope.country = data;
					})
					.error(function() {
						$scope.alerts.push({msg: 'Country with ID ' + $routeParams.id + ' does not exist!', type: 'danger'});
					});
		}
	};
	
});


demoApp.controller('addEditCountryConfirmationController', function($scope, $uibModalInstance, countryService, country) {
	
	$scope.country = country;
	
	$scope.confirm = function () {
		$scope.save();
	};

	$scope.revert = function () {
	    $uibModalInstance.dismiss();
	};
	
	$scope.save = function() {
		countryService.save($scope.country)
				.success(function() {
					$uibModalInstance.close();
				})
				.error(function() {
					$uibModalInstance.dismiss();
				});
	};
	
});
demoApp.controller('CityController', function($scope, $location, $routeParams, $uibModal,
	countryService,  cityService) {
	
	$scope.reverse = true;
	
	$scope.changeReverse = function() {
		$scope.cityList = $scope.cityList.slice().reverse();
	}
	
	$scope.maxSize = 5;
	
	$scope.open = function () {
		if(!$routeParams.if) {
		$scope.city.country = JSON.parse($scope.city.country);
		}
		var modalInstance = $uibModal.open({
			  animation: true,
		      templateUrl: 'myModalContent.html',
		      controller: 'addEditCityConfirmationController',
		      size : 'sm',
		      resolve: {
		          city: function () {
		            return $scope.city;
		          }
		      }
		});	
		
		modalInstance.result.then(function () {
				$location.path('/cityList');
		    }, function () {
		});
		
	}
	
	$scope.alerts = [];
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
	
	$scope.getAll = function() {
		cityService.getAll($scope.search, $scope.page-1)
				.success(function(data, status, headers) {
					$scope.cityList = data;
					$scope.hideSpinner = true;
					$scope.totalItems = headers('total-items');
				})
				.error(function() {
					$scope.showError = true;
					$scope.hideSpinner = true;
				});
	};
	
	$scope.remove = function(id) {
		cityService.remove(id)
				.success(function(data) {
					$scope.getAll();
					$scope.alerts.push({msg: 'City with ID ' + id + ' successufully deleted', type: 'success'});
				})
				.error(function() {
					$scope.alerts.push({msg: 'Error while deleting City with ID ' + id + '!', type: 'danger'});
				});
	};
	
	$scope.addEditHeading;
	
	$scope.initAddEditPage = function () {
		if ($routeParams.id) {
			$scope.addEditHeading = 'Edit';
		}
		else {
			$scope.addEditHeading = 'Add';
		}
	}
	
	$scope.getOne = function() {
		$scope.city = {};
			countryService.getAll()
				.success(function(data) {
						$scope.countryList = data;
					});
		if ($routeParams.id) {  // edit stranica
			cityService.getOne($routeParams.id)
					.success(function(data) {
						$scope.city = data;
					})
					.error(function() {
						$scope.alerts.push({msg: 'City with ID ' + $routeParams.id + ' does not exist!', type: 'danger'});
					});
		}
	};
	
});


demoApp.controller('addEditCityConfirmationController', function($scope, $uibModalInstance, cityService, city) {
	
	$scope.city = city;
	
	$scope.confirm = function () {
		$scope.save();
	};

	$scope.revert = function () {
	    $uibModalInstance.dismiss();
	};
	
	$scope.save = function() {
		cityService.save($scope.city)
				.success(function() {
					$uibModalInstance.close();
				})
				.error(function() {
					$uibModalInstance.dismiss();
				});
	};
	
});
demoApp.controller('RestaurantBrandController', function($scope, $location, $routeParams, $uibModal,
	sellerService,  restaurantBrandService) {
	
	$scope.reverse = true;
	
	$scope.changeReverse = function() {
		$scope.restaurantBrandList = $scope.restaurantBrandList.slice().reverse();
	}
	
	$scope.maxSize = 5;
	
	$scope.open = function () {
		if(!$routeParams.if) {
		$scope.restaurantBrand.seller = JSON.parse($scope.restaurantBrand.seller);
		}
		var modalInstance = $uibModal.open({
			  animation: true,
		      templateUrl: 'myModalContent.html',
		      controller: 'addEditRestaurantBrandConfirmationController',
		      size : 'sm',
		      resolve: {
		          restaurantBrand: function () {
		            return $scope.restaurantBrand;
		          }
		      }
		});	
		
		modalInstance.result.then(function () {
				$location.path('/restaurantBrandList');
		    }, function () {
		});
		
	}
	
	$scope.alerts = [];
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
	
	$scope.getAll = function() {
		restaurantBrandService.getAll($scope.search, $scope.page-1)
				.success(function(data, status, headers) {
					$scope.restaurantBrandList = data;
					$scope.hideSpinner = true;
					$scope.totalItems = headers('total-items');
				})
				.error(function() {
					$scope.showError = true;
					$scope.hideSpinner = true;
				});
	};
	
	$scope.remove = function(id) {
		restaurantBrandService.remove(id)
				.success(function(data) {
					$scope.getAll();
					$scope.alerts.push({msg: 'RestaurantBrand with ID ' + id + ' successufully deleted', type: 'success'});
				})
				.error(function() {
					$scope.alerts.push({msg: 'Error while deleting RestaurantBrand with ID ' + id + '!', type: 'danger'});
				});
	};
	
	$scope.addEditHeading;
	
	$scope.initAddEditPage = function () {
		if ($routeParams.id) {
			$scope.addEditHeading = 'Edit';
		}
		else {
			$scope.addEditHeading = 'Add';
		}
	}
	
	$scope.getOne = function() {
		$scope.restaurantBrand = {};
			sellerService.getAll()
				.success(function(data) {
						$scope.sellerList = data;
					});
		if ($routeParams.id) {  // edit stranica
			restaurantBrandService.getOne($routeParams.id)
					.success(function(data) {
						$scope.restaurantBrand = data;
					})
					.error(function() {
						$scope.alerts.push({msg: 'RestaurantBrand with ID ' + $routeParams.id + ' does not exist!', type: 'danger'});
					});
		}
	};
	
});


demoApp.controller('addEditRestaurantBrandConfirmationController', function($scope, $uibModalInstance, restaurantBrandService, restaurantBrand) {
	
	$scope.restaurantBrand = restaurantBrand;
	
	$scope.confirm = function () {
		$scope.save();
	};

	$scope.revert = function () {
	    $uibModalInstance.dismiss();
	};
	
	$scope.save = function() {
		restaurantBrandService.save($scope.restaurantBrand)
				.success(function() {
					$uibModalInstance.close();
				})
				.error(function() {
					$uibModalInstance.dismiss();
				});
	};
	
});
demoApp.controller('RestaurantController', function($scope, $location, $routeParams, $uibModal,
	restaurantBrandService, cityService,  restaurantService) {
	
	$scope.reverse = true;
	
	$scope.changeReverse = function() {
		$scope.restaurantList = $scope.restaurantList.slice().reverse();
	}
	
	$scope.maxSize = 5;
	
	$scope.open = function () {
		if(!$routeParams.if) {
		$scope.restaurant.restaurantBrand = JSON.parse($scope.restaurant.restaurantBrand);
		$scope.restaurant.city = JSON.parse($scope.restaurant.city);
		}
		var modalInstance = $uibModal.open({
			  animation: true,
		      templateUrl: 'myModalContent.html',
		      controller: 'addEditRestaurantConfirmationController',
		      size : 'sm',
		      resolve: {
		          restaurant: function () {
		            return $scope.restaurant;
		          }
		      }
		});	
		
		modalInstance.result.then(function () {
				$location.path('/restaurantList');
		    }, function () {
		});
		
	}
	
	$scope.alerts = [];
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
	
	$scope.getAll = function() {
		restaurantService.getAll($scope.search, $scope.page-1)
				.success(function(data, status, headers) {
					$scope.restaurantList = data;
					$scope.hideSpinner = true;
					$scope.totalItems = headers('total-items');
				})
				.error(function() {
					$scope.showError = true;
					$scope.hideSpinner = true;
				});
	};
	
	$scope.remove = function(id) {
		restaurantService.remove(id)
				.success(function(data) {
					$scope.getAll();
					$scope.alerts.push({msg: 'Restaurant with ID ' + id + ' successufully deleted', type: 'success'});
				})
				.error(function() {
					$scope.alerts.push({msg: 'Error while deleting Restaurant with ID ' + id + '!', type: 'danger'});
				});
	};
	
	$scope.addEditHeading;
	
	$scope.initAddEditPage = function () {
		if ($routeParams.id) {
			$scope.addEditHeading = 'Edit';
		}
		else {
			$scope.addEditHeading = 'Add';
		}
	}
	
	$scope.getOne = function() {
		$scope.restaurant = {};
			restaurantBrandService.getAll()
				.success(function(data) {
						$scope.restaurantBrandList = data;
					});
			cityService.getAll()
				.success(function(data) {
						$scope.cityList = data;
					});
		if ($routeParams.id) {  // edit stranica
			restaurantService.getOne($routeParams.id)
					.success(function(data) {
						$scope.restaurant = data;
					})
					.error(function() {
						$scope.alerts.push({msg: 'Restaurant with ID ' + $routeParams.id + ' does not exist!', type: 'danger'});
					});
		}
	};
	
});


demoApp.controller('addEditRestaurantConfirmationController', function($scope, $uibModalInstance, restaurantService, restaurant) {
	
	$scope.restaurant = restaurant;
	
	$scope.confirm = function () {
		$scope.save();
	};

	$scope.revert = function () {
	    $uibModalInstance.dismiss();
	};
	
	$scope.save = function() {
		restaurantService.save($scope.restaurant)
				.success(function() {
					$uibModalInstance.close();
				})
				.error(function() {
					$uibModalInstance.dismiss();
				});
	};
	
});
demoApp.controller('SellerController', function($scope, $location, $routeParams, $uibModal,
	 sellerService) {
	
	$scope.reverse = true;
	
	$scope.changeReverse = function() {
		$scope.sellerList = $scope.sellerList.slice().reverse();
	}
	
	$scope.maxSize = 5;
	
	$scope.open = function () {
		if(!$routeParams.if) {
		}
		var modalInstance = $uibModal.open({
			  animation: true,
		      templateUrl: 'myModalContent.html',
		      controller: 'addEditSellerConfirmationController',
		      size : 'sm',
		      resolve: {
		          seller: function () {
		            return $scope.seller;
		          }
		      }
		});	
		
		modalInstance.result.then(function () {
				$location.path('/sellerList');
		    }, function () {
		});
		
	}
	
	$scope.alerts = [];
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
	
	$scope.getAll = function() {
		sellerService.getAll($scope.search, $scope.page-1)
				.success(function(data, status, headers) {
					$scope.sellerList = data;
					$scope.hideSpinner = true;
					$scope.totalItems = headers('total-items');
				})
				.error(function() {
					$scope.showError = true;
					$scope.hideSpinner = true;
				});
	};
	
	$scope.remove = function(id) {
		sellerService.remove(id)
				.success(function(data) {
					$scope.getAll();
					$scope.alerts.push({msg: 'Seller with ID ' + id + ' successufully deleted', type: 'success'});
				})
				.error(function() {
					$scope.alerts.push({msg: 'Error while deleting Seller with ID ' + id + '!', type: 'danger'});
				});
	};
	
	$scope.addEditHeading;
	
	$scope.initAddEditPage = function () {
		if ($routeParams.id) {
			$scope.addEditHeading = 'Edit';
		}
		else {
			$scope.addEditHeading = 'Add';
		}
	}
	
	$scope.getOne = function() {
		$scope.seller = {};
		if ($routeParams.id) {  // edit stranica
			sellerService.getOne($routeParams.id)
					.success(function(data) {
						$scope.seller = data;
					})
					.error(function() {
						$scope.alerts.push({msg: 'Seller with ID ' + $routeParams.id + ' does not exist!', type: 'danger'});
					});
		}
	};
	
});


demoApp.controller('addEditSellerConfirmationController', function($scope, $uibModalInstance, sellerService, seller) {
	
	$scope.seller = seller;
	
	$scope.confirm = function () {
		$scope.save();
	};

	$scope.revert = function () {
	    $uibModalInstance.dismiss();
	};
	
	$scope.save = function() {
		sellerService.save($scope.seller)
				.success(function() {
					$uibModalInstance.close();
				})
				.error(function() {
					$uibModalInstance.dismiss();
				});
	};
	
});
demoApp.controller('AdminController', function($scope, $location, $routeParams, $uibModal,
	 adminService) {
	
	$scope.reverse = true;
	
	$scope.changeReverse = function() {
		$scope.adminList = $scope.adminList.slice().reverse();
	}
	
	$scope.maxSize = 5;
	
	$scope.open = function () {
		if(!$routeParams.if) {
		}
		var modalInstance = $uibModal.open({
			  animation: true,
		      templateUrl: 'myModalContent.html',
		      controller: 'addEditAdminConfirmationController',
		      size : 'sm',
		      resolve: {
		          admin: function () {
		            return $scope.admin;
		          }
		      }
		});	
		
		modalInstance.result.then(function () {
				$location.path('/adminList');
		    }, function () {
		});
		
	}
	
	$scope.alerts = [];
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
	
	$scope.getAll = function() {
		adminService.getAll($scope.search, $scope.page-1)
				.success(function(data, status, headers) {
					$scope.adminList = data;
					$scope.hideSpinner = true;
					$scope.totalItems = headers('total-items');
				})
				.error(function() {
					$scope.showError = true;
					$scope.hideSpinner = true;
				});
	};
	
	$scope.remove = function(id) {
		adminService.remove(id)
				.success(function(data) {
					$scope.getAll();
					$scope.alerts.push({msg: 'Admin with ID ' + id + ' successufully deleted', type: 'success'});
				})
				.error(function() {
					$scope.alerts.push({msg: 'Error while deleting Admin with ID ' + id + '!', type: 'danger'});
				});
	};
	
	$scope.addEditHeading;
	
	$scope.initAddEditPage = function () {
		if ($routeParams.id) {
			$scope.addEditHeading = 'Edit';
		}
		else {
			$scope.addEditHeading = 'Add';
		}
	}
	
	$scope.getOne = function() {
		$scope.admin = {};
		if ($routeParams.id) {  // edit stranica
			adminService.getOne($routeParams.id)
					.success(function(data) {
						$scope.admin = data;
					})
					.error(function() {
						$scope.alerts.push({msg: 'Admin with ID ' + $routeParams.id + ' does not exist!', type: 'danger'});
					});
		}
	};
	
});


demoApp.controller('addEditAdminConfirmationController', function($scope, $uibModalInstance, adminService, admin) {
	
	$scope.admin = admin;
	
	$scope.confirm = function () {
		$scope.save();
	};

	$scope.revert = function () {
	    $uibModalInstance.dismiss();
	};
	
	$scope.save = function() {
		adminService.save($scope.admin)
				.success(function() {
					$uibModalInstance.close();
				})
				.error(function() {
					$uibModalInstance.dismiss();
				});
	};
	
});
demoApp.controller('MenuItemCategoryController', function($scope, $location, $routeParams, $uibModal,
	 menuItemCategoryService) {
	
	$scope.reverse = true;
	
	$scope.changeReverse = function() {
		$scope.menuItemCategoryList = $scope.menuItemCategoryList.slice().reverse();
	}
	
	$scope.maxSize = 5;
	
	$scope.open = function () {
		if(!$routeParams.if) {
		}
		var modalInstance = $uibModal.open({
			  animation: true,
		      templateUrl: 'myModalContent.html',
		      controller: 'addEditMenuItemCategoryConfirmationController',
		      size : 'sm',
		      resolve: {
		          menuItemCategory: function () {
		            return $scope.menuItemCategory;
		          }
		      }
		});	
		
		modalInstance.result.then(function () {
				$location.path('/menuItemCategoryList');
		    }, function () {
		});
		
	}
	
	$scope.alerts = [];
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
	
	$scope.getAll = function() {
		menuItemCategoryService.getAll($scope.search, $scope.page-1)
				.success(function(data, status, headers) {
					$scope.menuItemCategoryList = data;
					$scope.hideSpinner = true;
					$scope.totalItems = headers('total-items');
				})
				.error(function() {
					$scope.showError = true;
					$scope.hideSpinner = true;
				});
	};
	
	$scope.remove = function(id) {
		menuItemCategoryService.remove(id)
				.success(function(data) {
					$scope.getAll();
					$scope.alerts.push({msg: 'MenuItemCategory with ID ' + id + ' successufully deleted', type: 'success'});
				})
				.error(function() {
					$scope.alerts.push({msg: 'Error while deleting MenuItemCategory with ID ' + id + '!', type: 'danger'});
				});
	};
	
	$scope.addEditHeading;
	
	$scope.initAddEditPage = function () {
		if ($routeParams.id) {
			$scope.addEditHeading = 'Edit';
		}
		else {
			$scope.addEditHeading = 'Add';
		}
	}
	
	$scope.getOne = function() {
		$scope.menuItemCategory = {};
		if ($routeParams.id) {  // edit stranica
			menuItemCategoryService.getOne($routeParams.id)
					.success(function(data) {
						$scope.menuItemCategory = data;
					})
					.error(function() {
						$scope.alerts.push({msg: 'MenuItemCategory with ID ' + $routeParams.id + ' does not exist!', type: 'danger'});
					});
		}
	};
	
});


demoApp.controller('addEditMenuItemCategoryConfirmationController', function($scope, $uibModalInstance, menuItemCategoryService, menuItemCategory) {
	
	$scope.menuItemCategory = menuItemCategory;
	
	$scope.confirm = function () {
		$scope.save();
	};

	$scope.revert = function () {
	    $uibModalInstance.dismiss();
	};
	
	$scope.save = function() {
		menuItemCategoryService.save($scope.menuItemCategory)
				.success(function() {
					$uibModalInstance.close();
				})
				.error(function() {
					$uibModalInstance.dismiss();
				});
	};
	
});
demoApp.controller('MenuItemController', function($scope, $location, $routeParams, $uibModal,
	menuItemCategoryService, restaurantService,  menuItemService) {
	
	$scope.reverse = true;
	
	$scope.changeReverse = function() {
		$scope.menuItemList = $scope.menuItemList.slice().reverse();
	}
	
	$scope.maxSize = 5;
	
	$scope.open = function () {
		if(!$routeParams.if) {
		$scope.menuItem.menuItemCategory = JSON.parse($scope.menuItem.menuItemCategory);
		$scope.menuItem.restaurant = JSON.parse($scope.menuItem.restaurant);
		}
		var modalInstance = $uibModal.open({
			  animation: true,
		      templateUrl: 'myModalContent.html',
		      controller: 'addEditMenuItemConfirmationController',
		      size : 'sm',
		      resolve: {
		          menuItem: function () {
		            return $scope.menuItem;
		          }
		      }
		});	
		
		modalInstance.result.then(function () {
				$location.path('/menuItemList');
		    }, function () {
		});
		
	}
	
	$scope.alerts = [];
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
	
	$scope.getAll = function() {
		menuItemService.getAll($scope.search, $scope.page-1)
				.success(function(data, status, headers) {
					$scope.menuItemList = data;
					$scope.hideSpinner = true;
					$scope.totalItems = headers('total-items');
				})
				.error(function() {
					$scope.showError = true;
					$scope.hideSpinner = true;
				});
	};
	
	$scope.remove = function(id) {
		menuItemService.remove(id)
				.success(function(data) {
					$scope.getAll();
					$scope.alerts.push({msg: 'MenuItem with ID ' + id + ' successufully deleted', type: 'success'});
				})
				.error(function() {
					$scope.alerts.push({msg: 'Error while deleting MenuItem with ID ' + id + '!', type: 'danger'});
				});
	};
	
	$scope.addEditHeading;
	
	$scope.initAddEditPage = function () {
		if ($routeParams.id) {
			$scope.addEditHeading = 'Edit';
		}
		else {
			$scope.addEditHeading = 'Add';
		}
	}
	
	$scope.getOne = function() {
		$scope.menuItem = {};
			menuItemCategoryService.getAll()
				.success(function(data) {
						$scope.menuItemCategoryList = data;
					});
			restaurantService.getAll()
				.success(function(data) {
						$scope.restaurantList = data;
					});
		if ($routeParams.id) {  // edit stranica
			menuItemService.getOne($routeParams.id)
					.success(function(data) {
						$scope.menuItem = data;
					})
					.error(function() {
						$scope.alerts.push({msg: 'MenuItem with ID ' + $routeParams.id + ' does not exist!', type: 'danger'});
					});
		}
	};
	
});


demoApp.controller('addEditMenuItemConfirmationController', function($scope, $uibModalInstance, menuItemService, menuItem) {
	
	$scope.menuItem = menuItem;
	
	$scope.confirm = function () {
		$scope.save();
	};

	$scope.revert = function () {
	    $uibModalInstance.dismiss();
	};
	
	$scope.save = function() {
		menuItemService.save($scope.menuItem)
				.success(function() {
					$uibModalInstance.close();
				})
				.error(function() {
					$uibModalInstance.dismiss();
				});
	};
	
});
