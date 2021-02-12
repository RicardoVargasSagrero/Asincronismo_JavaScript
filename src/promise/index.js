/**Código realizado bajo el standard ECMAScript 6 */
const somethingWillHappen = () =>{
    return new Promise((resolve,reject)=>{
        if(1){
            resolve('We did it dora!! ');
        }else{
            reject('Fucking botas you messup!!!')
        }
    });
};

somethingWillHappen().then(response => console.log(response)).catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout(() =>{
                resolve ('True');
            },2000);
        }else{
            const error = new Error('Fucking botas you did it again!!');
            reject(error);
        }
    }); 
}

somethingWillHappen2().then(response => console.log(response)).catch(err => console.error(err));

Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response => {
        console.log('Array of results',response);
    })
    .catch(err =>{
        console.error(err);
    })