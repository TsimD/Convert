const language = {
    rus: {
        data: {
            km_h: 'км/ч',
            mph: 'миль/ч',
            kg: 'кг',
            lb: 'фунт',
            inch: 'дюйм',
            cm: 'см',
        },
        title: {
            title: 'Конвертер',
            arg_1: 'Выберите первый параметр',
            arg_2: 'Выберите второй параметр',
            disabled: 'Выберите параметр',
        }

    },
    eng: {
        data: {
            km_h: 'km/h',
            mph: 'mph',
            kg: 'kg',
            lb: 'lb',
            inch: 'inch',
            cm: 'cm',
        },
        title: {
            title: 'Converter',
            arg_1: 'Select the first option',
            arg_2: 'Choose the second option',
            disabled: 'Choose an option',
        }
    }
}

function content() {

    let lang = leng_select.value;

    let leng_op = language[lang === 'eng' ? 'eng' : 'rus'];

    const km_h = leng_op.data.km_h,
        mph = leng_op.data.mph,
        kg = leng_op.data.kg,
        lb = leng_op.data.lb,
        inch = leng_op.data.inch,
        cm = leng_op.data.cm;


    const data = {
        fis: [
            {
                name_1: km_h,
                name_2: { mph, },
                param: 0.621371,
            },
            {
                name_1: mph,
                name_2: { km_h, },
                param: 1.60934,
            },
            {
                name_1: kg,
                name_2: { lb, },
                param: 2.20462,
            },
            {
                name_1: lb,
                name_2: { kg, },
                param: 0.453592,
            },
            {
                name_1: inch,
                name_2: { cm, },
                param: 2.54,
            },
            {
                name_1: cm,
                name_2: { inch, },
                param: 0.393701,
            },
        ],

    }
    const conw = document.querySelector('.conw');

    conw.innerHTML = `<h1 class="title">${leng_op.title.title}</h1>
<div class="block">
    <div class="select_1">
        <h2 class="arg_1">${leng_op.title.arg_1}</h2>
        <select id="select_param_1" class="param_1">
            <option disabled>${leng_op.title.disabled}</option>

        </select>
        <input type="text" class="input">
    </div>
    <div class="select_2">
        <h2 class="arg_2">${leng_op.title.arg_2}</h2>
        <select id="select_param_2" class="param_2">
            <option disabled>${leng_op.title.disabled}</option>
        </select>
        <h3 class="result"></h3>
    </div>



</div>`;


    const select_1 = document.querySelector('.param_1');
    const select_2 = document.querySelector('.param_2');
    const input = document.querySelector('.input');
    const result = document.querySelector('.result');




    data.fis.map(item => {
        let select_dat = `<option>${item.name_1}</option>`;
        select_1.innerHTML += select_dat;
        if (item.name_1 === select_1.value) {
            select_2.innerHTML = '';
            for (key in item.name_2) {
                let select_dat = `<option>${item.name_2[key]}</option>`;
                select_2.innerHTML += select_dat;
            }
        }
    })


    function convert() {
        data.fis.map(item => {
            if (item.name_1 === select_1.value) {
                result.textContent = +(input.value * item.param).toFixed(2);
            }
        })


    }



    select_1.addEventListener('change', () => {
        data.fis.map(item => {
            if (item.name_1 === select_1.value) {
                select_2.innerHTML = '';
                for (key in item.name_2) {
                    let select_dat = `<option>${item.name_2[key]}</option>`;
                    select_2.innerHTML += select_dat;
                }
            }
        })

        input.value = '';
        result.textContent = '';


    })

    input.addEventListener('input', () => convert());

};

const leng_select = document.querySelector('.leng');
const img_leng = document.querySelector('.img_leng');
content();
for (key in language) {


    leng_select.innerHTML += `<option> ${key} </option>`;


}
function fl() {
    let flg;
    if (leng_select.value === 'eng') {
        flg = './img/flg/eng_fl.png';
    } else if (leng_select.value === 'rus') {
        flg = './img/flg/rus_fl.png';
    } else {
        flg = '#';
    }

    img_leng.innerHTML = `<img src=${flg} alt="${key}" class="img_fl" /> `

}
fl();
leng_select.addEventListener('change', () => { content(); fl(); });




