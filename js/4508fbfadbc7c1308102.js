(()=>{var e={514:()=>{var e=document.querySelector(".main-nav"),t=e.querySelector(".main-nav__toggle"),a=e.querySelector(".main-nav__list");t&&t.addEventListener("click",(function(){document.body.classList.toggle("page__body--lock"),e.classList.toggle("main-nav--opened")})),e&&a.addEventListener("click",(function(t){t.preventDefault();var a=t.target.getAttribute("href"),n=document.querySelector(a);if(null!==n){var o=document.querySelector(".page-header").offsetHeight,r=n.getBoundingClientRect().top-o;window.scrollBy({top:r-40,behavior:"smooth"}),document.body.classList.remove("page__body--lock"),e.classList.remove("main-nav--opened")}}))}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}(()=>{"use strict";a(514);var e=function(e){var t=localStorage.getItem(e);return null!=t?t:""},t=function(e,t){localStorage.setItem(e,t)},n="theme-preference",o=document.querySelector("#theme-toggle"),r=function(){l.value="light"===l.value?"dark":"light",i()},i=function(){t(n,l.value),c()},c=function(){document.firstElementChild.setAttribute("data-theme",l.value),o.setAttribute("aria-label",l.value)},l={value:e(n)?e(n):window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};c(),window.onload=function(){c(),o.addEventListener("click",r)},window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){var t=e.matches;l.value=t?"dark":"light",i()}));const d={en:{about:'I am looking for a job as a html coder, in this profession I have found application of my skills: assiduity, attention to details. Besides I like coding, I can work for hours, forgetting to take a break for tea. In a few years I see myself as a front-end developer. For that, I`m improving my English and learning JavaScript. Here`s a little memory <a href="https://kseniyayaskevich.github.io/kseniyayaskevich-JSFEPRESCHOOL/memory-game/" target="_blank">GAME</a>. I am keen to gain more experience in the field. For this reason, I am looking for a company willing to offer me a placement among their developers. In return, I would offer my full commitment and be a pleasant and friendly addition to your team.'},ru:{about:'Ищу работу html-верстальщиком, в этой профессии я нашла применение моим навыкам: усидчивость, внимательность к деталям. Помимо этого мне нравится верстать, я могу часами работать, забывая сделать перерыв на чай. Через несколько лет вижу себя front-end разработчиком. Для этого я повышаю уровень владения английским языком и изучаю JavaScript. Вот небольшая <a href="https://kseniyayaskevich.github.io/kseniyayaskevich-JSFEPRESCHOOL/memory-game/" target="_blank">ИГРА</a> для памяти. Я стремлюсь получить больше опыта в этой области. По этой причине я ищу компанию, готовую предложить мне место среди своих разработчиков. Взамен я бы предложила свою полную приверженность и была бы ответственным и дружелюбным дополнением к вашей команде.'}};var s=document.querySelector("#ru"),u=document.querySelector("#en"),m=function(e){var t=document.querySelector("[data-i18]");t.innerHTML=function(e,t){return d[e].hasOwnProperty(t)?d[e][t]:t}(e,t.getAttribute("data-i18"))},v=function(e){var a=e.target.id;t("lang",a),m(a)};s.addEventListener("click",v),u.addEventListener("click",v),window.addEventListener("load",(function(){var t=e("lang");t?(m(t),"ru"===t&&(s.checked=!0),"en"===t&&(u.checked=!0)):u.checked=!0}))})()})();
//# sourceMappingURL=4508fbfadbc7c1308102.js.map