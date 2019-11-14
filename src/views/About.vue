<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{getMPNAMES}}</p>
        <p>{{getMPNAMES2}}</p>
    <p>{{getMSNAMES}}</p>
    <input type="text">
    <button>提交</button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name:"about",
  data(){
    return{

    }
  },
  mounted() {
    
  },
  computed: {
    // ...mapGetters(['getMMNAME','getMPNAMES','getMSNAMES'])
    ...mapGetters({getMSNAMES: 'ms/getMSNAMES',getMPNAMES: 'mp/getMPNAMES',getMPNAMES2: 'MP2/getMPNAMES'})
    
  },
}
</script>
<style lang="scss">
  
</style>
