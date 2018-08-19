<template>
  <div class="my-store sub-content">
    <tab :tab="tab" @showList="showList"></tab>
    <div class="dynamic" v-for="(item,index) in tab" :key="index" v-if="showListIndex==index?true:false">
      <list :subPostList="listItem" v-for="(listItem,listIndex) in item.list" :key="listIndex"></list>
    </div>
  </div>
</template>

<script>
  import tab from '../common/tab'
  import $common from '../../assets/js/common'
  import list from "../common/list"
  export default {
    data() {
      return {
        tab:[
          {
            tabName:"动态",
            list:[]
          },
          {
            tabName:"商品",
            list:[]
          }
        ],
        showListIndex:0
      }
    },
    created(){
      this.concernedPostList()
    },
    methods:{
      showList(index){
        this.showListIndex = index
      },
      concernedPostList(){
        this.$httpService.concernedPostList(
          {
            "appId":$common.appId,
          	"source":$common.source,
          	"version":$common.version,
          	"otherUserName": "用户名",
          	"pageIndex": 1,
          	"pageSize": 10
          },(res)=>{
            if(res.result == 0){
              this.tab[0].list = data.content.postList
            }
          }
        )
      }
    },
    components: {
      tab,
      list
    }
  }
</script>
<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .my-store{
    background: #fff;
    .tabs{
      height: 44rem/$num;
      line-height: 44rem/$num;
      border-bottom: 1px solid #eee;
      .sub-tab{
        width:50%;
        font-size: 14rem/$num;
        color: #666;
        text-align: center;
      }
      .active{
        color: #B9A468;
        span{
          display: inline-block;
          height:44rem/$num;
          padding:0 9.5rem/$num;
          border-bottom: 2px solid #B9A468;
          box-sizing:border-box;
          -webkit-box-sizing:border-box;
        }
      }
    }
    .dynamic{
      padding:25rem/$num 0 0 25rem/$num;
    }
  }
</style>
