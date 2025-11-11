// (Req 1.c)
document.addEventListener('DOMContentLoaded', () => {
    
    // Corrigido para 'contato-form' e 'validation-message'
    const contactForm = document.getElementById('contato-form');
    const validationMessage = document.getElementById('validation-message');

    // Verifica se os elementos existem antes de adicionar o listener
    if (contactForm && validationMessage) {
        contactForm.addEventListener('submit', (event) => {
            // Impede o envio padrão do formulário
            event.preventDefault();
            
            // Limpa mensagens de erro anteriores
            validationMessage.textContent = '';
            validationMessage.className = '';

            // (Req 1.a) Validação de E-mail
            const emailInput = document.getElementById('email');
            const email = emailInput.value;
            // Regex simples para o formato nome@dominio.com
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

            if (!emailRegex.test(email)) {
                validationMessage.textContent = 'Erro: Por favor, insira um e-mail válido (ex: nome@dominio.com).';
                validationMessage.className = 'error';
                emailInput.focus();
                return;
            }

            // (Req 1.b) Validação de CPF
            const cpfInput = document.getElementById('cpf');
            const cpf = cpfInput.value;
            // Regex para o formato 999.999.999-99
            const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

            if (!cpfRegex.test(cpf)) {
                validationMessage.textContent = 'Erro: Por favor, insira um CPF válido no formato 999.999.999-99.';
                validationMessage.className = 'error';
                cpfInput.focus();
                return;
            }

            // Se tudo for válido (substitui o alert)
            validationMessage.textContent = 'Formulário enviado com sucesso! (validação passou)';
            validationMessage.className = 'success';
            contactForm.reset(); // Limpa o formulário
        });
    }
});