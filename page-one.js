{const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
).join("")}

{const text = document.querySelector('.text2 p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 5}deg)">${char}</span>`
).join("")}

