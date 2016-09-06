package com.example.demo.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import com.example.demo.model.MenuItem;
import com.example.demo.web.dto.MenuItemDTO;

import com.example.demo.support.MenuItemCategoryToMenuItemCategoryDTO;
import com.example.demo.support.RestaurantToRestaurantDTO;

@Component
public class MenuItemToMenuItemDTO implements Converter<MenuItem, MenuItemDTO> {

	@Autowired
	private MenuItemCategoryToMenuItemCategoryDTO toMenuItemCategoryDTO;
	@Autowired
	private RestaurantToRestaurantDTO toRestaurantDTO;

	@Override
	public MenuItemDTO convert(MenuItem menuItem) {
		MenuItemDTO dto = new MenuItemDTO();
		
		dto.setId(menuItem.getId());
		dto.setName(menuItem.getName());
		dto.setDescription(menuItem.getDescription());
		dto.setPrice(menuItem.getPrice());
		dto.setMenuItemCategory(toMenuItemCategoryDTO.convert(menuItem.getMenuItemCategory()));
		dto.setRestaurant(toRestaurantDTO.convert(menuItem.getRestaurant()));
		return dto;
	}
	
	public List<MenuItemDTO> convert(List<MenuItem> menuItemList){
		List<MenuItemDTO> menuItemDTOList = new ArrayList<>();
		
		for(MenuItem menuItem : menuItemList){
			menuItemDTOList.add(convert(menuItem));
		}
		
		return menuItemDTOList;
	}
}
