package com.example.demo.web.dto;


public class CountryDTO extends AbstractBaseDTO { 

    private String name;

	public CountryDTO() {}

	public String getName(){
    	return name;
  	}
  
  	public void setName(String name){
       	this.name = name;	
	}	


}
