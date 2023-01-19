const faturamentos = {
    'sp': 67836.43,
    'rj': 36768.66,
    'mg': 29229.88,
    'es': 27165.48,
    'outros': 19849.53
}

const getTotal = () => {
    let totalBilling = 0
    for(let estado in faturamentos){
        let billing = faturamentos[estado]
        totalBilling+=billing
    }
    return totalBilling
}

for(let estado in faturamentos){
    let billing = faturamentos[estado]
    let totalBilling = getTotal()
    
    let percentage = Math.round((billing / totalBilling) * 100)
    console.log(`${estado.toUpperCase()}: ${percentage}%`)

}
