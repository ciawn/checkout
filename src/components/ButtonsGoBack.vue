<template>
	<div>
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
	</div>
</template>

<script>
export default {
  name: 'ButtonsGoBack',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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