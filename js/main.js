(function(document){
    window.yh = window.yh || {};
    /*
    * description：弹出框
    * 就个性化而言，js模板灵活性以及效率没有HTML高,这里的createModal方法
    * 只是方便后端调用弹窗更方便，对于个性化强的弹出框还是使用html代码+
    * control方便
    * */
    yh.createModal = function(mo){
        mo.defaultBtn =  mo.defaultBtn || '取消';
        mo.primaryBtn =  mo.primaryBtn || '确定';
        var modalTemp = '<div class="modal default-modal" id="modal">'+
            '<div class="modal-content">'+
            '<div class="modal-header">'+
            '<button type="button" class="mc-icon modal-close" data-dismiss="modal">'+
            '<span>&times;</span>'+
            '</button>'+
            '<h4 class="modal-title">'+mo.title+'</h4>'+
            '</div>'+
            '<div class="modal-body">'+
            '<p>'+mo.content+'</p>'+
            '</div>'+
            '<div class="modal-footer">'+
            '<a href="javascript:" class="action-default modal-close">'+mo.defaultBtn+'</a>'+
            '<a href="javascript:" class="action-primary">'+mo.primaryBtn+'</a>'+
            '</div>'+
            '</div>'+
            '</div>';
        var hadHolder = document.getElementById('modal-wrap') || '';
        if( hadHolder ){
            hadHolder.innerHTML = modalTemp;
        }else{
            var holder = document.createElement('div');
            holder.id = 'modal-wrap';
            holder.innerHTML = modalTemp;
            var body = document.getElementsByTagName('body')[0];
            body.appendChild(holder);
            holder.style.display = 'block';
        }
    };

    yh.controlModal = function(id,func){
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