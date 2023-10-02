var items = document.getElementsByClassName('list-group-item');
console.log(items);
//console.log(items[1]);
for(let i=0;i<4;i++)
{
items[i].style.fontWeight='bold';
}
items[2].style.backgroundColor='green';