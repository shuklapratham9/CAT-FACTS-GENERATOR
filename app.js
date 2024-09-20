

let ul=document.querySelector('#container');


async function init()
{
    const reponse = await fetch("https://meowfacts.herokuapp.com/");
    const data = await reponse.json();
    const st = data.data[0];
    ul.innerText =st
}
function manipulatedom(datas){
    while(ul.firstChild){
        ul.firstChild.remove();
    }
    let li = document.createElement('li');
    li.innerHTML = `
        <h2>${datas.data.data}</h2>
    `
    ul.appendChild(li);
}

init();