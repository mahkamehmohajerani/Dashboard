const chart = document.querySelector("#chart").getContext('2d');
new Chart(chart, {
    type:'line',
    data:{
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],

        datasets:[
            {
                label:'BTC',
                data:[4657,18667,9909,6424,2566,4568,1456,1123,1344,4657,4576],
                borderColor:'red',
                borderWidth:2
            },
            {
                label:'EHT',
                data:[4657,4267,4000,3424,2366,3678,1356,1123,1344,4567,4576],
                borderColor:'blue',
                borderWidth:2
            }
        ]
    },
    options:{
        responsive: true
    }
})

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click' ,()=>{
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click',()=>{
    sidebar.style.display = 'none';
})

const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active')
})