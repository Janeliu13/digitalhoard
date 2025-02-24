let imgFileNames = ['$26.00.jpg', '2YardsOfOrganza.jpg', '3620fujifilm.jpg', '3DScanRoom.jpg', 'acceptances.jpg', 'accountSign-ins.jpg', 'ahhhh.jpg', 'aliencat.jpg', 'ALL1N_Wallpaper.jpg', 'allAPPpasswords.jpg', 'allAPPpasswords2.jpg', 'angelaonthebigscreen.jpg', 'apartmentsNyc.jpg', 'BajaBlast.jpg', 'bananapile.jpg', 'BarneyGallery.jpg', 'bass.jpg', 'bathroombreak.jpg', 'bathroomPoster.jpg', 'bigwin.jpg', 'BM3730_sewing_machine.jpg', 'bottles.jpg', 'break.jpg', 'bug.jpg', 'casestudy.jpg', 'casio.jpg', 'CatGoneMissing.jpg', 'ccd020725.jpg', 'chanchan.jpg', 'ChinaVisaApp.jpg', 'chsID.jpg', 'class7score_85_.jpg', 'commonAppPlan.jpg', 'CopyOfaCopyOfaCopy.jpg', 'cosine_wave.jpg', 'cosmicsea.jpg', 'covidtest3132022.jpg', 'cvsCheckout.jpg', 'dearX.jpg', 'demure.jpg', 'deskspread.jpg', 'deskspread2.jpg', 'doge.jpg', 'egg.jpg', 'ego.jpg', 'emailtoevan.jpg', 'energyinteraction.jpg', 'EtymologyofArctic.jpg', 'excerptfrom.jpg', 'Fairmont.jpg', 'feelingblue.jpg', 'figuredrawing.jpg', 'figures2.jpg', 'fillthesejars.jpg', 'FinalPrez.jpg', 'floating.jpg', 'Frankie&straws.jpg', 'fruitstickers.jpg', 'Gangnum-Gu_trash.jpg', 'garbagedress2.jpg', 'getondiscord.jpg', 'glitch.jpg', 'glitch2.jpg', 'googlesearch.jpg', 'googletranslate.jpg', 'govofcanada.jpg', 'graffitiRoom.jpg', 'graffitiRoom2.jpg', 'granvilleisland.jpg', 'GST_registration_.jpg', 'hbdSky.jpg', 'hoard1.jpg', 'hoard2.jpg', 'hoard3.jpg', 'hoard4.jpg', 'hoard5.jpg', 'hoard6.jpg', 'hoard7.jpg', 'hoard8.jpg', 'holographic.jpg', 'hotsummer.jpg', 'icloudpassword2020.jpg', 'IMG_1652.jpg', 'IMG_1857.jpg', 'IMG_2388.jpg', 'IMG_3351.jpg', 'IMG_3445.jpg', 'IMG_3909.jpg', 'IMG_4187.jpg', 'IMG_5122.jpg', 'IMG_5241.jpg', 'IMG_5729.jpg', 'IMG_5767.jpg', 'IMG_5919.jpg', 'IMG_6392.jpg', 'IMG_6393.jpg', 'IMG_6691.jpg', 'IMG_6738.jpg', 'IMG_6739.jpg', 'IMG_6816.jpg', 'IMG_6997.jpg', 'IMG_7194.jpg', 'IMG_7197.jpg', 'IMG_7213.jpg', 'IMG_7227.jpg', 'IMG_7391.jpg', 'IMG_8292.jpg', 'IMG_8886.jpg', 'IMG_8887.jpg', 'IMG_8945.jpg', 'IMG_9008.jpg', 'IMG_9021.jpg', 'IMG_9051.jpg', 'IMG_9260.jpg', 'IMG_9689.jpg', 'IMG_9969.jpg', 'importantDoc2021.jpg', 'ineedsome.jpg', 'inkonshirt.jpg', 'insta_poll.jpg', 'instructions.jpg', 'Ishoulddosomething.jpg', 'jojosiwaCereal.jpg', 'keepOUT.jpg', 'kitty.jpg', 'lakers.jpg', 'LAX5dayplan.jpg', 'leftover.jpg', 'legs.jpg', 'letterTo_.jpg', 'LicenceOLD.jpg', 'lighter.jpg', 'lindatheworm.jpg', 'lizardskin.jpg', 'lol.jpg', 'MacSailing.jpg', 'Marchschedule.jpg', 'me&angela.jpg', 'memoresofMatsuko2.jpg', 'memoriesofMatsuko.jpg', 'memoriesofMatsuko3.jpg', 'memoriesofMatsuko4.jpg', 'memoriesofMatusko5.jpg', 'mindmap.jpg', 'mirrorOnmirrorONmirror.jpg', 'mirrorpic.jpg', 'mirrorselfie.jpg', 'mirrorselfie2.jpg', 'morningslikethis.jpg', 'mother1986.jpg', 'mo_An.jpg', 'myCube.jpg', 'nakedMoleRat.jpg', 'needs2beHumbled.jpg', 'newMAC.jpg', 'newyears&Dog.jpg', 'nightview.jpg', 'oldTV.jpg', 'oldTV2.jpg', 'omeglechat.jpg', "omwToTinaLee's.jpg", 'onFilm.jpg', 'onFilm2.jpg', 'password_dcclxviii.jpg', 'pastelonpaper.jpg', 'pastelonpaper2.jpg', 'PC11_99_.jpg', 'photoday2022.jpg', 'pink_tutu.jpg', 'poetry.jpg', 'polaroid2022.jpg', 'PortaPotty.jpg', 'postedbyiphone5.jpg', 'postedbyScarlett.jpg', 'preschoolGal.jpg', 'printedpapers.jpg', 'PSlightningGal.jpg', 'reportcard.jpg', 'Screenshot_2019-09-23_at_06.19.32M.jpg', 'secretrecoveryphrase.jpg', 'securitycam.jpg', 'selfie.jpg', 'selfieSky.jpg', 'sentfromMaiko.jpg', 'sheep.jpg', 'sheep3.jpg', 'sheplaystheguitar.jpg', 'sittingmeditation.jpg', 'sketchbook.jpg', 'sketchbook2.jpg', 'sketchbook4.jpg', 'sky07232011.jpg', 'slideroom.jpg', 'slurp.jpg', 'smartSEOregister.jpg', 'snoozing.jpg', 'somecityscape.jpg', 'SpanishConjugations.jpg', 'splatters.jpg', 'splatters2.jpg', 'spread2.jpg', 'squarehairsalon.jpg', 'storeinKor.jpg']
let bg
let imgFiles = []
let draggableImgs = []
let dragging = false
let dClick = false
let offsetX = -1, offsetY = -1
let selectIndex = -1;
let openIndex = -1
let randX,randY
let button
let state = 0
function preload() {
  for (let i = 0; i < imgFileNames.length; i++) {
    let img = loadImage("assets/" + imgFileNames[i])
    // img.resize(50,0)
    imgFiles.push(img)

  }
  bg = loadImage("assets/bg.jpg")


}
function setFullScreen(){
  let fs = fullscreen();  // 获取当前全屏状态
  if (!fs) {
    fullscreen(true);  // 如果没有全屏，则设置为全屏
  }
  button.hide()
  state=1
}
function setup() {
  // createCanvas(windowWidth, 0.65*windowWidth);
  createCanvas(windowWidth, windowHeight); // 创建一个占据整个屏幕的画布
  button  = createButton("Start")
  button.position(width/2,height/2)
  button.mouseClicked(setFullScreen)
  
  imageMode(CENTER)
  // image(bg, width / 2, height / 2, width, height)
  for (let i = 0; i < imgFiles.length; i++) {
    let dImg = new DraggableImg(imgFiles[i], imgFileNames[i])
    draggableImgs.push(dImg)
  }


}
function mouseClicked() {
  console.log((mouseX / width).toFixed(2), (mouseY / height).toFixed(2))
}
function draw() {
  if(state==1){
    image(bg, width / 2, height / 2, width, height)

    // background(220);
    for (let i = 0; i < draggableImgs.length; i++) {
      draggableImgs[i].display()
    }
  
  
    if (selectIndex > -1) {
      dragImg = draggableImgs[selectIndex]
      dragImg.display()
  
      dragImg.pos.x = mouseX - offsetX
      dragImg.pos.y = mouseY - offsetY
    } else {
  
      for (let i = draggableImgs.length - 1; i >= 0; i--) {
        let dragImg = draggableImgs[i]
        if (dragging == true) {
          if (dragImg.inArea() == true) {
            if (offsetX == -1 && offsetY == -1) {
              offsetX = mouseX - dragImg.pos.x
              offsetY = mouseY - dragImg.pos.y
              selectIndex = i
            }
  
            break;
          }
        }
        if(dClick==true){
          if (dragImg.inArea() == true) {
             openIndex = i
             let w = imgFiles[openIndex].width /imgFiles[openIndex].height*height*0.7 
             let h = height*0.6
             randX = random(w/2,width-w/2)
             randY = random(h/2+height * 0.04,height*0.94-h/2)
             break;
          }
        }
      }
  
    }
  
    if(openIndex>-1){
      let w = imgFiles[openIndex].width /imgFiles[openIndex].height*height*0.7 
      let h = height*0.6
      image(imgFiles[openIndex],randX,randY,w,h)
  
      if(mouseIsPressed){
        let w = imgFiles[openIndex].width/imgFiles[openIndex].height*height*0.7 
      let h = height*0.6
        if(abs(mouseX-randX)<w/2 && abs(mouseY-randY)<h/2){
          openIndex = -1
        }
      }
    }
    // }
      
    
    dClick = false
  
  }
  
  
  
}
class DraggableImg {
  constructor(img, name) {
    this.img = img
    this.name = name
    this.pos = createVector(random(75 / 2, width - 75 / 2), random(height * 0.04 + 75 / 2, height * 0.94 - 75))
    this.w = random([width/30, width/35])
    this.h = this.img.height / this.img.width * 50
  }
  display() {
    image(this.img, this.pos.x, this.pos.y, this.w, this.h)
    fill(255)
    textSize(15)
    textAlign(CENTER)
    text(this.name, this.pos.x, this.pos.y + this.h / 2 + 20)
  }
  inArea() {
    // if(dragging){
    if (abs(mouseX - this.pos.x) < this.w / 2 && abs(mouseY - this.pos.y) < this.h / 2) {
      return true
    }
    // }
    return false

  }
}

function mouseDragged() {
  dragging = true
}
function mouseReleased() {
  dragging = false
  selectIndex = -1
  offsetX = -1
  offsetY = -1

}
function doubleClicked() {
  dClick = true
  console.log("dclick", dClick)
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}