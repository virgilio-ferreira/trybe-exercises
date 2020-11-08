//exercicio4
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

// let time = messageDelay(); // Faça em BabySteps para ter certeza do que esta fazendo
// console.log(time); // Sempre verifique o tipo de cada variável
// setTimeout(() => sendMarsTemperature(), messageDelay()); // o segundo parâmetro da setTimeOut só pode ser um numero ou variável com um numero
// console.log(getMarsTemperature());
// setTimeout(() => getMarsTemperature(), messageDelay); // Não funciona! Existe uma diferença entre um função rododa e só o nome da variável, quando você coloca os parenteses a função esta sendo chamada, quando não coloca é apenas a função, só descobri isso por causa dos babysteps.

const sendMarsTemperature = () => {
  console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`);
}

setTimeout(() => sendMarsTemperature(), messageDelay()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// o setTimeOut vai atrasar a função que está dentro dele e o resto vai sair rodando enquanto isso.



