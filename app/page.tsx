import Image from "next/image";
import "./homesite.css";

const CreateWeb = () => {
  return (
    <div className="createweb">
      <a href="https://mokunarabe-site-souma.vercel.app/" target="_blank">
        <div>
          <img src="/introductionPic/3mokunarabe.png" alt="プロジェクトのスクリーンショット">
          </img>
        </div>
        <div>
          <p>「どっちが置いた！？記憶力も試される目並べ」</p>
          <p>一定確率でどっちが置いたかわからなくなる？マスになる目ならべ！</p>
          <p>何マス並べたら勝利かも変更可</p>
        </div>
      </a>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <main className="background_site">
        <header className="header_css">伊勢聡真のウェブサイト</header>
        <div className="contain_site">
          <p>
            プログラミング勉強の一環としてウェブサイトを作成してみました！！
          </p>
          <div className="bullet_design">自己紹介</div>
          <div className="flex flex-col items-center justify-center">
            <div>
              ＜氏名＞
              <ruby>
                伊勢聡真<rt>イセソウマ</rt>
              </ruby>
            </div>
            <div>＜学部・学科＞工学部・電気電子情報工学科</div>
            <br />
            <div className="mt-4 space-y-2">
              <p>
                始めまして、伊勢聡真です。学校では主にC、Java、Pythonを学習し、趣味の一環としてHTML、CSS、JavaScriptも勉強しています。
              </p>
              <p>いち早く言語になれるために今回Webサイトを作成してみました。</p>
              <p>よろしくお願いします。</p>
            </div>
          </div>
          <div className="bullet_design">資格</div>
          <ul className="list-disc list-inside space-y-2">
            <li>実用英語技能検定 準2級</li>
            <li>実用数学技能検定 2級</li>
            <li>実用漢字技能検定 準2級</li>
          </ul>
          <div className="mt-4 space-y-2">
            <p>
              通っていた高校が英検だけではなく数検と漢検もとらせる指導を行う学校だったため普通の学生はあまりとらないであろう資格を取っています。
            </p>
            <p>しかし、まだ情報系の資格を持っていないことだけが心残り、、、</p>
            <p>就職してから資格を取りに行くために勉強しようと思います。</p>
          </div>
          <div className="bullet_design">使用言語</div>
          <ul className="list-disc list-inside space-y-2">
            <li>C言語</li>
            <li>Java</li>
            <li>Python</li>
            <li>HTML</li>
            <li>css</li>
            <li>JavaScript</li>
          </ul>
          <div className="mt-4 space-y-2">
            <p>
              私が入った研究室がどうやらC++も使うことがあるみたいなので、次はC++の学習をしてみようと思っています。
            </p>
          </div>
          <div className="bullet_design">作成したもの</div>
          <div className="mt-4 space-y-2">
            <p>いかにこれまでに作成したものを提示します。</p>
            <p>一部、画像と音声は著作権の心配があるため削除しています。</p>
            <p>Webで動く５目ならべとJavaで作成したチンチロ掲載予定</p>
          </div>
          <CreateWeb />
        </div>
      </main>
    </div>
  );
}
