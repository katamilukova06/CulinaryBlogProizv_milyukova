document.addEventListener('DOMContentLoaded', function () {
    const mySearch = document.querySelector("#mySearch");

    if (mySearch) {

        const clear = document.querySelector('.clear');
        if (clear) {

            clear.addEventListener("click", function () {
                mySearch.value = '';
                triggerSearch();
            });
        }

        mySearch.oninput = triggerSearch;
    }

    function insertMark(str, pos, len) {
        return str.slice(0, pos) + '<mark>' + str.slice(pos, pos, len) + '</mark>' + str.slice(pos + len);
    }

    function triggerSearch() {
        let val = mySearch.value.trim().toLowerCase();
        let recipes = document.querySelectorAll('.recipes-item');

        recipes.forEach(function (recipes_item) {
            let title = recipes_item.querySelector('.title').innerText.toLowerCase();
            let time = recipes_item.querySelector('.time').innerText.toLowerCase();

            if (title.search(val) === -1 && time.search(val) === -1) {
                recipes_item.classList.add('hide');
            } else {
                recipes_item.classList.remove('hide');

                if (title.search(val) !== -1) {
                    let str = recipes_item.querySelector('.title').innerText;
                    recipes_item.querySelector('.title').innerHTML = insertMark(str, title.search(val), val.length);
                } else {
                    recipes_item.querySelector('.title').innerHTML = recipes_item.querySelector('.title').innerText;
                }

                if (time.search(val) !== -1) {
                    let str = recipes_item.querySelector('.time').innerText;
                    recipes_item.querySelector('.time').innerHTML = insertMark(str, time.search(val), val.length);
                } else {
                    recipes_item.querySelector('.time').innerHTML = recipes_item.querySelector('.time').innerText;
                }
            }
        });
    }
});