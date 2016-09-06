package com.example.demo.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import com.example.demo.model.Restaurant;
import com.example.demo.service.RestaurantService;
import com.example.demo.web.dto.RestaurantDTO;

import com.example.demo.support.RestaurantBrandDTOToRestaurantBrand;
import com.example.demo.support.CityDTOToCity;

@Component
public class RestaurantDTOToRestaurant
	implements Converter<RestaurantDTO, Restaurant> {
	
	@Autowired
	private RestaurantBrandDTOToRestaurantBrand toRestaurantBrand;
	@Autowired
	private CityDTOToCity toCity;
	
	@Autowired
	RestaurantService restaurantService;

	@Override
	public Restaurant convert(RestaurantDTO dto) {
		Restaurant restaurant = new Restaurant();
		
		if(dto.getId()!=null){
			restaurant = restaurantService.findOne(dto.getId());
			
			if(restaurant == null){
				throw new IllegalStateException("Tried to "
						+ "modify a non-existant restaurant");
			}
		}
		
		restaurant.setId(dto.getId());
		
	    restaurant.setStreetName(dto.getStreetName());
	    restaurant.setStreetNumber(dto.getStreetNumber());
	    restaurant.setGpsLatitude(dto.getGpsLatitude());
	    restaurant.setGpsLongitude(dto.getGpsLongitude());
		restaurant.setRestaurantBrand(toRestaurantBrand.convert(dto.getRestaurantBrand()));
		restaurant.setCity(toCity.convert(dto.getCity()));
		
		
		return restaurant;
	}
	
	public List<Restaurant> convert (List<RestaurantDTO> restaurantDTOList){
		List<Restaurant> restaurantList = new ArrayList<>();
		
		for(RestaurantDTO dto : restaurantDTOList){
			restaurantList.add(convert(dto));
		}
		
		return restaurantList;
	}

}