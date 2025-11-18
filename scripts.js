document.addEventListener('DOMContentLoaded', ()=>{
  const modal = document.getElementById('sim-modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('modal-close');
  document.querySelectorAll('[data-sim]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const key = btn.getAttribute('data-sim');
      openSim(key);
    });
  });
  closeBtn.addEventListener('click', ()=> modal.classList.remove('show'));
  window.addEventListener('keydown', (e)=> { if(e.key==='Escape') modal.classList.remove('show'); });
  function openSim(key){
    modal.classList.add('show');
    if(key==='classroom'){
      modalBody.innerHTML = `<h3>Google Sala de Aula</h3><p>Link real: abrirá em nova aba. Código da turma: qvkmpmag<br><a href="https://classroom.google.com/c/NzgxMzM5NzEyMDkz?cjc=qvkmpmag" target="_blank">Abrir turma no Classroom</a></p>`;
    } else if(key==='form'){
      modalBody.innerHTML = `<h3>Formulário Diagnóstico</h3><p>Link real: <a href="https://docs.google.com/forms/d/1vp9jAWT1afKOz6fPF4q9ZVpcCXO2U5_OKd-UyVI7mbk/edit" target="_blank">Abrir Formulário</a></p>`;
    } else if(key==='miro'){
      modalBody.innerHTML = `<h3>Quadro Miro</h3><p>Link real: <a href="https://miro.com/app/board/uXjVJrUa2No=/" target="_blank">Abrir Miro</a></p>`;
    } else if(key==='Simulador_PhET'){
      modalBody.innerHTML = `<h3>Simulador PhET</h3><p>Link real: <a href="https://phet.colorado.edu/pt_BR/simulations/fractions-mixed-numbers" target="_blank">Abrir Simulador PhET - Frações: Números Mistos
</a></p>`;
    } else {
      modalBody.textContent = 'Simulação não disponível.';
    }
  }
});
