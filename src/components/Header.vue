<template>
	<div>
	    <nav class="navbar navbar-default">
	      <div class="container">
        	<div class="row">
				<div class="col-sm-6">
		          <a class="navbar-brand" href="#">
		            <img src="https://camo.githubusercontent.com/1c7a5d19c2749509c3280b2aa3eb94644581b179/687474703a2f2f7777772e636961776e2e636f6d2e62722f696d616765732f6c6f676f2e706e67" width="120">
		          </a>
		        </div>
	          
	          	<div class="col-sm-6 text-right">
	          		<i class="fa fa-arrow-left" aria-hidden="true"></i>
	          	</div>
	        </div>
	      </div>
	    </nav>
	</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
	height: 100px;
    border: 0px;
    border-radius: 0px;
    padding-top: 7px;
}
.fa-arrow-left {
	font-size: 26px;
    margin: 30px 10px;
}
</style>