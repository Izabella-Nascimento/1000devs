const calculaIdade = (req, res) => {
  const hoje = new Date(Date.now())
  const nascimento = new Date("2000-06-16")
  const idade = hoje.getFullYear() - nascimento.getFullYear()
  res.json({
    "nome": "Bella",
    "cidade": "Camacari",
    "profissao": "Programadora",
    "nascimento": "idade"
  })
}

module.exports = {
  calculaIdade
}