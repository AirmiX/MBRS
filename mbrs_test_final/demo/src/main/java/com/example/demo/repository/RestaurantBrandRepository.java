package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.RestaurantBrand;


@Repository
public interface RestaurantBrandRepository extends JpaRepository<RestaurantBrand, Long> {

}
