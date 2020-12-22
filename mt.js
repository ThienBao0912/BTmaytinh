var x='';
function a(id){
    return document.getElementById(id);
}
function set_num(num){
    x+=num;
    a('KQ').value = x;
}
function delAll(){
    x='';
    a('KQ').value = x;
}
function Del(){
    let y = x.length;
    x = x.slice(0, y - 1);
    a('KQ').value = x;
}
function Ketqua(){
    a('KQ').value = eval(a('KQ').value);
    x = a('KQ').value;
}
