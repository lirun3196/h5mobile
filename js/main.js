 function clearInput( id ){
     if( id ){
         var inputEle = document.getElementById( id );
         var clearBtn = inputEle.nextSibling;
         inputEle.onkeyup = function(){
             var trimValue = document.getElementById( id).value.trim();
             trimValue.length !== 0 ? clearBtn.style.display = 'inline-block' : clearBtn.style.display = 'none';
         };
         clearBtn.onclick = function(){
             inputEle.value = '';
             this.style.display = 'none';
         }
     }
 }
/*
 var inputList = ['phone', 'password'];
 inputList.forEach(clearInput);*/
