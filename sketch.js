//inspiration for the roots coming from https://openprocessing.org/sketch/1156703

//current bugs:
//fl1 conversation part, adult & aria superhappy & doggy莫名奇妙出现
//can't switch to scene 5，the screen frozes, no bugs

//tuesday to dos:
//fl1: add doggy disappear into an ordinary cloud
//finish the flower conversation quickly


// hover over
// sequence between the first two scenes
let time
let scene

//intro 
let scene1bkd
let weirdo
let eyes = []
let AriaStands;
let Ariasits;
let Ariacries;
let AriaX
let AriaY
let eraser
let roots = [];
let introbutton


//cover
let coverbgm
let timecover
let title
let tap
let opacity = 0

//forest
let timeforest
let greyAria
let greyAriacries
let blueAria
let fragment1

let blueAria_opacity


//flashback
let mouseCount = 0
let atRightPlace = false
let dogRightPlace = false
let fl1bkdgood
let fl1bkdbad
let arialooksup
let arialooksup2
let thoughtbubble
let ariahappy
let ariasuperhappy
let ariaexplaining
let fullheart
let doggy
let doggysad
let doggyleaves

let adult
let adultlookup
let ariaworried
let timeFL1
let flaskbackopacity
let timefl1
let fullheartopacity = 100
let fullheartopacitySpd
let adultspeed
let adultX
let adultopacity = 255
let brokenheart1

let piece1, piece2, piece3, piece4, piece5, piece6, piece7
let headX
let headY
let bodyX
let bodyY
let leg1X
let leg2X
let leg3X
let leg4X

let leg1Y
let leg2Y
let leg3Y
let leg4Y

let tailX
let tailY


let speechbubble = []

//forestscene2
let timeforest2
let fragment2

//flashback2
let slider;
let fl2bkdbad
let stage
let ariareachesout
let ariaback
let ariasurprise
let ariaback1
let ariashy
let flower
let flowernoeyes
let fl2mouseCount = 0
let a1, a2, a3, f1, f2, f3, f4
let n1, n2, n3, n4
let bystandercount = 0
let kids1
let kids2
let incoming
let kidX = 0
let kid2X
let kidXSpd = 10
let kidY
let kidYSpd = 10


// music variables
let horrorifying_bgm;

