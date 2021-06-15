<template>
	<div class="home">
		<div class="banner">
			<h1>Prophet</h1>
			<h3 class="mb-hide">Solana-based index generation, forecasting, insurance and hedging platform <br> focusing on cryptocurrency assets</h3>
			<h3 class="mb-show">Solana-based index generation, <br> forecasting, insurance and hedging platform <br> focusing on cryptocurrency assets</h3>
			<button class="launch-dapp">LAUNCH DAPP</button>
		</div>

		<div class="feature" id="Feature">
			<div class="title">Feature</div>
			<div class="ft-contain">
				<div class="ft-item">
					<img src="../assets/home/prediction.png" alt="prediction">
					<div>Prediction</div>
					<p>Automate the creation, processing, and settlement of prediction topics about prices</p>
				</div>
				<div class="ft-item">
					<img src="../assets/home/index.png" alt="index">
					<div>Index</div>
					<p>Integrate the cryptocurrency of different circuits and synthesize the corresponding price index derivatives</p>
				</div>
				<div class="ft-item">
					<img src="../assets/home/insurance.png" alt="insurance">
					<div>insurance</div>
					<p>NFT+CDS double insurance provides security for assets of decentralized projects</p>
				</div>
				<div class="ft-item">
					<img src="../assets/home/hedge.png" alt="hedge">
					<div>hedge</div>
					<p>Set up a hedge fund, and users can use the strategies provided by the platform to earn profits</p>
				</div>
			</div>
		</div>

		<div class="feature-map">
			<img src="../assets/home/feature-map.png" alt="feature-map">
		</div>

		<div class="roadmap" id="Roadmap">
			<div class="title" >Roadmap</div>
			<div class="roadmap-content">
				<div class="q-title q3-t">2021<br>Q3</div>
				<ul class="q3">
					<li>
						<span></span> 
						<div>Stably run the Solana validation node</div>
					</li>
					<li>
						<span></span>
						<div>Launch the Short-term Price Prediction platform</div>
					</li>
					<li>
						<span></span>
						<div>Launch the Prediction Platform Staking event</div>
					</li>
				</ul>
				<div class="q-title q4-t">2021<br>Q4</div>
				<ul class="q4">
					<li>
						<span></span> 
						<div>Launch the index synthetic tokens</div>
					</li>
					<li>
						<span></span>
						<div>Add index tokens to the prediction platform</div>
					</li>
					<li>
						<span></span>
						<div>Index tokens predict staking event</div>
					</li>
				</ul>
				<div class="q-title q1-t">2022<br>Q1</div>
				<ul class="q1">
					<li>
						<span></span> 
						<div>Launch the insurance platform of NFT+CDS</div>
					</li>
					<li>
						<span></span>
						<div>Launch the staking event of insurance platform</div>
					</li>
				</ul>
				<div class="q-title q2-t">2022<br>Q2</div>
				<ul class="q2">
					<li>
						<span></span> 
						<div>Launch the Hedge Fund Platform</div>
					</li>
					<li>
						<span></span>
						<div>Launch the Staking event of participating in hedge fund</div>
					</li>
				</ul>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
	components: {

	},
};
</script>

