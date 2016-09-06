package com.example.demo.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import com.example.demo.model.Restaurant;
import com.example.demo.web.dto.RestaurantDTO;

import com.example.demo.support.RestaurantBrandToRestaurantBrandDTO;
import com.example.demo.support.CityToCityDTO;

@Component
public class RestaurantToRestaurantDTO implements Converter<Restaurant, RestaurantDTO> {

	@Autowired
	private RestaurantBrandToRestaurantBrandDTO toRestaurantBrandDTO;
	@Autowired
	private CityToCityDTO toCityDTO;

	@Override
	public RestaurantDTO convert(Restaurant restaurant) {
		RestaurantDTO dto = new RestaurantDTO();
		
		dto.setId(restaurant.getId());
		dto.setStreetName(restaurant.getStreetName());
		dto.setStreetNumber(restaurant.getStreetNumber());
		dto.setGpsLatitude(restaurant.getGpsLatitude());
		dto.setGpsLongitude(restaurant.getGpsLongitude());
		dto.setRestaurantBrand(toRestaurantBrandDTO.convert(restaurant.getRestaurantBrand()));
		dto.setCity(toCityDTO.convert(restaurant.getCity()));
		return dto;
	}
	
	public List<RestaurantDTO> convert(List<Restaurant> restaurantList){
		List<RestaurantDTO> restaurantDTOList = new ArrayList<>();
		
		for(Restaurant restaurant : restaurantList){
			restaurantDTOList.add(convert(restaurant));
		}
		
		return restaurantDTOList;
	}
}
