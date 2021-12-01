document.addEventListener('DOMContentLoaded', function() {
    
    // Смена темы сайта
    var app = document.getElementById('app')
    var eneble_dark_theme = document.getElementById('eneble-dark-theme') 
    var eneble_light_theme = document.getElementById('enable-light-theme') 
    
    eneble_dark_theme.addEventListener('click', function(){
        app.classList.add('dark-theme')
    })

    eneble_light_theme.addEventListener('click', function(){
        app.classList.remove('dark-theme')
    })

    var eneble_dark_theme_mob = document.getElementById('eneble-dark-theme-mob') 
    var eneble_light_theme_mob = document.getElementById('enable-light-theme-mob') 
    
    eneble_dark_theme_mob.addEventListener('click', function(){
        app.classList.add('dark-theme')
    })

    eneble_light_theme_mob.addEventListener('click', function(){
        app.classList.remove('dark-theme')
    })

    // Фиксация шапки
    var header = document.getElementById('header') 

    window.addEventListener('scroll', function(){
        if(window.pageYOffset > 0){
            header.classList.add('fix')
        }else{
            header.classList.remove('fix')
        }
    })

    // бургер
    var burger = document.getElementById('burger')
    var burger__menu = document.getElementById('burger__menu')
    burger.addEventListener('click', function(){
        burger__menu.classList.toggle('active')
    })

    // Селекты
    var inner_select = document.querySelectorAll('.inner-select')
    if(inner_select){
        inner_select.forEach(function(select){
            const choices = new Choices(select, {
                searchEnabled: false
            })
            
        })
        
    }


    // Перетаскиваем поиск на плашете
    var inner__sale = document.getElementById('inner__sale')
    var inner__top = document.getElementById('inner__top')
    var inner__search = document.getElementById('inner__search')
    if(inner__search){
        function relocationSerch(){
            if(window.innerWidth < 992 && window.innerWidth > 575){
                inner__sale.prepend(inner__search);
            }else{
                inner__top.append(inner__search)
            }
        }
    
        window.addEventListener('resize', function(){
            relocationSerch()
        })
    
        relocationSerch()
    }
    



    // фильтр на мобильном
    var inner__bot = document.getElementById('inner__bot')
    var inner__bot__toggle = document.getElementById('inner__bot__toggle')
    if(inner__bot__toggle){
        inner__bot__toggle.addEventListener('click', function(){
            slideToggle(inner__bot, 300)
        })    
    }
    

    // кастомный скролл
    if(document.getElementById('enner__list__body')){
        new SimpleBar(document.getElementById('enner__list__body'));
    }
    
})