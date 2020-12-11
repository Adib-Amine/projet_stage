
const MyPlugin = {
      install(Vue) {
      var userOAuth = new Vue({
        data: {
            isAuthenticated : false,
            access_token : null,
            token_type : 'bearer',
            user_type : '',
            name : '',
            config : {
              headers: {
                  'content-type': 'application/x-www-form-urlencoded'
              }
            },
        },
        methods : {
          getBearer(){
            return {  headers: {'Authorization': `Bearer ${this.access_token}`}}
          },
          // checkExpiration(){
          //     let d = new Date(0)
          //     d.setUTCSeconds(jwt_decode(this.$myauth.access_token).exp);
          //     let n = new Date()
          //     if( (n.getTime() - d.getTime()) / (1000) < 3600){
          //           this.isAuthenticated = false
          //     }
          // },
          // requireAuth2() {
          //   if (MyPlugin.isAuthenticated) {
          //     router.push({
          //       name: 'Login'
          //     })
          //   } else {
          //     if (MyPlugin.user_type != 'admin') {
          //       router.push({
          //         name: 'Home'
          //       })
          //       alert(this.$myauth.user_type)
          //     }
          //   }
          // }
        },
        mounted() {
          if(localStorage.access_token) 
            this.access_token = localStorage.access_token;
        },
        watch:{
          access_token(newAccess_token) {
            localStorage.access_token = newAccess_token;
          },
          // isAuthenticated(){
          //   if (localStorage.access_token) {
          //     let d = new Date(0)
          //     d.setUTCSeconds(jwt_decode(localStorage.access_token).exp);
          //     let n = new Date()
          //     if ((n.getTime() - d.getTime()) / (1000) < 3600) {
          //       return false
          //     }
          //     return true
          //   }
          //   return false
          //   }
        }
      })
      Vue.prototype.$myauth = userOAuth
      
  }
};

export default MyPlugin;
