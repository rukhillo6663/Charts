const char1 = document.querySelector('#chat1')
const char2 = document.querySelector('#char2')
const dataWrapper = document.querySelector('.data-wrapper')
const BASE_URL = "https://datausa.io/api/data";
const QUERY_POPULATION = "?drilldowns=Nation&measures=Population";

async function  fetchFunc(){
    try{
        const response =  await fetch(BASE_URL.concat(QUERY_POPULATION))
        const datas = await response.json();
        const data= datas.data

        displayData(data);
    

        
    }
    catch{}
}
 function displayData(data){
    const arrayOfYears = [];
    const arrayOfPopulation= []
    data.forEach((singleData) => {
        const div = document.createElement('div')
        div.innerHTML = `${singleData.Population.toLocaleString()} - ${singleData.Year}`
        dataWrapper.appendChild(div)
        arrayOfPopulation.push(singleData.Population);
        arrayOfYears.push(singleData.Year)
    })
} 
fetchFunc()
function displayChart(year, population){
    //Data Obj
    const data ={
        labels: year,
        dataset:[{
            label:'Population is US',
            data:population,
            borderColor:'black',
            backgroundColor:'black',
        }]
    }


}