function preload() {

  preloadDelay(5000);

  //intro
  scene1bkd = loadImage("scene1bkd.jpg")

  Ariasits = loadImage("Ariasits.png")
  Ariacries = loadImage("Ariacries.png")
  AriaStands = loadImage("AriaStands.png")
  weirdo = loadImage("weirdo.png")
  eraser = loadImage("eraser.png")
  introbutton = loadImage("introbutton.png")

  //cover
  title = loadImage('title.png')
  tap = loadImage('tap.png')

  //coverbgm = loadSound('coverbgm.mps')
  //forest

  greyAria = loadImage("greyAria.png")
  blueAria = loadImage("blueAria.png");
  greyAriacries = loadImage("greyAriacries.png")
  fragment1 = loadImage("fragment1.png")

  //flashback1


  fl1bkdgood = loadImage('fl1bkdgood.png')
  fl1bkdbad = loadImage('fl1bkdbad.png')
  arialooksup = loadImage('arialooksup.png')
  arialooksup2 = loadImage('arialooksup2.png')
  thoughtbubble = loadImage('thoughtbubble.png')
  ariahappy = loadImage('ariahappy.png')
  ariasuperhappy = loadImage('ariasuperhappy.png')
  fullheart = loadImage('fullheart.png')
  doggy = loadImage('doggy.png')
  doggyleaves = loadImage('doggyleaves.png')
  adult = loadImage('adult.png')
  ariaworried = loadImage('ariaworried.png')
  adultlookup = loadImage('adultlookup.png')
  ariaexplaining = loadImage('ariaexplaining.png')
  brokenheart1 = loadImage('brokenheart1.png')
  doggysad = loadImage('doggysad.png')
  for (let i = 1; i < 9; i++) {
    speechbubble[i] = loadImage("word" + i + ".png");
  }
  piece1 = loadImage('doghead.png')
  piece2 = loadImage('dogleg1.png')
  piece3 = loadImage('dogleg2.png')
  piece4 = loadImage('dogbody.png')
  piece5 = loadImage('dogleg3.png')
  piece6 = loadImage('dogleg4.png')
  piece7 = loadImage('dogtail.png')

  //forestscene2
  fragment2 = loadImage('fragment2.png')

  //flashback2
  fl2bkdbad = loadImage('fl2bkdbad.png')
  ariareachesout = loadImage('ariareachesout.png')
  ariaback = loadImage('ariaback.png')
  ariaback1 = loadImage('ariaback1.png')
  ariasurprise = loadImage('ariasurprise.png')
  ariashy = loadImage('ariashy.png')
  flower = loadImage('flower.png')
  flowernoeyes = loadImage('flowernoeyes.png')
  a1 = loadImage('a1.png')
  a2 = loadImage('a2.png')
  a3 = loadImage('a3.png')
  f1 = loadImage('f1.png')
  f2 = loadImage('f2.png')
  f3 = loadImage('f3.png')
  f4 = loadImage('f4.png')
  n1 = loadImage('n1.png')
  n2 = loadImage('n2.png')
  n3 = loadImage('n3.png')
  kids1 = loadImage('kids1.png')
  kids2 = loadImage('kids2.png')
  incoming = loadImage('incoming.png')


  // music
  // horrorifying_bgm = loadSound('horrifying_bgm.wav')
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  select('#splash').hide();


  scene = 0

  //intro
  pg = createGraphics(windowWidth, windowHeight);
  pg.background(0, 0, 0, 25)
  AriaStands.resize(100, 150)
  Ariasits.resize(150, 150)
  Ariacries.resize(150, 150)
  weirdo.resize(100, 72)
  introbutton.resize(300, 300 / 4)
  AriaX = width / 2
  AriaY = height - 200


  Ariatrembles = new Jitter(AriaX, AriaY + 10)

  //cover
  pg1 = createGraphics(windowWidth, windowHeight);
  pg1.background(0)
  title.resize(500, 300)
  tap.resize(300, 100)

  //forest
  pg1 = createGraphics(windowWidth, windowHeight);
  pg1.background(0)
  greyAria.resize(180, 260)
  blueAria.resize(180, 260)
  greyAriacries.resize(150, 150)
  fragment1.resize(60, 60)

  //flashback
  adultX = 0
  adultspeed = 100
  arialooksup.resize(130, 210)
  arialooksup2.resize(130, 210)
  ariahappy.resize(160, 220)
  ariasuperhappy.resize(130, 210)
  fullheart.resize(80, 70)
  brokenheart1.resize(80, 70)
  thoughtbubble.resize(170, 140)
  ariaworried.resize(130, 210)
  ariaexplaining.resize(130, 210)
  doggy.resize(530, 260)
  doggysad.resize(530, 260)
  doggyleaves.resize(530, 260)
  adult.resize(200, 300)
  adultlookup.resize(200, 300)
  piece1.resize(300, 250)
  piece2.resize(150, 150)
  piece3.resize(150, 150)
  piece4.resize(400, 250)
  piece5.resize(150, 150)
  piece6.resize(150, 150)
  piece7.resize(150, 150)


  speechbubble[1].resize(160, 130);
  speechbubble[2].resize(200, 140);
  speechbubble[3].resize(160, 130);
  speechbubble[4].resize(160, 130);
  speechbubble[5].resize(160, 130);
  speechbubble[6].resize(160, 130);
  speechbubble[7].resize(160, 130);
  speechbubble[8].resize(100, 70);


  dogbody = new Cloud(width / 3, height / 10)
  dogleg1 = new Cloud(width / 3, height / 5 + 50)
  dogleg2 = new Cloud(width / 2, height / 5 + 10)
  dogleg3 = new Cloud(width / 3 - 130, height / 5 - 40)
  dogleg4 = new Cloud(width / 3 - 100, height / 4)

  dogtail = new Cloud(width / 2 + 130, height / 4 - 30)
  doghead = new Cloud(width / 3 - 50, height / 9)

  bodyX = width / 3
  bodyY = height / 10 - 70

  headX = bodyX - 100
  headY = bodyY
  leg1X = bodyX - 100
  leg2X = bodyX - 30
  leg3X = bodyX + 200
  leg4X = bodyX + 250

  leg1Y = bodyY + 120
  leg2Y = bodyY + 120
  leg3Y = bodyY + 100
  leg4Y = bodyY + 100

  tailX = bodyX + 270
  tailY = bodyY

  //forestscene2
  fragment2.resize(60, 60)

  //flashback2
  slider = createSlider(0, 360, 0, 40);
  ariareachesout.resize(150, 150)
  ariaback.resize(150, 150)
  ariaback1.resize(150, 150)
  ariashy.resize(190, 160)
  ariasurprise.resize(160, 160)
  flower.resize(90, 90)
  flowernoeyes.resize(80, 80)
  a1.resize(130, 100)
  a2.resize(130, 100)
  a3.resize(130, 100)
  f1.resize(100, 60)
  f2.resize(100, 60)
  f3.resize(120, 80)
  f4.resize(150, 100)
  n1.resize(130, 100)
  n2.resize(130, 100)
  n3.resize(130, 100)
  fl2bkdbad.resize(width, height + 190)
  kids1.resize(300, 200)
  kids2.resize(300, 200)
  incoming.resize(width, height)
  stage = 1
  kidY = height
  kid2X = width
}
function draw() {
  if (scene == 0) {
    coverpage()
  } else if (scene == 1) {
    intropage()
  }
  else if (scene == 2) {
    forestscene()
  } else if (scene == 3) {
    flashback1()
  } else if (scene == 4) {
    forestscene2()
  } else if (scene == 5) {
    flashback2()
  }

}

