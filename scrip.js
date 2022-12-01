document.querySelector('#siguiente-paso').onclick = function(event){
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes= Number($cantidadIntegrantes.value);

    borrarAnteriores();
    crearIntegrantes();

    event.preventDefault();
    }

    