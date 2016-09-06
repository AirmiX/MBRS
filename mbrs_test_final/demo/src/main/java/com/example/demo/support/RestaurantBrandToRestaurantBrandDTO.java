package com.example.demo.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import com.example.demo.model.RestaurantBrand;
import com.example.demo.web.dto.RestaurantBrandDTO;

import com.example.demo.support.SellerToSellerDTO;

@Component
public class RestaurantBrandToRestaurantBrandDTO implements Converter<RestaurantBrand, RestaurantBrandDTO> {

	@Autowired
	private SellerToSellerDTO toSellerDTO;

	@Override
	public RestaurantBrandDTO convert(RestaurantBrand restaurantBrand) {
		RestaurantBrandDTO dto = new RestaurantBrandDTO();
		
		dto.setId(restaurantBrand.getId());
		dto.setName(restaurantBrand.getName());
		dto.setSeller(toSellerDTO.convert(restaurantBrand.getSeller()));
		return dto;
	}
	
	public List<RestaurantBrandDTO> convert(List<RestaurantBrand> restaurantBrandList){
		List<RestaurantBrandDTO> restaurantBrandDTOList = new ArrayList<>();
		
		for(RestaurantBrand restaurantBrand : restaurantBrandList){
			restaurantBrandDTOList.add(convert(restaurantBrand));
		}
		
		return restaurantBrandDTOList;
	}
}
