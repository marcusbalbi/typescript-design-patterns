import { Lamp } from "./Lamp";
import { SoundSystem } from "./SoundSystem";
import { Television } from "./Television";

export class SmartHomeFacade {
  static movieEnvironment(movieName: string): void {
    const lamp = new Lamp();
    const television = new Television();
    const soundSystem = new SoundSystem();

    lamp.on();
    lamp.changeColor("#0000FF");
    lamp.changeIntensity(5);
    television.on();
    television.watchMovie(movieName);
    soundSystem.on();
    soundSystem.changeVolume(7);
  }
}
