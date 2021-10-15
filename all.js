const submit = document.querySelector('.btn-success');
const areas = document.querySelectorAll('.input-area textarea');
const output = document.querySelector('.output');

// model
function getMergeData(data){
  let newData = `| 生字| 翻譯 | 
| -------- | -------- | \n`;

  for(let i = 0;i < data[0].length;i++){
    newData += `|`;
    data.forEach((value) => {
      newData += `${value[i]}|`;
    })
    newData += `\n`;
  }
  return newData;
}
//event
submit.addEventListener('click',()=>{
  const data = [];
  areas.forEach((textarea) => {
    data.push(textarea.value.trim());
  })
  data.forEach((value, index, arr) => {
    arr[index] = value.split('\n');
  })
  const newData = getMergeData(data);
  output.value = newData;

})