function coverpage() {

  timecover = millis()
  opacity = map(timecover, 0, 10000, 0, 255)

  background(0);
  tint(255, opacity)
  //coverbgm.play()
  image(title, width / 2 - 250, height / 4)
  image(tap, width / 2 - 140, height * 3 / 4)


  if (opacity >= 200 && mouseIsPressed) {
    scene = 1
  }


}

function intropage() {
  background(10);
  noCursor()
  image(pg, 0, 0);
  time = millis() - timecover

  // // music 
  // if (!horrorifying_bgm.isPlaying()) {
  //   horrorifying_bgm.play()
  // }


  //eraser
  image(eraser, mouseX - 40, mouseY - 40, 70, 70)

  // draw the root
  root = new Root(random(width), random(height * 3 / 4, height * 3.8 / 4));
  roots.push(root);

  for (let i = 0; i < roots.length; i++) {
    root = roots[i];
    root.display();
    root.move();
  }

  ariaScared()
  throwTags()

  if (time > 10000) {
    image(introbutton, width - 300, height - 100)

    if (mouseX >= width - 300 && mouseX <= width && mouseY >= height - 100 && mouseY <= height) {
      scene = 2
    }
  }


}

function throwTags() {
  frameRate(20)
  pg.image(weirdo, random(width), random(height / 2), 100, 90)
}

function mouseDragged() {
  pg.fill(10)
  pg.circle(mouseX, mouseY, 100)
}

function ariaScared() {
  Ariatrembles.move()
  Ariatrembles.display()
}

function forestscene() {
  background(0);
  noCursor()
  image(pg1, 0, 0);
  timeforest = millis() - timecover - time

  if (timeforest > 0 && timeforest <= 10000) {

    blueAria_opacity = map(timeforest, 0, 10000, 255, 0)
    push()
    tint(255)
    image(greyAria, width / 2 - 70, height / 2)
    tint(255, blueAria_opacity)
    image(blueAria, width / 2 - 70 - timeforest / 30, height / 2)
    pop()
  }
  else if (timeforest >= 10000 && timeforest <= 15000) {
    image(greyAriacries, width / 2 - 70, height / 2 + 100)
    drawCocoon()
  } else if (timeforest >= 15000) {
    image(greyAriacries, width / 2 - 70, height / 2 + 100)
    drawCocoon()

    push()
    tint(255, 60 + frameCount % 255)
    image(fragment1, 100, height - 200)
    pop()


    if (scene == 2 && mouseX > 0 && mouseX < 200 && mouseY > height - 300 && mouseY < height - 100) {
      cursor('pointer');
    } else {
      cursor(ARROW)
    }

    if (mouseX > 0 && mouseX < 200 && mouseY > height - 300 && mouseY < height - 100 && mouseIsPressed) {
      scene = 3
    }


  }


  // // draw the root
  // root = new Root(width * 1 / 2, random(height * 3 / 4, height * 3.4 / 4));
  // roots.push(root);

  // for (let i = 0; i < roots.length; i++) {
  //   root = roots[i];
  //   root.displayForestScene();
  //   root.move();
  // }

}

