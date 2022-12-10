import { RequestType } from '../../constant/RequestType';

/**
 * ユーザー登録リクエストクラス
 */
export class RegisterUserRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** 登録ユーザーのメールアドレス */
  public email: string;

  /** 登録ユーザーの管理者フラグ(true:管理者/false:一般ユーザー) */
  public isAdmin: boolean;

  /** 登録ユーザーの権限のあるプライベートチャンネルのリスト */
  public channels: string[];

  /** 管理者のアクセストークン */
  public accessToken: string;

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param email 登録ユーザーのメールアドレス
   * @param isAdmin 登録ユーザーの管理者フラグ(true:管理者/false:一般ユーザー)
   * @param channels 登録ユーザーの権限のあるプライベートチャンネルのリスト
   * @param accessToken 管理者のアクセストークン
   */
  constructor(
    requestType: RequestType,
    email: string,
    isAdmin: boolean,
    channels: string[],
    accessToken: string
  ) {
    this.requestType = requestType;
    this.email = email;
    this.isAdmin = isAdmin;
    this.channels = channels;
    this.accessToken = accessToken;
  }
}
