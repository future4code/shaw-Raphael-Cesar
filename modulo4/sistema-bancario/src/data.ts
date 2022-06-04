type extrato={
    valor: number,
    data: string,
    descricao: string
}

type Usuario ={
    nome:string,
    cpf: string,
    nascimento: string,
    saldo: number,
    extrato: extrato[]
}

export const usuario:Usuario[] = [
    
]