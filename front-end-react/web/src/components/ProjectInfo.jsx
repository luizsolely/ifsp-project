import React from 'react'

const ProjectInfo = () => {
  return (
    <div id='project-info-card'>
        <h1 id='project-info-title'>REACT + EXPRESS</h1>
        <h4 id='project-info-subtitle'>PROJETO FEITO POR:</h4>
        <ul className='integrants-list'>
            <li className='integrant'>André Luiz Nascimento de Andrade<span>CB3032256</span></li>
            <li className='integrant'>Auan Julio Galvão dos Santos<span>CB3030369</span></li>
            <li className='integrant'>Geovanna Barros de Asssunção<span>CB303271X</span></li>
            <li className='integrant'>Luiz Felipe Gonçalves da Silva<span>CB3030539</span></li>
            <li className='integrant'>João do Valle Paula Seixas<span>CB3030784</span></li>
            <li className='integrant'>Paulo Eduardo da Silva Pessoa<span>CB303092X</span></li>
        </ul>
        <p>Aplicação feita com o uso de:<br />React + Vite< br/>Node v22.11.0<br />Express v4.21.1</p>
        <p>Ferramenta de avaliação da disciplina de Desenvolvimento Web Avançado <br />Professor Eduardo Henrique Gomes</p>
    </div>
  )
}

export default ProjectInfo