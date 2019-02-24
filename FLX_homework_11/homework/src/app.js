const ten = 10;
let inputOnKey = document.querySelector('.add-new-action');
let btnOnClick = document.querySelector('.btn');
let list = document.querySelector('.list');
inputOnKey.addEventListener('keyup', function () {
    if (inputOnKey.value!==''){
        btnOnClick.disabled = false;
    }else{
        btnOnClick.disabled = true;
    }
});
let counter = 0;
btnOnClick.addEventListener('click', function () {
    if (counter < ten){
        let btnCheckEl = document.createElement('button');
        btnCheckEl.setAttribute('class', 'btnCheckEl');

        let iEl = document.createElement('i');
        iEl.setAttribute('class', 'material-icons');
        iEl.appendChild(document.createTextNode('check_box_outline_blank'));
        btnCheckEl.appendChild(iEl);

        btnCheckEl.addEventListener('click', function () {
            iEl.innerText = 'check_box';
        });

        let divEl = document.createElement('div');
        divEl.appendChild(document.createTextNode(inputOnKey.value));

        let btnDeleteEl = document.createElement('button');
        let iDeleteEl = document.createElement('i');
        iDeleteEl.setAttribute('class', 'material-icons');
        iDeleteEl.appendChild(document.createTextNode('delete'));
        btnDeleteEl.appendChild(iDeleteEl);

        let commonDiv = document.createElement('div');
        commonDiv.setAttribute('class', 'commonDiv');
        commonDiv.appendChild(btnCheckEl);
        commonDiv.appendChild(divEl);
        commonDiv.appendChild(btnDeleteEl);
        list.appendChild(commonDiv);

        btnDeleteEl.addEventListener('click', function () {
            commonDiv.remove();
            counter--;
        });
        counter++;

    }
});
