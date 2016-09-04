package ${class.typePackage}.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ${class.typePackage}.model.${class.name};


@Repository
public interface ${class.name}Repository extends JpaRepository<${class.name}, Long> {

}
