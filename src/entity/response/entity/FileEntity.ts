export class FileEntity {
  /** ファイル ID */
  public id: string;

  /** 作成日時(yyyy-MM-dd hh:mm:ss) */
  public created: string;

  /** ファイル名 */
  public name: string;

  /** MIME タイプ(ex. image/png) */
  public mimeType: string;

  /** ファイル形式(ex. png) */
  public fileType: string;

  /**
   * File のコンストラクタ
   *
   * @param id ファイル ID
   * @param created 作成日時(yyyy-MM-dd hh:mm:ss)
   * @param name ファイル名
   * @param mimeType MIME タイプ(ex. image/png)
   * @param fileType ファイル形式(ex. png)
   */
  public constructor(
    id: string,
    created: string,
    name: string,
    mimeType: string,
    fileType: string
  ) {
    this.id = id;
    this.created = created;
    this.name = name;
    this.mimeType = mimeType;
    this.fileType = fileType;
  }
}
