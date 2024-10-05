export function Carro(formCadastro) {
  this.marca = formCadastro.marca.value;
  this.modelo = formCadastro.modelo.value;
  this.km = formCadastro.km.value;
  this.url_foto = formCadastro.url_foto.value;
  this.preco = formCadastro.preco.value;
  this.ano = formCadastro.ano.value;
}