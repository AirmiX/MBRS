package com.example.demo.web.dto;


public class CityDTO extends AbstractBaseDTO { 

    private String name;
    private CountryDTO country;	

	public CityDTO() {}

	public String getName(){
    	return name;
  	}
  
  	public void setName(String name){
       	this.name = name;	
	}	

	public CountryDTO getCountry(){
    	return country;
  	}
  
  	public void setCountry(CountryDTO country){
       	this.country = country;	
	}	


}
