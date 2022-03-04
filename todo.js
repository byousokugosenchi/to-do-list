function addXBtn() {
    let liCollection = document.getElementsByTagName("li");
    for (let j = 0; j < liCollection.length; j++) {
        //Thêm nút x
        let xBtn = document.createElement('span');
        xBtn.appendChild(document.createTextNode("x"));
        //CSS button
        xBtn.className = 'close';
        liCollection[j].appendChild(xBtn);
    }
}


function newElement() {
    //Lấy value
    const content = document.getElementById('myInput').value
    //tạo Li
    let li = document.createElement("li");
    let textNode = document.createTextNode(content);
    li.appendChild(textNode);
    //Thêm li vào ul 
    let ul = document.getElementById('myUL');
    ul.appendChild(li);

    //gọi hàm a
    addXBtn();
    clickElement();
    clickXbutton();

}

function clickElement() {
    let checked = document.getElementById('myUL').children;
    for (let i = 0; i < checked.length; i++) {
        checked[i].addEventListener("click", function () {
            this.className = 'checked';                   // Nhờ thầy giải thích cách dùng this 
        });
    }

}
function clickXbutton() {
    let rmv = document.getElementsByClassName('close');

    for (let j = 0; j < rmv.length; j++) {
        rmv[j].onclick = function () {
            this.parentNode.remove();

        }
    }
}



//----------------------------------------------------------
addXBtn();
clickElement();
clickXbutton();
