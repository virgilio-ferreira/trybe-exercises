//exercicio6
const messageDelay = () => {
  const time = Math.floor(Math.random() * 5000);
  console.log(time);
  return time;}

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (task) => {
  const isRobotAvailable = Math.random() <= 0.6;
  if (isRobotAvailable) {
    setTimeout(() => task(toFahrenheit(getMarsTemperature())), messageDelay());
  } else {
    const problem = 'Robot is busy';
    setTimeout(() => handleError(problem), messageDelay()); 
  }
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);