<template>
  <div>
    <el-divider
      ><i class="el-icon-edit" style="font-size: 30px"></i
    ></el-divider>
    <el-tag style="font-size: 20px" type="success">希望下面的内容能够帮到您</el-tag>
    <el-divider>本系统能为您做些什么？</el-divider>
    <el-tag style="font-size: 15px" 
      >本系统基于当前最先进的数据修复算法，无偿为您提供数据修复服务，请将需要修复的数据导入.csv文件并上传，点击下载即可获得修复后的数据</el-tag
    >
    <el-divider>修复的数据一定是正确的吗？</el-divider>
    <el-tag style="font-size: 15px" 
      >即使以最先进的修复算法，我们仍然无法保证您的数据一定被正确修复，但是合适的修复参数能够帮助提高修复的正确率</el-tag
    >
    <el-divider>如何选择正确的修复参数？</el-divider>
    <el-tag style="font-size: 15px"
      >我们提供了三个可供设置的修复参数，接受阈值的设置请大于0.01，最大迭代次数请尽可能大一些，如100000次以上</el-tag
    >
    <el-divider>我的数据是否能得到保护？</el-divider>
    <el-tag style="font-size: 15px" 
      >我们承诺您的隐私会得到保护，上传的数据不会被用以其他用途</el-tag
    >
    <el-divider
      ><i class="el-icon-chat-dot-round" style="font-size: 30px"></i
    ></el-divider>
    <el-tag style="font-size: 15px" >有问题或对我们的建议，请联系邮箱：jg79805425@sina.cn</el-tag>
  </div>
</template>
<script>
export default {
  name: "Help",
};
</script>

<style scoped>
</style>
