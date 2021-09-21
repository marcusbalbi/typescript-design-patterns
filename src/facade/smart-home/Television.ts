export class Television {
  protected status = false;
  protected movie: string | null = null;
  on(): void {
    this.status = true;
  }
  off(): void {
    this.movie = null;
    this.status = false;
  }
  checkStatus(): boolean {
    return this.status;
  }
  watchMovie(movieName: string): void {
    this.movie = movieName;
  }
  checkMovieWatching(): string | null {
    return this.movie;
  }
}
