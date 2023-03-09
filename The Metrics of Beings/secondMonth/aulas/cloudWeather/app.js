const field = document.getElementById('input')
//field.value = 'Nova Iguaçu'
const locals = []
const conditions = []

async function buscar(){
    locals.push(...(await (await fetch(`http://dataservice.accuweather.com/locations/v1/search?q=${field.value}&apikey=RTILAUMEASKAhXMGkVLeNniVv3gNmk0k`)).json()))

    const chave = locals[0].Key
    
   conditions.push(...(await (await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${chave}?apikey=RTILAUMEASKAhXMGkVLeNniVv3gNmk0k`)).json()))

    document.getElementById('city').innerHTML = `City: ${field.value}`

    document.getElementById('temperature').innerHTML =`Temperature: ${conditions[0].Temperature.Metric.Value}°C` 

    document.getElementById('description').innerHTML = `How is the weather? ${conditions[0].WeatherText}` 
    
    document.getElementById('date').innerHTML = `Today: ${new Date(conditions[0].LocalObservationDateTime).toLocaleDateString('pt-BR')}` 
    
}