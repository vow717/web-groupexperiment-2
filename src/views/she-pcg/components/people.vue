<template>
    <div>
      <div class="main">
        <div id="yy">
          <div class="part2">
            <div id="first">
              <div id="three">
                <h1 id="flag4">特产美食</h1>
              </div>
              <div id="four">
                <hr />
              </div>
            </div>
            <div class="body">
              <div class="food-body" v-for="food in foods" :key="food.title">
                <div class="food-body-img">
                  <img class="img-responsive" :src="food.imgSrc" alt="img" />
                </div>
                <div class="food-body-content">
                  <p>{{ food.description }}</p>
                </div>
                <div class="food-body-title">
                  <h4>{{ food.title }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const foods = ref([
    {
      title: '姜撞奶',
      imgSrc: 'img/jzn.jpg',
      description:
        '在顺德，双皮奶有位双胞胎，名曰姜撞奶。姜与奶的结合，是一场再合适不过的相遇：姜撞奶暖黄的外观容易让人误认为炖蛋或牛奶布丁，乖巧的卖相入口后给爱姜者猝不及防的惊喜，是截然相反的姜辣奶香。',
    },
    {
      title: '煎堆',
      imgSrc: 'img/jd.jpg',
      description:
        '煎堆始制于明代，至今已有数百年的历史。因其外形金黄圆润、口感酥香甜脆，成为岭南地区家喻户晓的年味小吃。2019 年，煎堆制作技艺列入佛山市第七批市级非物质文化遗产名录。',
    },
    {
      title: '虫崩虫少',
      imgSrc: 'img/bs.jpg',
      description:
        '广东的著名传统小吃之一，大良虫崩虫少制作技艺上榜顺德区第九批非遗名录。虫崩虫少外表金黄灿烂，闻起来香味扑鼻，吃起来口感酥脆可口，齿颊留香，不少来顺德的游客喜欢买来当手信。虫崩虫少色泽金黄，甘香酥脆。',
    },
    {
      title: '双皮奶',
      imgSrc: 'img/spn.jpg',
      description:
        '双皮奶因为上下两层醇厚爽滑的奶皮而得名，它的原料并非普通牛奶，而是来自顺德本地的水牛奶。顺德水牛奶乳脂含量高达 8%，是普通牛奶的两倍，水分少，制作出来的双皮奶热食暖滑甘甜，凉食清润香浓。',
    },
    {
      title: '伦教糕',
      imgSrc: 'img/ljg.jpg',
      description:
        '顺德曾有人编写过一首《美食竹枝词》：玉洁冰晶品齿高，甜酸爽韧领风骚；仙泉海役琼浆白，蒸出岭南第一糕。这首词形容的正是“岭南名糕”伦教糕。<p>寻味推荐：欢姐伦教糕</p>',
    },
    {
      title: '鱼皮捞',
      imgSrc: './assets/pic/ypl.jpg',
      description:
        '鱼皮当年被创造，主要是顺德人秉承“食材不浪费”的精神，鲩鱼鱼肉做鱼生后，那薄薄一层鱼皮，顺德人也觉得不要浪费，于是挖空心思去想办法烹制鱼皮，最后用多道工序，多种材料，制作出闻名珠三角的‘顺德爽鱼皮’。',
    },
    {
      title: '猪脚姜',
      imgSrc: 'img/zjj.jpg',
      description:
        '猪脚姜，又称鸡蛋猪脚姜醋或姜醋，一碗热腾腾的猪脚姜，入口即化的猪脚，温补的鸡蛋，微辣的肉姜，酸甜回甘的醋汁，混搭后的材料在沙锅一滚，一股浓郁的香味就充满了整个厨房，这是一种温暖的味道。',
    },
    {
      title: '牛乳',
      imgSrc: 'img/niuru.jpg',
      description:
        '牛乳，是顺德的传统美食之一。做好的牛乳片，咸中带着些许甜，有“东方芝士”的美誉，用来佐粥更是一绝，奶香浓郁，回味无穷。金榜人用醋和食盐将没有卖掉的牛奶制成晶莹透明的牛乳片——金榜牛乳来保存。',
    },
    {
      title: '鸡仔饼',
      imgSrc: 'img/jzb.jpg',
      description:
        '鸡仔饼小巧精美、选料多样、营养丰富，是人们品味顺德味道的小吃之一。其技艺根植于顺德劳动人民的勤劳与智慧，承载了顺德人对于美食的实践、探索与不断追求。鸡仔饼制作技艺于 2020 年，列入顺德区第八批区级非物质文化遗产名录。',
    },
  ]);
  </script>
  
  <style scoped>
  .main {
    padding: 20px;
  }
  
  #yy.part2 #first #flag4 {
    font-size: 24px;
    font-weight: bold;
  }
  
  #yy.part2 #first hr {
    border: 1px solid #bc4141;
  }
  
  .body.food-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }
  
  .body.food-body.food-body-img img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
  
  .body.food-body.food-body-content p {
    text-align: center;
  }
  
  .body.food-body.food-body-title h4 {
    text-align: center;
  }
  </style>