import { RequestType } from '../../constant/RequestType';

/**
 * ユーザー情報変更リクエストクラス
 */
export class ChangeUserInformationRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** アクセストークン */
  public accessToken: string;

  /** ユーザー ID */
  public userId: string;

  /** メールアドレス */
  public email?: string;

  /** 権限のあるプライベートチャンネルのリスト */
  public channels?: string;

  /** 管理者フラグ(true:管理者/false:一般ユーザー)/admin only */
  public isAdmin?: string;

  /** 初期化フラグ(true:初期化済み/false:未初期化)/admin only */
  public initialized?: string;

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param accessToken アクセストークン
   * @param userId ユーザー ID
   * @param email メールアドレス
   * @param channels 権限のあるプライベートチャンネルのリスト
   * @param isAdmin 管理者フラグ(true:管理者/false:一般ユーザー)/admin only
   * @param initialized 初期化フラグ(true:初期化済み/false:未初期化)/admin only
   */
  constructor(
    requestType: RequestType,
    accessToken: string,
    userId: string,
    email?: string,
    channels?: string,
    isAdmin?: string,
    initialized?: string
  ) {
    this.requestType = requestType;
    this.accessToken = accessToken;
    this.userId = userId;
    this.email = email;
    this.channels = channels;
    this.isAdmin = isAdmin;
    this.initialized = initialized;
  }
}
