export class Channel {
  /** 11 桁の Slack channel id */
  public id: string;

  /** 表示名 */
  public name: string;

  /** プライベートチャンネルか */
  public isPrivate: boolean;

  /**
   * コンストラクタ
   *
   * @param id 11 桁の Slack channel id
   * @param name 表示名
   * @param isPrivate プライベートチャンネルか
   */
  constructor(id: string, name: string, isPrivate: boolean) {
    this.id = id;
    this.name = name;
    this.isPrivate = isPrivate;
  }
}
