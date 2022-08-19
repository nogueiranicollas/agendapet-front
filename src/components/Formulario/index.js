import './Formulario.css'
import CampoTexto from '../CampoTexto'


const Formulario = () => {
  return(
  <section className='Formulario'>
    <form >
        <h2>Agende agora o atendimento do seu pet! <img src='/imagens/patinha.png' height='20px' alt='Imagem da Patinha'></img></h2>
      <CampoTexto 
        label = 'Nome'
        placeholder = 'Digite seu nome'
      />
      <CampoTexto 
        label = 'Pet'
        placeholder = 'Nome do seu Amiguinho'
      />
      <CampoTexto 
        label = 'Serviço'
        placeholder = 'Escolha seu serviço'
      />
      <CampoTexto 
        label = 'Status'
        placeholder = 'Agendado'
      />
    </form>
  </section>
  )
}

export default Formulario