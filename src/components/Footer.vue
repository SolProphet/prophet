<template>
    <div class="footer-component">
        <h5>Contact Us</h5>
        <a class="email" href="mailto:official@solprophet.com">official@solprophet.com</a>
        <div class="amm">
            <a href="/#" class="amm-item"><img src="../assets/footer/Twitter.png" alt="Twitter" /></a>
            <a href="/#" class="amm-item"><img src="../assets/footer/discord.png" alt="discord" /></a>
            <a href="/#" class="amm-item"><img src="../assets/footer/medium.png" alt="medium" /></a>
            <a href="/#" class="amm-item"><img src="../assets/footer/telegram.png" alt="telegram" /></a>
            <a href="/#" class="amm-item"><img src="../assets/footer/github.png" alt="github" /></a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .footer-component {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: px2rem(602);
        background: #232323;

        h5 {
            margin: px2rem(67) 0 px2rem(85);
            font-size: px2rem(54);
            color: #FFF;
        }

        .email {
            margin-bottom: px2rem(106);
            display: block;
            width: px2rem(800);
            height: px2rem(100);
            background: #FFFFFF;
            border-radius: px2rem(15);
            text-align: center;
            line-height: px2rem(100);
            font-size: px2rem(30);
            font-weight: bold;
            color: #5B9E9B;
        }

        .amm {
            display: flex;
            justify-content: space-between;
            width: px2rem(800);
        }

        .amm-item {
            display: flex;
            width: px2rem(80);
            height: px2rem(80);

            img {
                width: 100%;
                height: 100%;
                transition: all .15s;

                &:hover {
                    transform: scale3d(1.1, 1.1, 1.1);
                }
            }
        }
    }

    @media screen and (max-width: 800px) {
        .footer-component {
            height: px2rem(470);

            h5 {
                margin: px2rem(53) 0 px2rem(50);
                font-size: px2rem(36);
                color: #FFF;
            }

            .email {
                margin: 0 auto px2rem(85);
                width: px2rem(690);
            }
            .amm {
                padding: 0 px2rem(29);
                width: 100vw
            }
        }
    }
</style>