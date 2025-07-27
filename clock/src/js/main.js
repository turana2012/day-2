 const hr = document.getElementById('hour');
    const min = document.getElementById('minute');
    const sec = document.getElementById('secund');

    function displayTime() {
      const date = new Date();
      const hh = date.getHours();
      const mm = date.getMinutes();
      const ss = date.getSeconds();

      const hRotation = 30 * hh + mm / 2;
      const mRotation = 6 * mm;
      const sRotation = 6 * ss;

    hr.style.transform = `translate(-50%, -100%) rotate(${hRotation}deg)`;
min.style.transform = `translate(-50%, -100%) rotate(${mRotation}deg)`;
sec.style.transform = `translate(-50%, -100%) rotate(${sRotation}deg)`;
    }

    setInterval(displayTime, 1000);
    displayTime();


    setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}