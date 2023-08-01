function addTask() {
  const Ingtareas = document.getElementById('Ingtareas');
  const DetalleTarea = Ingtareas.value;
  
  if (DetalleTarea === '') {
    return;
  }
  
  const ListaTareas = document.getElementById('tarea');
  const NuevaTarea = document.createElement('li');
  NuevaTarea.textContent = DetalleTarea;
  
  const completarBoton = document.createElement('button');
  completarBoton.textContent = 'Completar';
  completarBoton.addEventListener('click', function() {
    NuevaTarea.classList.toggle('completed');
  });
  
  const borrarBoton = document.createElement('button');
  borrarBoton.textContent = 'Eliminar';
  borrarBoton.addEventListener('click', function() {
    ListaTareas.removeChild(NuevaTarea);
  });
  
  NuevaTarea.appendChild(completarBoton);
  NuevaTarea.appendChild(borrarBoton);
  
  ListaTareas.appendChild(NuevaTarea);
  
  Ingtareas.value = '';
}
