import { RequestType } from '../../constant/RequestType';

/**
 * viewer-api-for-slack を初期化するクラス
 */
export class Initialize {
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

  /** JWT 秘密鍵 */
  public jwtSecret: string;

  /** JWT リフレッシュトークン有効期間(日数) */
  public refreshTokenEffectiveDays: string;

  /** Slack API トークン */
  public slackApiToken: string;

  /**
   * Initialize のコンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param email 管理者のメールアドレス
   * @param password 管理者のパスワード
   * @param rePassword 管理者のパスワード(再入力)
   * @param stretchingCount ストレッチ回数
   * @param pepper ペッパー(システム全体のソルト)
   * @param jwtSecret JWT 秘密鍵
   * @param refreshTokenEffectiveDays JWT リフレッシュトークン有効期間(日数)
   * @param slackApiToken Slack API トークン
   */
  public constructor(
    requestType: RequestType,
    email: string,
    password: string,
    rePassword: string,
    stretchingCount: string,
    pepper: string,
    jwtSecret: string,
    refreshTokenEffectiveDays: string,
    slackApiToken: string
  ) {
    this.requestType = requestType;
    this.email = email;
    this.password = password;
    this.rePassword = rePassword;
    this.stretchingCount = stretchingCount;
    this.pepper = pepper;
    this.jwtSecret = jwtSecret;
    this.refreshTokenEffectiveDays = refreshTokenEffectiveDays;
    this.slackApiToken = slackApiToken;
  }
}
