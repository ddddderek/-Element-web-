<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
  	document.body.className = 'custom-20a0ff'
  }
}
</script>

<style lang="scss" scoped>
	#app{
		width:100%;
		height:100%;
		background-color:#f4f4f4;
	}
</style>
