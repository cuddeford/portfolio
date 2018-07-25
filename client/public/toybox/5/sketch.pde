ArrayList<Particle> particles;

void setup() {
  size(screen.width, screen.height);
  colorMode(HSB, 360, 100, 100, 100);
  particles = new ArrayList<Particles>();
}

void draw() {
  background(#000000);
  if(mousePressed) {
    float x = mouseX / 2.0;
    float y = mouseY / 2.0;
    particles.add(new Particle(x, y));
  }

  for (int i=particles.size()-1; i>=0; i--) {
    Particle particle = particles.get(i);
    particle.run();
    if(particle.finished()) {
      particles.remove(i);
    }
  }


}

class Particle {

  PVector position = new PVector();

  float s = 50;
  float t = 100;
  float num = 1000;

  Particle(float x, float y) {
    position.set(x, y);
  }

  void run() {
    display();
    update();
  }

  void display() {
    pushStyle();
    noStroke();

    float hue = 150 + abs(position.x - position.y) % 200;
    fill(hue, 100, 100, t);

    pushMatrix();
    translate(width/2, height/2);
    translate(cos(num)*position.x*0.5, sin(num)*position.y*0.5);
    rotate(cos(radians(s)) * 20);
    ellipse(position.x, position.y, s, s);
    popMatrix();

    popStyle();
  }

  void update() {
    s-=1.5;
    t-=1;
    num-=(mouseX*0.007);
  }

  boolean finished() {
    if (s == 0) return true;
    else        return false;
  }

}