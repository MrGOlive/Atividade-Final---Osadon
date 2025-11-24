function formatarCPF(cpf) {
    if (!cpf) return '';
    // Converte para string e remove quaisquer caracteres não numéricos
    const cleanCpf = String(cpf).replace(/\D/g, '');
    
    // Aplica a máscara: 111.222.333-44
    if (cleanCpf.length === 11) {
        return cleanCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    return cleanCpf; // Retorna sem formatação se não tiver 11 dígitos
}

/**
 * Formata um número de telefone (apenas números) para o formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX.
 * @param {string|number} telefone - O número de telefone como string ou número.
 * @returns {string} O telefone formatado.
 */
function formatarTelefone(telefone) {
    if (!telefone) return '';
    const cleanTel = String(telefone).replace(/\D/g, '');
    
    // Aplica a máscara: (XX) 9XXXX-XXXX (11 dígitos)
    if (cleanTel.length === 11) {
        return cleanTel.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    // Aplica a máscara: (XX) XXXX-XXXX (10 dígitos - geralmente fixo)
    if (cleanTel.length === 10) {
        return cleanTel.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    return cleanTel;
}

/**
 * Formata uma data para o formato DD/MM/AAAA.
 * @param {Date|string} data - A data de nascimento (pode ser um objeto Date ou string de data).
 * @returns {string} A data formatada.
 */
function formatarDataNascimento(data) {
    if (!data) return '';
    
    let dateObj;
    
    // Tenta criar um objeto Date.
    if (data instanceof Date) {
        dateObj = data;
    } else {
        // Tenta parsear strings como "Sat Jan 01 2000 00:00:00 GMT-0200"
        dateObj = new Date(data); 
    }
    
    // Verifica se a data é válida
    if (isNaN(dateObj)) {
        return String(data); // Retorna a string original se for inválida
    }

    // Garante que pegamos o dia, mês e ano no fuso horário local da data
    const dia = String(dateObj.getDate()).padStart(2, '0');
    // Os meses são base 0, por isso adicionamos 1
    const mes = String(dateObj.getMonth() + 1).padStart(2, '0'); 
    const ano = dateObj.getFullYear();
    
    return `${dia}/${mes}/${ano}`;
}

module.exports = {
    cpf: formatarCPF,
    telefone: formatarTelefone,
    dataNasc: formatarDataNascimento
}