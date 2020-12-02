//uma promise tem 3 estados: Pending(seu estado inicial ela nem falhou nem concluiu nada), 

const aPromise = new Promise((resolve, reject) => {
  //se a operação assincrona funcionar invocaremos a função resolve
  //se falhar invocaremos a reject
  const aNumber = 37;
//   resolve(aNumber);
reject(aNumber)
});

aPromise
    .then(value => value)
    .then(value => {
        console.log(value)
    })
    .catch(rejectValue => {
        console.log(rejectValue)
    })
    //O método then sempre retorna uma nova promise 

const url = 'https://dog.ceo/api/breeds/image/random'
fetch(url)
    .then(dogData => {
        if(dogData.ok){
            throw new Error(`HTTP error, status ${dogData.status}`)
        }
    })
    .catch(error => {
        console.log(error.message)
    })
//O método fetch retorna uma promise