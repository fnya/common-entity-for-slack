export class ReactionEntity {
  /** リアクション名 */
  public name: string;

  /** リアクション数 */
  public count: number;

  /**
   * コンストラクタ
   *
   * @param name リアクション名
   * @param count リアクション数
   */
  constructor(name: string, count: number) {
    this.name = name;
    this.count = count;
  }
}
