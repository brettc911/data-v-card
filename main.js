let req = new XMLHttpRequest()
req.open("GET", "https://api.github.com/users/brettc911")
req.addEventListener('load', function() {
  var brett = JSON.parse(this.responseText)

  document.querySelector('.wrapper').innerHTML =
    `
    <header>
      <h1>${brett.name}</h1>
    </header>
    <section class="main_content">
      <div id="basics" class="boxes">
        <h2>The Basics</h2>
        <p><span>Name:</span> ${brett.name}</p>
        <p><span>Github URL:</span> ${brett.html_url}</p>
        <p><span>Email:</span> ${brett.email}</p>
        <p><span>Company:</span> ${brett.company}</p>
        <p><span>Website:</span> ${brett.html_url}</p>
      </div>
      <div id="story"class="boxes">
        <h2>The Story</h2>
        <p>${brett.bio}</p>
      </div>
      <div id="picture" class="boxes">
        <img src= "${brett.avatar_url}" alt="">
      </div>
    </section>
  `
});
req.send()
