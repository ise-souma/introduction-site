import Image from "next/image";
import "./homesite.css";

export default function Home() {
  return (
    <div>
      <main className="background_site">
        <header className="header_css">伊勢聡真のウェブサイト</header>
        <div className="contain_site">
          <p>
            プログラミング勉強の一環としてウェブサイトを作成してみました！！
          </p>
          <div className="bullet_design"></div>
          <div>
            在籍大学：福井大学
            <br />
            学部・学科：工学部　電気電子情報工学科
            <br />
            学校では主にC、Java、Pythonを学習し、趣味の一環としてHTML、CSS、JavaScriptも学習途中
          </div>
        </div>
      </main>
    </div>
  );
}
