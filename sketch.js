let imgFileNames= ['05092015.jpg', '1.8w.jpg', '1061accountsReached.jpg', '1093785krw.jpg', '11.58pm.jpg', '1113views.jpg', '12724steps.jpg', '1717q16deleted.jpg', '1_0testing.jpg', '2022生日好运排行榜.jpg', '26bucks.jpg', '2YardsOfOrganza.jpg', '3.31PM.jpg', '3620fujifilm.jpg', '3DScanRoom.jpg', '3kindsofDeixis.jpg', '4.0stars.jpg', '4.8stars.jpg', '734newfollowers.jpg', '81hourstogether.jpg', '845today.jpg', '90accounts.jpg', '9465steps.jpg', 'acceptances.jpg', 'accountSign-ins.jpg', 'acnepatch.jpg', 'ad.jpg', 'adobePS.jpg', 'age64.jpg', 'ahhhh.jpg', 'aircanadaAC548.jpg', 'alcoveStudio.jpg', 'aliencat.jpg', 'ALL1N_Wallpaper.jpg', 'allAPPpasswords.jpg', 'allAPPpasswords2.jpg', 'amazoncart.jpg', 'angelaonthebigscreen.jpg', 'annie.jpg', 'apartmentsNyc.jpg', 'apcsMaze.jpg', 'apology.jpg', 'apology2.jpg', 'AppNotAvailable.jpg', 'assetsFile.jpg', 'astrologyreading.jpg', 'BackupInProgress.jpg', 'BajaBlast.jpg', 'bananapile.jpg', 'BarneyGallery.jpg', 'bathroombreak.jpg', 'bathroomPoster.jpg', 'beg_waacking.jpg', 'besties2021.jpg', 'bigwin.jpg', 'birthdaywishes.jpg', 'birthdaywishes2.jpg', 'bloomEffect.jpg', 'bloomeffect2.jpg', 'BM3730_sewing_machine.jpg', 'brokenchantecaille.jpg', 'bug.jpg', 'casestudy.jpg', 'casio.jpg', 'CAUGHT.jpg', 'ccd.jpg', 'ccd020725.jpg', 'ccd2.jpg', 'chanchan.jpg', 'chanchan2.jpg', 'ChinaVisaApp.jpg', 'cholesterol.jpg', 'chs12shedule.jpg', 'chsID.jpg', 'class7score_85.jpg', 'classpass.jpg', 'collectibles.jpg', 'commonAppPlan.jpg', 'confetti.jpg', 'confirmation.jpg', 'congratsSofie.jpg', 'convo_mikity.jpg', 'CopyOfaCopyOfaCopy.jpg', 'cosmicsea.jpg', 'covidtest3132022.jpg', 'cutenaildesign.jpg', 'cvsCheckout.jpg', 'deepdivetiktok.jpg', 'defineVariable.jpg', 'deliverTomorrow.jpg', 'demure.jpg', 'deskspread2.jpg', 'diagram.jpg', 'DianIns.jpg', 'digitalredpocket.jpg', 'digitalspace.jpg', 'dumbotheelephant.jpg', 'dvd.jpg', 'dv_vids.jpg', 'ego.jpg', 'emailtoevan.jpg', 'energyinteraction.jpg', 'episodes.jpg', 'EtymologyofArctic.jpg', 'excerptfrom.jpg', 'exchangerates.jpg', 'expired.jpg', 'exposed.jpg', 'Fairmont.jpg', 'fan_no108272.jpg', 'feelingblue.jpg', 'figuredrawing.jpg', 'figures2.jpg', 'fillthesejars.jpg', 'FinalPrez.jpg', 'flightInfo.jpg', 'flightinfo07222023.jpg', 'flip.gif', 'floating.jpg', 'follower.jpg', 'FranceVsBelgium.jpg', 'fretboard.jpg', 'frozengrapes.jpg', 'fruitstickers.jpg', 'gala.gif', 'Gangnum-Gu_trash.jpg', 'Gangnum-Gu_trash2.jpg', 'garbagedress.jpg', 'gerrymandering.jpg', 'glitch.jpg', 'glitch2.jpg', 'googletranslate.jpg', 'googletranslate2.jpg', 'gordon.jpg', 'govofcanada.jpg', 'gradingsheet.jpg', 'graffitiRoom.jpg', 'granvilleisland.jpg', 'groupchat.jpg', 'GST_registration.jpg', 'herObsession.jpg', 'heyheartbreaker.jpg', 'hideaway.jpg', 'holographic.jpg', 'holygrailproducts.jpg', 'hotelNotepad.jpg', 'hotsummer.jpg', 'hutong_rats.jpg', 'hyperpop_notes.jpg', 'icloudpassword2020.jpg', 'iHoard.jpg', 'iHoard2.jpg', 'iHoard3.jpg', 'iHoard4.jpg', 'iHoard5.jpg', 'IMG_0125.jpg', 'IMG_0197.jpg', 'IMG_0224.jpg', 'IMG_0226.jpg', 'IMG_0333.jpg', 'IMG_0417.jpg', 'IMG_0449.jpg', 'IMG_0531.jpg', 'IMG_1275.jpg', 'IMG_1279.jpg', 'IMG_1280.jpg', 'IMG_1303.jpg', 'IMG_1503.jpg', 'IMG_1508.jpg', 'IMG_1643.jpg', 'IMG_1857.jpg', 'IMG_1930.jpg', 'IMG_2002.jpg', 'IMG_2122.jpg', 'IMG_2195.jpg', 'IMG_2270.jpg', 'IMG_2397.jpg', 'IMG_2403.jpg', 'IMG_2798.jpg', 'IMG_2847.jpg', 'IMG_2848.jpg', 'IMG_2914.jpg', 'IMG_2916.jpg', 'IMG_2919.jpg', 'IMG_2926.jpg', 'IMG_2938..jpg', 'IMG_3170.jpg', 'IMG_3194.jpg', 'IMG_3329.jpg', 'IMG_3418.jpg', 'IMG_3445.jpg', 'IMG_3465.png', 'IMG_3579.jpg', 'IMG_3679.jpg', 'IMG_3795.jpg', 'IMG_3845.jpg', 'IMG_3983.jpg', 'IMG_4033.jpg', 'IMG_4066.jpg', 'IMG_4187.jpg', 'IMG_4631.jpg', 'IMG_4650.jpg', 'IMG_4696.jpg', 'IMG_4724.jpg', 'IMG_4848.jpg', 'IMG_4857.jpg', 'IMG_4981.jpg', 'IMG_5122.jpg', 'IMG_5192.jpg', 'IMG_5237.jpg', 'IMG_5352.jpg', 'IMG_5403.jpg', 'IMG_5508.jpg', 'IMG_5659.jpg', 'IMG_5666.jpg', 'IMG_5721.jpg', 'IMG_5729.jpg', 'IMG_5740.jpg', 'IMG_5747.jpg', 'IMG_5791.jpg', 'IMG_5803.jpg', 'IMG_5810.jpg', 'IMG_5811.jpg', 'IMG_5919.jpg', 'IMG_6032.jpg', 'IMG_6055.jpg', 'IMG_6095.jpg', 'IMG_6112.jpg', 'IMG_6303.jpg', 'IMG_6439.jpg', 'IMG_6524.jpg', 'IMG_7163.jpg', 'IMG_7194.jpg', 'IMG_7197.jpg', 'IMG_7200.jpg', 'IMG_7213.jpg', 'IMG_7243.jpg', 'IMG_7504.jpg', 'IMG_7550.jpg', 'IMG_7834.jpg', 'IMG_8192.jpg', 'IMG_8262.jpg', 'IMG_8292.jpg', 'IMG_8527.jpg', 'IMG_8719.jpg', 'IMG_8945.jpg', 'IMG_8958.jpg', 'IMG_9021.jpg', 'IMG_9122.jpg', 'IMG_9137.jpg', 'IMG_9207.jpg', 'IMG_9238.jpg', 'IMG_9244.jpg', 'IMG_9333.jpg', 'IMG_9335.jpg', 'IMG_9396.jpg', 'IMG_9560.jpg', 'IMG_9583.jpg', 'IMG_9646.jpg', 'importantDoc2021.jpg', 'indaclerb.jpg', 'ineedsome.jpg', 'instapoll.jpg', 'invite_D5seat.jpg', 'ipadgrandpa.jpg', 'Ishoulddosomething.jpg', 'JeffXfromstudio.jpg', 'jerrygogosian1.jpg', 'jerrygogosian2.jpg', 'jerrygogosian3.jpg', 'JL.jpg', 'jojoCereal.jpg', 'juice.jpg', 'juicyLips.jpg', 'kahoot.jpg', 'kater_outofstock_forever.jpg', 'keepOUT.jpg', 'kiri.jpg', 'kitty.jpg', 'kittycharmLivestream.jpg', 'kittycollector.jpg', 'KRW.jpg', 'kr_uber.jpg', 'largemeatbreast.jpg', 'LAX5dayplan.jpg', 'lectureOutline.jpg', 'leekSoup.jpg', 'letterTo_.jpg', 'LicenceOLD.jpg', 'lindatheworm.jpg', 'liquidcrystal_I2C.jpg', 'LIVE_CGTN.jpg', 'lizardskin.jpg', 'loginForUnkownWeb.jpg', 'lookinmyfridge.jpg', 'lostKitty.jpg', 'lyft_2minaway.jpg', 'MacSailing.jpg', 'Marchschedule.jpg', 'mask.jpg', 'meetingLink.jpg', 'memoresofMatsuko2.jpg', 'memoriesofMatsuko.jpg', 'memoriesofMatsuko3.jpg', 'messagerequest.jpg', 'microFRQ.jpg', 'midjourneyprompts.jpg', 'midsummernightsdream.jpg', 'milkteaorder.jpg', 'mindmap.jpg', 'miroStickies.jpg', 'mirrorpic.jpg', 'mirrorselfie.jpg', 'moldy.jpg', 'moretrash.jpg', 'mother1986.jpg', 'movetoTrash.jpg', 'mo_An.jpg', 'ms.pongOnStickyNotes.jpg', 'myCube.jpg', 'myeyesonly.jpg', 'nakedMoleRat.jpg', 'natto.jpg', 'needs2beHumbled.jpg', 'newfollower.jpg', 'newMAC.jpg', 'newyearsDog.jpg', 'nightview.jpg', 'Notetomyself.jpg', 'NYC5dayplan.jpg', 'oldTV.jpg', 'oldTV2.jpg', 'omeglechat.jpg', 'omwToTinaLees.jpg', 'onFilm2.jpg', 'ootd.jpg', 'orderplaced.jpg', 'organizedchaos.jpg', 'ouai_stBarts.jpg', 'paparazzi.jpg', 'password_dcclxviii.jpg', 'pastelonpaper.jpg', 'pastelonpaper2.jpg', 'PaymentOnHold.jpg', 'paymentSent.jpg', 'PC11_99percent.jpg', 'penpals1301.jpg', 'Perusall.jpg', 'photobombed.jpg', 'photoday2022.jpg', 'pickupAddress.jpg', 'pink_tutu.jpg', 'poetry.jpg', 'polaroid2022.jpg', 'popup_full.jpg', 'PortaPotty.jpg', 'poseforme.jpg', 'postedbyiphone5.jpg', 'preschoolGal.jpg', 'press_on_nails.jpg', 'PRinquiry.jpg', 'printedpapers.jpg', 'processingdelay.jpg', 'PSlightningGal.jpg', 'rawcrab.jpg', 'redditThread_makemehateucla.jpg', 'RedYeastRice.jpg', 'refusé.jpg', 'repost.jpg', 'resultsOut.jpg', 'route.jpg', 'Rstudio.jpg', 'runner.gif', 'samplepic.jpg', 'samplepic2.jpg', 'samplepic3.jpg', 'saturated.jpg', 'sayHi_tomyAI.jpg', 'Screenshot_2010-02-19_at_01.28.19_PM.png', 'Screenshot_2010-03-06_at_08.27.49\u202fPM.png', 'Screenshot_2011-05-24_at_5.55.53\u202fPM.png', 'Screenshot_2015-07-13_at_04.03.17\u202fPM.png', 'Screenshot_2017-06-08_at_5.23.45\u202fPM.png', 'Screenshot_2017-12-23_at_11.18.10\u202fPM.png', 'Screenshot_2018-03-01_at_6.16.07\u202fPM.png', 'Screenshot_2018-11-03_at_10.59.12\u202fPM.png', 'Screenshot_2019-02-06_at_11.01.16\u202fAM.png', 'Screenshot_2019-02-21_at_11.08.28\u202fPM.png', 'Screenshot_2019-07-11_at_10.22.30\u202fAM.png', 'Screenshot_2019-09-23_at_06.19.32\u202fPM.jpg', 'Screenshot_2020-01-03_at_11.23.57\u202fPM.png', 'Screenshot_2020-06-01_at_5.20.52\u202fPM.png', 'Screenshot_2020-10-02_at_06.00.11\u202fPM.png', 'Screenshot_2021-04-16_at_2.35.48\u202fPM.png', 'Screenshot_2022-02-20_at_06.19.52_PM.png', 'Screenshot_2022-03-01_at_5.04.25\u202fPM.png', 'Screenshot_2022-03-22_at_02.19.18_PM.png', 'Screenshot_2022-06-21_at_5.57.15\u202fPM.png', 'Screenshot_2022-11-16_at_03.28.11\u202fPM.png', 'Screenshot_2022-11-16_at_09.26.33\u202fPM.png', 'Screenshot_2022-12-02_at_06.03.34\u202fPM.png', 'Screenshot_2023-02-23_at_5.27.44\u202fPM.png', 'Screenshot_2023-06-21_at_02.45.19_PM.png', 'Screenshot_2023-06-28_at_11.46.27\u202fAM.png', 'Screenshot_2023-06-29_at_11.40.03\u202fPM.png', 'Screenshot_2023-07-04_at_01.29.05\u202fAM.png', 'Screenshot_2023-07-04_at_01.32.20\u202fAM.png', 'Screenshot_2023-07-05_at_12.09.12\u202fAM.jpg', 'Screenshot_2023-08-24_at_11.55.10\u202fPM.png', 'Screenshot_2023-11-28_at_9.10.25\u202fPM.jpg', 'Screenshot_2024-04-06_at_10.07.43\u202fPM.png', 'Screenshot_2024-04-06_at_12.55.47\u202fPM.png', 'Screenshot_2024-06-29_at_10.54.20\u202fPM.png', 'Screenshot_2024-07-20_at_6.06.52\u202fPM.png', 'Screenshot_2024-07-28_at_03.12.52\u202fPM.png', 'Screenshot_2024-10-23_at_10.37_PM.png', 'Screenshot_2025-02-01_at_01.18.29\u202fPM.png', 'Screenshot_2025-02-16_at_3.04.36\u202fPM.png', 'secretrecoveryphrase.jpg', 'securitycam.jpg', 'selfieSky.jpg', 'sendto.jpg', 'sentfromMaiko.jpg', 'SeymourHealthTesting.jpg', 'shared_album.jpg', 'shareLocation.jpg', 'sheep.jpg', 'sheep3.jpg', 'sheplaystheguitar.jpg', 'shesaid_dontSPREAD.jpg', 'simulationLab.jpg', 'sittingmeditation.jpg', 'sketchbook.jpg', 'sketchbook2.jpg', 'sketchbook3.jpg', 'sky07232011.jpg', 'slackmessageNick.jpg', 'sleepwell.jpg', 'slideroom.jpg', 'slurp.jpg', 'smartSEOregister.jpg', 'smoochfromwho.gif', 'SMSCode.jpg', 'snapavatar.jpg', 'snapmap11242023.jpg', 'snoozing.jpg', 'somecityscape.jpg', 'SpanishConjugations.jpg', 'Spotifywrapped2021.jpg', 'Spotifywrapped2023.jpg', 'SpotifyWrapped2_2023.jpg', 'spread2.jpg', 'squareEgg.jpg', 'squarehairsalon.jpg', 'starterpack.jpg', 'stickersspread.jpg', 'storeinKor.jpg', 'storyviews.jpg', 'streetfighters.jpg', 'strength_in_numbers.jpg', 'subway.gif', 'suffocating.jpg', 'sunsetRollercoaster.jpg', 'suspiciousLogin.jpg', 'suspiciousLogin2.jpg', 'taxRefund.jpg', 'termsANDconditions.jpg', 'testcenter.jpg', 'testdayList.jpg', 'thanks_evan.jpg', 'TheAmbiguousCase.jpg', 'throwapunch.gif', 'thruMyLens.jpg', 'ticketcode.jpg', 'TicketToMars.jpg', 'timeslots.jpg', 'TimsThursClass.jpg', 'ToDoListYG.jpg', 'Toilet.jpg', 'token_K79.jpg', 'tools.jpg', 'transactions.jpg', 'trashjuice.jpg', 'tuition07102022.jpg', 'twinning.jpg', 'typesoflove.jpg', 'ucbNews.jpg', 'ultraman.jpg', 'unhingedMidnightMonologue.jpg', 'unsaturated.jpg', 'updateServer.jpg', 'urbansource.jpg', 'vacay_dump.jpg', 'vancouver2014.jpg', 'viral.jpg', 'viral2.jpg', 'VL53L0Xsensor.jpg', 'waitlist_pos3.jpg', 'walkingdistance.jpg', 'walloffame.jpg', 'wallofrecords.jpg', 'wallpaper010119.jpg', 'warmthofsoul.jpg', 'warnings.jpg', 'washed.jpg', 'watermania.jpg', 'week13_myDalite.jpg', 'WhenParabolaInteresectsTheLine.jpg', 'whiteboarding.jpg', 'whos_loveletter.jpg', 'xixi4302022.jpg', 'y=10.9332239411.jpg', 'yearbook2015.jpg', 'YgSummerOuting.jpg', 'yourturtlesocute.jpg', '中国签证中心.jpg', '占星命盘.jpg', '喜洋洋头套.jpg', '小姐.jpg', '彩票no7.jpg', '我们仨us.jpg', '我很想很想你.jpg', '抱怨一点你的难过.jpg', '支付成功.jpg', '普罗旺斯for_sale.jpg', '最关心你的好友.jpg', '椰树牌椰汁parody.jpg', '混乱.gif', '港.jpg', '网友Yulu.jpg', '表情包.jpg', '表情包10.jpg', '表情包11.jpg', '表情包12.jpg', '表情包17.jpg', '表情包2.jpg', '表情包3.jpg', '表情包4.jpg', '表情包5.jpg', '表情包6.jpg', '表情包7.jpg', '表情包8.jpg', '被嫌弃的松子的一生.jpg', '西安市.jpg', '运输中.jpg']
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
let videoFileNames =['bananaCall.mov', 'congratsEric.mp4', 'congratsRunbo.mp4', 'danceGarfield.mp4', 'flipbook.mp4', 'imagetrace.mp4', 'littlelisa.mp4', 'PartyAtKimberlys.mov', 'runboSkates.mov', , 'sheepVid.mp4', 'studiosummer.mp4', 'TheatreREC.mp4', '幸福小串securitycam.mov']
let videoFiles = []
function preload() {
  shuffle(imgFileNames)

  for (let i = 0; i < imgFileNames.length-200; i++) {
    let img = loadImage("digital hoard (edited)/" + imgFileNames[i])
    // img.resize(50,0)
    imgFiles.push(img)
  }
  for (let i = 0; i < videoFileNames.length; i++) {
    let vid = createVideo("digital hoard (edited)/" +videoFileNames[i])
    console.log(vid.width)
    videoFiles.push(vid)

    vid.hide()
  }
  bg = loadImage("assets_a/bg.jpg")
}
function showTime(){
    // 获取当前的日期和时间
    let currentDate = new Date();
  
    // 获取星期、月份、日期、小时和分钟
    let weekday = currentDate.toLocaleString('en-US', { weekday: 'short' });  // "Sun"
    let month = currentDate.toLocaleString('en-US', { month: 'short' });  // "Feb"
    let day = currentDate.getDate();  // "23"
    let hour = currentDate.getHours();  // "10"
    let minute = currentDate.getMinutes();  // "29"
  
    // 确保分钟是两位数
    if (minute < 10) {
      minute = '0' + minute;  // 补充零
    }
  
    // 确保小时为12小时制并添加AM/PM
    let ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;  // 转换为12小时制
    hour = hour ? hour : 12; // 如果小时是0，改为12
  
    // 格式化日期和时间为 "Sun Feb 23 10:29PM"
    let formattedDate = `${weekday} ${month} ${day}  ${hour}:${minute}${ampm}`;
  
    // 显示格式化后的日期和时间
    textSize(15)
    textAlign(CENTER,CENTER)
    text(formattedDate, width*0.95, height*0.02);
}
function setFullScreen(){
  let fs = fullscreen();  // 获取当前全屏状态
  if (!fs) {
    fullscreen(true);  // 如果没有全屏，则设置为全屏
  }
  button.hide()
  state=1
  for (let i = 0; i < videoFiles.length; i++) {
    videoFiles[i].play()
    videoFiles[i].time(2)
    videoFiles[i].volume(0)
  }
}
function setup() {
  // createCanvas(windowWidth, 0.65*windowWidth);
  createCanvas(windowWidth, windowHeight); // 创建一个占据整个屏幕的画布
  button  = createButton("Start")
  // button.position(width/2,height/2)
  button.mouseClicked(setFullScreen)
  button.size(400,200)
  button.style("font-size","100px")
  button.style("font-family","Georgia")
  button.center()
  button.style("color","#a0b2fc")
  button.style("background-color","#9cd13a")
  button.style("border","none")
  button.style("border-radius","50%")
  imageMode(CENTER)
  // image(bg, width / 2, height / 2, width, height)
  for (let i = 0; i < imgFiles.length; i++) {
    let dImg = new DraggableImg(imgFiles[i], imgFileNames[i])
    draggableImgs.push(dImg)
  }
  for (let i = 0; i < videoFiles.length; i++) {
    let dImg = new DraggableImg(videoFiles[i], videoFileNames[i])
    // videoFiles[i].play()
    draggableImgs.push(dImg)
    console.log(dImg.pos.x/width,dImg.pos.y/height)
  }
  background("#a0b2fc")


}
function mouseClicked() {
  console.log((mouseX / width).toFixed(2), (mouseY / height).toFixed(2))
}
function draw() {
  if(state==0){
   
  }
  if(state==1){
    image(bg, width / 2, height / 2, width, height)
    showTime()

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
             draggableImgs[openIndex].playState = true
             let w = draggableImgs[openIndex].img.width /draggableImgs[openIndex].img.height*height*0.7 
             let h = height*0.6
             randX = random(w/2,width-w/2)
             randY = random(h/2+height * 0.04,height*0.94-h/2)
             break;
          }
        }
      }
  
    }
  
    if(openIndex>-1){
      
      let w = draggableImgs[openIndex].img.width /draggableImgs[openIndex].img.height*height*0.7 
      let h = height*0.6
      draggableImgs[openIndex].img.play()
      image(draggableImgs[openIndex].img,randX,randY,w,h)

  
      if(mouseIsPressed){
        let w = draggableImgs[openIndex].img.width/draggableImgs[openIndex].img.height*height*0.7 
      let h = height*0.6
        if(abs(mouseX-randX)<w/2 && abs(mouseY-randY)<h/2){
          draggableImgs[openIndex].playState = false

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
    this.w = random([width/30, width/35])
    let rate = this.img.height / this.img.width
    this.h = rate * this.w*0.8
    this.pos = createVector(random(width/30 / 2, width - width/30 / 2), random(height * 0.04 + this.h / 2, height * 0.94 - this.h))
    this.playState = false

  }
  display() {
    if(this.playState==false){
      
     this.img.pause()
      
    }else{
      if (this.img instanceof p5.MediaElement) {
        this.img.play()
      }
    }
  
    
    image(this.img, this.pos.x, this.pos.y, this.w, this.h)
    fill(255)
    textSize(12)
    textAlign(CENTER)
    text(this.name, this.pos.x, this.pos.y + this.h / 2 + 15)
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
  draggableImgs=[]
  for (let i = 0; i < imgFiles.length; i++) {
    let dImg = new DraggableImg(imgFiles[i], imgFileNames[i])
    draggableImgs.push(dImg)
  }
  for (let i = 0; i < videoFiles.length; i++) {
    let dImg = new DraggableImg(videoFiles[i], videoFileNames[i])
    // videoFiles[i].play()
    draggableImgs.push(dImg)
    console.log(dImg.pos.x/width,dImg.pos.y/height)
  }
  // setup()
}