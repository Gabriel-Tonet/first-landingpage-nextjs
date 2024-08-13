export class StringFormat {
  static removeMaskCPForCNPJ(number) {
    return number.replace(/(\.|\/|-)/g, '')
  }

  static removeMaskNumber(value) {
    return value.replace(/(\.|\/|-|\(|\))/g, '')
  }

  static formatPhone(phone) {
    const rawPhone = phone.replace(/\D/g, '')
    let newPhone = null
    newPhone = rawPhone
      .replace(/\D/g, '')
      .replace(/(\d{10,11})(.*)/g, '$1')
      .replace(/^(\d{2})(\d)/g, '($1)$2')

    const regex =
      rawPhone.length < 11
        ? /^(\(\d{2}\))(\d{4})(\d)/g
        : /^(\(\d{2}\))(\d{5})(\d)/g

    return newPhone.replace(regex, '$1 $2-$3')
  }

  static formatCPF(cpf) {
    let newCpf = cpf
    newCpf = newCpf.replace(/\D/g, '')
    newCpf = newCpf.replace(/(\d{3})(\d)/, '$1.$2')
    newCpf = newCpf.replace(/(\d{3})(\d)/, '$1.$2')
    newCpf = newCpf.replace(/(\d{3})(\d)/, '$1-$2')
    newCpf = newCpf.replace(/([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})(.*)/, '$1')
    return newCpf
  }

  static formatCNPJ(cnpj) {
    let newCnpj = cnpj
    newCnpj = newCnpj.replace(/\D/g, '')
    newCnpj = newCnpj.replace(/^(\d{2})(\d)/, '$1.$2')
    newCnpj = newCnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    newCnpj = newCnpj.replace(/\.(\d{3})(\d)/, '.$1/$2')
    newCnpj = newCnpj.replace(/(\d{4})(\d)/, '$1-$2')
    return newCnpj
  }

  static formatCEP(cep) {
    let newCep = cep
    newCep = newCep.replace(/\D/g, '')
    newCep = newCep.replace(/^(\d{2})(\d)/, '$1.$2')
    newCep = newCep.replace(/\.(\d{3})(\d)/, '$1-$2')
    return newCep
  }

  static formatarNumeroParaReais(numero) {
    if (numero) {
      return `R$ ${Number(numero).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    }
    return
  }

  static removeCentavos(valor) {
    // Primeiro, verifique se a string contém uma vírgula (caso contrário, não há centavos).
    if (valor?.includes(',')) {
      // Divida a string em duas partes: a parte inteira e a parte decimal.
      const partes = valor.split(',');

      // Use apenas a parte inteira e remova qualquer caractere não numérico.
      const parteInteira = partes[0].replace(/\D/g, '');

      // Recrie a string com apenas a parte inteira.
      return parteInteira;
    } else {
      // Se não houver vírgula na string, retorne a string original.
      return valor;
    }
  }

  static formatCurrency(currency) {
    let newCurrency = currency
    try {
      newCurrency = newCurrency.toString().replace('.', ',')
      if (newCurrency.toLocaleString().indexOf(',') >= 0) {
        return newCurrency
          .toString()
          .split(/(?=(?:\d{3})+(?:,|$))/g)
          .join('.')
      }

      return newCurrency
        .toString()
        .split(/(?=(?:\d{3})+(?:.|$))/g)
        .join(',')
    } catch (ex) {
      return 'erro'
    }
  }
}