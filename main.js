'use strict';


{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const name = document.getElementById("name");

  btn.addEventListener('click', () => {
    const names = ["ことみんは", "こへは"];
    const nn = Math.floor(Math.random() * 2); 
    const results = ["大吉", "中吉", "吉", "小吉"];
    const n = Math.floor(Math.random() * 4);
    name.textContent = names[nn];
    result.textContent = results[n];
  });
}
