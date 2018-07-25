ArrayList<Particle> particles;

void setup() {
  size(screen.width, screen.height);
  colorMode(HSB, 360, 100, 100);
  particles = new ArrayList<Particle>();
}

void draw() {
  background(0);
  
  if(mousePressed) particles.add(new Particle());

  for (int i = particles.size ()-1; i >= 0; i--) {
    Particle particle = particles.get(i);
    particle.display();
    if (particle.finished()) {
      particles.remove(i);
    }
  }
}

class Particle {
   PVector position = new PVector();
   PVector velocity = new PVector();
   float a = 200, d = random(1, 360);
   float b = 0, h = 250, u = 0, c = 0, si = 200;

   Particle() {
     position.set(mouseX, mouseY);
   }

   void display() {
     this.draw();
     update();
   }
   
   void draw() {
     velocity.set(0, b/10);
     position.add(velocity);
     stroke(h + 40, 100, 100, si * 0.5);
     fill(h, 100, 100, si * 0.5);
     pushMatrix();
     float m = 100 * noise(1, 25);
     float x = sin(a) * m;
     float y = sin(a) * m;
     translate(x, y * (int)random(-1, 1));
     ellipse(position.x, position.y, si, si);
     popMatrix();
   }
   
   void update() {
     si -= 0.1;
     d -= 0.1;
     a -= 0.1;
     u += 0.1;
     b += 0.5;
     c = (c + 1) % 100;
     h = (h + 1.25) % 360;
    }
   
   boolean finished() {
    if (position.y > height + si) return true;
    else return false;
   }
  
}

