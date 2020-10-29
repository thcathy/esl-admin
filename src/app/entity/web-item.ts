export class WebItem {
  constructor(
    public url: string,
    public thumbnailUrl: string,
    public imageHeight: number,
    public imageWidth: number,
  ) { }

  public toString(): string {
    return JSON.stringify(this);
  }
}
