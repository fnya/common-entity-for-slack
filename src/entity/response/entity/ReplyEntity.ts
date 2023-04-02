import { FileEntity } from './FileEntity';
import { ReactionEntity } from './ReactionEntity';
import { UrlEntity } from './UrlEntity';

export class ReplyEntity {
  /** メッセージのタイムスタンプ  */
  public ts: string;

  /** ユーザー ID */
  public userId: string;

  /** ユーザー名 */
  public userName: string;

  /** メッセージ */
  public text: string;

  /** 親スレッドのタイムスタンプ */
  public treadTs: string;

  /** リアクションのリスト */
  public reactions: ReactionEntity[];

  /** 添付ファイルのリスト */
  public files: FileEntity[];

  /** url のリスト  */
  public urls: UrlEntity[];

  /** 編集したか */
  public isEdited: boolean;

  /** アバター URL */
  public userImageUrl?: string;

  /**
   * コンストラクタ
   *
   * @param ts メッセージのタイムスタンプ
   * @param userId ユーザー ID
   * @param userName ユーザー名
   * @param text メッセージ
   * @param treadTs 親スレッドのタイムスタンプ
   * @param reactions リアクションのリスト
   * @param files 添付ファイルのリスト
   * @param urls url のリスト
   * @param isEdited 編集したか
   * @param userImageUrl アバター URL
   */
  public constructor(
    ts: string,
    userId: string,
    userName: string,
    text: string,
    treadTs: string,
    reactions: ReactionEntity[],
    files: FileEntity[],
    urls: UrlEntity[],
    isEdited: boolean,
    userImageUrl?: string
  ) {
    this.ts = ts;
    this.userId = userId;
    this.userName = userName;
    this.text = text;
    this.treadTs = treadTs;
    this.reactions = reactions;
    this.files = files;
    this.urls = urls;
    this.isEdited = isEdited;
    this.userImageUrl = userImageUrl;
  }
}
