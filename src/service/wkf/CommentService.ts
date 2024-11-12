import type { CommentItem, CommentWork } from '@/datasource/WkfTypes'
import { useCommentStore } from '@/stores/wkf/useCommentStore'

const mockCommentWorks: CommentWork[] = [
  {
    name: '《兰亭序》',
    pointAvg: 4.5,
    commentList: [
      {
        point: 5,
        comment: '《兰亭序》不愧是天下第一行书，笔法细腻流畅，如行云流水。'
      },
      {
        point: 4,
        comment: '整体非常出色，但个别字的结构可以再优化。'
      }
    ],
    imageUrl:
      'https://img0.baidu.com/it/u=654418359,1085474659&fm=253&fmt=auto&app=120&f=JPEG?w=1025&h=336'
  },
  {
    name: '《颜勤礼碑》',
    pointAvg: 4,
    commentList: [
      {
        point: 4,
        comment: '颜体楷书的典范之作，大气磅礴。'
      },
      {
        point: 3,
        comment: '笔画有些地方不够精致。'
      },
      {
        point: 5,
        comment: '每次看都能感受到颜真卿的刚正不阿。'
      }
    ],
    imageUrl:
      'https://img2.baidu.com/it/u=2386048416,3587015279&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1206'
  },
  {
    name: '《九成宫醴泉铭》',
    pointAvg: 4.5,
    commentList: [
      {
        point: 4,
        comment: '法度森严，结构紧凑，很值得学习。'
      },
      {
        point: 5,
        comment: '欧阳询的书法真的是一绝。'
      }
    ],
    imageUrl:
      'https://img0.baidu.com/it/u=3726994775,377230783&fm=253&fmt=auto&app=138&f=JPEG?w=510&h=500'
  },
  {
    name: '《祭侄文稿》',
    pointAvg: 4.5,
    commentList: [
      {
        point: 4,
        comment: '情感真挚，笔法豪放，令人动容。'
      },
      {
        point: 5,
        comment: '颜真卿在悲痛中书写出的杰作。'
      }
    ],
    imageUrl:
      'https://img2.baidu.com/it/u=139429327,156215816&fm=253&fmt=auto&app=138&f=JPEG?w=1603&h=500'
  },
  {
    name: '《寒食帖》',
    pointAvg: 4.3,
    commentList: [
      {
        point: 4,
        comment: '苏轼的书法风格独特，此帖充满诗意。'
      },
      {
        point: 5,
        comment: '笔势跌宕起伏，很有韵味。'
      }
    ],
    imageUrl:
      'https://img2.baidu.com/it/u=2857396494,639809112&fm=253&fmt=auto&app=138&f=JPEG?w=1823&h=600'
  }
]

export const listCommentsService = async () => {
  if (!useCommentStore().allComments.value) {
    useCommentStore().allComments.value = mockCommentWorks
  }
  return useCommentStore().allComments
}

export const addCommentService = async (name: string, commentitem: CommentItem) => {
  useCommentStore().allComments.value?.forEach((item) => {
    if (item.name === name) {
      item.pointAvg =
        (item.pointAvg * item.commentList.length + commentitem.point) /
        (item.commentList.length + 1)
      item.commentList.push(commentitem)
    }
  })
}
