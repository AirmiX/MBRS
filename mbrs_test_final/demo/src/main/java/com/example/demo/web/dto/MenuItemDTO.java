package com.example.demo.web.dto;


public class MenuItemDTO extends AbstractBaseDTO { 

    private String name;
    private String description;
    private double price;
    private MenuItemCategoryDTO menuItemCategory;	
    private RestaurantDTO restaurant;	

	public MenuItemDTO() {}

	public String getName(){
    	return name;
  	}
  
  	public void setName(String name){
       	this.name = name;	
	}	

	public String getDescription(){
    	return description;
  	}
  
  	public void setDescription(String description){
       	this.description = description;	
	}	

	public double getPrice(){
    	return price;
  	}
  
  	public void setPrice(double price){
       	this.price = price;	
	}	

	public MenuItemCategoryDTO getMenuItemCategory(){
    	return menuItemCategory;
  	}
  
  	public void setMenuItemCategory(MenuItemCategoryDTO menuItemCategory){
       	this.menuItemCategory = menuItemCategory;	
	}	

	public RestaurantDTO getRestaurant(){
    	return restaurant;
  	}
  
  	public void setRestaurant(RestaurantDTO restaurant){
       	this.restaurant = restaurant;	
	}	


}
