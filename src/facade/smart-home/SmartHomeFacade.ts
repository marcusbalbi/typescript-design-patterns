import { Lamp } from "./Lamp";
import { SoundSystem } from "./SoundSystem";
import { Television } from "./Television";

export class SmartHomeFacade {
  private lamp: Lamp;
  private television: Television;
  private soundSystem: SoundSystem;
  constructor() {
    this.lamp = new Lamp();
    this.television = new Television();
    this.soundSystem = new SoundSystem();
  }
  movieEnvironment(movieName: string): void {
    this.lamp.on();
    this.lamp.changeColor("#0000FF");
    this.lamp.changeIntensity(5);
    this.television.on();
    this.television.watchMovie(movieName);
    this.soundSystem.on();
    this.soundSystem.changeVolume(7);
  }
  turnOff(): void {
    this.lamp.off();
    this.television.off();
    this.soundSystem.off();
  }
}
