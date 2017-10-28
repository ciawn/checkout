<template>
	<div class="items">
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
</template>

<script>
export default {
  name: 'ListItems',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.items {
	padding-top: 15px;
	padding-bottom: 15px;
	padding-top: 30px;
}
.item-row {
	margin-bottom: 25px;
}
</style>