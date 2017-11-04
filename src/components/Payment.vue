<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-sm-12 margin-bottom-20">
					<div class="panel-body"> 
		                <h4>
		                	<span class="glyphicon glyphicon-envelope"></span><strong> MEUS DADOS</strong>
		                </h4>
		                <p>
		                	<b>Nome:</b> João do teste - 
		                	<b>Telefone: </b> (11) 9 4661-9809 - 
		                	<b>CPF: </b> 732.322.432-43 - 
		                	<b>E-mail: </b> joao.teste@gmail.com
		                </p>
		            </div>
		        </div>
				<div class="col-sm-4">
					<div class="panel-body"> 
		                <h4>
							<i class="fa fa-map-marker" aria-hidden="true"></i>
		                	<strong> ENTREGA</strong>
		                </h4>
		                <div class="form-group">
	                        <div class="col-xs-12 col-no-padding">
	                            <label for="cep">
	                                CEP
		                        </label>
		                        <input type="text" name="cep" class="form-control">
	                        </div>
	                        <div class="col-xs-6 col-no-padding padding-right">
	                            <label for="andress">
	                                Endereço
		                        </label>
		                        <input type="text" name="andress" class="form-control">
	                        </div>
	                        <div class="col-xs-6 col-no-padding">
	                            <label for="number">
	                                Número
		                        </label>
		                        <input type="text" name="number" class="form-control">
	                        </div>
	                        <div class="col-xs-12 col-no-padding">
	                            <label for="complement">
	                                Complemento
		                        </label>
		                        <input type="text" name="complement" class="form-control">
	                        </div>
	                        <div class="col-xs-6 col-no-padding padding-right">
	                            <label for="city">
	                                Cidade
		                        </label>
		                        <input type="text" name="city" class="form-control">
	                        </div>
	                        <div class="col-xs-6 col-no-padding">
	                            <label for="Estado">
	                                Estado
		                        </label>
		                        <input type="text" name="Estado" class="form-control">
	                        </div>	
	                        <div class="col-xs-12 col-no-padding">
	                            <label for="neighboohood">
	                                Bairro
		                        </label>
		                        <input type="text" name="neighboohood" class="form-control">
	                        </div>
	                        <div class="col-xs-12 col-no-padding">
				                <h4>
									<i class="glyphicon glyphicon-send" aria-hidden="true"></i>
				                	<strong> OPÇÕES DE ENTREGA</strong>
				                </h4>
							    <div class="funkyradio">
							        <div class="funkyradio-primary" onchange="selectShipping(1);">
							            <input type="radio" name="radio" id="radio1" />
							            <label for="radio1">
							            	<strong>SEDEX</strong> | R$ 15,90 | 1 - 3 dias úteis
							            </label>
							        </div>
							    </div>
							</div>
	                    </div>
					</div>
				</div>
				<div class="col-sm-4">
					<div class="panel-body">
						<h4>
							<i class="fa fa-credit-card-alt" aria-hidden="true"></i>
							<strong>PAGAMENTO</strong>
						</h4> 

						<form>
						    <div class="funkyradio">
						        <div class="funkyradio-primary card">
						            <input type="radio" name="card" id="card" />
						            <label for="card">
						            	<i class="fa fa-credit-card" aria-hidden="true"></i>
						            	<strong>Cartão de Crédito</strong>
						            </label>
						        </div>

						        <div class="funkyradio-primary bolet">
						            <input type="radio" name="bolet" id="bolet" />
						            <label for="bolet">
						            	<i class="fa fa-barcode" aria-hidden="true"></i>
						            	<strong>Pagar por boleto</strong>
						            </label>
						        </div>
						    </div>
						</form>

						<div class="card-info" showing="0" style="display:none;">
	                        <div class="col-xs-12 col-no-padding">
	                            <label for="number">
	                                Número Cartão
		                        </label>
								<input class="form-control" id="card_number" placeholder="Digite o Número do Cartão" type="text" name="number">
							</div>
	                        <div class="col-xs-12 col-no-padding">
	                            <label for="name">
	                            	Nome
		                        </label>
								<input class="form-control" id="card_holder_name" placeholder="Digite o nome igual está no Cartão" type="text" name="name">
							</div>
	                        <div class="col-xs-6 col-no-padding padding-right">
	                            <label for="expiry">
	                                Estado
		                        </label>
								<input class="form-control" placeholder="MM/YY" type="text" name="expiry">
							</div>
	                        <div class="col-xs-6 col-no-padding">
	                            <label for="cvv">
	                                CVV
		                        </label>
								<input class="form-control" id="card_cvv" placeholder="Código de segurança" type="text" name="cvv">
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm-4">
					<div class="panel-body">	
						<h4 style="margin-bottom: 25px;">
							<i class="fa fa-shopping-bag" aria-hidden="true"></i> <strong>PRODUTOS</strong>
						</h4>
				    	<div class="row item-row">
					        <div class="col-md-3">
					        	<img src="https://cdn2.awsli.com.br/1000x1000/302/302664/produto/15584979/0c6bb2ab08.jpg" height="80"> 
					        </div>
					        <div class="items col-md-4">
					        	CAMISETA INQUÉRITO SONHOS
					        </div>
					        <div class="items col-md-2">
					        	1
					        </div>
					        <div class="items col-md-2">
					        	<b>R$</b> 84,80
					        </div>
					    </div>
				    	<div class="row item-row">
					        <div class="col-md-3">
					        	<img src="https://cdn2.awsli.com.br/1000x1000/302/302664/produto/15584979/0c6bb2ab08.jpg" height="80"> 
					        </div>
					        <div class="items col-md-4">
					        	CAMISETA INQUÉRITO SONHOS
					        </div>
					        <div class="items col-md-2">
					        	1
					        </div>
					        <div class="items col-md-2">
					        	<b>R$</b> 84,80
					        </div>
					    </div>
				    	<div class="row item-row">
					        <div class="col-md-3">
					        	<img src="https://cdn2.awsli.com.br/1000x1000/302/302664/produto/15584979/0c6bb2ab08.jpg" height="80"> 
					        </div>
					        <div class="items col-md-4">
					        	CAMISETA INQUÉRITO SONHOS
					        </div>
					        <div class="items col-md-2">
					        	1
					        </div>
					        <div class="items col-md-2">
					        	<b>R$</b> 84,80
					        </div>
					    </div>
						<button type="button" class="btn btn-secondary btn-lg btn-success">
							<i class="fa fa-check" aria-hidden="true"></i>
							FECHAR COMPRA
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Payment',
  data () {
    return {}
  },
  methods: {
    loadCardForm () {
      console.log('oi')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-wrapper {
	margin-top: 15px;
	margin-bottom: 15px;
}
.col-no-padding {
	padding: 0px;
}
.margin-bottom-20 {
	margin-bottom: 20px;
}
.padding-right {
	padding-right: 5px;	
}
.panel-body {
    text-align: left;
    border: solid 1px #ccc;
    border-radius: 4px;
    -webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
}
input {
	margin-bottom: 15px;
	margin-top: 5px;
}
label {
	padding-top: 10px;
}
.btn-success {
	background-color: #1d671d;
    border-color: #1d671d;
    font-size: 18px;
    font-weight: 600;
}
.item-row {
	margin-bottom: 25px;
}
.btn-lg {
	border-radius: 0px;
	width: 100%;
	margin-top: 10px;
	margin-bottom: 10px;
}

.funkyradio div {
  clear: both;
  overflow: hidden;
}

.funkyradio label {
  width: 100%;
  border-radius: 3px;
  border: 1px solid #D1D3D4;
  font-weight: normal;
  padding: 0px;
}

.funkyradio i {
	margin-left: -40px;
}

.funkyradio input[type="radio"]:empty,
.funkyradio input[type="checkbox"]:empty {
  display: none;
}

.funkyradio input[type="radio"]:empty ~ label,
.funkyradio input[type="checkbox"]:empty ~ label {
  position: relative;
  line-height: 2.5em;
  text-indent: 3.25em;
  margin-top: 2em;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.funkyradio input[type="radio"]:empty ~ label:before,
.funkyradio input[type="checkbox"]:empty ~ label:before {
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  content: '';
  width: 2.5em;
  background: #D1D3D4;
  border-radius: 3px 0 0 3px;
}

.funkyradio input[type="radio"]:hover:not(:checked) ~ label,
.funkyradio input[type="checkbox"]:hover:not(:checked) ~ label {
  color: #888;
}

.funkyradio input[type="radio"]:hover:not(:checked) ~ label:before,
.funkyradio input[type="checkbox"]:hover:not(:checked) ~ label:before {
  content: '\2714';
  text-indent: .9em;
  color: #C2C2C2;
}

.funkyradio input[type="radio"]:checked ~ label,
.funkyradio input[type="checkbox"]:checked ~ label {
  color: #777;
}

.funkyradio input[type="radio"]:checked ~ label:before,
.funkyradio input[type="checkbox"]:checked ~ label:before {
  content: '\2714';
  text-indent: .9em;
  color: #333;
  background-color: #ccc;
}

.funkyradio input[type="radio"]:focus ~ label:before,
.funkyradio input[type="checkbox"]:focus ~ label:before {
  box-shadow: 0 0 0 3px #999;
}

.funkyradio-default input[type="radio"]:checked ~ label:before,
.funkyradio-default input[type="checkbox"]:checked ~ label:before {
  color: #333;
  background-color: #ccc;
}

.funkyradio-primary input[type="radio"]:checked ~ label:before,
.funkyradio-primary input[type="checkbox"]:checked ~ label:before {
  color: #fff;
  background-color: #337ab7;
}

.funkyradio-success input[type="radio"]:checked ~ label:before,
.funkyradio-success input[type="checkbox"]:checked ~ label:before {
  color: #fff;
  background-color: #5cb85c;
}

.funkyradio-danger input[type="radio"]:checked ~ label:before,
.funkyradio-danger input[type="checkbox"]:checked ~ label:before {
  color: #fff;
  background-color: #d9534f;
}

.funkyradio-warning input[type="radio"]:checked ~ label:before,
.funkyradio-warning input[type="checkbox"]:checked ~ label:before {
  color: #fff;
  background-color: #f0ad4e;
}

.funkyradio-info input[type="radio"]:checked ~ label:before,
.funkyradio-info input[type="checkbox"]:checked ~ label:before {
  color: #fff;
  background-color: #5bc0de;
}

</style>