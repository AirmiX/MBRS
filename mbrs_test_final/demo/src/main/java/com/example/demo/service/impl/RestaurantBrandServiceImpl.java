package com.example.demo.service.impl;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.RestaurantBrand;
import com.example.demo.repository.RestaurantBrandRepository;
import com.example.demo.service.RestaurantBrandService;


@Service
@Transactional
public class RestaurantBrandServiceImpl implements RestaurantBrandService {

	@Autowired
	private RestaurantBrandRepository restaurantBrandRepository;
	
	@Override
	public RestaurantBrand findOne(Long id) {
		return restaurantBrandRepository.findOne(id);
	}

	@Override
	public List<RestaurantBrand> findAll() {
		return restaurantBrandRepository.findAll();
	}
		
	@Override
	public Page<RestaurantBrand> findAll(int page) {
		return restaurantBrandRepository.findAll(new PageRequest(page, 5));
	}

	@Override
	public RestaurantBrand save(RestaurantBrand restaurantBrand) {
		return restaurantBrandRepository.save(restaurantBrand);
	}
	
	public RestaurantBrand remove(Long id) {
		RestaurantBrand restaurantBrand = restaurantBrandRepository.findOne(id);
		if(restaurantBrand == null){
			throw new IllegalArgumentException("Tried to delete"
					+ "non-existant RestaurantBrand");
		}
		restaurantBrandRepository.delete(restaurantBrand);
		return restaurantBrand;
	}
	
}
