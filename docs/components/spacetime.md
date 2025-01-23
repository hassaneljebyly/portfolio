# Local Location and Time Display

## Description

The local location and time display component renders and synchronizes localized time (my local time UTC+1) across multiple elements with optimized performance. The Idea was that for site visitors to see my local time and get an idea of how long it might take for me to respond.

## Anatomy

The component consists of a location (my location) and time(my local time):

```html
<p class="spacetime">
  <span class="spacetime__location">Agadir, Morocco</span>
  <time datetime="07:47" class="spacetime__time">7:47 PM</time>
</p>
```

## Behavior

Shows and updates my local time.

- **Issues I encountered**:
  - There's no guarantee `setInterval` will be synced with the actual time
  - One of the easier fixes was to run it every second, Not a performance issue but I needed a more optimized solution.
  - Also `setInterval` will run after the content was loaded and all Javascript synchronous code runs, during that delay the visitor will see the wrong time (well.. even a broken clock is right twice a day, mine uses PM/AM format though, so just once lol)
  - A solution was to call the function twice, once as synchronous code and other times inside the `setInterval`
- **How I fixed these issues**:
  - check current seconds using `getSeconds()` if we are lucking and on time we set `cycle` to `60000`, else we calculate how much time left until the next minute and use the result to set the timer to run on the next minute then `clearInterval` and run the function again, see code bellow

```ts
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
```

## Accessibility

- `<time>` tag seemed like the right element
