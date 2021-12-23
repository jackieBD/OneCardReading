const genBut = document.getElementById('genBut')
const stopBut = document.getElementById('stopBut')
const message = document.getElementById('message')
const messageBottom = document.getElementById('messageBottom')
let cardCounter = 0
let chosenCard = ""
let tossCoin = 0
let firstCard = ""
let thirdCard = ""
let firstCardName = ""
let finalCard = ""
let finalChosenCard = ""
let card1 = ""
let card2 = ""
let card3 = ""
let card3Name = ""


// C A R D    E L E M E N T S ///

const fool0 = document.getElementById('fool')
const mag1 = document.getElementById('magic')
const hp2 = document.getElementById('hp')
const empres3 = document.getElementById('empres')
const emprer4 = document.getElementById('emprer')
const hiero5 = document.getElementById('hiero')
const love6 = document.getElementById('love')
const char7 = document.getElementById('chariot')

const strength8 = document.getElementById('strength')
const hermit9 = document.getElementById('hermit')
const wheel10 = document.getElementById('wheel')
const just11 = document.getElementById('just')
const hanged12 = document.getElementById('hanged')
const death13= document.getElementById('death')
const temp14 = document.getElementById('temp')

const devil15= document.getElementById('devil')
const tower16= document.getElementById('tower')
const star17= document.getElementById('star')
const moon18= document.getElementById('moon')
const sun19= document.getElementById('sun')
const judge20 = document.getElementById('judge')
const world21= document.getElementById('world')

const wands1= document.getElementById('wands1')
const wands2= document.getElementById('wands2')
const wands3= document.getElementById('wands3')
const wands4= document.getElementById('wands4')
const wands5= document.getElementById('wands5')
const wands6= document.getElementById('wands6')
const wands7= document.getElementById('wands7')
const wands8= document.getElementById('wands8')
const wands9= document.getElementById('wands9')
const wands10= document.getElementById('wands10')
const wandsP= document.getElementById('wandsP')
const wandsN= document.getElementById('wandsN')
const wandsQ= document.getElementById('wandsQ')
const wandsK= document.getElementById('wandsK')

const cups1= document.getElementById('cups1')
const cups2= document.getElementById('cups2')
const cups3= document.getElementById('cups3')
const cups4= document.getElementById('cups4')
const cups5= document.getElementById('cups5')
const cups6= document.getElementById('cups6')
const cups7= document.getElementById('cups7')
const cups8= document.getElementById('cups8')
const cups9= document.getElementById('cups9')
const cups10= document.getElementById('cups10')
const cupsP= document.getElementById('cupsP')
const cupsN= document.getElementById('cupsN')
const cupsQ= document.getElementById('cupsQ')
const cupsK= document.getElementById('cupsK')

const swords1= document.getElementById('swords1')
const swords2= document.getElementById('swords2')
const swords3= document.getElementById('swords3')
const swords4= document.getElementById('swords4')
const swords5= document.getElementById('swords5')
const swords6= document.getElementById('swords6')
const swords7= document.getElementById('swords7')
const swords8= document.getElementById('swords8')
const swords9= document.getElementById('swords9')
const swords10= document.getElementById('swords10')
const swordsP= document.getElementById('swordsP')
const swordsN= document.getElementById('swordsN')
const swordsQ= document.getElementById('swordsQ')
const swordsK= document.getElementById('swordsK')

const coins1= document.getElementById('coins1')
const coins2= document.getElementById('coins2')
const coins3= document.getElementById('coins3')
const coins4= document.getElementById('coins4')
const coins5= document.getElementById('coins5')
const coins6= document.getElementById('coins6')
const coins7= document.getElementById('coins7')
const coins8= document.getElementById('coins8')
const coins9= document.getElementById('coins9')
const coins10= document.getElementById('coins10')
const coinsP= document.getElementById('coinsP')
const coinsN= document.getElementById('coinsN')
const coinsQ= document.getElementById('coinsQ')
const coinsK= document.getElementById('coinsK')

const cardback = document.getElementById('cardBack')

