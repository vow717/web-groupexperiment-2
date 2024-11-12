<script setup lang="ts">
import type { CommentItem } from '@/datasource/WkfTypes'
import { addCommentService, listCommentsService } from '@/service/wkf/CommentService'
import { ref } from 'vue'

const commentWorksR = await listCommentsService()
const newCommentItem = ref<CommentItem>({ point: 0, comment: '' })

const commentingItem = ref<string>()
const beginComment = (name: string) => {
  newCommentItem.value = { point: 0, comment: '' }
  commentingItem.value = name
}
const endComment = (name: string) => {
  commentingItem.value = undefined
  newCommentItem.value = { point: 0, comment: '' }
}
const submitComment = async (workName: string) => {
  await addCommentService(workName, newCommentItem.value)
  commentingItem.value = undefined
}
</script>
<template>
  <div class="comments-page">
    <h1>书法作品评论</h1>
    <div v-for="work in commentWorksR" :key="work.name" class="comment-work">
      <h2>{{ work.name }}</h2>
      <img :src="work.imageUrl" alt="书法作品" style="width: 50%; height: auto" />
      <br />
      <el-rate v-model="work.pointAvg" disabled show-score score-template="{value}分" />
      <div v-for="comment in work.commentList" :key="comment.comment" class="comment-item">
        <el-rate v-model="comment.point" disabled show-score score-template="{value}分" />
        <p>{{ comment.comment }}</p>
      </div>
      <!--我要评论-->
      <br />
      <el-button @click="beginComment(work.name)">我要评论</el-button>
      <br />
      <br />

      <template v-if="commentingItem === work.name">
        <el-input v-model="newCommentItem.comment" placeholder="请输入评论" />
        <el-rate v-model="newCommentItem.point" show-score score-template="{value}分" allow-half />
        <br />
        <el-button
          @click="submitComment(work.name)"
          type="primary"
          :disabled="newCommentItem.comment.length === 0 || newCommentItem.point === 0">
          提交评论
        </el-button>
        <el-button @click="endComment(work.name)">取消评论</el-button>
      </template>
    </div>
  </div>
</template>
<style scoped>
.comments-page {
  padding: 20px;
}
.comment-work {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: azure;
}
.comment-item {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: white;
}
</style>
