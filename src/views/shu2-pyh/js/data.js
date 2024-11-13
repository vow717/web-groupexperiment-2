const storys =[
    [
    {flag:false,id:1,name:'大一统历法”的编制',content:'在古代中国，历法不仅仅是一种时间的记录方式，它也与政治和社会稳定息息相关。最著名的例子之一是西汉时期的太初历（公元前104年）。太初历的编制通过大量的天文观测和数学计算，精确地反映了太阳、月亮、星辰等天体的运行规律，标志着中国历法科学的一大进步。汉武帝刘彻重视天文历法，特别是通过“占星术”来辅佐决策，认为天象的变化反映了国家的命运。'},
    {flag:false,id:2,name:'黄道带与“紫微星”',content:'中国古代的天文体系包含了黄道带和紫微星的概念。黄道带是一条围绕太阳的带状区域，古代天文学家通过对黄道带星座的观测来预测气候、作物丰收等。紫微星则被认为是天帝之座，是帝王和国家的象征。古代天文学家通过对星象的分析，结合阴阳五行学说，推测国家的未来运势。'}
    ],
    [
        {flag:false,id:3,name:'《易经》与卦象的数理',content:'《易经》是中国古代最重要的哲学经典之一，也是数理文化的代表。《易经》通过64个卦象来描绘宇宙万象，每个卦象都有其独特的数字组合。卦象的变动代表了宇宙的阴阳变化和社会生活中的起伏。例如，乾卦（☰）代表天，象征阳刚、力量；坤卦（☷）代表地，象征阴柔、包容。通过这些数字和符号的变动，卦象提供了对未来的指引。'},
        {flag:false,id:4,name:'五行八字与命理',content:'古代中国的命理学（如四柱八字）是通过出生时的天干地支、五行属性来推算一个人的命运。每个人出生的年、月、日、时对应天干地支，形成八字。通过对这些数字的解析，命理师推算出一个人命运的喜忌、运势的变化。这种运用数字和天文现象结合的思想，深刻地影响了中国文化中的哲学观念和社会实践'}
    ],
    [
        {flag:false,id:5,name:'《九章算术》与实用数学',content:'《九章算术》是中国古代数学的经典之一，成书大约在汉代，汇集了当时中国数学的精华。书中涵盖了多种实际应用，如土地测量、工程建筑、商贸交易、税收制度等。特别是在“盈不足”章节中，展示了古人如何利用算术方法解决实际问题。这本书对后世数学的发展产生了深远的影响，并成为世界数学史上不可忽视的一部分。'},
        {flag:false,id:6,name:'几何学与建筑',content:'古代中国的建筑工程，例如长城、宫殿、寺庙等，都充分体现了古代几何学的应用。例如，古人用“矩尺”来测量土地，保证每块土地的分配合理。又如，建造宫殿、佛塔等宏伟建筑时，设计师和工匠常运用几何图形、对称和比例来确保结构的稳固与美观。'}
    ],
    [{flag:false,id:7,name:'道生一，一生二，二生三，三生万物',content:'道家哲学的“道生一，一生二，二生三，三生万物”是数的哲学应用的经典表达。道家认为，宇宙的起源是“道”（无形无象的力量），通过一的变化产生二（阴阳），再由二的互动产生三（三才：天、地、人），从而诞生出万物。这种“数”的变化象征着宇宙的生成与运行，是一种深刻的数理哲学思想。道家的数不仅是数字，它是宇宙深层规律的反映。'},
      {flag:false,id:8,name:'阴阳五行与宇宙秩序',content:'阴阳五行学说认为，宇宙万物的运动和变化由五种元素（金、木、水、火、土）相生相克的关系所决定，而这种变化背后则隐藏着精妙的数字和数理。五行相互作用，形成了自然界的循环和变化。在中国古代哲学中，数字的变化代表着天地间一切现象的发生与变化。这种数与自然的联系贯穿了中国古代的哲学、医学、占卜以及天文等各个领域。'}
    ]
  ]
const elements = [
    {id:1,title:'天文与历法',storys:storys[0],text:'古代的“数”常常用于天文观察、星象预测以及历法的编制。例如，阴阳五行学说、天文星座等都涉及到数理的应用。          古代中国的天文与历法密切相关，数在此中的应用，不仅是对天象的观测，也是中国古代宇宙观的体现。天文观测和历法编制的精准性，往往被看作国家治理和社会秩序的象征。'},
    {id:2,title:'占卜与命理',storys:storys[1],text:'在古代占卜和命理学中，“数”有重要作用，尤其是在《易经》以及五行八字等术数体系中，数被用来解释命运、预示未来。在古代中国，占卜和命理学的核心部分正是数。通过数字和符号的变化，古人试图探寻天地之间的奥秘，预测个人与国家的未来。占卜的数学基础往往与《易经》密切相关，《易经》被称为“数的哲学”，它运用阴阳、五行和八卦等数理方法，探索世界的变化规律和人类的命运。'},
    {id:3,title:'算术与几何',storys:storys[2],text:'古代的数学包括了算术、几何以及一些与工程、建筑、农业等实践相关的应用，例如测量土地面积、建筑设计等。古代中国的数学发展，特别是在算术和几何领域，也有着许多深刻的文化故事和应用实践。数学不仅仅是计算工具，它涉及了人们对空间、物质和自然现象的理解，甚至涉及到建筑、天文和社会经济的组织。'},
    {id:4,title:'哲学和宇宙观',storys:storys[3],text:'在古代的哲学体系中，数常被认为是宇宙的基础原理之一，例如“道生一，一生二，二生三，三生万物”的道家思想中，数与宇宙的生成与变化紧密相关。'}
  ];
  
