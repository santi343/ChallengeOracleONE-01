const cargarModal = (texto) => {
    const modalAtraccionCuerpo = document.getElementById("modalBody");
    modalAtraccionCuerpo.innerHTML = texto;
    let modal = new bootstrap.Modal(modalA);
    modal.show();
};

const checkTextUser = (text) => {
    return !text
        ? cargarModal("El Mensaje No puede estar vacio.")
        : /(\s{2})/.test(text)
        ? cargarModal("El Mensaje No debe tener dos o mas espacios en blanco seguidos.")
        : !/^[abcdefghijklmñnopqrstuvwxyz!.\s]*$/.test(text)
        ? cargarModal("Ingreso caracteres No validos.")
        : true;
};
