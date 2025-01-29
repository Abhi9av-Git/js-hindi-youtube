let a=300;

if (true) {

  let a=10;

  let b=20;

  console.log("Inner:", a);
}

console.log(a);

function one() {

  const username="Roshan";

  function two() {

    const website="youtube";

    console.log(username);
  }

  two();
}

// one();

if (true) {

  const username="rishabh";

  if (username==="rishabh") {

    const website=" youtube";

    console.log(username+website);
  }
}

// ****************** interesting ***************

function addone(num) {

  return num+1;
}

const ans=addone(5);

console.log(ans);