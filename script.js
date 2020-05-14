let contentGridElement = document.getElementById('contentGrid');

let firstJSON = {
  "title" : "Rat",
  "Chinese" : "鼠",
  "Pronouciation":"shǔ",
  "image" : "https://www.pngitem.com/pimgs/m/505-5054447_chinese-zodiac-rat-png-transparent-png.png ",
  "color" : "#FFFFFF",
}

let jsonDatabase = [
      {
        "title" : "OX",
        "Chinese" : "牛",
        "Pronouciation":"niú",
        "image" : " https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1dz1ORUHl_dtid-irg1QzrP0-C2VK73HkZyevGjA_qsV3704v&usqp=CAU",
        "color" : "#FFFFFF",
      },
      {
        "title" : "Tiger",
        "Chinese" : "虎",
        "Pronouciation":"hǔ",
        "image" : "https://library.kissclipart.com/20181003/ixq/kissclipart-chinese-zodiac-tiger-png-clipart-tiger-the-chinese-065b57175ed7559e.png ",
        "color" : "#FFFFFF",
      },
      {
        "title" : "Rabbit",
        "Chinese" : "兔",
        "Pronouciation":"tù",
        "image" : " https://www.pngkit.com/png/detail/86-865659_chinese-zodiac-rabbit-chinese-zodiac-rabbit-png.png",
        "color" : "#FFFFFF",
      },
      {
        "title" : "Dragon",
        "Chinese" : "龙",
        "Pronouciation":"lóng",
        "image" : "https://www.nicepng.com/png/detail/34-347218_chinese-zodiac-dragon-chinese-zodiac-dragon-transparent.png",
        "color" : "#FFFFFF",
      },
      {
        "title" : "Snake",
        "Chinese" : "蛇",
        "Pronouciation":"shé",
        "image" : "https://m1.aboluowang.com/uploadfile/2020/0112/20200112111739286.jpg ",
        "color" : "#FFFFFF",
      },
      {
        "title" : "Horse",
        "Chinese" : "马",
        "Pronouciation":"mǎ",
        "image" : "https://lh3.googleusercontent.com/proxy/TOYU33SuaAJdzjhKGWmIvUSTJ-7UQclENtUpUHCSUOYcgPaYvGGA0U74P0mlf8daDaGxofSQNdd3G48UHmbmaTK4J4Swg7Sla3hbMKvGoWEWfwcXGE8J2RANWA ",
        "color" : "#FFFFFF",
      },
      {
        "title" : "Goat",
        "Chinese" : "羊",
        "Pronouciation":"yáng",
        "image" : "https://www.nicepng.com/png/detail/852-8528777_chinese-zodiac-goat-chinese-zodiac-goat-png.png",
        "color" : "#FFFFFF",
      },
      {
        "title" : "Monkey",
        "Chinese" : "猴",
        "Pronouciation":"hóu",
        "image" : "https://www.youngparents.com.sg/sites/default/files/2016%20Year%20of%20the%20Monkey%20forecast.png ",
        "color" : "#FFFFFF",
      },
      {
        "title" : "Rooster",
        "Chinese" : "鸡",
        "Pronouciation":"jī",
        "image" : "https://www.netclipart.com/pp/m/411-4116698_transparent-rooster-chinese-zodiac-characteristics-of-a-rooster.png",
        "color" : "#FFFFFF",
      },
      {
        "title" : "Dog",
        "Chinese" : "狗",
        "Pronouciation":"gǒu",
        "image" : "https://www.netclipart.com/pp/m/411-4116503_chinese-zodiac-dog-chinese-zodiac-dog-png.png",
        "color" : "#FFFFFF",
      },
      {
        "title" : "Pig",
        "Chinese" : "猪",
        "Pronouciation":"zhū",
        "image" : "https://s.yimg.com/ny/api/res/1.2/LyTLN3a3g.oEKPxTb3oxBA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/ddf877fcf9a223768973c3f45c61efc0",
        "color" : "#FFFFFF",
      }

]

for (var i = 0; i < jsonDatabase.length; i++) {
  createZodiac(jsonDatabase[i]);
}

function createZodiac(incomingJSON) {


  let newContentElement = document.createElement("DIV");
  newContentElement.style.border = "4px solid" + incomingJSON['color'];
  newContentElement.style.color = incomingJSON['color'];
  newContentElement.classList.add('contentItem');


  let newSign = document.createElement("H2");
  newSign.innerHTML = incomingJSON['title'];
  newSign.classList.add('Signs');
  newContentElement.appendChild(newSign);


  let newContentChinese = document.createElement("H3");
  newContentChinese.innerHTML = incomingJSON['Chinese'];
  newContentElement.appendChild(newContentChinese);

  
  let newContentPronouciation = document.createElement("P");
  newContentPronouciation.innerHTML = incomingJSON['Pronouciation']
  newContentElement.appendChild(newContentPronouciation);


  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['image'];
  newContentElement.appendChild(newImage);


  contentGridElement.appendChild(newContentElement);
}
