//inspiration for the roots coming from https://openprocessing.org/sketch/1156703

//current bugs:
//fl1 conversation part, adult & aria superhappy & doggy莫名奇妙出现
//can't switch to scene 5，the screen frozes, no bugs

//tuesday to dos:
//fl1: add doggy disappear into an ordinary cloud
//finish the flower conversation quickly


// hover over
// sequence between the first two scenes

//如果另一个碎片的x y > m
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
let timeFL2
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
let kidX
let kid2X
let kidXSpd = 10
let kidY
let kidYSpd = 10
let bulb
let kidword

//flashback2b
let timeFL2b
let ariano
let bully1
let bully2
let bully3
let brokenheart2
let twobtimer

//forestscene3
let timeforest3
let fragment3

//flashback3
let timeFL3
let dogreprise
let flowerreprise
let flower_opacity
let dog_opacity
let greyAriaL
let greyAriaR
let greyAriaUp
let upvalue
let finalestickers
let g
let b
let finalehrt
let finalehrtpc
let finalebkdval

//coda
let coda

// music variables
let intro_weirdo
let aria_motif1
let aria_nervous
let aria_heartbeat
let aria_ambience
let aria_resist
let aria_finale


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
  bulb = loadImage('bulb.png')
  kidword = loadImage('kidword.png')

  //flashback2b
  ariano = loadImage('ariano.png')
  bully1 = loadImage('bully1.png')
  bully2 = loadImage('bully2.png')
  bully3 = loadImage('bully3.png')
  brokenheart2 = loadImage('brokenheart2.png')

  //forestscene3
  fragment3 = loadImage("fragment3.png")
  // music
  intro_weirdo = loadSound('intro_weirdo.wav')
  aria_motif1 = loadSound('aria_motif1.wav')
  aria_nervous = loadSound('aria_nervous.wav')
  aria_heartbeat = loadSound('aria_heartbeat.wav')
  aria_ambience = loadSound('aria_ambience.wav')
  aria_resist = loadSound('aria_resist.wav')
  aria_finale = loadSound('aria_finale.wav')


  //flashback3

  dogreprise = loadImage("dogreprise.png")
  flowerreprise = loadImage("flowerreprise.png")
  greyAriaL = loadImage("greyAriaL.png")
  greyAriaR = loadImage("greyAriaR.png")
  greyAriaUp = loadImage("greyAriaUp.png")

  //finale 

  puzzle1 = loadImage('fragment1.png')
  puzzle2 = loadImage('fragment3.png')
  puzzle3 = loadImage('fragment2.png')
  finalestickers = loadImage('finalestickers.png')
  finalehrt = loadImage('finalehrt.png')
  finalehrtpc = loadImage('finalehrtpc.png')

  //the very end, coda
  coda = loadImage('coda.png')

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
  // pg1 = createGraphics(windowWidth, windowHeight);
  // pg1.background(0)
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
  dogleg1 = new Cloud(width / 3 + 60, height / 5 + 100)
  dogleg2 = new Cloud(width / 2 + 50, height / 5 + 130)
  dogleg3 = new Cloud(width / 3 - 230, height / 5 - 40)
  dogleg4 = new Cloud(width / 3 - 100, height / 4 + 50)

  dogtail = new Cloud(width / 2 + 230, height / 4 - 30)
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
  kids1.resize(200, 100)
  kids2.resize(200, 100)
  incoming.resize(width, height)
  stage = 1
  kidX = width - 400
  kidY = height - 200
  kid2X = width / 2 - 500
  bulb.resize(160, 110)
  kidword.resize(160, 110)
  //flashback2b

  ariano.resize(400, 400)
  bully1.resize(800, 500)
  bully2.resize(800, 500)
  bully3.resize(800, 500)
  brokenheart2.resize(80, 70)
  Ariashakes = new Jitter(width / 2 - 180, height / 2 - 200)

  //forestscene3
  fragment3.resize(80, 70)

  //flashback3b

  dogreprise.resize(230, 350)
  flowerreprise.resize(90, 90)
  greyAriaL.resize(180, 260)
  greyAriaR.resize(180, 260)
  greyAriaUp.resize(180, 260)

  // finale
  pg3 = createGraphics(windowWidth, windowHeight);
  pg3.background(69, 74, 105)
  puzzle1.resize(300, 300)
  puzzle2.resize(300, 300)
  puzzle3.resize(300, 300)
  finalestickers.resize(width, height)
  finalehrt.resize(550, 550)
  finalehrtpc.resize(560, 560)

  //coda
  coda.resize(width, height)


}
function draw() {
  if (scene == 0) {
    coverpage()
  } else if (scene == 1) {
    intropage()

    if (!intro_weirdo.isPlaying()) {
      intro_weirdo.play()
    }
  }
  else if (scene == 2) {
    forestscene()
    intro_weirdo.stop()

    if (!aria_motif1.isPlaying()) {
      aria_motif1.play()
    }

  } else if (scene == 3) {

    flashback1()
    if (aria_motif1.isPlaying()) {
      aria_motif1.stop()
    }
    if (!aria_nervous.isPlaying()) {
      aria_nervous.play()
    }

  } else if (scene == 4) {
    forestscene2()


    if (aria_nervous.isPlaying()) {
      aria_nervous.stop()
    }

    if (!aria_ambience.isPlaying()) {
      aria_ambience.play()
    }
  } else if (scene == 5) {
    flashback2()
    aria_ambience.stop()
    if (!aria_motif1.isPlaying()) {
      aria_motif1.play()
    }
  } else if (scene == 6) {
    flashback2b()
    aria_motif1.stop()
    if (!aria_heartbeat.isPlaying()) {
      aria_heartbeat.play()
    }
  } else if (scene == 7) {
    forestscene3()
    aria_heartbeat.stop()
    if (!aria_ambience.isPlaying()) {
      aria_ambience.play()
    }
  } else if (scene == 8) {
    flashback3()

  } else if (scene == 9) {
    finale()
    aria_ambience.stop()
    if (!aria_resist.isPlaying()) {
      aria_resist.play()
    }
  } else if (scene == 10) {
    if (aria_resist.isPlaying()) {
      aria_resist.stop()
    }

    if (!aria_finale.isPlaying()) {
      aria_finale.play()
    }
    endpage()
  }


}

