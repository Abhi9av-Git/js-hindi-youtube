# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution code

## project 1

``` javascript

console.log("Roshan");

const buttons=document.querySelectorAll('.button')

const body=document.querySelector('body')

buttons.forEach(function(button) {

  button.addEventListener('click', function(event) {

    if (event.target.id==='grey') {

      body.style.backgroundColor="grey";
    }
    if (event.target.id==='white') {

      body.style.backgroundColor="white";
    }
    if (event.target.id==='blue') {

      body.style.backgroundColor="blue";
    }
    if (event.target.id==='yellow') {

      body.style.backgroundColor="yellow";
    }
    if (event.target.id==='violet') {

      body.style.backgroundColor="violet";
    }
  });
});


```

## project 2 solution

``` javascript
const form=document.querySelector('form')

form.addEventListener('submit', function(event) {

  event.preventDefault()

  const ht=parseInt(document.querySelector('#height').value)

  const wt=parseInt(document.querySelector('#weight').value)

  const result=document.querySelector('#results')

  if (ht==='' || ht<0 || isNaN(ht)) {

    result.innerHTML="Please give a valid height"
  }
  else if (wt==='' || wt<0 || isNaN(wt)) {

    result.innerHTML="Please give a valid weight"
  }
  else {

    const BMI=(wt/((ht*ht)/10000)).toFixed(2);
    result.innerHTML=`BMI: ${BMI}`;
  }
});

```