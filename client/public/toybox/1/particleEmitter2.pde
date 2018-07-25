ArrayList<Particle> particles;
Button button;
Menu menu;
boolean multitouch = false;
boolean touched = false;
int touchX, touchY;

void setup() {
  size(screen.width, screen.height);
  colorMode(HSB, 360, 100, 100, 100);
  particles = new ArrayList<Particle>();
  button = new Button(50, 50, 100, 60);
  menu = new Menu();
}

void draw() {
  background(0);
  //button.draw();
  button.label = "Menu";
  
  for (int i = particles.size()-1; i >= 0; i--) {
    Particle particle = particles.get(i);
    particle.run();
    if (particle.finished()) {
      particles.remove(i);
    }
  }
//   windowOutline();
	
  if(button.mouseOver() && (touched)) {
  		//menu.toggle();
	}
}

void windowOutline() {
  pushStyle();
  colorMode(RGB);
  stroke(255, 0, 0);
  strokeWeight(3);
  colorMode(HSB, 360, 100, 100, 100);
  noFill();
  rect(0, 0, width, height);
  popStyle();
}

void mouseDragged() {
  mousePressed();
}

void mousePressed() {
  if(multitouch == false){
  particles.add(new Particle(mouseX, mouseY));
  
  }
}

void touchStart(TouchEvent touchEvent) {
touched = true;
}

void touchEnd(TouchEvent touchEvent) {
touched = false;
}

void touchMove(TouchEvent touchEvent) {
  multitouch = true;
  for (int i = 0; i < touchEvent.touches.length; i++) {
    int x = touchEvent.touches[i].offsetX;
    int y = touchEvent.touches[i].offsetY;
    
    touchX = x;
    touchY = y;
    
    Particle particle = new Particle(x, y);
    particles.add(particle);
}
  
}

//PARTICLE CLASS//

class Particle {
   public PVector position = new PVector();
   float s = 50;
   float t = 100;
   
   Particle(int x, int y) {
     position.set(x, y);
   }

   void run() {
   display();
   update();
   }
   
   void display() {
     pushStyle();
     noStroke();
     
     float hueValue = abs(position.x - position.y) % abs(width - height);
     fill(hueValue, 100, 100, t);
     
     pushMatrix();
     rotate(cos(s) * sin(s));
     ellipse(position.x, position.y, s, s);
     popMatrix();
     popStyle();
   }
   
   void update() {
     s-=1;
     t-=2;
   }
   
   boolean finished() {
     boolean finished;
     if (s == 0) {
       finished = true;
     } else {
       finished = false;
     }
     return finished;
   }
  
}


//BUTTON CLASS//

class Button {
  int x, y, w, h;
  String label = "button";
  color col = color(100);
  String aText;
  
  Button(int x_, int y_, int w_, int h_) {
    x = x_;
    y = y_;
    w = w_;
    h = h_;
  }

  void draw() {
    layout();
  }

  void layout() {
    pushStyle();
    fill(col);
    pushMatrix();
    rect(x, y, w, h);
    fill(120, 150, 160);
    text(label, x + 10, (y + (y+h) + 10) /2);
    popMatrix();
    popStyle();
  }

  boolean mouseOver() {
  boolean over;
      if ( (touchX > x && touchX < x + w) && (touchY > y && touchY < y + h) ||
      	   (mouseX > x && mouseX < x + w) && (mouseY > y && mouseY < y + h) )
      {
    	over = true;
      } else {
        over = false;
      }
    return over;
  }

}



//MENU CLASS//

class Menu {
	
	Menu() {
	}
	
	void show() {
	rect(0, height/4 * 3, width, height);
	}
	
	void hide() {
	}
	
	void toggle() {
		show();
	}

}

