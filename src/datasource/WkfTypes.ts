//评论数据结构
export interface CommentWork {
  name: string
  pointAvg: number
  imageUrl: string
  commentList: CommentItem[]
}

export interface CommentItem {
  point: number
  comment: string
}
