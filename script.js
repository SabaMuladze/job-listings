import data from './data.json' assert {type: 'json'};

const list = document.querySelector('.list');
const filter = document.querySelector('.filter');
const filterDv = document.querySelector('.filter-div')
const clearDv = document.querySelector('.clear-div');
let arr = [];




function addCards(cards) {
    list.innerHTML = '';
    for (let i = 0; i < cards.length; i++) {
        const { company, logo, news, featured, position, role, level, postedAt, contract, location, languages, tools } = cards[i];

        const card = document.createElement('div');
        card.classList.add('card')

        function filterspans(item) {
            let filterElCont = document.createElement('div');
            filterElCont.classList.add('filter-el-cont');
            let filterEl = document.createElement('span');
            filterEl.classList.add('filter-el');
            filterEl.textContent = item;
            let del = document.createElement('span');
            del.classList.add('delete');
            del.textContent = 'X';
            del.onclick = () => {
                arr.splice(filterElCont, 1);
                filterElCont.style.display = 'none';
                if (arr.length < 1) {
                    filter.style.opacity = 0;
                }
                else {
                    filter.style.opacity = 1;
                }
                let filtered = arrFilt();
                addCards(filtered)
            };
            filterElCont.append(filterEl, del);
            filterDv.append(filterElCont);

        }

        let mainCont = document.createElement('div');
        mainCont.classList.add('main-cont');
        mainCont.innerHTML = `<img class='icon' src = '${logo}'>
         <div class='cont'>
         <div class='features-div'><p>${company}</p><span class = 'features'><p class = 'new'></p><p class='feat'></p></span></div>
        <p class='position'>${position}</p>
        <div class='requirements'><p>${postedAt}</p> <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
         <circle cx="2" cy="2" r="2" fill="#B7C4C4"/>
        </svg><p>${contract}</p><svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
        <circle cx="2" cy="2" r="2" fill="#B7C4C4"/><p>${location}</p></div>
        </div>
        </div>`;

        let skillsDv = document.createElement('div');
        skillsDv.classList.add('skills-div');

        let line = document.createElement('div')
        line.classList.add('line')

        card.append(mainCont, line, skillsDv)
        for (let i = 0; i < tools.length; i++) {
            let tool = document.createElement('span')
            tool.classList.add('skills')
            tool.src = tools
            tool.textContent = tools[i];
            skillsDv.append(tool)
            tool.addEventListener('click', () => {
                let tl = arr.includes(tools[i]);
                if (!tl) {
                    filter.style.opacity = 1;
                    arr.push(tools[i])
                    console.log(arr)
                    filterspans(tools[i])

                    let filtered = arrFilt();

                    addCards(filtered)

                }
            })

        }
        for (let i = 0; i < languages.length; i++) {
            let lang = document.createElement('span')
            lang.classList.add('skills')
            lang.src = languages
            lang.textContent = languages[i];
            skillsDv.append(lang)

            lang.addEventListener('click', () => {
                let lng = arr.includes(languages[i]);
                if (!lng) {
                    filter.style.opacity = 1;
                    arr.push(languages[i])
                    console.log(arr)
                    filterspans(languages[i])

                    let filtered = arrFilt();

                    addCards(filtered)
                }
            })

        }

        list.append(card)

        let lvl = document.createElement('div')
        lvl.classList.add('skills')
        lvl.src = level
        lvl.textContent = level;
        skillsDv.append(lvl);
        lvl.addEventListener('click', () => {
            let lev = arr.includes(level);
            if (!lev) {
                filter.style.opacity = 1;
                arr.push(level)
                console.log(arr)
                filterspans(level)
                let filtered = arrFilt();

                addCards(filtered)

            }
        })


        let rol = document.createElement('div')
        rol.classList.add('skills')
        rol.src = role
        rol.textContent = role;
        skillsDv.append(rol);
        rol.addEventListener('click', () => {
            let rl = arr.includes(role);
            if (!rl) {
                filter.style.opacity = 1;
                arr.push(role)
                console.log(arr)
                filterspans(role);

                let filtered = arrFilt();

                addCards(filtered)
            }
        })

        const newp = document.querySelectorAll('.features-div .features .new');
        const feat = document.querySelectorAll('.features-div .features .feat');


        if (news == true && featured == true) {

            newp.forEach(item => {
                item.style.display = 'block';
                item.textContent = 'NEW!';
            })
            feat.forEach(item => {
                item.style.display = 'block';
                item.textContent = 'FEATURED';
            })
        }
        else if (news) {
            newp.forEach(item => {
                item.style.display = 'block';
                item.textContent = 'NEW!';
            })
        }
        list.append(card)
    }

}
addCards(data);
function arrFilt() {
    return data.filter(filt => arr.every(equal => filt.role === equal || filt.level === equal || filt.languages.includes(equal) || filt.tools.includes(equal)))
}

window.lela = () => {
    arr = [];
    filterDv.innerHTML = ``;
    filter.style.opacity = '0'

    let filtered = arrFilt();
    addCards(filtered)

}

