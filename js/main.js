function clearInput( id ){
    if( id ){
        var inputEle = document.getElementById( id );
        var clearBtn = inputEle.nextSibling;
        inputEle.onkeyup = function(evt){
            if( evt.keyCode ===8 ){
                var trimValue = document.getElementById( id).value.trim();
                trimValue.length !== 0 ? clearBtn.style.display = 'inline-block' : clearBtn.style.display = 'none';
            }
        };
        clearBtn.onclick = function(){
            inputEle.value = '';
            inputEle.focus();
            this.style.display = 'none';
        }
    }
}
/*
 var inputList = ['phone', 'password'];
 inputList.forEach(clearInput);*/

var yh = yh || {};
 //蒙层
yh.modal = function(id){
    var selector = document.getElementById(id);
    selector.style.display = 'block';
    var closer = selector.querySelectorAll('.modal-close');
    var closerLength = closer.length, i = 0;
    for( i; i<closerLength; i++){
        closer[i].onclick = function(){
            selector.style.display = 'none';
        }
    }
};