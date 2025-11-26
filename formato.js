function formatarCPF(cpf) {
    if (!cpf) return '';
    // Converte para string e remove quaisquer caracteres não numéricos
    const cleanCpf = String(cpf).replace(/\D/g, '');
    
    if (cleanCpf.length === 11) {
        return cleanCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    return cleanCpf; // Retorna sem formatação se não tiver 11 dígitos
}

/**
 * @param {string|number} telefone
 * @returns {string}
 */
function formatarTelefone(telefone) {
    if (!telefone) return '';
    const cleanTel = String(telefone).replace(/\D/g, '');
    
    if (cleanTel.length === 11) {
        return cleanTel.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    if (cleanTel.length === 10) {
        return cleanTel.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    return cleanTel;
}

/**
 * Formata uma data para o formato DD/MM/AAAA.
 * @param {Date|string} data
 * @returns {string}
 */
function formatarDataNascimento(data) {
    if (!data) return '';
    
    let dateObj;
    
    if (data instanceof Date) {
        dateObj = data;
    } else {
        dateObj = new Date(data); 
    }
    
    // Verifica se a data é válida
    if (isNaN(dateObj)) {
        return String(data);
    }

    const dia = String(dateObj.getDate()).padStart(2, '0');
    const mes = String(dateObj.getMonth() + 1).padStart(2, '0'); 
    const ano = dateObj.getFullYear();
    
    return `${dia}/${mes}/${ano}`;
}

module.exports = {
    cpf: formatarCPF,
    telefone: formatarTelefone,
    dataNasc: formatarDataNascimento
}