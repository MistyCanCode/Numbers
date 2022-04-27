const key = config.my_secret;

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
document.querySelector('.button').addEventListener('click', secondFetch)
document.querySelector('#dayButton').addEventListener('click', thirdFetch)
document.querySelector('#monthButton').addEventListener('click', thirdFetch)
document.querySelector('#yearButton').addEventListener('click', thirdFetch)
document.querySelector('#dateButton').addEventListener('click', thirdFetch)
document.querySelector('#aries').addEventListener('click', fourthFetch)
document.querySelector('#taurus').addEventListener('click', fourthFetch)
document.querySelector('#gemini').addEventListener('click', fourthFetch)
document.querySelector('#cancer').addEventListener('click', fourthFetch)
document.querySelector('#leo').addEventListener('click', fourthFetch)
document.querySelector('#virgo').addEventListener('click', fourthFetch)
document.querySelector('#libra').addEventListener('click', fourthFetch)
document.querySelector('#scorpio').addEventListener('click', fourthFetch)
document.querySelector('#sagittarius').addEventListener('click', fourthFetch)
document.querySelector('#capricorn').addEventListener('click', fourthFetch)
document.querySelector('#aquarius').addEventListener('click', fourthFetch)
document.querySelector('#pisces').addEventListener('click', fourthFetch)
document.querySelector('#td').addEventListener('click',fifthFetch)
document.querySelector('#rn').addEventListener('click', fifthFetch)
document.querySelector('#rt').addEventListener('click', fifthFetch)
document.querySelector('#rd').addEventListener('click', fifthFetch)
document.querySelector('#ry').addEventListener('click', fifthFetch)

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

function secondFetch(){

  const month = document.querySelector("#month").value
  const day = document.querySelector("#day").value
  const year = document.querySelector("#year").value
  console.log(`Month: ${month} Day: ${day} year: ${year}`)
  let allNums = month.toString() + day.toString() + year.toString()
  let strNums = allNums.split("")
  let numNums = strNums.map(Number)
  console.log(`numbers: ${numNums}, length: ${numNums.length}`)
 
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Host': 'vedicrishi-horoscope-matching-v1.p.rapidapi.com',
      'X-RapidAPI-Key': key
    },
    body: `{"day":"${day}","month":"${month}","year":"${year}"}`
  };
  const url = 'https://vedicrishi-horoscope-matching-v1.p.rapidapi.com/numero_table/'
  
  fetch(url, options)
    .then(response => response.json())
    .then(data => {console.log(data)
      document.querySelector('.calculator').display = "flex"
    document.querySelector('div').display = "flex"
    document.querySelector('.destiny').innerText = `Destiny number -->  ${data.destiny_number}` 
    document.querySelector('.evil').innerText = `Evil number -->  ${data.evil_num}`
    document.querySelector('.color').innerText = `Color -->  ${data.fav_color}`
    document.querySelector('.days').innerText = `Best days -->  ${data.fav_day}`
    document.querySelector('.god').innerText = `Ruling diety -->  ${data.fav_god}`
    document.querySelector('.metal').innerText = `Metal --> ${data.fav_metal}`
    document.querySelector('.stone').innerText = `Stone: --> ${data.fav_stone}`
    document.querySelector('.substone').innerText = `Substone: -->  ${data.fav_substone}`
    document.querySelector('.neutral').innerText = `Neutral number: -->  ${data.neutral_num}`
    document.querySelector('.radical').innerText = `Radical number: -->  ${data.radical_num}`
    document.querySelector('.ruler').innerText = `Ruling Planet: -->  ${data.radical_ruler}`
  })
    .catch(err => console.error(err));
}

