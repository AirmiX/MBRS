package com.example.demo.web.dto;


public class MenuItemCategoryDTO extends AbstractBaseDTO { 

    private String name;

	public MenuItemCategoryDTO() {}

	public String getName(){
    	return name;
  	}
  
  	public void setName(String name){
       	this.name = name;	
	}	


}
