<template>
  	<div>
		<div class="container">
			<div class="row">
		        <div class="col-xs-12">
		            <ul class="nav nav-pills nav-justified thumbnail setup-panel">
		                <li class="active">
		                  	<a href="#step-1">
		                    	<h4 class="list-group-item-heading">
		                    		<i class="fa fa-shopping-basket" aria-hidden="true"></i> 
		                    		Meu Carrinho
		                    	</h4>
		                	</a>
		                </li>
	                	<li>
	                  		<a href="#step-2">
		                    	<h4 class="list-group-item-heading">
		                    		<i class="fa fa-user-o" aria-hidden="true"></i>
		                    		Identificação
		                    	</h4>
	                  		</a>
	                	</li>
	                	<li>
	                  		<a href="#step-3">
		                    	<h4 class="list-group-item-heading">
		                    		<i class="fa fa-credit-card-alt" aria-hidden="true"></i>
		                    		Pagamento
		                    	</h4>
	                  		</a>
	                	</li>
	                	<li>
	                  		<a href="#step-4">
		                    	<h4 class="list-group-item-heading">
		                    		<i class="fa fa-check" aria-hidden="true"></i>
		                    		Confirmação
		                    	</h4>
	                  		</a>
	                	</li>
		            </ul>
		        </div>
			</div>


			<br>

		    <div class="row setup-content" id="step-1">
				<buttons-go-back></buttons-go-back>
		    	
		    	<list-items></list-items>
		    </div>
		    <div class="row setup-content" id="step-2">
		    	<identify></identify>
		    </div>
		    <div class="row setup-content" id="step-3"></div>
		    <div class="row setup-content" id="step-4"></div>


			<br>
		</div>

		<footer-component></footer-component>
  	</div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.setup-content {
	margin-right: 0px;
}
.items {
	padding-top: 30px;
}
.item-row {
	margin-bottom: 25px;
}
</style>