<style lang="scss">
.home {

	.banner {
		height: px2rem(896);
		background: url('../assets/bg.png') no-repeat center center;
		background-size: 100% 100%;
		padding: px2rem(274) px2rem(360) 0;

		h1 {
			height: px2rem(124);
			line-height: px2rem(124);
			font-size: px2rem(124);
			color: #fff;
		}

		h3 {
			margin: px2rem(30) 0 0;
			width: px2rem(556);
			font-size: px2rem(24);
			color: #fff;
			line-height: px2rem(36);
			font-weight: 400;
		}

		.launch-dapp {
			margin: px2rem(32) 0 0;
			display: block;
			border: none;
			width: px2rem(300);
			height: px2rem(80);
			background: #01FFBD;
			border-radius: px2rem(15);
			color: #333;
			font-size: px2rem(24);
		}
	}

	.feature {
		.title {
			padding: px2rem(128) 0 px2rem(30);
			font-size: px2rem(54);
			text-align: center;
			color: #333;
		}
		
		.ft-contain {
			display: flex;
			flex-wrap: wrap;
			padding: 0 px2rem(340);
		}

		.ft-item {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0 px2rem(16) px2rem(76);
			width: px2rem(580);
			height: px2rem(280);
			background: #FFFFFF;
			border-radius: px2rem(15);
			box-shadow: 0 0 10px #ccc;
			transition: all .15s;

			&:hover {
				transform: scale3d(1.03,1.03,1.03);
			}

			img {
				margin-top: px2rem(-45);
				width: px2rem(100);
				height: px2rem(100);
			}

			div {
				margin: px2rem(47) 0 px2rem(27);
				height: px2rem(20);
				line-height: px2rem(20);
				font-size: px2rem(24);
				font-weight: bold;
			}

			p {
				width: px2rem(448);
				font-size: px2rem(16);
				color: #5B9E9B;
				text-align: center;
			}

			&:first-child div {
				color: #41BB96;
			}

			&:nth-child(2) div {
				color: #79ABD2;
			}
			&:nth-child(3) div {
				color: #BD83E8;
			}
			&:nth-child(4) div {
				color: #FA62FC;
			}
		}
	}

	.feature-map {
		display: flex;
		justify-content: center;
		padding: px2rem(75) 0 0;
		height: px2rem(648);
		background: #F0F8F6;

		img {
			width: px2rem(767);
			height: px2rem(508);
		}
	}

	.roadmap {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: px2rem(180);

		.title {
			margin: px2rem(127) 0 px2rem(110);
			font-size: px2rem(54);
			text-align: center;
			color: #333;
			font-weight: bold;
		}

		.roadmap-content {
			position: relative;
			width: px2rem(1320);
			height: px2rem(365);
			background: url(../assets/home/roadmap.png) no-repeat center center;
			background-size: px2rem(1320) px2rem(365);
		}

		ul {
			position: absolute;
			list-style: none;

			li {
				display: flex;
				margin: 0 0 px2rem(17);

				span {
					display: inline-block;
					margin: px2rem(6) px2rem(12) 0 0;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background-color: #41BB96;
				}

				div {
					white-space: pre-wrap;
					width: px2rem(310);
					font-size: px2rem(16);
					color: #333;
					font-weight: bold;
				}
			}
		}

		.q3 {
			left: px2rem(96);
			top: px2rem(260);
			z-index: 4;
		}

		.q4 {
			left: px2rem(430);
			top: px2rem(0);
		}

		.q1 {
			right: px2rem(347);
			top: px2rem(255);
		}

		.q2 {
			right: px2rem(65);
			top: px2rem(50);
		}

		.q-title {
			position: absolute;
			font-size: px2rem(36);
			color: #333;
			text-align: center;
			font-weight: bold;
		}

		.q3-t {
			top: px2rem(60);
			left: px2rem(230);
		}

		.q4-t {
			bottom: px2rem(60);
			left: px2rem(504);
		}

		.q1-t {
			top: px2rem(64);
			right: px2rem(462);
		}

		.q2-t {
			bottom: px2rem(56);
			right: px2rem(190);
		}
	}
}

@media screen and (max-width: 800px) {
	.home {

		.banner {
			display: flex;
			flex-direction: column;
			align-items: center;
			height: px2rem(732);
			background-image: url('../assets/home/bg-mob.png');
			background-size: 100% px2rem(732);
			padding: px2rem(210) 0 0;

			h1 {
				height: px2rem(80);
				line-height: px2rem(80);
				font-size: px2rem(80);
			}

			h3 {
				margin: px2rem(30) 0 0;
				text-align: center;
			}

		}


		.feature {
			.title {
				padding: px2rem(50) 0 px2rem(80);
			}
			.ft-contain {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				padding: 0 px2rem(26);
			}

			.ft-item {
				margin: 0 0 px2rem(84);
				width: px2rem(337);
				height: px2rem(350);

				p {
					word-break: break-all;
					width: px2rem(296);
				}
			}
		}

		.feature-map {
			padding: px2rem(49) 0 0;
			height: px2rem(580);

			img {
				width: px2rem(635);
				height: px2rem(479);
			}
		}

		.roadmap {
			position: relative;
			padding: 0 0 px2rem(90);

			.title {
				/* margin: px2rem(63) 0 px2rem(0); */
				margin: 0;
				position: absolute;
				left: 0;
				width: 100vw;
				top: px2rem(36);
				z-index: 4;
				text-align: center;
				font-size: px2rem(36);
			}

			.roadmap-content {
				position: relative;
				width: 100vw;
				height: px2rem(1320);
				background: url(../assets/home/roadmap-mob.png) no-repeat center center;
				background-size: px2rem(365) px2rem(1320);
			}

			ul {
				position: absolute;
				list-style: none;

				li {
					display: flex;
					margin: 0 0 px2rem(17);

					span {
						display: inline-block;
						margin: px2rem(6) px2rem(12) 0 0;
						width: 8px;
						height: 8px;
						border-radius: 50%;
						background-color: #41BB96;
					}

					div {
						white-space: pre-wrap;
						width: px2rem(305);
						font-size: px2rem(16);
						color: #333;
						font-weight: bold;
					}
				}
			}

			.q3 {
				left: px2rem(20);
				top: px2rem(190);
				z-index: 4;
			}

			.q4 {
				left: auto;
				right: px2rem(0);
				top: px2rem(466);
			}

			.q1 {
				right: auto;
				left: px2rem(44);
				top: px2rem(750);
			}

			.q2 {
				right: px2rem(10);
				top: px2rem(1020);
			}

			.q-title {
				position: absolute;

				font-size: px2rem(36);
				color: #333;
				text-align: center;
				font-weight: bold;
			}

			.q3-t {
				top: px2rem(224);
				left: auto;
				right: px2rem(258);
			}

			.q4-t {
				bottom: auto;
				top: px2rem(494);
				left: px2rem(260);
			}

			.q1-t {
				top: px2rem(772);
				right: px2rem(258);
			}

			.q2-t {
				bottom: px2rem(190);
				right: auto;
				left: px2rem(256);
			}
		}
	}
}
</style>

