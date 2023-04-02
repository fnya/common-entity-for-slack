import { HttpStatus } from '../../constant/HttpStatus';
import { HttpStatusCode } from '../../constant/HttpStatusCode';

/**
 * ユーザー情報取得レスポンスクラス
 */
export class GetUserInformationResponse {
  /** HTTP ステータス */
  public httpStatus: HttpStatus;

  /** HTTP ステータスコード */
  public httpStatusCode: HttpStatusCode;

  /** ユーザーID */
  public id: string;

  /** メールアドレス */
  public email: string;

  /** 管理者フラグ(true:管理者/false:一般ユーザー) */
  public isAdmin: boolean;

  /** 初期化フラグ(true:初期化済み/false:未初期化) */
  public initialized: boolean;

  /** チャンネル一覧 (権限のあるプライベートチャンネルのリスト) */
  public channels: string[];

  /**
   *  コンストラクタ
   *
   * @param httpStatus HTTP ステータス
   * @param httpStatusCode HTTP ステータスコード
   * @param id ユーザーID
   * @param email メールアドレス
   * @param isAdmin 管理者フラグ(true:管理者/false:一般ユーザー)
   * @param initialized 初期化フラグ(true:初期化済み/false:未初期化)
   * @param channels チャンネル一覧 (権限のあるプライベートチャンネルのリスト)
   */
  public constructor(
    httpStatus: HttpStatus,
    httpStatusCode: HttpStatusCode,
    id: string,
    email: string,
    isAdmin: boolean,
    initialized: boolean,
    channels: string[]
  ) {
    this.httpStatus = httpStatus;
    this.httpStatusCode = httpStatusCode;
    this.id = id;
    this.email = email;
    this.isAdmin = isAdmin;
    this.initialized = initialized;
    this.channels = channels;
  }
}
