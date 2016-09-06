package com.example.demo.web.dto;


public class RestaurantBrandDTO extends AbstractBaseDTO { 

    private String name;
    private SellerDTO seller;	

	public RestaurantBrandDTO() {}

	public String getName(){
    	return name;
  	}
  
  	public void setName(String name){
       	this.name = name;	
	}	

	public SellerDTO getSeller(){
    	return seller;
  	}
  
  	public void setSeller(SellerDTO seller){
       	this.seller = seller;	
	}	


}
