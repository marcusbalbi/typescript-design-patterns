export class SoundSystem {
  status = false;
  volume = 5;
  on(): void {
    this.status = true;
  }
  off(): void {
    this.volume = 5;
    this.status = false;
  }
  checkStatus(): boolean {
    return this.status;
  }
  changeVolume(value: number): void {
    if (value < 0) {
      this.volume = 0;
    } else if (value > 10) {
      this.volume = 10;
    } else {
      this.volume = value;
    }
  }
}
