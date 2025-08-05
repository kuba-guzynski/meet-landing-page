

const hero = document.querySelector('section.hero')
const element = document.createElement('div')

element.className = 'combined'

function checkResize() {
  if (window.innerWidth <= 1440) {

    element.innerHTML = `<div class="combined-image">
        <img src = "./assets/desktop/image-hero-left.png" alt = "hero-left" >
        <img src="./assets/desktop/image-hero-right.png" alt="hero-right">

      </div>
      <div class="text-content">
        <span class="text-preset-1 ">
          Group Chat <br> for Everyone
        </span>
        <span class="text-preset-4">
          Meet makes it easy to connect with others <br>face-to-face virtually and collaborate <br>across any device.
        </span>
        <div class="button-frame">
          <button type="button">
            <div class="button-inside-frame text-preset-5">
              <span class="white">Download</span>
              <span class="cyan">v1.3</span>
            </div>
          </button>
          <button type="button">
            <div class="button-inside-frame text-preset-5">
              <span class="white">What is it?</span>
            </div>
          </button>
        </div>
      </div>`

    hero.appendChild(element)

  } else {
    element.innerHTML = `<div class="faces-left">
        <img src="./assets/desktop/image-hero-left.png" alt="hero-left">
      </div>
      <div class="text-content">
        <span class="text-preset-1 ">
          Group Chat <br> for Everyone
        </span>
        <span class="text-preset-4">
          Meet makes it easy to connect with others <br>face-to-face virtually and collaborate <br>across any device.
        </span>
        <div class="button-frame">
          <button type="button">
            <div class="button-inside-frame text-preset-5">
              <span class="white">Download</span>
              <span class="cyan">v1.3</span>
            </div>
          </button>
          <button type="button">
            <div class="button-inside-frame text-preset-5">
              <span class="white">What is it?</span>
            </div>
          </button>
        </div>
      </div>

      <div class="faces-right">
        <img src="./assets/desktop/image-hero-right.png" alt="hero-right">
      </div>
`

    hero.appendChild(element)
  }
}

checkResize();

window.addEventListener('resize', checkResize);

