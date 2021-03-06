import { $ } from 'npm:jquery';
class Homepage{
  constructor() {}

  init(): void{
    this.initClock();
  }

  initClock(): void{
    let clockEl = <HTMLElement>document.querySelector('#clock');
    let hoursEl = <HTMLElement>clockEl.querySelector('.hours');
    let minutesEl = <HTMLElement>clockEl.querySelector('.minutes');
    let secondsEl = <HTMLElement>clockEl.querySelector('.seconds');

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let hoursAngle = (hours * 30) + (minutes / 2);
    let minutesAngle = minutes*6;
    let secondsAngle = seconds*6;

    function transformEl(el: HTMLElement, angle: number){
      el.style.transform = 'rotateZ('+angle+'deg)';
    }
    transformEl(hoursEl,hoursAngle);
    transformEl(minutesEl,minutesAngle);
    transformEl(secondsEl,secondsAngle);
  }
}
(function(global){
  global.UIDeliverables = global.UIDeliverables || {};
  global.UIDeliverables.pages = global.UIDeliverables.pages || {};
  let homepage = global.UIDeliverables.pages.homepage = new Homepage();
  homepage.init();
})(window);
export Homepage;

