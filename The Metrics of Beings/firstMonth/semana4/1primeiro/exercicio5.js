const io = require('../io-lib/io')

io.write('Digite a idade: ')
let idade = io.read()
// let idadeAno = idade * 365
// let idadeMeses = idadeAno * 12
// let idadeDias = idadeMeses * 30
let idadeMeses = idade * 12
let idadeDias = idadeMeses * 30
io.write('A pessoa com essa idade viveu ' + idadeDias + ' dias')

/* CORREÇÃO DA PROFESSORA ⬇

const io = require('../../io-lib/io')

io.write('Digite os anos:')
const anos = io.readInt()
io.write('Digite os meses:')
const meses = io.readInt()
io.write('Digite os dias:')
const dias = io.readInt()

const idadeEmDias = (anos * 365) + (meses * 30) + dias

io.write('A idade em dias é: ' + idadeEmDias) */