<template>
  <div>
    <el-header style="background-color: #2c3e50; color: white; padding: 10px;">
      <el-row :gutter="20">
        <el-col :span="18">
          <span style="font-size: 24px;">著名书法家及其作品展示</span>
        </el-col>
        <el-col :span="2">
          <el-input
            v-model="searchText"
            placeholder="搜索书法家或作品"
            clearable
            @input="handleSearch"
            style="width: 300px; "
          > 
          <template #prepend>
            <el-icon size="25"><ZoomIn /></el-icon>
      </template></el-input>
        </el-col>
      </el-row>
    </el-header>

    <transition-group name="list" tag="div">
      <el-card
        v-for="(calligrapher, index) in filteredCalligraphers"
        :key="index"
        class="calligrapher-card"
        :body-style="{ padding: '25px' }"
        @mouseenter="handleCardEnter(index)"
        @mouseleave="handleCardLeave(index)"
      >
        <img
          :src="calligrapher.imageUrl"
          alt="书法家头像"
          class="calligrapher-image"
          :style="{ width: '20%', borderRadius: '10px' }"
        />
        <h3>{{ calligrapher.name }}</h3>
        <p>{{ calligrapher.introduction }}</p>
        <el-button
          type="text"
          @click="showWorksModal(calligrapher)"
          style="margin-top: 10px; color: #3498db; text-decoration: none;font-size: 20px;"
        >查看作品<el-icon><DataAnalysis /></el-icon></el-button>
      </el-card>
    </transition-group>

    <el-dialog
      v-model="worksModalVisible"
      width="70%"
      :before-close="handleWorksModalClose"
    >
    <template #header>
      <h1>作品展示</h1>
    </template>
      <el-carousel
        :interval="5000"
        indicator-position="outside"
        height="500px"
      >
        <el-carousel-item
          v-for="(work, workIndex) in currentCalligrapher.works"
          :key="workIndex"
        >
          <img
            :src="work.imageUrl"
            alt="作品图片"
            style="width: 100%; height: 100%; object-fit: contain;"
          />
          <div style="position: absolute; bottom: 10px; left: 10px; color: white;">
            <h4>{{ work.name }}</h4>
            <p>{{ work.description }}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="worksModalVisible = false" style="font-size: 25px;padding: 20px;">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { DataAnalysis, ZoomIn } from '@element-plus/icons-vue';
import { ref } from 'vue';

