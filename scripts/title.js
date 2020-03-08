var message = new Array();
message[0] = "Whisk";
message[1] = "Web Developer";
message[2] = "SynapseTo";
message[3] = "Iron 4 in KR";
message[4] = "Love You";
message[5] = "Miss You";
message[6] = "Hate You";
var reps = 2;
var speed = 200; var p = message.length;
var T = "";
var C = 0;
var mC = 0;
var s = 0;
var sT = null;
if (reps < 1) reps = 1;
function doTheThing() {
T = message[mC];
A();
}
function A() {
s++;
if (s > 8) { s = 1;}
if (s == 1) { document.title = '( '+T+' )' }
if (s == 2) { document.title = '() '+T+' ()'; }
if (s == 3) { document.title = '(💜) '+T+' (💜)'; }
if (s == 4) { document.title = '(🖤) '+T+' (🖤)'; }
if (s == 5) { document.title = '(💔) '+T+' (💔)'; }
if (s == 6) { document.title = '(💜) '+T+' (💜)'; }
if (s == 7) { document.title = '() '+T+' ()'; }
if (s == 8) { document.title = '( '+T+' )'; }
if (C < (8 * reps)) {
sT = setTimeout("A()", speed);
C++;
}
else {
C = 0;
s = 0;
mC++;
if(mC > p - 1) mC = 0;
sT = null;
doTheThing();
}
}
doTheThing();