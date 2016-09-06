package com.example.demo.web.dto;


public class RestaurantDTO extends AbstractBaseDTO { 

    private String streetName;
    private int streetNumber;
    private double gpsLatitude;
    private double gpsLongitude;
    private RestaurantBrandDTO restaurantBrand;	
    private CityDTO city;	

	public RestaurantDTO() {}

	public String getStreetName(){
    	return streetName;
  	}
  
  	public void setStreetName(String streetName){
       	this.streetName = streetName;	
	}	

	public int getStreetNumber(){
    	return streetNumber;
  	}
  
  	public void setStreetNumber(int streetNumber){
       	this.streetNumber = streetNumber;	
	}	

	public double getGpsLatitude(){
    	return gpsLatitude;
  	}
  
  	public void setGpsLatitude(double gpsLatitude){
       	this.gpsLatitude = gpsLatitude;	
	}	

	public double getGpsLongitude(){
    	return gpsLongitude;
  	}
  
  	public void setGpsLongitude(double gpsLongitude){
       	this.gpsLongitude = gpsLongitude;	
	}	

	public RestaurantBrandDTO getRestaurantBrand(){
    	return restaurantBrand;
  	}
  
  	public void setRestaurantBrand(RestaurantBrandDTO restaurantBrand){
       	this.restaurantBrand = restaurantBrand;	
	}	

	public CityDTO getCity(){
    	return city;
  	}
  
  	public void setCity(CityDTO city){
       	this.city = city;	
	}	


}
