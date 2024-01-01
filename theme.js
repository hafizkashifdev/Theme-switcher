const h1=document.createElement('h1');
h1.textContent='Welcome to Theme switcher';
console.log(h1)
h1.style.textAlign='center'
document.body.appendChild(h1);


const colorArray = [
    { name: 'Red', hex: '#FF0000' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Orange', hex: '#FFA500' },
    { name: 'Purple', hex: '#800080' },
    { name: 'Pink', hex: '#FFC0CB' },
    { name: 'Brown', hex: '#A52A2A' },
    { name: 'Cyan', hex: '#00FFFF' },
    { name: 'Lime', hex: '#00FF00' },
    { name: 'Silver', hex: '#C0C0C0' },
    { name: 'Gold', hex: '#FFD700' },
    
  ];

for (let index = 0; index < colorArray.length; index++) {
    const btn=document.createElement('button');
    btn.textContent=`${colorArray[index].name}`;
    console.log(btn);
    btn.style.marginRight='10px';
    btn.style.cursor = 'pointer'; 
    document.body.appendChild(btn);

    btn.addEventListener('click',function(){
        document.body.style.backgroundColor=colorArray[index].hex
    })
    
}

