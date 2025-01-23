import '@/scss/main.scss';

const dropDownMenu = document.getElementById('js-dropdown-menu') as HTMLElement;
const dropDownMenuNavWrapper = document.getElementById(
  'js-dropdown-menu__nav-wrapper'
) as HTMLDivElement;
const dropDownMenuToggleBtn = document.getElementById(
  'js-dropdown-menu__toggle-btn'
) as HTMLButtonElement;
const dropDownMenuLogo = document.getElementById(
  'js-main-nav__logo'
) as HTMLElement;

const timeElements = document.querySelectorAll(
  '.spacetime__time'
) as NodeListOf<HTMLTimeElement>;

let closed = true;
dropDownMenuToggleBtn.addEventListener('click', () => {
  closed = !closed;
  dropDownMenuToggleBtn.setAttribute('aria-expanded', String(!closed));
  dropDownMenuNavWrapper.setAttribute('aria-hidden', String(closed));
  dropDownMenu.classList.toggle('js-dropdown-menu--closed');
  dropDownMenuLogo.classList.toggle('logo--dark');
});

function runTimer(
  timeElements: NodeListOf<HTMLTimeElement>,
  cycle = 1000
): void {
  const date = new Intl.DateTimeFormat('en-US', {
    timeStyle: 'short',
    timeZone: 'Africa/Casablanca',
  }).format(new Date());
  timeElements.forEach((time) => {
    time.innerHTML = date;

    void date.split(' ')[0];
    const formattedAttributeDate = date.length === 4 ? '0' + date : date; // expects HH:MM format example 08:45 not 8:45
    time.setAttribute('datetime', `${formattedAttributeDate}`);
  });
  const interval = setInterval(() => {
    const seconds = new Date().getSeconds();
    // Calculate interval dynamically
    // Why: setInterval can be out of sync from actual time, I needed it to sync with teh actual minute
    // Solution: Calculate exact milliseconds until next minute
    cycle = seconds === 0 ? 60000 : (60 - seconds) * 1000;

    clearInterval(interval);
    runTimer(timeElements, cycle);
  }, cycle);
}

runTimer(timeElements);
