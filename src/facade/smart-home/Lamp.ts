export class Lamp {
  status = false;
  color = "#FFF";
  intensity = 10;
  on(): void {
    this.status = true;
  }
  off(): void {
    this.status = false;
  }
  checkStatus(): boolean {
    return this.status;
  }
  changeColor(hexColor: string): void {
    this.color = hexColor;
  }
  changeIntensity(value: number): void {
    if (value < 0) {
      this.intensity = 0;
    } else if (value > 10) {
      this.intensity = 10;
    } else {
      this.intensity = value;
    }
  }
}