// M E S S A G E S //

const name0 = "The Fool"
const name1 = "The Magician"
const name2 = "The High Preistess"
const name3 = "The Empress"
const name4 = "The Emporer"
const name5 = "The Hierophant"
const name6 = "The Lovers"
const name7 = "The Chariot"
const name8 = "Strength"
const name9 = "The Hermit"

const name10 = "The Wheel of Fortune"
const name11 = "Justice"
const name12 = "The Hanged Man"
const name13 = "Death"
const name14 = "Temperance"
const name15 = "The Devil"
const name16 = "The Tower"
const name17 = "The Star"
const name18 = "The Moon"
const name19 = "The Sun"
const name20 = "Judgement"
const name21 = "The World"

const name22 = "The Ace of Wands"
const name23 = "The Two of Wands"
const name24 = "The Three of Wands"
const name25 = "The Four of Wands"
const name26 = "The Five of Wands"
const name27 = "The Six of Wands"
const name28 = "The Seven of Wands"
const name29 = "The Eight of Wands"
const name30 = "The Nine of Wands"
const name31 = "The Ten of Wands"
const name32 = "The Page of Wands"
const name33 = "The Knight of Wands"
const name34 = "The Queen of Wands"
const name35 = "The King of Wands"

const name36 = "The Ace of Cups"
const name37 = "The Two of Cups"
const name38 = "The Three of Cups"
const name39 = "The Four of Cups"
const name40 = "The Five of Cups"
const name41 = "The Six of Cups"
const name42 = "The Seven of Cups"
const name43 = "The Eight of Cups"
const name44 = "The Nine of Cups"
const name45 = "The Ten of Cups"
const name46 = "The Page of Cups"
const name47 = "The Knight of Cups"
const name48 = "The Queen of Cups"
const name49 = "The King of Cups"

const name50 = "The Ace of Swords"
const name51 = "The Two of Swords"
const name52 = "The Three of Swords"
const name53 = "The Four of Swords"
const name54 = "The Five of Swords"
const name55 = "The Six of Swords"
const name56 = "The Seven of Swords"
const name57 = "The Eight of Swords"
const name58 = "The Nine of Swords"
const name59 = "The Ten of Swords"
const name60 = "The Page of Swords"
const name61 = "The Knight of Swords"
const name62 = "The Queen of Swords"
const name63 = "The King of Swords"

const name64 = "The Ace of Pentacles"
const name65 = "The Two of Pentacles"
const name66 = "The Three of Pentacles"
const name67 = "The Four of Pentacles"
const name68 = "The Five of Pentacles"
const name69 = "The Six of Pentacles"
const name70 = "The Seven of Pentacles"
const name71 = "The Eight of Pentacles"
const name72 = "The Nine of Pentacles"
const name73 = "The Ten of Pentacles"
const name74 = "The Page of Pentacles"
const name75 = "The Knight of Pentacles"
const name76 = "The Queen of Pentacles"
const name77 = "The King of Pentacles"


// W E I R D   C A R D S ///

