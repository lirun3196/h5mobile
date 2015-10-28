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
