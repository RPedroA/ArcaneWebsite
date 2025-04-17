function switchContent(element) {
    const videoSrc = element.getAttribute('data-video');
    const title = element.getAttribute('data-title');
    const ability = element.getAttribute('data-ability');
    const description = element.getAttribute('data-description');

    const videoElement = document.getElementById('video');
    videoElement.src = videoSrc;
    videoElement.play();

    document.getElementById('content-title').innerText = title;
    document.getElementById('ability-type').innerText = ability;
    document.getElementById('content-description').innerText = description;

    // Change the active icon
    const activeElement = document.querySelector('.icon-container img.active');
    if (activeElement) {
        activeElement.src = activeElement.getAttribute('data-inactive-img');
        activeElement.classList.remove('active');
    }

    element.src = element.getAttribute('data-active-img');
    element.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    var myToast = new bootstrap.Toast(document.getElementById('myToast'), {
        delay: 5000
    });
    myToast.show();
});

function validateEmail() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const selectedOption = document.querySelector('input[name="opcao"]:checked');

    if (!selectedOption) {
        alert('Por favor, selecione uma opção de voto.');
        return;
    }

    if (emailPattern.test(email)) {
        emailInput.classList.remove('is-invalid');
        // Close the current modal
        var modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
        modal.hide();
        // Show confirmation modal
        var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
        confirmationModal.show();
    } else {
        emailInput.classList.add('is-invalid');
        alert('Por favor, insira um endereço de email válido.');
        emailInput.focus();
    }
}
