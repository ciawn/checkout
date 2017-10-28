<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-sm-5">
					<div class="panel-body">
			            <form>
			                <h4>
			                	<span class="glyphicon glyphicon-envelope"></span><strong> JÁ SOU CLIENTE</strong>
			                </h4>
		                    <div class="form-group">
		                        <label for="login_email">E-mail</label>
		                        <input type="text" class="form-control" placeholder="E-mail">
		                    </div>
		                    <div class="form-group">
		                        <label for="login_senha">Senha</label>
		                        <input type="password" class="form-control" placeholder="Senha">
		                    </div>
		                    <div class="form-group">
		                        <div class="row">
		                            <div class="col-sm-6 col-sm-offset-3">
		                                <input type="submit" class="form-control btn btn-success" value="ENTRAR">
		                            </div>
		                        </div>
		                    </div>
		                    <div class="form-group">
		                        <div class="row">
		                            <div class="col-lg-12">
		                                <div class="text-center">
		                                    <a href="javascript:esqueci_minha_senha('a');" class="forgot-password">Esqueceu sua senha?</a>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
			            </form>
			        </div>
				</div>
				<div class="col-sm-7">
					<div class="panel-body">
			            <form>
			                <h4>
			                	<i class="fa fa-user-o" aria-hidden="true"></i><strong> NOVO CADASTRO</strong>
			                </h4>
			                <div class="form-group">
		                        <div class="col-xs-6">
		                            <label for="firstname">
		                                Nome
			                        </label>
			                        <input type="text" name="firstname" class="form-control">
		                        </div>
		                        <div class="col-xs-6">
		                            <label for="lastname">
		                                Sobrenome
			                        </label>
			                        <input type="text" name="lastname" class="form-control">
		                        </div>
		                    </div>
		                    <div class="form-group">
		                        <div class="col-xs-12">
		                            <label for="lastname">
		                                E-mail
			                        </label>
			                        <input type="text" name="lastname" class="form-control">
		                        </div>
		                    </div>
			                <div class="form-group">
		                        <div class="col-xs-6">
		                            <label for="document">
		                                CPF
			                        </label>
			                        <input type="text" name="document" class="form-control">
		                        </div>
		                        <div class="col-xs-6">
		                            <label for="lastname">
		                                Data de Nascimento
			                        </label>
			                        <input type="text" name="nascimento" class="form-control">
		                        </div>
		                    </div>
			                <div class="form-group">
		                        <div class="col-xs-6">
		                            <label for="password">
		                                Senha
			                        </label>
			                        <input type="text" name="password" class="form-control">
		                        </div>
		                        <div class="col-xs-6">
		                            <label for="confirm_password">
		                                Confirmar Senha
			                        </label>
			                        <input type="text" name="confirm_password" class="form-control">
		                        </div>
		                    </div>
		                    <div class="form-group">
		                        <div class="row">
		                            <div class="col-sm-6 col-sm-offset-3">
		                                <input type="submit" class="form-control btn btn-success" value="CADASTRAR	">
		                            </div>
		                        </div>
		                    </div>
			            </form>
					</div>
				</div>
			</div>
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
</style>