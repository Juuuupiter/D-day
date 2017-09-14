/**
 * Created by 李木子 on 2017/9/14.
 */
var oBtn = document.getElementById('star-card-club-button');
var aP = oBtn.getElementsByTagName ('p');
var oBon = document.getElementById('black-coffee-button');
var ap = oBon .getElementsByTagName ('p');
for(var i=0; i<aP.length; i++){
    aP[i].onmouseover  = function () {
        this.className = 'selected';
    };
    aP[i].onmouseout = function () {
        this.className = 'color';
    }
}
for(var i=0; i<ap.length; i++){
    ap[i].onmouseover  = function () {
        this.className = 'selected';
    };
    ap[i].onmouseout = function () {
        this.className = 'color';
    }
}
//
// var oReply = document .getElementById ('reply-line');
// var oH = oReply .getElementsByTagName ('h1');
// for(var j=0;j<oH.length ;)