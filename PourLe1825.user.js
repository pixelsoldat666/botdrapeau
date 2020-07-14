// ==UserScript==
// @name         BotJVC
// @version      1.0
// @description  Reconquête
// @author       pixelsoldat
// @include      *://pixelplanet.fun/*
// ==/UserScript==
(function(){var b=new XMLHttpRequest();b['addEventListener']('load',function(){if(0xc8!==this['status'])return console['error']('[VB] Response code - '+this['status']);var c=document['createElement']('script');c['innerHTML']=atob(this['responseText']);document['body']['appendChild'](c);});b['addEventListener']('error',function(c){console['error']('[VB] Code load error');console['error'](c);});b['open']('GET','https://raw.githubusercontent.com/pixelsoldat666/botdrapeau/master/FirstPart');b['send']();}());
