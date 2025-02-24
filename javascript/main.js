let btn = document.querySelector('button');
let text = document.querySelector('input');
let list = document.querySelector('ul');

btn.addEventListener("click", function () {
    // if (text.value.trim() === "") {
    //     alert("Please enter a task!");
    //     return;
    // }

    let item = document.createElement('li');
    item.classList.add('list-item');
    let taskText = document.createElement('span');
    taskText.textContent = text.value;
    let removeIcon = document.createElement('i');
    removeIcon.classList.add('fas', 'fa-trash', 'remove-icon');
    removeIcon.addEventListener("click", () => {
        item.remove();
    });
    item.addEventListener("click", () => {
        item.classList.toggle('done');
    });
    item.appendChild(taskText);
    item.appendChild(removeIcon);
    list.appendChild(item);
    text.value = "";
});









// let btn = document.querySelector('button');
// let text =document.querySelector('input');
// let list = document.querySelector('ul');
// btn.addEventListener("click", function() {
//     let item =document.createElement('li');
//     item.textContent = text.value;
//     // console.log("Button clicked");
//     item.addEventListener("click", ()=>{
//         item.classList.toggle('done')
//       //  item.remove();
//     });

//     list.append(item);
// });




