class Question {
  constructor() {
    this.title = createElement("h1");
    this.input1 = createInput("").attribute(
      "placeholder",
      "Enter Your Name Here...."
    );
    this.input2 = createInput("").attribute(
      "placeholder",
      "Enter Correct Option No.."
    );
    this.button = createButton("Submit");
    this.question = createElement("h2");
    this.option1 = createElement("h2");
    this.option2 = createElement("h2");
    this.option3 = createElement("h2");
    this.option4 = createElement("h2");
    this.reset = createButton("Reset");
  }

  hide() {
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display() {
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    this.title.style('color','blue');
    //this.heading.html("BTS Quiz");
    //this.heading.position(350,40);
    //this.heading.style('color','purple')

    this.question.html(
        
      "Question:- When did BTS debut"  );
    
    this.question.position(330, 100);
    this.question.style('font size','65px');
    this.question.style('color','white');
    this.option1.html("1: June 2012 ");
    this.option1.position(370, 135);
    this.option1.style('color','blue');
    this.option1.style('font size','70px');
    this.option2.html("2: June 2013");
    this.option2.position(370, 160);
    this.option2.style('color','purple');
    this.option2.style('font size','70px');
    this.option3.html("3: October 1 ");
    this.option3.position(370, 180);
    this.option3.style('color','blue');
    this.option3.style('font size','70px');
    this.option4.html("4: September 3");
    this.option4.position(370, 200);
    this.option4.style('color','purple');
    this.option4.style('font size','70px');

    this.input1.position(250, 280);
    this.input2.position(450, 280);
    this.button.position(400, 320);

    this.button.mousePressed(() => {
      
      
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount += 1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
    this.reset.position(20, 20);
    this.reset.mousePressed(() => {

      contestant.updateCount(0);
      quiz.update(0);
     // this.input1.display();
     // this.input2.display();
     // this.button.display();
      database.ref("/").update({
        
        contestants: null
        
      
      });
    });
  }
}


