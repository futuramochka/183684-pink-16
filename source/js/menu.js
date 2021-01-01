var toggleMenu = document.querySelector('.js-toogle');
var lineHead = document.querySelector('.page-header__logo');
var UserList = document.querySelector('.user-list');
var ToogleItem = document.querySelectorAll('.toogle__item');
for(tog = 0; tog < ToogleItem.length; tog++){
  ToogleItem[tog].style.width = '20px';
}
var isMenuShow = true;
toggleMenu.addEventListener('click', function(){
    var itemHide = document.querySelector('.js-toogle--hide');
    var itemDown = document.querySelector('.js-toogle--turndown');
    var itemUp = document.querySelector('.js-toogle--turnup');
    var menu = document.querySelector('.js-navMenu');
    var menuList = document.querySelectorAll('.site-list__item');
    var menuUserList = document.querySelectorAll('.user-list__item');

    if(isMenuShow){
        menu.style.animationName = 'menu_list';
        UserList.classList.remove('js-display');
        for(tog = 0; tog < ToogleItem.length; tog++){
          ToogleItem[tog].style.width = '25px';
        }
        itemHide.style.display = 'none';
        itemDown.style.animationName = 'toggDown';
        itemUp.style.animationName = 'toggUp';
        for(var ind = 0; ind < menuList.length; ind++){
            menuList[ind].style.transitionDelay = '1s';
            menuList[ind].style.opacity = '1';
            menuList[ind].style.visibility = 'visible';
        }
        for(var inu = 0; inu < menuUserList.length; inu++){
          menuUserList[inu].style.transitionDelay = '1s';
          menuUserList[inu].style.opacity = '1';
          menuUserList[inu].style.visibility = 'visible';
        }
        isMenuShow = false;
    }else{
        for(var ind = 0; ind < menuList.length; ind++){
              menuList[ind].style.transitionDelay = '0s';
              menuList[ind].style.opacity = '0';
              menuList[ind].style.visibility = 'hidden';
        }
        for(var inu = 0; inu < menuUserList.length; inu++){
          menuUserList[inu].style.transitionDelay = '0s';
          menuUserList[inu].style.opacity = '0';
          menuUserList[inu].style.visibility = 'hidden';
        }
        for(var us = 0; us < menuUserList.length; us++){
          menuUserList[us].style.display = 'block';
        }
        lineHead.style.boxShadow = '0 1px 0 #ececec';
        UserList.classList.add('js-display');
        menu.style.animationName = 'menu_list_reverse';
        for(tog = 0; tog < ToogleItem.length; tog++){
          ToogleItem[tog].style.width = '20px';
        }
        itemHide.style.display = 'block';
        itemDown.style.animationName = 'Upp';
        itemUp.style.animationName = 'Downn';
        isMenuShow = true;
    }
})