const weirdc1 = document.getElementById('wc1')
const weirdc2 = document.getElementById('wc2')
const weirdc3 = document.getElementById('wc3')
const weirdc4 = document.getElementById('wc4')
const weirdc5 = document.getElementById('wc5')
const weirdc6 = document.getElementById('wc6')
const weirdc7 = document.getElementById('wc7')
const weirdc8 = document.getElementById('wc8')
const weirdc10 = document.getElementById('wc9')
const weirdc9 = document.getElementById('wc10')
const weirdc11 = document.getElementById('wc11')
const weirdc12 = document.getElementById('wc12')
const weirdc13 = document.getElementById('wc13')
const weirdc14 = document.getElementById('wc14')
const weirdc15 = document.getElementById('wc15')
const weirdc16 = document.getElementById('wc16')
const weirdc17 = document.getElementById('wc17')
const weirdc18 = document.getElementById('wc18')
const weirdc19 = document.getElementById('wc19')
const weirdc20 = document.getElementById('wc20')
const weirdc21 = document.getElementById('wc21')
const weirdc22 = document.getElementById('wc22')


  const nameWeirdc1 = "X of Wexpqqw"
  const nameWeirdc2 = "X of Wexpqqw"
  const nameWeirdc3 = "X of Wexpqqw"
  const nameWeirdc4 = "X of Wexpqqw"
  const nameWeirdc5 = "X of Wexpqqw"
  const nameWeirdc6 = "X of Wexpqqw"
  const nameWeirdc7 = "X of Wexpqqw"
  const nameWeirdc8 = "X of Wexpqqw"
  const nameWeirdc9 = "X of Wexpqqw"
  const nameWeirdc10 = "X of Wexpqqw"
  const nameWeirdc11 = "X of Wexpqqw"
  const nameWeirdc12 = "X of Wexpqqw"
  const nameWeirdc13 = "X of Wexpqqw"
  const nameWeirdc14 = "X of Wexpqqw"
  const nameWeirdc15 = "X of Wexpqqw"
  const nameWeirdc16 = "X of Wexpqqw"
  const nameWeirdc17 = "X of Wexpqqw"
  const nameWeirdc18 = "X of Wexpqqw"
  const nameWeirdc19 = "X of Wexpqqw"
  const nameWeirdc20 = "X of Wexpqqw"
  const nameWeirdc21 = "X of Wexpqqw"
  const nameWeirdc22 = "X of Wexpqqw"



// A R R A Y S //

let cardArray =[fool0, mag1, hp2, empres3, emprer4,
  hiero5, love6, char7, strength8, hermit9, wheel10,
  just11, hanged12, death13, temp14, devil15,
  tower16, star17, moon18, sun19, judge20, world21,
  wands1, wands2, wands3, wands4,
  wands5, wands6, wands7, wands8, wands9,
  wands10, wandsP, wandsN, wandsQ, wandsK,
  cups1, cups2, cups3, cups4,
  cups5, cups6, cups7, cups8, cups9,
  cups10, cupsP, cupsN, cupsQ, cupsK,
  swords1, swords2, swords3, swords4,
  swords5, swords6, swords7, swords8, swords9,
  swords10, swordsP, swordsN, swordsQ, swordsK,
  coins1, coins2, coins3, coins4,
  coins5, coins6, coins7, coins8, coins9,
  coins10, coinsP, coinsN, coinsQ, coinsK]


  let nameArray = [name0, name1, name2, name3, name4, name5,
    name6, name7, name8, name9, name10, name11, name12, name13,
    name14, name15, name16, name17, name18, name19,
    name20, name21, name22, name23, name24, name25,
    name26, name27, name28, name29, name30, name31,
    name32, name33, name34, name35,
    name36, name37, name38, name39,
    name40, name41, name42, name43, name44, name45,
    name46, name47, name48, name49, name50, name51,
    name52, name53, name54, name55, name56, name57,
    name58, name59, name60, name61, name62, name63,
    name64, name65, name66, name67, name68, name69,
    name70, name71, name72, name73, name74, name75,
    name76, name77]


  let weirdcArray = [weirdc1, weirdc2,
  weirdc3, weirdc4, weirdc5, weirdc6, weirdc7,
  weirdc8, weirdc9, weirdc10, weirdc11, weirdc12,
  weirdc13, weirdc14, weirdc15, weirdc16, weirdc17,
  weirdc18, weirdc19, weirdc20, weirdc21, weirdc22]

let weirdNamesArray = [nameWeirdc1,
      nameWeirdc2, nameWeirdc3, nameWeirdc4, nameWeirdc5, nameWeirdc6,
      nameWeirdc7, nameWeirdc8, nameWeirdc9, nameWeirdc10, nameWeirdc11,
      nameWeirdc12, nameWeirdc13, nameWeirdc14, nameWeirdc15, nameWeirdc16,
      nameWeirdc17, nameWeirdc18, nameWeirdc19, nameWeirdc20, nameWeirdc21,
      nameWeirdc22]
