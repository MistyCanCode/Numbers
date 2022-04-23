document.querySelector('.one').addEventListener('click', getFetch)
document.querySelector('.two').addEventListener('click', getFetch)
document.querySelector('.three').addEventListener('click', getFetch)
document.querySelector('.four').addEventListener('click', getFetch)
document.querySelector('.five').addEventListener('click', getFetch)
document.querySelector('.six').addEventListener('click', getFetch)
document.querySelector('.seven').addEventListener('click', getFetch)
document.querySelector('.eight').addEventListener('click', getFetch)
document.querySelector('.nine').addEventListener('click', getFetch)
document.querySelector('.ten').addEventListener('click', getFetch)
document.querySelector('.button').addEventListener('click', getSecondFetch)

function getFetch(event){

    const choice = event.target.className
    const num = event.target.innerText
    console.log(num)

    const url = `http://numbersapi.com/${num}/trivia?json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector(`.${choice}`).className += " answer"
        document.querySelector(`.${choice}`).innerText = data.text
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getSecondFetch(){

  const month = document.querySelector("#month").value
  const day = document.querySelector("#day").value
  const year = document.querySelector("#year").value
  console.log(`Month: ${month} Day: ${day} year: ${year}`)
  //todo: add month + day+year together, see if addedNum > 1, then split and reduce instead of reducing them separately

  console.log(monthArray = month.toString().split("").reduce((previous, current) => previous + current))
  console.log(monthArray.length)
  // if(monthArray.length > 1){
  //   const newMonth = monthArray.toString().split("").reduce((previous, current) => previous + current)
  //   console.log(newMonth)
  // }
  console.log(dayArray = day.toString().split("").reduce((previous, current) => previous + current))
  console.log(dayArray.length)
  // if(dayArray.length > 1){
  //   const newDay = dayArray.toString().split("").reduce((previous, current) => previous + current)
  //   console.log(newDay)
  // }
  console.log(yearArray = year.toString().split("").reduce((previous, current) => previous + current))
  console.log(yearArray.length)
  // while(yearArray.length > 1){
  //   const newYear = yearArray.toString().split("").reduce((previous, current) => previous + current)
  //   console.log(newYear)
  // }

  const num = 7
  console.log(num)

  const url = `http://numbersapi.com/${num}/trivia?json`

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector(`.numer`).innerText = data.text
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}