function coverpage() {
  noCursor()
  timecover = millis()
  opacity = map(timecover, 0, 10000, 0, 255)

  background(29, 46, 74);
  tint(255, opacity)
  //coverbgm.play()
  image(title, width / 2 - 250, height / 4)
  image(tap, width / 2 - 140, height * 3 / 4)

  if (opacity >= 200) {
    cursor('pointer.png')
  }
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
      cursor('pointer.png')
    }
    if (mouseIsPressed && mouseX >= width - 300 && mouseX <= width && mouseY >= height - 100 && mouseY <= height) {
      scene = 2
    }
  }


}

function throwTags() {
  frameRate(20)
  pg.image(weirdo, random(width), random(height / 2), 100, 90)
}

function mouseDragged() {
  //eraser interaction in the intro
  if (scene == 1) {
    pg.fill(10)
    pg.circle(mouseX, mouseY, 100)
  }

  //sewing interaction in the finale
  if (scene == 9) {
    let px = pmouseX;
    let py = pmouseY
    pg3.strokeWeight(2);
    pg3.stroke(152, 215, 217);
    pg3.line(mouseX, mouseY, px, py);
  }
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
    image(greyAriacries, width / 2 - 70, height / 2 + 100)
    drawCocoon()
    // blueAria_opacity = map(timeforest, 0, 10000, 255, 0)
    // push()
    // tint(255)
    // image(greyAria, width / 2 - 70, height / 2)
    // tint(255, blueAria_opacity)
    // image(blueAria, width / 2 - 70 - timeforest / 30, height / 2)
    // pop()
  }
  else if (timeforest >= 10000) {
    image(greyAriacries, width / 2 - 70, height / 2 + 100)
    drawCocoon()

    push()
    tint(255, 60 + frameCount % 255)
    image(fragment1, 100, height - 200)
    pop()


    if (scene == 2 && mouseX > 0 && mouseX < 200 && mouseY > height - 300 && mouseY < height - 100) {
      cursor('pointer.png')
    } else {
      noCursor()
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

  dogtail.tailover()
  dogtail.update()
  dogtail.tail()

  dogbody.bodyover()
  dogbody.update()
  dogbody.body()

  doghead.headover()
  doghead.update()
  doghead.head()

  dogleg1.leg1over()
  dogleg1.update()
  dogleg1.leg1()


  dogleg2.leg2over()
  dogleg2.update()
  dogleg2.leg2()


  dogleg3.leg3over()
  dogleg3.update()
  dogleg3.leg3()



  dogleg4.leg4over()
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
    noCursor()
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
    if (flashbackopacity > 200) {
      cursor('pointer.png')
    } else {
      noCursor()
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
  if (atRightPlace == false) {

  } else if (atRightPlace == true) {

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
      image(speechbubble[6], adultX + 250, height / 2 - 70)
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
      cursor('pointer.png')
      image(fl1bkdbad, 0, 0, windowWidth, windowHeight)
      image(speechbubble[8], adultX + 230, height / 2)

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

  if (scene == 3) {

    doghead.headpressed()
    dogleg1.leg1pressed()
    dogleg2.leg2pressed()
    dogleg3.leg3pressed()
    dogleg4.leg4pressed()
    dogbody.bodypressed()
    dogtail.tailpressed()
  }
  //console.log(mouseX + "," + mouseY)
  if (scene == 9) {

    g = map(mouseY, 0, windowWidth, 150, 255);
    b = map(mouseY, 0, windowWidth, 39, 255);
    pg3.fill(240, g, b);
    pg3.noStroke();

    pg3.ellipse(mouseX, mouseY, 15, 35);
    pg3.ellipse(mouseX, mouseY, 35, 15);
    if (mouseY >= height / 2 + 100 + 275) {
      push()
      pg3.imageMode(CENTER)
      pg3.image(finalehrt, width / 2, height / 2 + 100)
      pop()
    }
  }

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


///new cloud class


class Cloud {
  constructor(x, y) {
    this.dragging = false;
    this.rollover = false;
    this.x = x;
    this.y = y;
    this.headw = 300;
    this.headh = 250;
    this.leg1w = 150;
    this.leg1h = 150;
    this.leg2w = 150;
    this.leg2h = 150;
    this.leg3w = 150;
    this.leg3h = 150;
    this.leg4w = 150;
    this.leg4h = 150;
    this.bodyw = 400;
    this.bodyh = 250;
    this.tailw = 150;
    this.tailh = 150
    this.xoff = 0;
    this.yoff = 0;

  }

  headover() {
    if (mouseX > this.x && mouseX < this.x + this.headw && mouseY > this.y && mouseY < this.y + this.headh) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }


  leg1over() {
    if (mouseX > this.x && mouseX < this.x + this.leg1w && mouseY > this.y && mouseY < this.y + this.leg1h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  leg2over() {
    if (mouseX > this.x && mouseX < this.x + this.leg2w && mouseY > this.y && mouseY < this.y + this.leg2h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }


  leg3over() {
    if (mouseX > this.x && mouseX < this.x + this.leg3w && mouseY > this.y && mouseY < this.y + this.leg3h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }


  leg4over() {
    if (mouseX > this.x && mouseX < this.x + this.leg4w && mouseY > this.y && mouseY < this.y + this.leg4h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  bodyover() {
    if (mouseX > this.x && mouseX < this.x + this.bodyw && mouseY > this.y && mouseY < this.y + this.bodyh) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  tailover() {
    if (mouseX > this.x && mouseX < this.x + this.tailw && mouseY > this.y && mouseY < this.y + this.tailh) {
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
    //imageMode(CENTER)
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
    //imageMode(CENTER)
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
    //imageMode(CENTER)
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
    //imageMode(CENTER)
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
    //imageMode(CENTER)
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
    //imageMode(CENTER)
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
    //imageMode(CENTER)
    image(piece7, this.x, this.y)
    //443,38

    if (this.x > tailX - 100 && this.x < tailX + 100) {
      this.x = tailX
    }

    if (this.y > tailY - 100 && this.y < tailY + 100) {
      this.y = tailY
    }
  }


  headpressed() {
    if (mouseX > this.x && mouseX < this.x + this.headw && mouseY > this.y && mouseY < this.y + this.headh) {
      this.dragging = true;
      this.xoff = this.x - mouseX;
      this.yoff = this.y - mouseY;
    }
  }
  leg1pressed() {
    if (mouseX > this.x && mouseX < this.x + this.leg1w && mouseY > this.y && mouseY < this.y + this.leg1h) {

      this.dragging = true;
      this.xoff = this.x - mouseX;
      this.yoff = this.y - mouseY;

    }
  }

  leg2pressed() {
    if (mouseX > this.x && mouseX < this.x + this.leg2w && mouseY > this.y && mouseY < this.y + this.leg2h) {

      this.dragging = true;
      this.xoff = this.x - mouseX;
      this.yoff = this.y - mouseY;

    }
  }


  leg3pressed() {
    if (mouseX > this.x && mouseX < this.x + this.leg3w && mouseY > this.y && mouseY < this.y + this.leg3h) {

      this.dragging = true;
      this.xoff = this.x - mouseX;
      this.yoff = this.y - mouseY;

    }
  }

  leg4pressed() {
    if (mouseX > this.x && mouseX < this.x + this.leg4w && mouseY > this.y && mouseY < this.y + this.leg4h) {

      this.dragging = true;
      this.xoff = this.x - mouseX;
      this.yoff = this.y - mouseY;

    }
  }

  tailpressed() {
    if (mouseX > this.x && mouseX < this.x + this.tailw && mouseY > this.y && mouseY < this.y + this.tailh) {

      this.dragging = true;
      this.xoff = this.x - mouseX;
      this.yoff = this.y - mouseY;

    }
  }

  bodypressed() {
    if (mouseX > this.x && mouseX < this.x + this.bodyw && mouseY > this.y && mouseY < this.y + this.bodyh) {

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
  noCursor()
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

    if (scene == 4 && mouseX > width / 2 + 300 && mouseX < width / 2 + 500 && mouseY > height - 300 && mouseY < height - 100) {
      cursor('pointer.png')
    } else {
      noCursor()
    }

    if (scene == 4 && mouseX > width / 2 + 300 && mouseX < width / 2 + 500 && mouseY > height - 300 && mouseY < height - 100 && mouseIsPressed) {
      scene = 5
    }
    // if (mouseIsPressed) {
    //   scene = 5
    // }
    // if (mouseX > width / 2 + 300 && mouseX < width / 2 + 500 && mouseY > height - 300 && mouseY < height - 100 && mouseIsPressed) {
    //   scene = 5
    // }
  }
}

function flashback2() {

  background(105, 60)

  timeFL2 = millis() - time - timecover - timeforest - timeFL1 - timeforest2
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
  noCursor()
  filter(GRAY)
  image(fl2bkdbad, 0, -100)
  if (scene == 5) {
    bystandercount++
  }



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
  } if (bystandercount >= 30 && bystandercount < 60) {

    image(kids1, width - 400, height - 200)
    image(kids2, width / 2 - 500, height - 300)

    image(flowernoeyes, width / 2 - 50, height / 2 + 20)
    image(ariaback, width / 2 - 150, height / 2)
    image(n2, width / 2 - 200, height / 2 - 80)
    image(kidword, width - 400, height - 300)
  }
  if (bystandercount >= 60 && bystandercount < 90) {

    image(kids1, width - 400, height - 200)
    image(kids2, width / 2 - 500, height - 300)

    image(flowernoeyes, width / 2 - 50, height / 2 + 20)
    image(ariaback, width / 2 - 150, height / 2)
    image(n2, width / 2 - 200, height / 2 - 80)
    image(bulb, width / 2 - 500, height - 400)
  }
  if (bystandercount >= 90) {
    kidX -= kidXSpd
    kid2X += kidXSpd
    kidY -= kidYSpd
    image(kids1, kidX, kidY)
    image(kids2, kid2X, kidY)
    if (kidY <= height / 2 + 100) {
      kidXSpd = 0
      kidYSpd = 0
    }
    console.log(bystandercount)


    image(flowernoeyes, width / 2 - 50, height / 2 + 20)
    image(ariaback1, width / 2 - 150, height / 2)
    image(n3, width / 2 - 200, height / 2 - 80)

    scene = 6
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
    cursor('pointer.png')
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

}

function flashback2b() {
  background(183, 95, 82)
  noCursor()
  timeFL2b = millis() - time - timecover - timeforest - timeforest2 - timeFL1 - timeFL2

  //image(fl2bkdbad, 0, -100)
  // image(ariano, width / 2 - 180, height / 2 - 200)
  Ariashakes.move()
  Ariashakes.display()
  push()
  let bully1Val = 80 + frameCount % 255
  let bully2Val
  let bully3Val

  if (bully1Val >= 240) {
    bully2Val = 80 + (frameCount + 5000) % 255
    tint(255, bully2Val)
    image(bully2, width / 2 - 360, height / 2 - 250)

  } else {

    tint(255, bully1Val)
    image(bully1, width / 2 - 360, height / 2 - 250)
  }
  pop()
  if (timeFL2b >= 10000) {

    image(brokenheart2, 100, height - 200)
  }
  if (timeFL2b >= 13000) {
    scene = 7
  }

}

function forestscene3() {
  background(0);
  image(pg1, 0, 0);
  noCursor()
  timeforest3 = millis() - time - timecover - timeforest - timeforest2 - timeFL1 - timeFL2 - timeFL2b

  if (timeforest3 > 0 && timeforest3 <= 5000) {

    image(greyAriacries, width / 2 - 70, height / 2 + 100)
    drawCocoon()
    image(fragment1, 100, height - 200)
    image(fragment2, width / 2 + 400, height - 200)
  }
  else if (timeforest3 >= 5000) {
    image(greyAriacries, width / 2 - 70, height / 2 + 100)
    drawCocoon()

    push()
    tint(255, 60 + frameCount % 255)
    image(fragment3, width / 2 + 80, height - 200)
    pop()

    if (mouseIsPressed) {
      scene = 8
    }
    // if (scene == 7 && mouseX > width / 2 + 70 && mouseX < width / 2 + 90 && mouseY > height - 300 && mouseY < height - 100) {
    //   cursor('pointer.png')
    // } else {
    //   noCursor()
    // }
    // if (scene == 7 && mouseX > width / 2 + 70 && mouseX < width / 2 + 90 && mouseY > height - 300 && mouseY < height - 100 && mouseIsPressed) {
    //   scene = 8
    // }
  }
}

function flashback3() {
  background(0)
  noCursor()
  timeFL3 = millis() - time - timecover - timeforest - timeforest2 - timeFL1 - timeFL2 - timeFL2b - timeforest3


  if (timeFL3 > 0 && timeFL3 <= 8000) {

    blueAria_opacity = map(timeFL3, 0, 8000, 255, 0)
    push()
    tint(255)
    image(greyAria, width / 2 - 70, height / 2)
    tint(255, blueAria_opacity)
    image(blueAria, width / 2 - 70 - timeFL3 / 30, height / 2)
    pop()
  }
  else if (timeFL3 >= 8000 && timeFL3 <= 10000) {
    dog_opacity = map(timeFL3, 8000, 10000, 0, 235)
    image(greyAriaR, width / 2 - 70, height / 2 - 20)

    push()
    tint(255, dog_opacity)

    image(dogreprise, width / 2 + 70, height / 2 - 30)
    image(fragment1, width / 2 + 120, height / 2 + 80)
    pop()

  } else if (timeFL3 >= 10000 && timeFL3 <= 12000) {

    noCursor()
    flower_opacity = map(timeFL3, 10000, 12000, 0, 235)
    image(greyAriaL, width / 2 - 70, height / 2 - 20)

    push()
    tint(255, dog_opacity)

    image(dogreprise, width / 2 + 70, height / 2 - 30)
    image(fragment1, width / 2 + 120, height / 2 + 80)
    pop()
    push()
    tint(255, flower_opacity)
    image(flowerreprise, width / 2 - 90, height / 2 + 133)
    image(fragment2, width / 2 - 100, height / 2 + 163)
    pop()
  } else if (timeFL3 >= 12000 && timeFL3 < 15000) {

    //fragment3 appears
    flower_opacity = map(timeFL3, 10000, 12000, 0, 235)
    image(greyAriaUp, width / 2 - 70, height / 2 - 20)
    image(fragment3, width / 2 - 70, height / 2 + 10)
    //drawCocoon()
    push()
    tint(255, dog_opacity)

    image(dogreprise, width / 2 + 70, height / 2 - 30)
    image(fragment1, width / 2 + 120, height / 2 + 80)
    pop()
    push()
    tint(255, flower_opacity)
    image(flowerreprise, width / 2 - 90, height / 2 + 133)
    image(fragment2, width / 2 - 100, height / 2 + 163)
    pop()

  } else if (timeFL3 >= 15000) {
    //upvalue = timeFL3 / 4000
    background(0)
    cursor('pointer.png')
    flower_opacity = map(timeFL3, 10000, 12000, 0, 235)
    image(greyAriaUp, width / 2 - 70, height / 2 - 20)
    image(fragment3, width / 2 - 70, height / 2 + 10)
    //drawCocoon()
    push()
    tint(255, dog_opacity)

    image(dogreprise, width / 2 + 70, height / 2 - 30)
    image(fragment1, width / 2 + 120, height / 2 + 80)
    pop()

    push()
    tint(255, flower_opacity)
    image(flowerreprise, width / 2 - 90, height / 2 + 133)
    image(fragment2, width / 2 - 100, height / 2 + 163)
    pop()


    scene = 9
  }

  console.log(timeFL3, flower_opacity)

}


function finale() {
  background(0)
  image(pg3, 0, 0);
  image(finalestickers, 0, 0)


  push()
  imageMode(CENTER)
  tint(255, 100)
  image(finalehrtpc, width / 2, height / 2 + 100)

  pop()


  if (mouseY > height / 2 + 100 + 270 && mouseY < height && mouseIsPressed) {
    scene = 10
  }



  // image(puzzle1, width / 3 - 60, height / 4 + 100)
  // image(puzzle2, width / 2.5 - 60, height / 4 + 100)
  // image(puzzle3, width / 2 - 60, height / 4 + 100)
}

function endpage() {
  background(0)
  image(coda, 0, 0)
}