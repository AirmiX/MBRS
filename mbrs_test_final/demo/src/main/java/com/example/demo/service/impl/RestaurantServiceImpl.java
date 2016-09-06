package com.example.demo.service.impl;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.Restaurant;
import com.example.demo.repository.RestaurantRepository;
import com.example.demo.service.RestaurantService;


@Service
@Transactional
public class RestaurantServiceImpl implements RestaurantService {

	@Autowired
	private RestaurantRepository restaurantRepository;
	
	@Override
	public Restaurant findOne(Long id) {
		return restaurantRepository.findOne(id);
	}

	@Override
	public List<Restaurant> findAll() {
		return restaurantRepository.findAll();
	}
		
	@Override
	public Page<Restaurant> findAll(int page) {
		return restaurantRepository.findAll(new PageRequest(page, 5));
	}

	@Override
	public Restaurant save(Restaurant restaurant) {
		return restaurantRepository.save(restaurant);
	}
	
	public Restaurant remove(Long id) {
		Restaurant restaurant = restaurantRepository.findOne(id);
		if(restaurant == null){
			throw new IllegalArgumentException("Tried to delete"
					+ "non-existant Restaurant");
		}
		restaurantRepository.delete(restaurant);
		return restaurant;
	}
	
}
