export class Television {
  status = false;
  movie: string | null = null;
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
