class Pessoa {
  nome
  dataNascimento
  cpf

  constructor(nome, dataNascimento, cpf) {
    this.nome = nome
    this.dataNascimento = dataNascimento
    this.cpf = cpf
  }

  calcularIdade() {
    const hoje = new Date()
    const idade = hoje.getFullYear() - this.dataNascimento.getFullYear()
    return idade
  }
}

class Aluno extends Pessoa {
  matricula
  turma
}

class Professor extends Pessoa {
  valorHora
  turmas = []

  constructor(nome, dataNascimento, cpf, valorHora) {
    super(nome, dataNascimento, cpf)
    this.valorHora = valorHora
    this.turmas = []
  }

  confereTurma(turma) {
    if (this.turmas.includes(turma)) {
      return "O professor leciona nesta turma."
    }
    return "O professor não leciona nesta turma."
  }

  adicionarTurma(turma) {
    this.turmas.push(turma)
  }

  printaNome() {
    console.log("O nome do professor é ", this.nome)
  }
}

class Turma {
  identificador
  alunos
  professor

  constructor(identificador, alunos, professor) {
    this.identificador = identificador
    this.alunos = alunos
    this.professor = professor
  }
}

const aluno1 = new Pessoa(
  "Aluno1",
  new Date("1994-04-05T00:00:00"),
  "11111111111"
)

const aluno2 = new Pessoa(
  "Aluno2",
  new Date("1994-04-05T00:00:00"),
  "11111111111"
)

const aluno3 = new Pessoa(
  "Aluno3",
  new Date("1994-04-05T00:00:00"),
  "11111111111"
)

const professor = new Professor(
  "Alberto",
  new Date("1994-04-05T00:00:00"),
  "11111111111",
  58
)

const turma = new Turma("3-2022", [aluno1, aluno2, aluno3], professor)

professor.adicionarTurma(turma)
console.log(professor.confereTurma(turma))
