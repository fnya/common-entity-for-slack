export class MemberEntity {
  /** メンバー ID */
  public id: string;

  /** メンバー名 */
  public name: string;

  /**
   * コンストラクタ
   *
   * @param id メンバー ID 
   * @param name メンバー名

   */
  public constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
