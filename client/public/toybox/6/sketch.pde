import processing.opengl.*;

ArrayList<Box> boxes;
float n;

void setup() {
  size(screenWidth, screenHeight, OPENGL);
  boxes = new ArrayList();
  colorMode(HSB, 360, 100, 100, 100);
  mouseY = height/2;
}

void draw() {
  background(0);
  directionalLight(180, 0, 100, -10, 10, 0);
  
  
  for (int i = boxes.size ()-1; i >= 0; i--) {
    Box box = boxes.get(i);
    box.display();
    if (box.finished()) {
      boxes.remove(i);
      boxes.add(new Box());
    }
  }
  
  n = frameCount % 100;
  if(n == 99 && boxes.size() < 20) {
    boxes.add(new Box());
  }
  
   printer();
}

void mousePressed() {
}

void printer() {
  //println(n + ", " + boxes.size());
}

class Box {
  float zIndex = -2000;
  float w, h, t = 0, num, col;

  Box() {
    w = random(width);
    h = random(height);
    num = random(100);
    col = random(360);
  }

  void display() {
    
    float cx = 0;
    float cy = 0;
    float R = 100;
    float theta = t * 0.05;
    float x = cx + R * sin(theta);
    float y = cy + R * cos(theta);
    
    noStroke();
    fill(col, 100, 100, t);
    pushMatrix();
    translate(w, h, zIndex);
    //translate(x, y);
    rotateX(degrees((num * 0.5) + frameCount*0.0005));
    rotateY(degrees(num + 45));
    box(50);
    popMatrix();
    update();
  }

  void update() {
    zIndex+= mouseY*0.05;
    
    if (zIndex < -1000) {
      t+=0.5;
    } else if (zIndex > -100) {
      t-=1;
    }
    
    
  }

  boolean finished() {
    boolean dead;
    if (zIndex > 350) {
      dead = true;
    } else {
      dead = false;
    }
    return dead;
  }
}

