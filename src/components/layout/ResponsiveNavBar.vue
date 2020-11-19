<template>
    <nav>
        <ul :style="{background : background || '#4e73df'}"  ref="nav">
           <figure class="image-logo" @click="toggleNav">
				<img :src="imagePath" height="40px" width="40px" />
			</figure>
			<li>
				<!-- <i class="ion-home"></i> -->
			</li>
            <li
				v-for="(link, index) in navLinks"
				:key="index"
			>
				<router-link
					:to="link.path"
					:style="{ color: linkColor || '#f8f9fa' }"
				>
					{{ link.text }}
					<i :class="link.icon" />
				</router-link>
			</li>
        </ul>
		<!-- 
			ight : #f8f9fa
			dark : #343a40 
			primary : #007bff

		-->
    </nav>
</template>

<script>
export default {
    props : ['navLinks','background','linkColor','hoverBackground','imagePath'],
    methods: {
		toggleNav () {
			const nav = this.$refs.nav.classList
			nav.contains('active') ? nav.remove('active') : nav.add('active')
		}
	}
}
</script>

<style scoped lang="scss">
nav {
	height: 100%;
	// width: 100%;
	// box-shadow: 2px 2px 2px #CCC;
	ul {
		display: flex;
		height: 100%;
		align-items: center;
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;
		box-shadow: 2px 2px 2px #CCC;
		figure {
			cursor: pointer;
			// margin-right: 10px;
		}
		a {
			text-decoration: none;
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
		}
		i {
			margin-right: 10px;
			font-size: 22px;
			font-weight: normal;
		}
		li {
			list-style-type: none;
			padding: 10px 20px;
			font-size: 1em;
			opacity: 0.8;
		}
		li:hover{
			opacity: 1;
			font-size: 1.2em;
			i {
			margin-right: 15px;
			font-size: 30px;
			font-weight: normal;
		}
		}
	}
}
// @media screen and (max-width: 759px) {
	nav {   ul {
			position: absolute;
			width: 300px;
			height:100%;
			flex-direction: column;
			left: -240px;
			padding-top: 40px;
			transition: 300ms ease all;
			// top: 60px;
			&.active {   left: 0px;    }
			figure {
				position: fixed;
				z-index: 1;
				top: 10px;
				left: 10px;
			}
			li {
				width: 100%;
				padding-left: 0;
				padding-right: 0;
			}
			a {flex-direction: row;
				margin-left: 20px;
				justify-content: space-between;
				margin-right: 13px;
			}
		}
	}
// }
</style>