<template>
  	<div>
		<footer id="myFooter">
	        <div class="social-networks">
	            <img src="https://camo.githubusercontent.com/1c7a5d19c2749509c3280b2aa3eb94644581b179/687474703a2f2f7777772e636961776e2e636f6d2e62722f696d616765732f6c6f676f2e706e67" width="140">
	        </div>
	        <div class="footer-copyright">
	            <p>2017 CiaWN Checkout - © License MIT </p>
	        </div>
	    </footer>
	</div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo-footer {
	padding-top: 50px;
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