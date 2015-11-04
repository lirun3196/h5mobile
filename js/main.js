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
(function(document){
    window.yh = window.yh || {};
    //蒙层
    yh.modal = function(id,func){
        var selector = document.getElementById(id);
        selector.style.display = 'block';
        var closer = selector.querySelectorAll('.modal-close');
        var closerLength = closer.length, i = 0;
        for( i; i<closerLength; i++){
            closer[i].onclick = function(){
                selector.style.display = 'none';
            }
        }
        if( typeof func === 'function'){
            var certain = selector.querySelector('.action-primary');
            certain.addEventListener('click',func,false);
        }
    };

    yh.clearInput = function ( id ){
        if( id ){
            var inputEle = document.getElementById( id );
            var clearBtn = document.createElement('span');
            var clearIcon = document.createElement('i');
            clearBtn.className = 'clear-input';
            clearIcon.className = 'fa fa-times-circle';
            clearBtn.appendChild(clearIcon);

            inputEle.onkeyup = function(evt){
                var trimValue = document.getElementById( id).value.trim();
                if( evt.keyCode ===8 && trimValue.length !== 0 ){
                    inputEle.parentNode.appendChild(clearBtn);
                }
            };
            clearBtn.onclick = function(){
                inputEle.value = '';
                inputEle.focus();
                this.remove();
            }
        }
    };
})(document);
