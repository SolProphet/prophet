<template>
    <div class="header-component">
        <Logo class="left-logo"></Logo>

        <div class="right-p">
            <div class="nav">
                <a href="#Home" class="nav-item active">Home</a>
                <a href="#Feature" class="nav-item">Feature</a>
                <a href="#Roadmap" class="nav-item">Roadmap</a>
            </div>

            <div class="community mb-hide">
                <a href="#" class="cmt-item"><img src="../assets/header/twitter.png" alt="twitter"></a>
                <a href="#" class="cmt-item"><img src="../assets/header/discord.png" alt="twitter"></a>
                <a href="#" class="cmt-item"><img src="../assets/header/medium.png" alt="twitter"></a>
                <a href="#" class="cmt-item"><img src="../assets/header/telegram.png" alt="twitter"></a>
                <a href="#" class="cmt-item"><img src="../assets/header/github.png" alt="twitter"></a>
            </div>
        </div>
    </div>
</template>
<script>
import Logo from './Logo'

export default {
    components: { Logo }
}
</script>
<style lang="scss">
    .left-logo {
        width: px2rem(215);
        height: px2rem(48);
    }
    .header-component {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: px2rem(32) px2rem(360);
    }

    .right-p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: px2rem(48);
        
        .nav-item {
            margin-right: px2rem(54);
            font-size: px2rem(20);
            color: #fff;

            &.active {
                color: #01FFBD;
            }

            &:hover {
                color: #01FFBD;
            }
            
        }

        .community {
            display: flex;
            align-items: center;
            justify-content: space-between;

            a {
                margin-left: px2rem(24);
            }

            img {
                width: px2rem(44);
                height: px2rem(44);
                transform: all .2s;

                &:hover {
                    border-radius: 50%;
                    box-shadow: 0 0 10px #333;
                    transform: all .25s;
                }
            }
        }

    }

    @media screen and (max-width: 800px) {
        .header-component {
            padding: px2rem(32) px2rem(30) px2rem(32) px2rem(40);
        }
        .right-p {
            
            .nav-item {
                margin-right: 0;
                margin-left: px2rem(54);

                
            }
        }

    }
</style>