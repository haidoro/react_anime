# ReactでインタラクティブなAnimationを試す

## reactの導入

今回の手順はMacでおこなったものです。
* Node.jsがインストールされている必要があります。
* yarnがインストールされている必要があります。

### create-react-app導入
create-react-appがすでにグローバルでインストールされていなければ、以下コマンドでグローバルでインストールします。
```
yarn global add create-react-app
```

### プロジェクトフォルダ内にReact環境作成
Macの場合、以下のコマンドを実行するとHomeの中に指定したフォルダが作成されてcreate-react-app環境が構築されます。
```
create-react-app <フォルダ名>
```
作成したフォルダに移動します。
```
cd <フォルダ名>
```
これでReactの環境が出来上がります。サーバー起動すると簡単なサンプルが開きます。
次のコマンドでサーバーを稼働させます。
```
yarn start
```
サーバー停止はctrl+C

## SASS導入
SASSを使いたいのでその環境を作ります。
```
yarn add node-sass-chokidar
```
```
yarn add npm-run-all
```
packege.jsonのscripts部分を以下のように書き換えます。
packege.json
```
"scripts": {
    "build-css": "node-sass-chokidar src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build-js": "react-scripts build",
    "build": "npm-run-all build-css build-js",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
```

## React-Bootstrapの導入
React-BootstrapはReactに特化したBootstrapです。
* React-Bootstrapの導入はcreate-react-app導入の際にできるReadmeを読めば手順が書かれています。

### Bootstrapの追加手順

* yarnを使って導入しました。  
ちなみにバージョンは3を使用。 
```
yarn add react-bootstrap bootstrap@3
```

src/index.jsファイルの先頭に下記をインポートする。
```
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
```
src/App.jsファイルに下記をインポートする：
```
import { <使用するモジュール> } from 'react-bootstrap';
```
これでBootstrapが使えるようになります。
なお、ReactでのBootstrapの使い方ドキュメントは以下を参考にします。

[React-Bootstrap ドキュメント](https://react-bootstrap.github.io/getting-started/introduction)

## React-Bootstrapを使ったCarouselの導入

コンポーネントはControlledCarousel.jsとして別ファイルにしました。React-BootstrapのドキュメントのCarouselの内容をそのまま使用したものです。
`render(<ControlledCarousel />);`部分はApp.jsの`render() {}`内で記述しています。  
ControlledCarousel.js内の最後に`export default ControlledCarousel;`を忘れないように。App.jsでimportできなくなります。

ControlledCarousel.js
```
import React from 'react';
import './App.css';
import { Carousel } from 'react-bootstrap';



class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="images/food1.jpg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="images/food2.jpg" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="images/food3.jpg" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;
```
**困ったことは画像の置き場です。適当な場所にimagesフォルダを作成して画像を用意してもうまく表示されません。  
正しく表示させるには、画像は「public」フォルダに入れておく必要があります。「public」フォルダ内でさらにimagesフォルダなどを作成しておくと良いです。その時のパスは「images/food1.jpg」などのように指定します。ControlledCarousel.jsファイルからのパスではありませんので注意してください。**