function drawCocoon() {

  pg1.strokeWeight(5)
  pg1.stroke(255, 255, 255, 30)
  pg1.noFill()
  for (let i = 0; i < 1; i++) {
    pg1.circle(random(width / 2 - 40, width / 2 + 35), random(height / 2 + 80, height / 2 + 150), random(100, 200))
  }
}


function flashback1() {
  background(220);


  push()
  timeFL1 = millis() - time - timecover - timeforest
  flashbackopacity = map(timeFL1, 0, 10000, 0, 255)
  tint(255, flashbackopacity)
  image(fl1bkdgood, 0, 0, windowWidth, windowHeight)
  //fl1bkdgood.filter(GRAY)
  //image(fullheart,width*8/10,height/10)


  pop()

  push()
  tint(255, flashbackopacity)
  dogtail.over()
  dogtail.update()
  dogtail.tail()

  dogbody.over()
  dogbody.update()
  dogbody.body()

  doghead.over()
  doghead.update()
  doghead.head()

  dogleg1.over()
  dogleg1.update()
  dogleg1.leg1()


  dogleg2.over()
  dogleg2.update()
  dogleg2.leg2()


  dogleg3.over()
  dogleg3.update()
  dogleg3.leg3()



  dogleg4.over()
  dogleg4.update()
  dogleg4.leg4()

  pop()

  if (
    doghead.x == headX && doghead.y == headY &&

    dogleg1.x == leg1X && dogleg1.y == leg1Y &&

    dogleg2.x == leg2X && dogleg2.y == leg2Y &&

    dogleg3.x == leg3X && dogleg3.y == leg3Y &&

    dogleg4.x == leg4X && dogleg4.y == leg4Y &&
    dogbody.x == bodyX && dogbody.y == bodyY &&
    dogtail.x == tailX && dogtail.y == tailY

  ) {

    //the heart appears

    let fullheartopacitySpd = 5
    fullheartopacity += fullheartopacitySpd

    push()
    tint(255, 60 + frameCount % 255)
    image(fullheart, 100, height - 200)
    pop()


    //during the heart opacity increase,Aria meet the dog
    if (fullheartopacity < 230) {
      image(ariasuperhappy, width / 2 + 50, height - 340)
      image(doggy, headX, headY - 5)
    }

    //when the heart is at its brightest, adult moves,and aria becomes unhappy 
    else if (fullheartopacity >= 230) {
      fullheartopacity = 230
      // let filterVal = map(adultX, 0, width / 3 - 50, 0, 1)
      // adultX += adultspeed

      // if (adultX > width / 3 - 150) {
      //   atRightPlace = true;
      //   adultspeed = 0
      // }
      let filterVal
      if (atRightPlace == false) {
        adultX += adultspeed
        filterVal = map(adultX, 0, width / 3 - 50, 0, 1)

        image(ariasuperhappy, width / 2 + 50, height - 350)
        image(doggy, headX, headY - 5)

        push()
        tint(255, adultopacity)
        image(adult, adultX, height / 2)
        pop()
      }

      if (adultX > width / 3 - 150) {
        atRightPlace = true;
        adultspeed = 0
      }

      fl1bkdgood.filter(GRAY)
      fl1bkdgood.filter(BLUR, filterVal)

    }

    //when the clouds are not at their correct places
  } else {

    if (scene == 3 && mouseX >= headX && mouseX <= tailX + 50 && mouseY >= tailY && mouseY <= tailY + 100) {
      cursor('pointer')
    } else {
      cursor(ARROW)
    }
    if (mouseIsPressed) {
      tint(255, flashbackopacity)
      image(ariahappy, width / 2 + 50, height - 330)
      image(thoughtbubble, width / 2 + 120, height / 2 - 20)

    } else {
      push()
      tint(255, flashbackopacity)
      image(arialooksup, width / 2 + 50, height - 340)
      image(thoughtbubble, width / 2 + 120, height / 2 - 120)
      pop()
    }
  }

  if (atRightPlace == true) {
    mouseCount++
    if (mouseCount <= 3) {
      //aria!!
      image(speechbubble[1], adultX + 150, height / 2 - 100)

      push()
      tint(255, adultopacity)
      image(adult, adultX, height / 2)
      pop()
      image(doggy, headX, headY - 5)
      image(ariasuperhappy, width / 2 + 50, height - 350)
    } else if (mouseCount <= 6) {
      //where have you been
      image(speechbubble[2], adultX + 150, height / 2 - 100)

      push()
      tint(255, adultopacity)
      image(adult, adultX, height / 2)
      pop()
      image(doggy, headX, headY - 5)
      image(ariasuperhappy, width / 2 + 50, height - 350)
    } else if (mouseCount <= 9) {
      // i played with doggy
      image(speechbubble[3], adultX + 350, height / 2 - 50)
      image(adult, adultX, height / 2)
      image(doggy, headX, headY - 5)
      image(ariaexplaining, width / 2 + 50, height - 350)
    } else if (mouseCount <= 15) {
      // a doggy?
      image(speechbubble[4], adultX + 150, height / 2 - 100)
      image(adultlookup, adultX, height / 2)
      image(doggy, headX, headY - 5)
      image(ariaexplaining, width / 2 + 50, height - 350)

    } else if (mouseCount <= 20) {
      // they are just some clouds. no doggy
      image(speechbubble[5], adultX + 150, height / 2 - 100)
      image(adult, adultX, height / 2)
      image(doggysad, headX, headY - 5)
      image(ariaworried, width / 2 + 50, height - 350)
    } else if (mouseCount <= 24) {
      // no there is a doggy
      image(speechbubble[6], adultX + 350, height / 2 - 70)
      image(adult, adultX, height / 2)
      image(doggysad, headX, headY - 5)
      image(ariaworried, width / 2 + 50, height - 350)
    } else if (mouseCount <= 30) {
      // you are trash
      image(speechbubble[7], adultX + 150, height / 2 - 100)
      image(adult, adultX, height / 2)
      image(doggysad, headX, headY - 5)
      image(ariaworried, width / 2 + 50, height - 350)

    } else if (mouseCount > 30) {
      //..

      // rect(0, 0, width, height)
      image(fl1bkdbad, 0, 0, windowWidth, windowHeight)
      image(speechbubble[8], adultX + 350, height / 2 - 50)

      image(doggyleaves, headX, headY - 5)
      image(arialooksup2, width / 2 + 50, height - 340)

      fullheartopacity = 0
      image(brokenheart1, 100, height - 200)
      if (mouseIsPressed) {
        scene = 4
      }
    }
  }
}



