import React from 'react'

import Fv from '@/components/organisms/fv'
import Seo from '@/components/shared/seo'
import Layouts from '@/layouts/layouts'

const Main = () => {
  return (
    <Layouts>
      <Fv title="Privacy Policy" />
      <Seo
        title="Privacy Policy | K.Iwata's BLOG"
        description="This page is Privacy Policy Page."
      />
      <main className="py-8 md:py-12 px-4 lg:px-0 mx-auto max-w-screen-lg">
        <div className="section privacy">
          <section>
            <h2>広告の配信について</h2>
            <p>
              当サイトでは、第三者配信の広告サービス「Google Adsense
              グーグルアドセンス」を利用しています。このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報
              『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません)
              を使用することがあります。Cookie（クッキー）を無効にする設定およびGoogleアドセンスに関する詳細は「
              <a href="https://policies.google.com/technologies/ads?hl=ja">
                広告 – ポリシーと規約 – Google
              </a>
              」をご覧ください。
            </p>
          </section>
          <section>
            <h2>アクセス解析ツールについて</h2>
            <p>
              当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
            </p>
            <p>
              このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくはこちらをクリックしてください。
            </p>
          </section>
          <section>
            <h2>著作権について</h2>
            <p>
              当サイトの記事について、著作権は放棄しておりません。当サイトに存在する、文章・画像・動画等の著作物の情報を無断転載することを禁止します。引用の範囲を超えるものについては、法的処置を行います。
            </p>
            <p>
              当サイトは著作権の侵害を目的とするものではありません。使用している版権物の知的所有権はそれぞれの著作者・団体に帰属しております。著作権や肖像権に関して問題がありましたら御連絡下さい。著作権所有者様からの警告及び修正・撤去のご連絡があった場合は迅速に対処または削除致します。
            </p>
          </section>
        </div>
      </main>
    </Layouts>
  )
}

export default Main
