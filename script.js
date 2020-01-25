var map = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

function draw(){
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            if(map[j][i]=='0')document.getElementsByClassName("item_"+i+j)[0].innerHTML = '';
            if(map[j][i]=='0')document.getElementsByClassName("item_"+i+j)[0].style.background = '#ccc';
            if(map[j][i]=='2')document.getElementsByClassName("item_"+i+j)[0].innerHTML = '2';
            if(map[j][i]=='2')document.getElementsByClassName("item_"+i+j)[0].style.background = '#eee4da';
            if(map[j][i]=='4')document.getElementsByClassName("item_"+i+j)[0].innerHTML = '4';
            if(map[j][i]=='4')document.getElementsByClassName("item_"+i+j)[0].style.background = '#ece0c8';
            if(map[j][i]=='8')document.getElementsByClassName("item_"+i+j)[0].innerHTML = '8';
            if(map[j][i]=='8')document.getElementsByClassName("item_"+i+j)[0].style.background = '#f1b078';
            if(map[j][i]=='16')document.getElementsByClassName("item_"+i+j)[0].innerHTML = '16';
            if(map[j][i]=='16')document.getElementsByClassName("item_"+i+j)[0].style.background = '#ee8c4f';
            if(map[j][i]=='32')document.getElementsByClassName("item_"+i+j)[0].innerHTML = '32';
            if(map[j][i]=='32')document.getElementsByClassName("item_"+i+j)[0].style.background = '#f57c5f';
            if(map[j][i]=='64')document.getElementsByClassName("item_"+i+j)[0].innerHTML = '64';
            if(map[j][i]=='64')document.getElementsByClassName("item_"+i+j)[0].style.background = '#e85939';
            if(map[j][i]=='128')document.getElementsByClassName("item_"+i+j)[0].innerHTML = '128';
            if(map[j][i]=='128')document.getElementsByClassName("item_"+i+j)[0].style.background = '#f2d86a';
            if(map[j][i]=='256')document.getElementsByClassName("item_"+i+j)[0].innerHTML = '256';
            if(map[j][i]=='256')document.getElementsByClassName("item_"+i+j)[0].style.background = '#eeca30';
            if(map[j][i]=='512')document.getElementsByClassName("item_"+i+j)[0].innerHTML = '512';
            if(map[j][i]=='512')document.getElementsByClassName("item_"+i+j)[0].style.background = '#e1c229';
            if(map[j][i]=='1024')document.getElementsByClassName("item_"+i+j)[0].innerHTML = '1024';
            if(map[j][i]=='1024')document.getElementsByClassName("item_"+i+j)[0].style.background = '#e2b913';
            if(map[j][i]=='2048')document.getElementsByClassName("item_"+i+j)[0].innerHTML = '2048';
            if(map[j][i]=='2048')document.getElementsByClassName("item_"+i+j)[0].style.background = '#ecc400';
        }
    }
}  

function random(){
    var ranX =Math.floor(Math.random() * 4);
    var ranY =Math.floor(Math.random() * 4);
    var ran =Math.floor(Math.random() * 2);
    if(map[ranX][ranY]=='0'){
        if(ran==1){
            map[ranX][ranY]='2';
            console.log("add 2");
        }
        else{
            map[ranX][ranY]='4';
            console.log("add 4");
        }
    }
    else random();
}

function down(){
    console.log('Move down');
        function move_down(){
            if(map[3][i]=='0'){
                map[3][i]=map[2][i];
                map[2][i]='0';
            }

            if(map[2][i]=='0'){
                map[2][i]=map[1][i];
                map[1][i]='0';
                    if(map[3][i]=='0'){
                        map[3][i]=map[2][i];
                        map[2][i]='0';
                    }
            }
            if(map[1][i]=='0'){
                map[1][i]=map[0][i];
                map[0][i]='0';
                    if(map[2][i]=='0'){
                        map[2][i]=map[1][i];
                        map[1][i]='0';
                            if(map[3][i]=='0'){
                                map[3][i]=map[2][i];
                                map[2][i]='0';
                            }
                    }        
            }
        }
    for(var i=0; i<=3; i++){
        move_down();
        if(map[3][i]==map[2][i]){
            map[3][i]*=2;
            map[2][i]='0';
        }
        
        if(map[2][i]==map[1][i]){
            map[2][i]*=2;
            map[1][i]='0';
        }
        if(map[1][i]==map[0][i]){
            map[1][i]*=2;
            map[0][i]='0';
        }
        move_down();
      }
    
}

