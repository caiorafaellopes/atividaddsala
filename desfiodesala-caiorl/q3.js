class Circulo extends FiguraGeometrica {
    calcularArea() {
      const raio = this.base / 2; // Considerando base como o diâmetro do círculo
      
     
  return Math.PI * raio * raio;
    }
  }