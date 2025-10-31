import GithubFillIcon from "remixicon-react/GithubFillIcon";
import LinkedinBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon";
import MailFillIcon from "remixicon-react/MailFillIcon";
import MapPinFillIcon from "remixicon-react/MapPinFillIcon";
import PhoneFillIcon from "remixicon-react/PhoneFillIcon";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";
import { useId } from "react";
export function Contact() {
  const formIdPrefix = useId();
  const firstNameId = `${formIdPrefix}-firstName`;
  const lastNameId = `${formIdPrefix}-lastName`;
  const emailId = `${formIdPrefix}-email`;
  const subjectId = `${formIdPrefix}-subject`;
  const messageId = `${formIdPrefix}-message`;
  const contactMethods = [
    {
      icon: MailFillIcon,
      label: "Email",
      value: "yuki.yamada@example.com",
      href: "mailto:yuki.yamada@example.com",
      primary: true,
    },
    {
      icon: PhoneFillIcon,
      label: "電話",
      value: "+81-90-XXXX-XXXX",
      href: "tel:+819012345678",
      primary: false,
    },
    {
      icon: MapPinFillIcon,
      label: "所在地",
      value: "東京, 日本",
      href: null,
      primary: false,
    },
  ];
  const socialLinks = [
    {
      icon: GithubFillIcon,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-foreground",
    },
    {
      icon: LinkedinBoxFillIcon,
      label: "LinkedIn",
      href: "https://example.com",
      color: "hover:text-blue-400",
    },
    {
      icon: TwitterFillIcon,
      label: "Twitter",
      href: "https://example.com",
      color: "hover:text-blue-400",
    },
  ];
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="mb-6">Contact</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            プロジェクトのご相談、技術的な質問、またはただの雑談でも、お気軽にご連絡ください。
            できる限り迅速にお返事いたします。
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fadeIn">
            <div>
              <h3 className="mb-6">連絡先情報</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{method.label}</p>
                        {method.href ? (
                          <a
                            href={method.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{method.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="mb-4">ソーシャルメディア</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-card border border-border rounded-lg text-muted-foreground transition-colors ${social.color}`}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-card p-6 rounded-card border border-border">
              <h4 className="mb-3">対応可能時間</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>平日: 10:00 - 18:00 (JST)</p>
                <p>土日: 応相談</p>
                <p className="text-sm">※ 緊急の場合は時間外でもご連絡ください</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-card border border-border animate-fadeIn">
            <h3 className="mb-6">メッセージを送る</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={firstNameId} className="block mb-2">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id={firstNameId}
                    required
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="山田"
                  />
                </div>
                <div>
                  <label htmlFor={lastNameId} className="block mb-2">
                    苗字 *
                  </label>
                  <input
                    type="text"
                    id={lastNameId}
                    required
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="太郎"
                  />
                </div>
              </div>
              <div>
                <label htmlFor={emailId} className="block mb-2">
                  メールアドレス *
                </label>
                <input
                  type="email"
                  id={emailId}
                  required
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label htmlFor={subjectId} className="block mb-2">
                  件名 *
                </label>
                <input
                  type="text"
                  id={subjectId}
                  required
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="お問い合わせの件名"
                />
              </div>
              <div>
                <label htmlFor={messageId} className="block mb-2">
                  メッセージ *
                </label>
                <textarea
                  id={messageId}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>
              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  />
                  <span className="text-sm text-muted-foreground">
                    プライバシーポリシーに同意します *
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-button hover:opacity-90 transition-opacity"
              >
                メッセージを送信
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-border animate-fadeIn">
          <h3 className="text-center mb-8">よくある質問</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4>プロジェクトの相談は可能ですか？</h4>
              <p className="text-muted-foreground">
                はい、お気軽にご相談ください。技術的な課題やプロジェクトの計画段階から、
                具体的な開発まで幅広くサポート可能です。
              </p>
            </div>
            <div className="space-y-4">
              <h4>リモートワークは対応していますか？</h4>
              <p className="text-muted-foreground">
                もちろんです。リモートでの開発やコンサルティングに慣れており、
                効率的なコミュニケーションを心がけています。
              </p>
            </div>
            <div className="space-y-4">
              <h4>技術的な質問だけでも大丈夫ですか？</h4>
              <p className="text-muted-foreground">
                はい、技術的な質問や相談も歓迎します。可能な範囲でお答えし、
                知識の共有を通じてコミュニティに貢献したいと考えています。
              </p>
            </div>
            <div className="space-y-4">
              <h4>チーム開発の支援は可能ですか？</h4>
              <p className="text-muted-foreground">
                はい、チームビルディングやプロセス改善、技術指導など、
                チーム全体の生産性向上をサポートできます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
