let count = 0

document.getElementById('btau').onclick = function(){
    count+=1
    document.getElementById('countLabel').innerHTML = count;
}
document.getElementById('btre').onclick = function(){
    count = 0
    document.getElementById('countLabel').innerHTML = count;
}
document.getElementById('btdi').onclick = function(){
    count-=1
    document.getElementById('countLabel').innerHTML = count;
}