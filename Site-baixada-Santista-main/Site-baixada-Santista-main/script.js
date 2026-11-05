
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav').forEach(nav => {
    const hamburger = nav.querySelector(
      '.hamburger, .hamburger-2'
    );

    const navList = nav.querySelector(
      '.nav-list, .nav-list-2'
    );

    if (!hamburger || !navList) return;

    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  });
});
