const itemRef = document.querySelectorAll(".item");
console.log(`В списке ${itemRef.length} категории`);

const titleRef = document.querySelectorAll("h2");
titleRef.forEach(el => console.log(`Категория: ${el.textContent}`))

const liListRef = document.querySelectorAll('.item > ul');
liListRef.forEach(el => console.log(`Количество элементов: ${el.children.length}`));
