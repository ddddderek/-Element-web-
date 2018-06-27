<template>
	<section id="home">
		<div class="aside_wrapper">
			<aside-mune></aside-mune>
		</div>
		<div class="article_wrapper">
			<top></top>
			<bread-crumb></bread-crumb>
			<div class="conten_wrapper">
				<router-view/>
			</div>
		</div>
	</section>
</template>

<script>
	import asideMune from 'views/layout/aside'
	import top from 'views/layout/top'
	import breadCrumb from 'views/layout/breadCrumb'
	export default	{
		components: {
			asideMune,
			top,
			breadCrumb
		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	#home{
		display:flex;
		width:100%;
		height:100%;
		.aside_wrapper {
			height:100%;
			z-index:99;
		}
		.article_wrapper {
			flex:1;
			.conten_wrapper {
				padding:0 30px;
				height:calc(100vh - 150px)
			}
		}
	}
</style>

