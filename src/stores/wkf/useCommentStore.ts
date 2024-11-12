import type { CommentWork } from '@/datasource/WkfTypes'
import { ref } from 'vue'

const allComments = ref<CommentWork[]>()

const store = { allComments }

export const useCommentStore = () => {
  return store
}
