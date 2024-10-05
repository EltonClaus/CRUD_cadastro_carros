import { carrosService } from '../services/carros-service.js';

export function templateCardCarro(carro) {
  return ` 
  <div class="carro">
      <h2>${carro.marca} ${carro.modelo} ${carro.ano}</h2>
      <img
        width="400" 
        src="${carro.url_foto}"
        alt="${carro.marca} ${carro.modelo}"
      >
      <div>
          <p>KM: ${carro.km.replace(/(\d[0-9]{1,3})(\d{3})/, '$1.$2')}</p>
          <p>Valor: R$${carro.preco.replace(/(\d[0-9]{1,3})(\d{3})/, '$1.$2')}</p>
      </div>
      <div>
        <button onclick="editarCarro(${carro.id})">Editar</button>
        <button onclick="excluirCarro(${carro.id})">Excluir</button>
      </div>
  </div>
  `;
}

window.editarCarro = (id) => {
  window.location.href = `editar.html?id=${id}`;
};

window.excluirCarro = (id) => {
  if( window.confirm('Deseja mesmo excluir esta carro?')) {
    carrosService.deletarCarro(id)
  }
}
