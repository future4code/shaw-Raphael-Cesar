const meses:Array<{mes:string, numeroSimbolico:string}> = [
    {
        mes: 'Janeiro',
        numeroSimbolico: '01'
    },

    {
        mes: 'Fevereiro',
        numeroSimbolico: '02'
    },

    {
        mes: 'Março',
        numeroSimbolico: '03'
    },

    {
        mes: 'Abril',
        numeroSimbolico: '04'
    },

    {
        mes: 'Maio',
        numeroSimbolico: '05'
    },

    {
        mes: 'Junho',
        numeroSimbolico: '06'
    },

    {
        mes: 'Julho',
        numeroSimbolico: '07'
    },

    {
        mes: 'Agosto',
        numeroSimbolico: '08'
    },

    {
        mes: 'Setembro',
        numeroSimbolico: '09'
    },

    {
        mes: 'Outubro',
        numeroSimbolico: '10'
    },

    {
        mes: 'Novembro',
        numeroSimbolico: '11'
    },

    {
        mes: 'Dezembro',
        numeroSimbolico: '12'
    },
]

const imprimeMensagem = (nome:string, data:string):void => {
    const separaData = data.split('/')
    let nomeMes:string
    meses.forEach ((mes:{mes:string, numeroSimbolico:string}) =>{
       
       if(mes.numeroSimbolico === separaData[1]){
          nomeMes = mes.mes 
       }
        
    
})

console.log (`Olá me chamo ${nome}, nasci no dia ${separaData[0]} do mes de ${nomeMes} do ano de ${separaData[2]}`)

}

imprimeMensagem('Raphael', '08/09/1995')