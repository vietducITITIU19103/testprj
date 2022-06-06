document.getElementById('button1').onclick=function(){
    var ten=document.getElementById('name').value;
    var user=document.getElementById('username').value;
    var password=document.getElementById('pass').value;
    var confirm=document.getElementById('passC').value;
    var gioitinh=document.getElementById('gender').value;
    var ngaysinh=document.getElementById('birthday').value;
    var comments=document.getElementById('com').value;
    

}




document.getElementById('btnInKetQua4').onclick=function(){
    var four=document.getElementById('so_b4').value;
    var sum=0;
    for(var i=0;i<four;i++){
        sum=sum+i;
        if(sum>=10000){
            break;
        }
    }
    document.getElementById('ketQuaBai4').innerHTML=i;
}