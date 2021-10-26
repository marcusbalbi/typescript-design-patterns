interface Config {
  bgColor: string;
  foreColor: string;
  fontSize: number;
}

export class PreferenceSingleton {
  private static instance: PreferenceSingleton;
  private bgColor = "#000000";
  private foreColor = "#FFFFFF";
  private fontSize = 12;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): PreferenceSingleton {
    if (!this.instance) {
      this.instance = new PreferenceSingleton();
    }
    return this.instance;
  }

  public getConfig(): Config {
    return {
      bgColor: this.bgColor,
      foreColor: this.foreColor,
      fontSize: this.fontSize,
    };
  }

  public defineBgColor(color: string): void {
    this.bgColor = color;
  }

  public defineForeColor(color: string): void {
    this.foreColor = color;
  }

  public defineFontSize(size: number): void {
    this.fontSize = size;
  }
}
