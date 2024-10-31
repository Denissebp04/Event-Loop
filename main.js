//PART I


let counter = 0;
function increment(){
    counter++;
    increment()
}
    try{
        increment();
    } catch(error){
        console.log(error);
        console.log("counter value: ", counter);
    }



// PART II

const nestArr = [[[1, 2], [3, 4]], [[5, 6], [7, 8], [9, 10]]];
function flatten(arr){
    let flatArr = [];
    arr.forEach(element => {
        if (Array.isArray(element)){
            flatArr = flatArr.concat(flatten(element));
        } else {
            flatArr.push(element);
        }
    })

    return flatArr;

}

// console.log(flatten(nestArr));

//Trampoline function

function trampoline(fn) {
    let result = fn;
    while (typeof result === "function") {
        result = result();
    }
    return result;
}
const result = trampoline(() => flatten(nestArr));
console.log(result);




//PART III
function prime(n){  
    for ( let i = n; i <= 100; i++)
        {
        flag = 0;
        for (j = 2; j < i; j++)
        {
            if (i % j == 0)
        {
            flag = 1;
        }
    }
    if (flag == 0)
    {
        console.log(i)
    }
    
    }
}

function getPrimeNumbers() {
    const text = document.getElementById("text");
    text.innerHTML = 'Prime numbers list: '
    const primeList = []
    for (let i = 0; i <= 10000; i++) {
        primeList.push(prime(i))
    }
    text.innerHTML += primeList.join(', ')
    alert('Calculation is finished')
}

const btn = document.getElementById("btn");
btn.addEventListener("click", getPrimeNumbers);




