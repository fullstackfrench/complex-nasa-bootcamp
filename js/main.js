
    fetch("https://data.nasa.gov/resource/gvk9-iz74.json")
    .then(response => response.json())
    .then(data => {

        data.forEach((item) => { 
            // console.log(item)
            // console.log(item.facility)
            // console.log(`${item.city}, ${item.state}`)
            // console.log(item.location.latitude)
            // console.log(item.location.longitude)
            const facilityTemp = document.querySelector('.facilityTemp')
            const ul = document.createElement('ul')
            const liFacility = document.createElement('li')
            const liLocation = document.createElement('li')
            const liTemperature = document.createElement('li')

            liFacility.innerText = item.facility
            liLocation.innerText = `${item.city}, ${item.state}`

            
            fetch(`http://api.weatherapi.com/v1/current.json?key=a2b9c022fba14559b3e174034241710&q=${item.location.latitude},${item.location.longitude}&aqi=no`)
            .then(response => response.json())
            .then(dataTwo => {
                console.log(dataTwo)
                console.log(dataTwo.current.temp_f)

                liTemperature.innerText = dataTwo.current.temp_f

                facilityTemp.appendChild(ul)
                ul.appendChild(liFacility)
                ul.appendChild(liLocation)
                ul.appendChild(liTemperature)
                
                // console.log(dataTwo.main.temp)
                // let temperature = dataTwo.main.temp
                // temperature = Math.round((temperature - 273.15) * 1.8 + 32)
                // console.log(temperature)
                // document.querySelector('h2').innerText = temperature
            })
            .catch(err => {
                console.log(`error ${err}`)
            }) 
        })


    
        // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${item.location.latitude}&lon=${item.location.latitude}&appid=f533d736867e80b8ca476c54bef1ba65`)
        //     .then(response => response.json())
        //     .then(dataTwo => {
        //         console.log(dataTwo)
        //         console.log(dataTwo.main.temp)
        //         let temperature = dataTwo.main.temp
        //         temperature = Math.round((temperature - 273.15) * 1.8 + 32)
        //         console.log(temperature)
        //         document.querySelector('h2').innerText = temperature
        //     })
        //     .catch(err => {
        //         console.log(`error ${err}`)
        //     }) 
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    })





    // function getWeather(){
    //     let userInput = document.querySelector('input').value 
    //     console.log(userInput)
    
    //     fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=5&appid=f533d736867e80b8ca476c54bef1ba65`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
        
    //         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=f533d736867e80b8ca476c54bef1ba65`)
    //         .then(response => response.json())
    //         .then(dataTwo => {
    //             console.log(dataTwo)
    //             console.log(dataTwo.main.temp)
    //             let temperature = dataTwo.main.temp
    //             temperature = Math.round((temperature - 273.15) * 1.8 + 32)
    //             console.log(temperature)
    //             document.querySelector('h2').innerText = temperature
    //         })
    //         .catch(err => {
    //             console.log(`error ${err}`)
    //         })   
            
    //     })
    //     .catch(err => {
    //         console.log(`error ${err}`)
    //     })
    // }    