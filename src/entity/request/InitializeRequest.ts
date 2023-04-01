import { RequestType } from '../../constant/RequestType';

/**
 * 初期化リクエストクラス
 */
export class InitializeRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** 管理者のメールアドレス */
  public email: string;

  /** 管理者のパスワード */
  public password: string;

  /** 管理者のパスワード(再入力) */
  public rePassword: string;

  /** ストレッチ回数 */
  public stretchingCount: string;

  /** ペッパー(システム全体のソルト) */
  public pepper: string;

  /** JWT 発行者 */
  public jwtIssuer: string;

  /** JWT 秘密鍵 */
  public jwtSecret: string;

  /** JWT アクセストークン有効期間(分) */
  public accessTokenEffectiveMinutes: string;

  /** JWT リフレッシュトークン有効期間(日数) */
  public refreshTokenEffectiveDays: string;

  /** Slack API トークン */
  public slackApiToken: string;

  /**
   * Slack のパーミッション(カンマ区切りで指定)
   *   チャンネル: public_channel,private_channel
   *   DM: im,mpim
   * */
  public slackPermissions: string;

  /** ユーザー初期化トークン有効時間(分) */
  public userTokenEffectiveMinutes: string;

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param email 管理者のメールアドレス
   * @param password 管理者のパスワード
   * @param rePassword 管理者のパスワード(再入力)
   * @param stretchingCount ストレッチ回数
   * @param pepper ペッパー(システム全体のソルト)
   * @param jwtIssuer JWT 発行者
   * @param jwtSecret JWT 秘密鍵
   * @param accessTokenEffectiveMinutes JWT アクセストークン有効期間(分)
   * @param refreshTokenEffectiveDays JWT リフレッシュトークン有効期間(日数)
   * @param slackApiToken Slack API トークン
   * @param slackPermissions Slack のパーミッション(カンマ区切りで指定)
   * @param userTokenEffectiveMinutes ユーザー初期化トークン有効時間(分)
   */
  constructor(
    requestType: RequestType,
    email: string,
    password: string,
    rePassword: string,
    stretchingCount: string,
    pepper: string,
    jwtIssuer: string,
    jwtSecret: string,
    accessTokenEffectiveMinutes: string,
    refreshTokenEffectiveDays: string,
    slackApiToken: string,
    slackPermissions: string,
    userTokenEffectiveMinutes: string
  ) {
    this.requestType = requestType;
    this.email = email;
    this.password = password;
    this.rePassword = rePassword;
    this.stretchingCount = stretchingCount;
    this.pepper = pepper;
    this.jwtIssuer = jwtIssuer;
    this.jwtSecret = jwtSecret;
    this.accessTokenEffectiveMinutes = accessTokenEffectiveMinutes;
    this.refreshTokenEffectiveDays = refreshTokenEffectiveDays;
    this.slackApiToken = slackApiToken;
    this.slackPermissions = slackPermissions;
    this.userTokenEffectiveMinutes = userTokenEffectiveMinutes;
  }
}
