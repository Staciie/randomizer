const btn = document.querySelector('button');
const min = document.querySelector('#min');
const max = document.querySelector('#max');
const amm = document.querySelector('#ammount');
let results = document.querySelector('.results');
const check = document.querySelector('.checkbox');


function randomizer(min, max, amm) {
    if (min > max) {
        return 'Неверно заданный диапазон'
    }

    let arr = [];

    if (check.checked) {
        if (max - min > amm) {
            let set = new Set();
            while (set.size != amm) {

                let num = Math.floor(min + Math.random() * (max - min + 1));
                set.add(num);

            }
            set.forEach(elem => arr.push(elem))
            return arr.join(', ');
        } else {
            return 'Невозможно избежать повторов'
        }

    } else {
        for (i = 0; i < amm; i++) {
            let num = Math.floor(min + Math.random() * (max - min + 1));
            arr.push(num);
        }
        return arr.join(', ');
    }
}


btn.addEventListener('click', () => {
    let minNum = +min.value;
    let maxNum = +max.value;
    let ammount = +amm.value;
    results.style.opacity = '1';
    results.innerHTML = randomizer(minNum, maxNum, ammount);
})