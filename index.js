 let button = document.querySelectorAll('.block')

class Info {
    handleEvent(event) {
        switch (event.currentTarget) {
            case block1:
              block1.style.backgroundColor = 'red';
              block1.innerHTML = '1';
              break;
            case block2:
              block2.style.backgroundColor = 'red';
              block2.innerHTML = '2';
              break;
              case block3:
                block3.style.backgroundColor = 'red';
                block3.innerHTML = "3";
                break;
              case block4:
                block4.style.backgroundColor = 'red';
                block4.innerHTML = "4";
                break;
                case block5:
                  block5.style.backgroundColor = 'red';
                  block5.innerHTML = "5";
                  break;
                case block6:
                  block6.style.backgroundColor = 'red';
                  block6.innerHTML = "6";
                  break;
                  case block7:
                    block7.style.backgroundColor = 'red';
                    block7.innerHTML = "7";
                    break;
                  case block8:
                    block8.style.backgroundColor = 'red';
                    block8.innerHTML = "8";
                    break;  
                    case block9:
                      block9.style.backgroundColor = 'red';
                      block9.innerHTML = "9"; 
                      break;                                     
            }
          }
        }
      
      const info = new Info();



      class Info2 {
        handleEvent(event) {
            switch (event.currentTarget) {
                case block1:
                  block1.style.backgroundColor ='yellow';
                  block1.innerHTML = "";
                  break;
                case block2:
                  block2.style.backgroundColor ='green';
                  block2.innerHTML = "";        
                  break;
                case block3:
                  block3.style.backgroundColor ='orange';
                  block3.innerHTML = "";
                  case block4:
                    block4.style.backgroundColor ='brown';
                    block4.innerHTML = "";
                    break;
                    case block5:
                      block5.style.backgroundColor ='purple';
                      block5.innerHTML = "";
                      break;
                    case block6:
                      block6.style.backgroundColor ='blue';
                      block6.innerHTML = "";
                      break;
                      case block7:
                        block7.style.backgroundColor ='skyblue';
                        block7.innerHTML = "";
                        break;
                      case block8:
                        block8.style.backgroundColor ='gray';
                        block8.innerHTML = "";                        
                        break;  
                        case block9:
                          block9.style.backgroundColor ='gold';
                          block9.innerHTML = "";                          
                          break;                                        
              }
            }
          }
          const info2 = new Info2();



button.forEach(buttons => {
  buttons.addEventListener('mousedown', info)
  buttons.addEventListener('mouseup', info2)

})