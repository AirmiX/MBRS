<h2>${class.name} List <span class="badge">{{totalItems}}</span></h2>

<table ng-init="page=1; getAll();" class="table table-hover">
	<thead>
		<tr>
			<#list properties as property>
				<#if property.upper == 1>  	
			<td>${property.name?cap_first}</td>
				</#if>
			</#list>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		<tr ng-repeat="${class.name?uncap_first} in ${class.name?uncap_first}List">
			<#list properties as property>
				<#if property.upper == 1>
					<#if property.association == false> 
			<td>{{ ${class.name?uncap_first}.${property.name} }}</td>			
					<#else>
			<td>{{ ${class.name?uncap_first}.${property.name}.name }}</td>	
					</#if>
			
				</#if>
			</#list>
			<td>
				<a class="btn btn-success btn-sm" href="/#/${class.name?uncap_first}List/{{ ${class.name?uncap_first}.id }}">view</a>
				<a class="btn btn-warning btn-sm" href="/#/${class.name?uncap_first}List/edit/{{ ${class.name?uncap_first}.id }}">edit</a>
				<button class="btn btn-danger btn-sm" ng-click="remove(${class.name?uncap_first}.id)">delete</button>
			</td>
		</tr>
	</tbody>
</table>

<div class="row text-center">
	<span ng-hide="hideSpinner" class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
	<span ng-show="showError" class="label label-danger">Ooops, something went wrong! :)</span>
</div>

<div class="row">
	<uib-pagination total-items="totalItems" items-per-page="5" ng-model="page" ng-click="getAll()" max-size="maxSize" class="pagination-sm" boundary-links="true"></uib-pagination>
</div>

<a href="/#/${class.name?uncap_first}List/add">Add new ${class.name}</a>

<div class = "row">	
	<uib-alert ng-repeat="alert in alerts" type="{{alert.type}}" close="closeAlert($index)">{{alert.msg}}</uib-alert>	
</div>	