// 模拟数据，实际应用可从接口获取
const calligraphers = [
  {
    name: '王羲之',
    introduction: '东晋时期著名书法家，有“书圣”之称，书法风格平和自然，笔势委婉含蓄，遒美健秀。',
    imageUrl: 'https://n.sinaimg.cn/sinakd20210725ac/303/w544h559/20210725/c922-0c86cd4a5d25419241f95c65f7163fb9.jpg',
    works: [
      {
        name: '《兰亭序》',
        description: '被誉为“天下第一行书”，是兰亭雅集时所作，通篇笔画形态丰富多样，用笔细腻精湛，字与字之间呼应连贯，整体布局疏密得当。',
        imageUrl: 'https://img0.baidu.com/it/u=654418359,1085474659&fm=253&fmt=auto&app=120&f=JPEG?w=1025&h=336'
      },
      {
        name: '《快雪时晴帖》',
        description: '行书写法精妙，笔法流畅，尽显书圣风采。',
        imageUrl: 'https://pic3.zhimg.com/v2-3f1cfc054a38decffbf23ec7f7ec17b2_r.jpg'
      }
    ]
  },
  {
    name: '颜真卿',
    introduction: '唐代杰出书法家，为人刚正不阿，其书法作品体现出雄浑大气、端庄雄伟的特质，在继承传统的基础上大胆创新。',
    imageUrl: 'https://img0.baidu.com/it/u=374497452,1209862226&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=466',
    works: [
      {
        name: '《颜勤礼碑》',
        description: '楷书经典，字体饱满有力，横画细而竖画粗，形成鲜明对照，结构上严谨规整又不失灵动。',
        imageUrl: 'https://img0.baidu.com/it/u=2964282212,1134720450&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667'
      },
      {
        name: '《祭侄文稿》',
        description: '被誉为“天下第二行书”，是颜真卿为祭奠在安史之乱中牺牲的侄子颜季明所作，饱含着悲愤之情，书写时情绪激昂，笔法自然流畅而又极具张力。',
        imageUrl: 'https://img1.baidu.com/it/u=4096025312,1555895142&fm=253&fmt=auto&app=138&f=JPEG?w=1479&h=500'
        }
      ]
  },
  {
    name: '欧阳询',
    introduction: '唐朝著名书法家，书法风格严谨工整、结构险峻、笔法刚劲有力，一生勤奋好学，对书法钻研极深。',
    imageUrl: 'https://img2.baidu.com/it/u=4214196330,2605353055&fm=253&fmt=auto&app=138&f=JPEG?w=420&h=485',
    works: [
      {
        name: '《九成宫醴泉铭》',
        description: '楷书代表作，结构紧凑，笔画精准细致，每一笔都仿佛经过精心雕琢，整体布局规整有序，给人一种端庄稳重、严谨不苟的感觉。',
        imageUrl: 'https://img0.baidu.com/it/u=2205672693,1359079376&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500'
      },
      {
        name: '《化度寺邕禅师舍利塔铭》',
        description: '书法精湛，笔法刚劲，展现出欧阳询深厚的书法功底。',
        imageUrl: 'https://img0.baidu.com/it/u=4270978954,2720423395&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=806'
      }
    ]
  },
  {
    name: '赵孟頫',
    introduction: '元代著名书法家、画家、诗人，博学多才，在书画领域皆有卓越成就，其书法风格圆润清秀，笔法流畅自然，融合了晋唐书法的诸多优点，自成一家。',
    imageUrl: 'https://img1.baidu.com/it/u=3951274020,2674727458&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=506',
    works: [
      {
        name: '《胆巴碑》',
        description: '全称为《大元敕赐龙兴寺重建三门记》，兼具楷书的规整和行书的灵动，笔画圆润饱满，行笔流畅自如，字与字之间呼应连贯，整体给人一种优雅秀丽的感觉。',
        imageUrl: 'https://img0.baidu.com/it/u=1334115285,2717914370&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=781'
      },
      {
        name: '《洛神赋》',
        description: '书法精美，笔画纤细而不失力度，展现出赵孟頫独特的书法韵味。',
        imageUrl: 'https://img1.baidu.com/it/u=3153791627,4223005050&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1585'
      }
    ]
  },
  {
    name: '柳公权',
    introduction: '唐代著名书法家，其书法以骨力劲健著称，结构严谨，笔法刚劲，与颜真卿并称“颜柳”。',
    imageUrl: 'https://img2.baidu.com/it/u=2178167731,4065213013&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=671',
    works: [
      {
        name: '《玄秘塔碑》',
        description: '楷书经典之作，字体刚劲有力，笔画粗细均匀，结构紧凑合理，体现了柳公权高超的楷书技艺。',
        imageUrl: 'https://img0.baidu.com/it/u=156871554,4033010589&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1096'
      },
    ]
  },
  {
    name: '米芾',
    introduction: '北宋著名书法家、画家、书画理论家，其书法风格独特，笔法多变，字体灵动飘逸，有“米颠”之称。',
    imageUrl: 'https://img2.baidu.com/it/u=36812781,3051626914&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=595',
    works: [
      {
        name: '《蜀素帖》',
        description: '被誉为“中华第一美帖”，行笔流畅，笔法丰富多变，字体大小错落有致，极具艺术美感。',
        imageUrl: 'https://img2.baidu.com/it/u=3968505243,3602226865&fm=253&fmt=auto&app=138&f=JPEG?w=1430&h=500'
      },
      {
        name: '《苕溪诗帖》',
        description: '行书写法灵动，笔画粗细变化明显，展现出米芾独特的书法风格。',
        imageUrl: 'https://img1.baidu.com/it/u=2790898645,795700840&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=393'
      }
    ]
  }
];

const searchText = ref('');
const worksModalVisible = ref(false);
const currentCalligrapher = ref({});
const filteredCalligraphers = ref([...calligraphers]);

const handleSearch = () => {
  filteredCalligraphers.value = calligraphers.filter(calligrapher =>
    calligrapher.name.toLowerCase().includes(searchText.value.toLowerCase()) ||
    calligrapher.introduction.toLowerCase().includes(searchText.value.toLowerCase()) ||
    calligrapher.works.some(work =>
      work.name.toLowerCase().includes(searchText.value.toLowerCase()) ||
      work.description.toLowerCase().includes(searchText.value.toLowerCase())
    )
  );
};

const handleCardEnter = (index) => {
  // 卡片鼠标进入时添加放大和阴影加深效果
  const card = document.querySelectorAll('.calligrapher-card')[index];
  card.style.transform = 'scale(1.05)';
  card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
};

const handleCardLeave = (index) => {
  // 卡片鼠标离开时恢复原大小和正常阴影
  const card = document.querySelectorAll('.calligrapher-card')[index];
  card.style.transform = 'scale(1)';
  card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
};

const showWorksModal = (calligrapher) => {
  currentCalligrapher.value = calligrapher;
  worksModalVisible.value = true;

};

const handleWorksModalClose = () => {
  worksModalVisible.value = false;
};
</script setup>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.calligrapher-card {
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
}
.calligrapher-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.dialog-footer {
    text-align: right;
}

</style>