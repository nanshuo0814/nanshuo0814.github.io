<template>
    <div id="la-data-widget-placeholder" style="margin-bottom: 50px;"></div>
</template>
<script setup>
import {onMounted } from 'vue';

onMounted(() => {
    // 加载LA-DATA-WIDGET脚本
    const widgetScript = document.createElement('script');
    widgetScript.id = "LA-DATA-WIDGET";
    widgetScript.crossOrigin = "anonymous";
    widgetScript.charset = "UTF-8";
    widgetScript.src = "https://v6-widget.51.la/v6/3KgyrLJcRxjEXjLO/quote.js?theme=#1690FF,#C90CEF,#288BCD,#02F44A,,#858705,14&col=true&f=14&badge=icon_0&icon=center";
    document.getElementById('la-data-widget-placeholder').appendChild(widgetScript);
});

</script>