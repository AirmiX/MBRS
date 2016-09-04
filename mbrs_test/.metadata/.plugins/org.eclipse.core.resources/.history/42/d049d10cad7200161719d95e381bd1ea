package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Table(name="restaurantbrand")
@Entity
public class RestaurantBrand extends AbstractBaseEntity { 
 
	@Column(name="name")
    private String name;
        
    @OneToMany(mappedBy="restaurantBrand",cascade=CascadeType.REMOVE)
	private List<Restaurant> restaurantsList = new ArrayList<Restaurant>();
        
	@ManyToOne(fetch=FetchType.LAZY)
    private Seller seller;
        

	public RestaurantBrand() {}

  	public String getName(){
    	return name;
  	}
  
  	public void setName(String name){
       	this.name = name;	
	}
      
  	public Seller getSeller(){
    	return seller;
  	}
  
  	public void setSeller(Seller seller){
       	this.seller = seller;	
	}
      

}




