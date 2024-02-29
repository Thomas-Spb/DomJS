'use sctrict';

const items = document.querySelectorAll('.item');
const spamBanner = document.querySelector('.ads');
const documentLists = document.querySelectorAll('.props__list');
const itemFive = document.querySelector('.item_five');
const itemsTitle = document.querySelectorAll('.item__title');
console.log('itemsTitle: ', itemsTitle);
// console.log('itemFour: ', itemFour);
// console.log('documentLists: ', documentLists);
const itemThreeOl = documentLists[3].cloneNode(true);
documentLists[3].replaceWith(documentLists[4]);
// console.log('itemThreeOl: ', itemThreeOl);
// console.log('documentLists[3]: ', documentLists[4]);
// console.log('documentLists[3]: ', documentLists[3]);

const swapFromGrey = documentLists[2].childNodes[7];
// console.log('swapFromGrey: ', swapFromGrey);
// spamBanner.style.display = 'none';
spamBanner.remove();
items[3].after(items[0]);

documentLists[0].childNodes[5].after(swapFromGrey);
itemFive.append(itemThreeOl);

const itemSix = documentLists[5].querySelectorAll('.props__item_two');
itemSix.forEach(item => documentLists[2].after(item));

// const itemTitle1 = itemsTitle[0].textContent;
const itemTitle2 = itemsTitle[1].textContent;
// const itemTitle3 = itemsTitle[2].textContent;
const itemTitle4 = itemsTitle[3].textContent;
const itemTitle5 = itemsTitle[4].textContent;

items[2].childNodes[1].childNodes[3].textContent = itemTitle4;
items[3].childNodes[1].childNodes[3].textContent = 'This и прототипы объектов';
items[4].childNodes[1].childNodes[3].textContent = itemTitle5;
items[5].childNodes[1].childNodes[3].textContent = itemTitle2;