function mousePressed() {
  doghead.pressed()
  dogleg1.pressed()
  dogleg2.pressed()
  dogleg3.pressed()
  dogleg4.pressed()
  dogbody.pressed()
  dogtail.pressed()


  //console.log(mouseX + "," + mouseY)
}

function mouseReleased() {
  doghead.released()

  dogleg1.released()
  dogleg2.released()
  dogleg3.released()
  dogleg4.released()
  dogbody.released()
  dogtail.released()
}



// draggable class learned from a coding train sketch https://editor.p5js.org/codingtrain/sketches/U0R5B6Z88



class Cloud {
  constructor(x, y) {
    this.dragging = false;
    this.rollover = false;
    this.x = x;
    this.y = y;
    this.xoff = 0;
    this.yoff = 0;
  }

  over() {
    if (mouseX > this.x && mouseX < this.x + 200 && mouseY > this.y && mouseY < this.y + 180) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update() {
    if (this.dragging) {
      this.x = mouseX + this.xoff;
      this.y = mouseY + this.yoff;
    }
  }

  head() {
    image(piece1, this.x, this.y)
    // //37 19
    if (this.x > headX - 100 && this.x < headX + 100) {
      this.x = headX
    }
    if (this.y > headY - 100 && this.y < headY + 100) {
      this.y = headY
    }
  }

  leg1() {
    image(piece2, this.x, this.y)
    //54 168
    if (this.x > leg1X - 100 && this.x < leg1X + 100) {
      this.x = leg1X
    }
    if (this.y > leg1Y - 100 && this.y < leg1Y + 100) {
      this.y = leg1Y
    }
  }
  leg2() {
    image(piece3, this.x, this.y)
    //132 177
    if (this.x > leg2X - 100 && this.x < leg2X + 100) {
      this.x = leg2X
    }
    if (this.y > leg2Y - 100 && this.y < leg2Y + 100) {
      this.y = leg2Y
    }
  }
  body() {

    image(piece4, this.x, this.y)
    //183 53
    if (this.x > bodyX - 100 && this.x < bodyX + 100) {
      this.x = bodyX
    }
    if (this.y > bodyY - 100 && this.y < bodyY + 100) {
      this.y = bodyY
    }
  }
  leg3() {
    image(piece5, this.x, this.y)
    //372 169
    if (this.x > leg3X - 100 && this.x < leg3X + 100) {
      this.x = leg3X
    }

    if (this.y > leg3Y - 100 && this.y < leg3Y + 100) {
      this.y = leg3Y
    }
  }
  leg4() {
    image(piece6, this.x, this.y)
    //427 162

    if (this.x > leg4X - 100 && this.x < leg4X + 100) {
      this.x = leg4X
    }

    if (this.y > leg4Y - 100 && this.y < leg4Y + 100) {
      this.y = leg4Y
    }
  }
  tail() {
    image(piece7, this.x, this.y)
    //443,38

    if (this.x > tailX - 100 && this.x < tailX + 100) {
      this.x = tailX
    }

    if (this.y > tailY - 100 && this.y < tailY + 100) {
      this.y = tailY
    }
  }


  pressed() {
    if (mouseX > this.x && mouseX < this.x + 400 && mouseY > this.y && mouseY < this.y + 180) {
      this.dragging = true;
      this.xoff = this.x - mouseX;
      this.yoff = this.y - mouseY;
    }
  }

  released() {

    this.dragging = false;
  }
}


function forestscene2() {
  background(0);
  image(pg1, 0, 0);
  timeforest2 = millis() - timecover - time - timeforest - timeFL1

  if (timeforest2 > 0 && timeforest2 <= 5000) {

    image(greyAriacries, width / 2 - 70, height / 2 + 100)
    drawCocoon()
    image(fragment1, 100, height - 200)
  }
  else if (timeforest2 >= 5000) {
    image(greyAriacries, width / 2 - 70, height / 2 + 100)
    drawCocoon()

    push()
    tint(255, 60 + frameCount % 255)
    image(fragment2, width / 2 + 400, height - 200)
    pop()
    if (mouseIsPressed) {
      scene = 5
    }
    // if (mouseX > width / 2 + 300 && mouseX < width / 2 + 500 && mouseY > height - 300 && mouseY < height - 100 && mouseIsPressed) {
    //   scene = 5
    // }
  }
}

function flashback2() {

  background(105, 60)

  if (fl2mouseCount >= 7) {

    slider.position(width / 2 - 70, 10);
    slider.style('width', '80px');

  }
  swap()

}
function swap() {

  let val = slider.value();

  if (val == 0) {
    ariaworld()
  } if (val == 360) {

    bystanderpov()
  }
}
function bystanderpov() {

  filter(GRAY)
  image(fl2bkdbad, 0, -100)
  if (scene == 5) {
    bystandercount++
  }

  kidX += kidXSpd
  kid2X -= kidXSpd
  kidY -= kidYSpd
  if (bystandercount >= 1 && bystandercount < 20) {

    image(kids1, width - 400, height - 200)
    image(kids2, width / 2 - 500, height - 300)
    image(ariaback, width / 2 - 150, height / 2)
    image(flowernoeyes, width / 2 - 50, height / 2 + 20)
    image(n1, width / 2 - 200, height / 2 - 80)
  } if (bystandercount >= 20 && bystandercount < 30) {

    image(kids1, width - 400, height - 200)
    image(kids2, width / 2 - 500, height - 300)
    image(flowernoeyes, width / 2 - 50, height / 2 + 20)
    image(ariaback1, width / 2 - 150, height / 2)

    image(n2, width / 2 - 200, height / 2 - 80)
  } if (bystandercount >= 30) {


    if (kidY == height / 2) {
      kidXSpd = 0
      kidYSpd = 0
    }
    image(kids2, kidX, kidY)
    image(kids1, kid2X, kidY)
    console.log(kidX, kidY)


    image(flowernoeyes, width / 2 - 50, height / 2 + 20)
    image(ariaback1, width / 2 - 150, height / 2)
    image(n3, width / 2 - 200, height / 2 - 80)
  }

}


function ariaworld() {
  image(fl2bkdbad, 0, -100)

  function zero() {
    image(ariareachesout, width / 2 - 150, height / 2)
    image(flower, width / 2, height / 2 + 70)
  }
  function one() {

    image(ariareachesout, width / 2 - 150, height / 2)
    image(flower, width / 2, height / 2 + 70)
    image(a1, width / 2 - 150, height / 2 - 100)
  }
  function two() {

    image(ariareachesout, width / 2 - 150, height / 2)
    image(flower, width / 2, height / 2 + 70)
    image(f1, width / 2 + 30, height / 2 + 10)
  }
  function three() {

    image(ariareachesout, width / 2 - 150, height / 2)
    image(flower, width / 2, height / 2 + 70)
    image(a2, width / 2 - 150, height / 2 - 100)
  }
  function four() {

    image(ariareachesout, width / 2 - 150, height / 2)
    image(flower, width / 2, height / 2 + 70)
    image(a3, width / 2 - 150, height / 2 - 100)
  }
  function five() {
    image(ariasurprise, width / 2 - 150, height / 2)
    image(flower, width / 2, height / 2 + 70)
    image(f2, width / 2 + 30, height / 2 + 10)
  }
  function six() {
    image(ariasurprise, width / 2 - 150, height / 2)
    image(flower, width / 2, height / 2 + 70)
    image(f3, width / 2 + 30, height / 2 + 10)
  }
  function seven() {
    image(ariashy, width / 2 - 150, height / 2)
    image(flower, width / 2, height / 2 + 70)
    image(f4, width / 2 + 30, height / 2 - 8)
    push()
    tint(255, 60 + frameCount % 255)
    image(fullheart, 100, height - 200)
    pop()
  }
  if (stage == 1) {
    zero();
  } else if (stage == 2) {
    one();
  } else if (stage == 3) {
    two();
  } else if (stage == 4) {
    three();
  } else if (stage == 5) {
    four();
  } else if (stage == 6) {
    five();
  } else if (stage == 7) {
    six();
  } else if (stage == 8) {
    seven();
  }


}

function mouseClicked() {
  if (scene == 5) {
    fl2mouseCount++
  }

  if (fl2mouseCount == 1) {
    stage = 1
  } else if (fl2mouseCount == 3) {
    stage = 3
  } else if (fl2mouseCount == 2) {
    stage = 2
  } else if (fl2mouseCount == 4) {
    stage = 4
  } else if (fl2mouseCount == 5) {
    stage = 5
  } else if (fl2mouseCount == 6) {
    stage = 6
  } else if (fl2mouseCount == 7) {
    stage = 7
  }

  if (stage == 1) {
    stage = 2
  } else if (stage == 2) {
    stage = 3
  } else if (stage == 3) {
    stage = 4
  } else if (stage == 4) {
    stage = 5
  } else if (stage == 5) {
    stage = 6
  } else if (stage == 6) {
    stage = 7
  } else if (stage == 7) {
    stage = 8
  }
  console.log(fl2mouseCount)
}

