const submit = document.querySelector('.btn-success');
const areas = document.querySelectorAll('.row textarea');
console.log(submit);
const data = [];
let newData = ``;
submit.addEventListener('click',()=>{
  console.log(data);
  if(data.length) return;
  areas.forEach((textarea) => {
    data.push(textarea.value.trim());
  })
  data.forEach((value, index, arr) => {
    arr[index] = value.split('\n');
  })
  
  for(let i = 0;i < data[0].length;i++){
    newData += `|`;
    data.forEach((value) => {
      newData += `${value[i]}|`;
    })
    newData += `\n`;
  }
  console.log(data);
  console.log(newData);
})