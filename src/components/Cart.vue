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

		<footer id="myFooter">
	        <div class="container">
	            <div class="row">
	                <div class="col-sm-3 myCols">
	                    <h5>Get started</h5>
	                    <ul>
	                        <li><a href="#">Home</a></li>
	                        <li><a href="#">Sign up</a></li>
	                        <li><a href="#">Downloads</a></li>
	                    </ul>
	                </div>
	                <div class="col-sm-3 myCols">
	                    <h5>About us</h5>
	                    <ul>
	                        <li><a href="#">Company Information</a></li>
	                        <li><a href="#">Contact us</a></li>
	                        <li><a href="#">Reviews</a></li>
	                    </ul>
	                </div>
	                <div class="col-sm-3 myCols">
	                    <h5>Support</h5>
	                    <ul>
	                        <li><a href="#">FAQ</a></li>
	                        <li><a href="#">Help desk</a></li>
	                        <li><a href="#">Forums</a></li>
	                    </ul>
	                </div>
	                <div class="col-sm-3 myCols">
	                    <h5>Legal</h5>
	                    <ul>
	                        <li><a href="#">Terms of Service</a></li>
	                        <li><a href="#">Terms of Use</a></li>
	                        <li><a href="#">Privacy Policy</a></li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	        <div class="social-networks">
	            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
	            <a href="#" class="facebook"><i class="fa fa-facebook-official"></i></a>
	            <a href="#" class="google"><i class="fa fa-google-plus"></i></a>
	        </div>
	        <div class="footer-copyright">
	            <p>© 2017 CiaWN Checkout - License MIT </p>
	        </div>
	    </footer>
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
#myFooter {
	background-color: #373a48;
	color:white;
	margin-top: 60px;
}

#myFooter .footer-copyright{
	background-color: #383737;
	padding-top:3px;
	padding-bottom:3px;
	text-align: center;
}

#myFooter .footer-copyright p{
	margin:10px;
	color: #ccc;
}

#myFooter ul{
	list-style-type: none;
    padding-left: 0;
    line-height: 1.7;

}

#myFooter h5{
	font-size: 18px;
    color: white;
    font-weight: bold;
    margin-top: 30px;
}

#myFooter a{
	color:#d2d1d1;
	text-decoration: none;
}

#myFooter a:hover, #myFooter a:focus{
	text-decoration: none;
	color:white;
}

#myFooter .myCols{
	text-align: center;
}

#myFooter .social-networks{
	text-align: center;
	padding-top: 30px;
	padding-bottom: 38px;
}

#myFooter .social-networks a{
    font-size: 32px;
    margin-right: 5px;
    margin-left: 5px;
    color: #f9f9f9;
    padding: 10px;
    transition: 0.2s;
}

#myFooter .social-networks a:hover{
	text-decoration: none;

}

#myFooter .facebook:hover{
	color:#0077e2;
}

#myFooter .google:hover{
	color:#ef1a1a;
}

#myFooter .twitter:hover{
	color: #00aced;
}

@media screen and (max-width: 767px){
	#myFooter {
		text-align: center;
	}
}



/* CSS used for positioning the footers at the bottom of the page. */
/* You can remove this. */


html{
	height: 100% !important;
}

body{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    height: 100%;
}

.content{
	flex: 1 0 auto;
	-webkit-flex: 1 0 auto;
	min-height: 200px;
}

#myFooter{
	flex: 0 0 auto;
    -webkit-flex: 0 0 auto;
}
</style>
