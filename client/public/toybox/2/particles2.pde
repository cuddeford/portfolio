ArrayList<Particle> particles;

void setup() {
  size(screen.width, screen.height);
  colorMode(HSB, 360, 100, 100, 100);
  particles = new ArrayList<Particle>();
}

void draw() {
  background(0);
  
  for (int i = particles.size()-1; i >= 0; i--) {
    Particle particle = particles.get(i);
    particle.run();
    if (particle.finished()) {
      particles.remove(i);
    }
  }
}

void mouseDragged() {
  mousePressed();
}

void mousePressed() {
  particles.add(new Particle());
}

class Particle {
   PVector position = new PVector();

   float s = 50;
   float t = 100;
   
   Particle() {
     position.set((mouseX/2)%(width/2), (mouseY/2)%(height/2));
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
	  translate(sin(s) * cos(s));
	  rotate(s);
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