function thirdFetch(event){

  
  const choice = event.target.innerText
  console.log(choice)
  let day = ""
  dayNum = 0
  let dayArray = ['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  let month = ""
  let monthNum = 0
  let monthArray = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
  let year = 0
  let dateDay = 0
  let dateMonth = 0
  let date = ""
  let value = ""
  let answer = ""
  let strText = ""

  if(choice.includes("day")){
    day = document.querySelector('#diffDay').value
    console.log(day)
    if(dayArray.includes(day)){
      dayNum = dayArray.indexOf(day)+1
    }
    console.log(`dayNum = ${dayNum}`)
    value= `/${dayNum}/math`
    answer = ".diffDay"
    strText = `${day} : `
  }else if(choice.includes("month")){
        month = document.querySelector('#diffMonth').value
        console.log(month)
        if(monthArray.includes(month)){
          monthNum = monthArray.indexOf(month)+1
        }
        console.log(monthNum)
        value =`/${monthNum}/math`
        console.log(value)
        answer = ".diffMonth"
        strText = `${month} : `
        console.log(answer)
      }else if(choice.includes("year")){
        year= document.querySelector('#diffYear').value
        console.log(year)
        value= `/${year}/year`
        console.log(value)
        answer = ".diffYear"
        console.log(answer)
      }else if(choice.includes("date")){
        dateDay = document.querySelector('#diffDate').value 
        dateMonth = document.querySelector('#diffDateM').value
        date = `${dateMonth}/${dateDay}`
        value = `/${date}/date`
        answer = ".diffDate"
      }
    // }else{
    //   value = `/random/math`
    //   answer = "#diffDate"
    // }
  
  console.log(`choice: ${choice}, day: ${day}, and: ${dayNum}, month: ${month}, and: ${monthNum} year: ${year},  AND: ${dateDay} / ${dateMonth}, date: ${date}`)

   const url = `http://numbersapi.com${value}?json`
   console.log(url)

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      if(strText !== ""){
        strText = strText.charAt(0).toUpperCase() + strText.slice(1)
        document.querySelector(`${answer}`).innerText = strText + " " + data.text
      }else{
        document.querySelector(`${answer}`).innerText = data.text
      }
      console.log(answer)
      document.querySelector(`${answer}`).className += " answer2"
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function fourthFetch(event){

  const zodiac = event.target.innerText.toLowerCase()
  const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces']
  let sign= zodiac.split(' ')
  let first = sign[0]
  let index = 0

  if(signs.includes(first)){
    index = signs.indexOf(first)
  }
  console.log(`first index = ${first}, sign = ${zodiac}, index of sign = ${index}`)

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'daily-horoscopes1.p.rapidapi.com',
      'X-RapidAPI-Key': key
    }
  };
  
  fetch('https://daily-horoscopes1.p.rapidapi.com/', options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let sentences = data[index].prediction.split('!').join(',').split('.').join(',').split(',')
      sentences.pop()
      sentences.pop()
      sentences.pop()
      let newPrediction = sentences.join('. ')
      console.log(newPrediction)
      document.querySelector(`#${first}`).innerText = newPrediction + "."
    })
    .catch(err => console.error(err));
}

function fifthFetch(event){
  const end = event.target.innerText.toLowerCase()
  let what = ''
  let choice = ''
  console.log(`random: ${end}`)
  const today = new Date()
  console.log(today)
  if(end.includes("today")){
    let todaysMonth = today.getMonth()+1
    let todaysDay = today.getDate()
    console.log(`${today}, Month: ${todaysMonth}, Day: ${todaysDay}`)
    what = `${todaysMonth}/${todaysDay}/date`
    choice = '.td'
  }else if(end.includes("number")){
    what = `random/math`
    choice = '.rn'
  }else if(end.includes("trivia")){
    what = "random/trivia"
    choice = '.rt'
  }else if(end.includes("year")){
    what = "random/year"
    choice = '.ry'
  }else{
    what = "random/date"
    choice = '.rd'
  }
  console.log(choice)
  const url = `http://numbersapi.com/${what}?json`
  console.log(url)
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector(`${choice}`).className += " answer"
      document.querySelector(`${choice}`).innerText = data.text
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}