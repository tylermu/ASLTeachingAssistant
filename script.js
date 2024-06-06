
    // Let's use handtracking and show the webcam feed with wireframes
    const handsfree = new Handsfree({showDebug: true, hands: true})
    handsfree.start()

    //Testing booleans 
    cTest = false;
    bTest = false;
    aTest = false;
    talking = false;



    //'C' asl coordinates
      let xCWrist = .52;
      let yCWrist = .67;
      let xCPinky = .44;
      let yCPinky = .38;
      let xCThumb = .45;
      let yCThumb = .55;
    
    //'B' asl coordinates
      let xBWrist = .47;
      let yBWrist = .71;
      let xBPinky = .51;
      let yBPinky = .39;
      let xBThumb = .46;
      let yBThumb = .55;

    //'A' asl coordinates 
      let xAWrist = .50;
      let yAWrist = .64;
      let xAPinky = .51;
      let yAPinky = .49;
      let xAThumb = .41;
      let yAThumb = .42;

    //Confidence interval
      let confInt = .07;


    // Create a plugin named "logger" to show data on every frame
    handsfree.use('logger', data => {
      document.addEventListener('keydown', function(event) {
        if (event.key === 'c' || event.key === 'C') {
          imageC.style.display = 'block';
          imageB.style.display = 'none';
          imageA.style.display = 'none';
          cTest = true;
          bTest = false;
          aTest = false;
          talking = false;
        }
        else if (event.key === 'b' || event.key === 'B') {
          imageC.style.display = 'none';
          imageB.style.display = 'block';
          imageA.style.display = 'none';
          cTest = false;
          bTest = true;
          aTest = false;
          talking = false;
        }
        else if (event.key === 'a' || event.key === 'A') {
          imageC.style.display = 'none';
          imageB.style.display = 'none';
          imageA.style.display = 'block';
          cTest = false;  
          bTest = false;
          aTest = true;
          talking = false;  
        } else if (event.key === 't' || event.key ==='T') {
          if (cTest == true) { //T press and attempting C asl sign
            if((xCWrist - confInt) < handsfree.data.hands.multiHandLandmarks[0][0].x && handsfree.data.hands.multiHandLandmarks[0][0].x < (xCWrist + confInt) && (yCWrist - confInt) < handsfree.data.hands.multiHandLandmarks[0][0].y && handsfree.data.hands.multiHandLandmarks[0][0].y < (yCWrist + confInt)) {
              if((xCPinky - confInt) < handsfree.data.hands.multiHandLandmarks[0][20].x && handsfree.data.hands.multiHandLandmarks[0][20].x < (xCPinky + confInt) && (yCPinky - confInt) < handsfree.data.hands.multiHandLandmarks[0][20].y && handsfree.data.hands.multiHandLandmarks[0][20].y < (yCPinky + confInt)){
                  if((xCThumb - confInt) < handsfree.data.hands.multiHandLandmarks[0][4].x && handsfree.data.hands.multiHandLandmarks[0][4].x < (xCThumb + confInt) && (yCThumb - confInt) < handsfree.data.hands.multiHandLandmarks[0][4].y && handsfree.data.hands.multiHandLandmarks[0][4].y < (yCThumb + confInt)){
                    const textElement = document.getElementById('textElement');
                    textElement.textContent = 'C';
                    textElement.style.display = 'block';
                    if (talking == false) {
                      speak('C');
                      talking = true;
                    }
                  }
              }
            }
          }
          if (bTest == true) { //T press and attempting B asl sign
            if((xBWrist - confInt) < handsfree.data.hands.multiHandLandmarks[0][0].x && handsfree.data.hands.multiHandLandmarks[0][0].x < (xBWrist + confInt) && (yBWrist - confInt) < handsfree.data.hands.multiHandLandmarks[0][0].y && handsfree.data.hands.multiHandLandmarks[0][0].y < (yBWrist + confInt)) {
              if((xBPinky - confInt) < handsfree.data.hands.multiHandLandmarks[0][20].x && handsfree.data.hands.multiHandLandmarks[0][20].x < (xBPinky + confInt) && (yBPinky - confInt) < handsfree.data.hands.multiHandLandmarks[0][20].y && handsfree.data.hands.multiHandLandmarks[0][20].y < (yBPinky + confInt)){
                  if((xBThumb - confInt) < handsfree.data.hands.multiHandLandmarks[0][4].x && handsfree.data.hands.multiHandLandmarks[0][4].x < (xBThumb + confInt) && (yBThumb - confInt) < handsfree.data.hands.multiHandLandmarks[0][4].y && handsfree.data.hands.multiHandLandmarks[0][4].y < (yBThumb + confInt)){
                    const textElement = document.getElementById('textElement');
                    textElement.textContent = 'B';
                    textElement.style.display = 'block';
                    if (talking == false) {
                      speak('B');
                      talking = true;
                    }
                  }
              }
            }
          }
          if (aTest == true) { //T press and attempting A asl sign
            if((xAWrist - confInt) < handsfree.data.hands.multiHandLandmarks[0][0].x && handsfree.data.hands.multiHandLandmarks[0][0].x < (xAWrist + confInt) && (yAWrist - confInt) < handsfree.data.hands.multiHandLandmarks[0][0].y && handsfree.data.hands.multiHandLandmarks[0][0].y < (yAWrist + confInt)) {
              if((xAPinky - confInt) < handsfree.data.hands.multiHandLandmarks[0][20].x && handsfree.data.hands.multiHandLandmarks[0][20].x < (xAPinky + confInt) && (yAPinky - confInt) < handsfree.data.hands.multiHandLandmarks[0][20].y && handsfree.data.hands.multiHandLandmarks[0][20].y < (yAPinky + confInt)){
                  if((xAThumb - confInt) < handsfree.data.hands.multiHandLandmarks[0][4].x && handsfree.data.hands.multiHandLandmarks[0][4].x < (xAThumb + confInt) && (yAThumb - confInt) < handsfree.data.hands.multiHandLandmarks[0][4].y && handsfree.data.hands.multiHandLandmarks[0][4].y < (yAThumb + confInt)){
                    const textElement = document.getElementById('textElement');
                    textElement.textContent = 'A';
                    textElement.style.display = 'block';
                    if (talking == false) {
                      speak('A');
                      talking = true;
                    }
                  }
              }
            }
          }
      } else if (event.key === 'r' || event.key ==='R') {
        const textElement = document.getElementById('textElement');
        textElement.textContent = 'N/A';
        textElement.style.display = 'block';
        talking = false;
      } else if (event.key === 'o' || event.key ==='O') { //O press for testing the location of wrist, thumb, and pinky
        console.log("X of wrist", handsfree.data.hands.multiHandLandmarks[0][0].x)
        console.log("Y of wrist", handsfree.data.hands.multiHandLandmarks[0][0].y)
        console.log("X of thumb", handsfree.data.hands.multiHandLandmarks[0][4].x)
        console.log("Y of thumb", handsfree.data.hands.multiHandLandmarks[0][4].y)
        console.log("X of pinky", handsfree.data.hands.multiHandLandmarks[0][20].x)
        console.log("Y of pinky", handsfree.data.hands.multiHandLandmarks[0][20].y)
      }
      }); //end of button press listener

    }); //end of data handler for hand wireframes


    function speak(input) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(input);
      // set the voice, pitch, and rate (not really necessary)
      utterance.voice = window.speechSynthesis.getVoices()[0]; // select the first available voice
      utterance.pitch = 1; // default pitch (0 to 2)
      utterance.rate = 1; // default rate (0.1 to 10)
      // speak
      synth.speak(utterance);
    }

    document.getElementById('questionMark').addEventListener('click', () => {
      const infoText = document.getElementById('infoText');
      if (infoText.style.display === 'none') {
        infoText.style.display = 'block';
      } else {
        infoText.style.display = 'none';
      }
    });
      