//swiper
  const slides = [
    {title:'九章算术',author:'秦九韶',url:'https://ik.imagekit.io/hushimg/NoteImgs/jzss.png?updatedAt=1731487950509',info:'《九章算术》是中国古代最重要的数学经典之一，原作出现在西汉时期，虽然秦九韶的《九章算术》是对其的注解和扩充，但《九章算术》本身并不是他原创的。它是中国古代数学体系的总结，涉及到代数、几何、数论、应用数学等多个领域，深刻影响了中国后世的数学发展。'},
    {title:'海岛算经',author:'刘徽',url:'https://ik.imagekit.io/hushimg/NoteImgs/hdsj.jpeg?updatedAt=1731488528547',info:'《海岛算经》是中国古代的一部数学著作，主要记载了刘徽对古代算术方法的总结和对一些数学问题的解法。书名中的“海岛”二字反映了该书对数学问题的地理和工程应用特性。'},
    {title:'缀术',author:'祖冲之',url:'https://ik.imagekit.io/hushimg/NoteImgs/zs.jpg?updatedAt=1731488498785',info:'《缀术》是祖冲之所著的一部关于数理的经典著作，内容涵盖了数学的多方面，尤其是与天文、力学、机械和几何学相关的问题。祖冲之的《缀术》是一部数学与自然科学结合的著作，体现了当时中国数学的高水平。'},
    {title:'测圆海镜',author:'李治',url:'https://ik.imagekit.io/hushimg/NoteImgs/cyhj.jpeg?updatedAt=1731488453712',info:'《测圆海镜》是唐代数学家李治所著，主要探讨圆的几何性质及圆面积、圆周率等相关内容。李治通过大量的几何推导，提出了一些新的计算方法，对于后世的数学研究具有重要的启发作用。'},
    {title:'算学启蒙',author:'朱世杰',url:'https://ik.imagekit.io/hushimg/NoteImgs/sxqm.jpeg?updatedAt=1731488287730',info:'《算学启蒙》是南宋数学家朱世杰的著作，内容涵盖了方程求解、数论、几何、比例等多个领域。朱世杰在书中系统整理了许多数学方法，尤其是在解方程的技巧上具有重要影响。'}
  ]

  //people
  const people=[
    {name:'秦九韶',detail:'秦九韶是北宋时期的数学家，他的《九章算术》注解是对原书内容的扩充和详细说明，注重数学方法的推理和求解，特别是在代数解法的阐述上具有重要意义。秦九韶不仅注重数学问题的解决，还提出了一些实际应用的模型，这些内容对于后世的数学研究起到了推动作用。'},
    {name:'祖冲之',detail:'祖冲之是南北朝时期的著名数学家、天文学家。他是世界上最早计算出圆周率精确值的人之一，圆周率的精确值为3.1415926，误差非常小，是当时全世界数学界的巨大成就。祖冲之的工作不仅对中国数学发展产生深远影响，也影响了世界数学史。他还在数论、天文学等多个领域做出了卓越的贡献。'},
    {name:'李治',detail:'李治是唐代的数学家和天文学家，他的《测圆海镜》是古代中国圆周率研究的经典之一。李治对圆周率的计算做出了贡献，尤其是改进了圆的面积计算方法。李治还涉及了许多其他领域的数学研究，如天文观测、天体运动等，他的贡献对中国古代科学尤其是天文数学的发展产生了重要影响。'},
    {name:'刘徽',detail:'刘徽是三国时期魏国的数学家，他的数学成就不仅限于《海岛算经》，他还对许多数学问题进行了深入研究，尤其是在几何学和代数学方面。书中涉及了很多实用的计算问题，例如比例、分数计算、面积和体积计算等，具有较强的实际应用性质。刘徽最著名的贡献之一是他对《九章算术》的注解，他提出了很多创新性的数学方法，如“割圆术”（类似于现代的积分法），用于解决圆周和圆面积等几何问题。此外，刘徽也提出了“密度法”和“孪生法”，为后世的数学发展奠定了基础。'},
    {name:'朱世杰',detail:'朱世杰是南宋时期著名的数学家，他的《算学启蒙》主要是面向初学者的数学教材，意在普及数学知识和解题技巧。朱世杰提出了一些新的数学思想，如“均值法”和“推演法”，对于古代中国数学教育的发展起到了积极作用。更重要的是，他在方程解法的系统性和算法的简化方面有显著贡献，体现了中国古代数学思维的独特性。'}
]
  export {elements,slides,people}