export class UrlEntity {
  /** URL */
  public url: string;

  /** タイトル */
  public title: string;

  /** 概要 */
  public text: string;

  /**
   * コンストラクタ
   *
   * @param url URL
   * @param title タイトル
   * @param text 概要
   */
  public constructor(url: string, title: string, text: string) {
    this.url = url;
    this.title = title;
    this.text = text;
  }
}
