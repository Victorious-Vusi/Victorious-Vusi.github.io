const checkbox = document.querySelector('#check');


            checkbox.addEventListener('click', function () {

        document.querySelector('#list').style.textDecoration = 'line-through';
       
        if (checkbox.checked === false) {
            document.querySelector('#list').style.textDecoration = 'none';
        }
     });
     

