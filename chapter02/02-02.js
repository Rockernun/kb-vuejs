let message = 'GLOBAL';

function outer() {
    let message = 'OUTER';
    console.log(message);

    if (true) {
        let message = 'BLOCK';
        console.log(message);
    }
}

outer();

/* 
<실행 결과>
OUTER   
BLOCK 
*/
