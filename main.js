// Goal: Use NASA's API to return all of their facility locations (~400). Display the name of the facility, its location, and the weather at the facility currently. 
// (~400) - about 400 location. 
const apiKey = '60965920fc34fc9095a34f849517505a'
document.querySelector('button').addEventListener('click',locateG)

function locateG(){
fetch(`https://data.nasa.gov/resource/gvk9-iz74.json`)
 .then(res => res.json())
 .then((data) => {
  console.log(data)
  
  for(let i = 0 ; i < 400 ; i++){

    let lat = data[i].location.latitude
    let lon = data[i].location.longitude
    let facility = data[i].facility
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
    .then(res => res.json())
    .then((info) => {
      console.log(info)
       let text = document.createElement('p')
       text.innerText = `it is ${info.main.temp} in ${facility}`
       document.querySelector('.location').appendChild(text)



      //document.querySelector('p').innerText = `it is ${info.main.temp} in ${facility}` REMEMBER

    })

  }
 })

}