<template>
  	<div>
		<div class="container">
			<div class="row form-group">
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
			
			<div class="text-right">
				<button type="button" class="btn btn-primary btn-lg btn-warning">
					<i class="fa fa-arrow-left" aria-hidden="true"></i>
					CONTINUAR COMPRANDO
				</button>
				<button type="button" class="btn btn-secondary btn-lg btn-success">
					<i class="fa fa-check" aria-hidden="true"></i>
					FECHAR COMPRA
				</button>
			</div>

			<br>

		    <div class="row setup-content" id="step-1">
		    	<div class="row item-row">
			        <div class="col-md-2">
			        	<img src="https://cdn2.awsli.com.br/1000x1000/302/302664/produto/15584979/0c6bb2ab08.jpg" height="80"> 
			        </div>
			        <div class="items col-md-4">
			        	CAMISETA INQUÉRITO SONHOS
			        </div>
			        <div class="items col-md-2">
			        	<b>R$</b> 84,80
			        </div>
			        <div class="items col-md-1">
			        	<input type="number" name="quantity" class="form-control" />
			        </div>
			        <div class="items col-md-2">
			        	<b>R$</b> 84,80
			        </div>
			        <div class="items col-md-1">
						<button type="button" class="btn btn-danger">
							<i class="fa fa-remove" aria-hidden="true"></i>
						</button>
			        </div>
			    </div>
		    	<div class="row item-row">
			        <div class="col-md-2">
			        	<img src="https://cdn2.awsli.com.br/1000x1000/302/302664/produto/15584979/0c6bb2ab08.jpg" height="80"> 
			        </div>
			        <div class="items col-md-4">
			        	CAMISETA INQUÉRITO SONHOS
			        </div>
			        <div class="items col-md-2">
			        	<b>R$</b> 84,80
			        </div>
			        <div class="items col-md-1">
			        	<input type="number" name="quantity" class="form-control" />
			        </div>
			        <div class="items col-md-2">
			        	<b>R$</b> 84,80
			        </div>
			        <div class="items col-md-1">
						<button type="button" class="btn btn-danger">
							<i class="fa fa-remove" aria-hidden="true"></i>
						</button>
			        </div>
			    </div>
		    </div>
		    <div class="row setup-content" id="step-2"></div>
		    <div class="row setup-content" id="step-3"></div>
		    <div class="row setup-content" id="step-4"></div>

			<div class="text-right">
				<button type="button" class="btn btn-primary btn-lg btn-warning">
					<i class="fa fa-arrow-left" aria-hidden="true"></i>
					CONTINUAR COMPRANDO
				</button>
				<button type="button" class="btn btn-secondary btn-lg btn-success">
					<i class="fa fa-check" aria-hidden="true"></i>
					FECHAR COMPRA
				</button>
			</div>

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
.items {
	padding-top: 30px;
}
.item-row {
	margin-bottom: 25px;
}
.btn-lg {
    padding: 5px 20px;
    font-size: 18px;
    border-radius: 0px;
}
.btn-warning {
    background-color: #ff9600;
    border-color: #ff9600;
}
.btn-success {
	background-color: #1d671d;
    border-color: #1d671d;
}
.btn-lg {
	font-weight: 600;
}
</style>
