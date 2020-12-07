const screen = document.getElementById('screen');
const input = document.getElementById('input');

calculation = '';


for(let i=0;i<input.children.length;++i){
    const child = input.children[i];
    child.addEventListener('click',()=>{
        try{
            if(child.textContent=='AC'){
                calculation='';
            }
            else if(child.textContent=='BACK'){
                calculation=calculation.substring(0,calculation.length-1);
            }
            else if(child.textContent=='ANS'){
                let ans = String(eval(calculation));
                calculation=ans;
            }
            else{
                calculation = calculation + child.textContent;
            }
        }
        catch(e){
            calculation='';
        }
        screen.innerText = calculation;
    });
};


