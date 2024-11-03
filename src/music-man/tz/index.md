---
title: 陶喆音乐
article: false
---


<script setup>
import MusicMan from '@MusicMan';
import { data } from '@source/music-man/tz/data.ts';
const a = data;
</script>
<iframe id="dogePlayerFrame" src="https://player.dogecloud.com/web/player.html?vcode=f8b9a3f11d820731&userId=8067&autoPlay=false&inFrame=true" allowfullscreen="true" msallowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" allowtransparency="true" scrolling="no" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" referrerPolicy="unsafe-url"></iframe>
<MusicMan :audioData=a />

::: warning 版权声明
本文由 [南烁](https://www.nanshuo.icu) 开发，如有引用、借鉴的请保留版权声明
:::
