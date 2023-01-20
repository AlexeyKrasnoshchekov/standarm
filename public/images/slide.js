eb1 = document.getElementById('b1');
ei1 = document.getElementById('i1');

count = 1;
im_n = 1;
im_nb = 2;

function animation(img1) {
  count++;
  img1.style.opacity = 1 - count / 25;

  if (count < 25) setTimeout(animation, 50, img1);
  else {
    im_n++;
    im_nb++;
    if (im_n == 5) im_n = 1;
    if (im_nb == 5) im_nb = 1;
    ei1.src = '/i/prom_' + im_n + '.jpg';
    ei1.style.opacity = 1;
    eb1.background = '/i/prom_' + im_nb + '.jpg';
    count = 1;
    setTimeout(animation, 10000, ei1);
  }
}

function picnum(n1) {
  im_n = n1;
  im_nb = im_n + 1;
  if (im_n == 5) im_n = 1;
  if (im_nb == 5) im_nb = 1;
  ei1.src = '/i/prom_' + im_n + '.jpg';
  ei1.style.opacity = 1;
  eb1.background = '/i/prom_' + im_nb + '.jpg';
  count = 1;
  setTimeout(animation, 5000, ei1);
}

setTimeout(animation, 5000, ei1);

var news_rotation_index = 0;

var news = [13, 12, 11, 10, 9, 8, 7, 6];

setTimeout(function () {
  animateNews();
}, 10000);

function animateNews() {
  // console.log('F:animateNews');
  news_rotation_index++;
  if (news_rotation_index == 3) news_rotation_index = 0;
  document.getElementById('news_image_href').href =
    '/news/' + news[news_rotation_index] + '/';
  document.getElementById('news_text_href').href =
    '/news/' + news[news_rotation_index] + '/';
  document.getElementById('news_image').src =
    '/i/news/' + news[news_rotation_index] + '/h.gif';
  document.getElementById('news_text').src =
    '/i/news/' + news[news_rotation_index] + '/t.gif';

  setTimeout(function () {
    animateNews();
  }, 5000);
}
