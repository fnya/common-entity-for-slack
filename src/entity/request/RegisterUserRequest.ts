import { RequestType } from '../../constant/RequestType';

/**
 * ユーザー登録リクエストクラス
 */
export class RegisterUserRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** メールアドレス */
  public email: string;

  /** 管理者フラグ(true:管理者/false:一般ユーザー) */
  public isAdmin: boolean;

  /** 権限のあるプライベートチャンネルのリスト */
  public channels: string[];

  /** 管理者のアクセストークン */
  public adminAccessToken: string;

  /**
   * ユーザー登録リクエストのコンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param email メールアドレス
   * @param isAdmin 管理者フラグ(true:管理者/false:一般ユーザー)
   * @param channels 権限のあるプライベートチャンネルのリスト
   * @param adminAccessToken 管理者のアクセストークン
   */
  public constructor(
    requestType: RequestType,
    email: string,
    isAdmin: boolean,
    channels: string[],
    adminAccessToken: string
  ) {
    this.requestType = requestType;
    this.email = email;
    this.isAdmin = isAdmin;
    this.channels = channels;
    this.adminAccessToken = adminAccessToken;
  }
}
