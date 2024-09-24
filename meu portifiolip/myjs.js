function copyEmail() {
    // Seleciona o elemento que contém o e-mail
    var emailText = document.getElementById("emailText").innerText;
    
    // Cria um campo de texto temporário
    var tempInput = document.createElement("input");
    tempInput.style.position = "absolute";
    tempInput.style.left = "-9999px";
    tempInput.value = emailText;

    // Adiciona o campo ao body
    document.body.appendChild(tempInput);

    // Seleciona o texto e copia para a área de transferência
    tempInput.select();
    document.execCommand("copy");

    // Remove o campo de texto temporário
    document.body.removeChild(tempInput);

    // Exibe uma mensagem de sucesso
    alert("E-mail copiado: " + emailText);
}