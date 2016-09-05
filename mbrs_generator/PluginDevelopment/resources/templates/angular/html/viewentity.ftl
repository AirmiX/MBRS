<h2>View ${class.name}</h2>

<form ng-init="getOne()" class="form-horizontal">
	<#list properties as property>
		<#if property.upper == 1>
	<div class="form-group">
	    <label class="col-sm-2 control-label">${property.name?cap_first}</label>
	    <div class="col-sm-4">
			<#if property.association == false> 
			<input type="text" class="form-control" ng-model="${class.name?uncap_first}.${property.name}" disabled>
			<#else>
			<input type="text" class="form-control" ng-model="${class.name?uncap_first}.${property.name}.name" disabled>
			</#if>
		</div>	
	</div>
		</#if>
 	</#list>
</form>

<div class = "row">	
	<uib-alert ng-repeat="alert in alerts" type="{{alert.type}}" close="closeAlert($index)">{{alert.msg}}</uib-alert>	
</div>	