function up(){
    console.log('Move Up');
        function move_up(){
            if(map[0][i]=='0'){
                map[0][i]=map[1][i];
                map[1][i]=0;
            }
        
            if(map[1][i]=='0'){
                map[1][i]=map[2][i];
                map[2][i]=0;
                    if(map[0][i]=='0'){
                        map[0][i]=map[1][i];
                        map[1][i]=0;
                    }
            }
        
            if(map[2][i]=='0'){
                map[2][i]=map[3][i];
                map[3][i]=0;
                    if(map[1][i]=='0'){
                        map[1][i]=map[2][i];
                        map[2][i]=0;
                            if(map[0][i]=='0'){
                                map[0][i]=map[1][i];
                                map[1][i]=0;
                            }
                    }
            }
        }

    for(var i=3; i>=0; i--){
        move_up();
        if(map[0][i]==map[1][i]){
            map[0][i]*=2;
            map[1][i]=0;
        }

        if(map[1][i]==map[2][i]){
            map[1][i]*=2;
            map[2][i]=0;
        }

        if(map[2][i]==map[3][i]){
            map[2][i]*=2;
            map[3][i]=0;
        }
        move_up()
    }
}

function left(){
    console.log('Move left');
        function move_left(){
            if(map[i][0]=='0'){
                map[i][0]=map[i][1];
                map[i][1]=0;
            }
        
            if(map[i][1]=='0'){
                map[i][1]=map[i][2];
                map[i][2]=0;
                    if(map[i][0]=='0'){
                        map[i][0]=map[i][1];
                        map[i][1]=0;
                    }
            }
        
            if(map[i][2]=='0'){
                map[i][2]=map[i][3];
                map[i][3]=0;
                    if(map[i][1]=='0'){
                        map[i][1]=map[i][2];
                        map[i][2]=0;
                            if(map[i][0]=='0'){
                                map[i][0]=map[i][1];
                                map[i][1]=0;
                            }
                    }
            }
        }

    for(var i=3; i>=0; i--){
        move_left();
        if(map[i][0]==map[i][1]){
            map[i][0]*=2;
            map[i][1]=0;
        }

        if(map[i][1]==map[i][2]){
            map[i][1]*=2;
            map[i][2]=0;
        }

        if(map[i][2]==map[i][3]){
            map[i][2]*=2;
            map[i][3]=0;
        }
        move_left();
    }
}

function right(){
    console.log('Move right');
    function move_right(){
        if(map[i][3]=='0'){
            map[i][3]=map[i][2];
            map[i][2]='0';
        }

        if(map[i][2]=='0'){
            map[i][2]=map[i][1];
            map[i][1]='0';
                if(map[i][3]=='0'){
                    map[i][3]=map[i][2];
                    map[i][2]='0';
                }
        }
        if(map[i][1]=='0'){
            map[i][1]=map[i][0];
            map[i][0]='0';
                if(map[i][2]=='0'){
                    map[i][2]=map[i][1];
                    map[i][1]='0';
                        if(map[i][3]=='0'){
                            map[i][3]=map[i][2];
                            map[i][2]='0';
                        }
                }        
        }
    }
for(var i=0; i<=3; i++){
    move_right();
    if(map[i][3]==map[i][2]){
        map[i][3]*=2;
        map[i][2]='0';
    }
    
    if(map[i][2]==map[i][1]){
        map[i][2]*=2;
        map[i][1]='0';
    }
    if(map[i][1]==map[i][0]){
        map[i][1]*=2;
        map[i][0]='0';
    }
    move_right();
  }
}

function check(){
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            if(map[i][j]=='2048')alert("YOU WIN!")
        }
    }
}

window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 37: // Left
        left();
        random();
        draw();
        check();
      break;
   
      case 38: // Up
        up();
        random();
        draw();
        check();
      break;
   
      case 39: // Right
        right();
        random();
        draw();
        check();
      break;
   
      case 40: // Down
        down();
        random();
        draw();
        check();
      break;
    }
  }, false);


random();
random();
draw();