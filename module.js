    console.log('Módulo importado')

    //async
    export function fetchDados() { 
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Executou')
        }, 3000)
    })
} 

    const dados = await fetchDados() // contexto do modulo
    console.log(dados)

    console.log('Fim do processamento')

/*
export async function aguardarPromessa() {
    console.log('Inicio do processamento')

    function fetchDados() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Executou')
            }, 3000)
        })
    }

    // aguardando o processamento
    // no contexto da função
    const dados = await fetchDados() 
    console.log(dados)
    console.log('Fim do processamento')
}

aguardarPromessa()
*/