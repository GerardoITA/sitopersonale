<template>
    <div class="myLogo">
        <a href="">Gerardo Giusti</a>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.myLogo {
    font-family: satisfactionFont;
    font-size: calc(1vw + 30px);
    width: calc(25vw + 30px);
    a {
        color: $MineShaft;
        text-decoration: none;
    }
}
</style>