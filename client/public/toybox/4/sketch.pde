import processing.opengl.*;

float accX;
float accY;
float accZ;
float x, y, z;

ArrayList<Particle> particles;
void setup() {
  size(screen.width, screen.height, OPENGL);
  mouseX = 200;
  particles = new ArrayList<Particle>();
  colorMode(HSB, 360, 100, 100, 100);
}

void draw() {
  background(0);

//lights();
  // directionalLight(126, 126, 126, 0, 0, -1);
  //directionalLight(255, 255, 255, 0, 0, -10);
  // ambientLight(102, 102, 102);

  for (int i = particles.size()-1; i >= 0; i--) {
    Particle particle = particles.get(i);
    particle.run();
    if (particle.finished()) {
      particles.remove(i);
    }
  }
  
  textAlign(CENTER);
  // println("\t" + noise(frameRate * 0.01) * 255);
}

void mouseDragged() {
  mousePressed();
}

void mousePressed() {
  particles.add(new Particle());
}

class Particle {

  PVector pos = new PVector();
  float s = 50;
  float num;

  Particle() {
    pos.set(mouseX, mouseY);
    num = 180;
    //directionalLight(255, 255, 255, 0, 0, -10);
  }

  void run() {
    
    float cx = pos.x;
    float cy = pos.y;
    float r = s;
    float theta = s * 0.5;
    float x = cx + r*sin(theta);
    float y = cy + r*cos(theta);
    

    noStroke();
    fill(num, 100, 100);
    pushMatrix();
    // rotate(sin(s) * cos(s));
    translate(x, y, s);
    sphere(s);
    popMatrix();

    s -= 1.0;
    num+=2;

  }

  boolean finished() {
    boolean dead = false;
    if (s < 0) {
      dead = true;
    } else {
      dead = false;
    }
    return dead;
  }


}