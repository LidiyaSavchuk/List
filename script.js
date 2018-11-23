var names=['Иванов','Петров','Сидоров','Мельников','Кузнецов'];
for (i=0; i<names.length;i++){
		var el= document.createElement('div');
    el.classList.add('name');
    el.textContent=names[i]; 
    document.getElementById('list').appendChild(el);
}