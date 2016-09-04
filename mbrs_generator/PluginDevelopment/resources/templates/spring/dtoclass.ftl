package ${class.typePackage}.web.dto;


${class.visibility} class ${class.name}DTO extends AbstractBaseDTO { 

<#list properties as property>
	<#if property.upper == 1 >   
		<#if property.association == false>
    ${property.visibility} ${property.type} ${property.name};
    	<#else>
    ${property.visibility} ${property.type}DTO ${property.name};	
    	</#if>
    <#elseif property.upper == -1 > 
    	<#if property.association == false>
	${property.visibility} List<${property.type}> ${property.name} = new ArrayList<${property.type}>();
		</#if>
    <#else>   
    	<#list 1..property.upper as i>
  	${property.visibility} ${property.type} ${property.name}${i};
		</#list>  
    </#if>     
</#list>

	public ${class.name}DTO() {}

<#list properties as property>
	<#if property.upper == 1 >   
		<#if property.association == false>
	public ${property.type} get${property.name?cap_first}(){
    	return ${property.name};
  	}
  
  	public void set${property.name?cap_first}(${property.type} ${property.name}){
       	this.${property.name} = ${property.name};	
	}	
		<#else>
	public ${property.type}DTO get${property.name?cap_first}(){
    	return ${property.name};
  	}
  
  	public void set${property.name?cap_first}(${property.type}DTO ${property.name}){
       	this.${property.name} = ${property.name};	
	}	
		</#if>

    <#elseif property.upper == -1 >
    	<#if property.association == false>	
   	public Set<${property.type}> get${property.name?cap_first}(){
     	return ${property.name};
    }
      
   	public void set${property.name?cap_first}( Set<${property.type}> ${property.name}){
     	this.${property.name} = ${property.name};
   	}
    	</#if>
    <#else>   
    	<#list 1..property.upper as i>
   	public ${property.type} get${property.name?cap_first}${i}(){
   		return ${property.name}${i};
   	}
      
  	public void set${property.name?cap_first}${i}(${property.type} ${property.name}${i}){
     	this.${property.name}${i} = ${property.name}${i};
  	}
            
		</#list>  
    </#if>     
</#list>

}
