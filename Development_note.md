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

## material-uiの導入
React components that implement Google's Material Design
[Material-UI](https://v0.material-ui.com/#/)

```
yarn add material-ui
```
### Grid List追加

GridListExampleSimple.js
```
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'images/grid-list/photo1_thum.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/photo2_thum.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/photo3_thum.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/photo4_thum.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/photo5_thum.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/photo6_thum.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/photo7_thum.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/photo8_thum.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <MuiThemeProvider>
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
  </MuiThemeProvider>
);

export default GridListExampleSimple;
```

App.js
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridListExampleSimple from './GridListExampleSimple.js';
import AutoCompleteExampleSimple from './AutoComplete.js';
import ControlledCarousel from './ControlledCarousel.js';
import { Carousel,Button } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ControlledCarousel />
        <Button bsStyle="primary">Primary</Button>

      <GridListExampleSimple />
      </div>
    );
  }
}

export default App;
```

画像はpublic/images/grid-listフォルダに置く。

## Material Auto Completeの導入

[Material-UI](https://v0.material-ui.com/#/)を参考に導入します。

v0.15.0から、マテリアルUIコンポーネントはテーマを提供する必要があります。`MuiThemeProvider`でコンポーネントを囲む必要が有ります。

例
```
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

src/AutoCompleteExampleSimple.js
```
import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

const dataSource1 = [
  {
    text: 'text-value1',
    value: (
      <MenuItem
        primaryText="text-value1"
        secondaryText="&#9786;"
      />
    ),
  },
  {
    text: 'text-value2',
    value: (
      <MenuItem
        primaryText="text-value2"
        secondaryText="&#9786;"
      />
    ),
  },
];

const dataSource2 = ['12345', '23456', '34567'];

const dataSource3 = [
  {textKey: 'Some Text', valueKey: 'someFirstValue'},
  {textKey: 'Some Text', valueKey: 'someSecondValue'},
];
const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

/**
 * The first example has `MenuItem`s in its data source that display on data entry.
 * The second example uses an array of values as its `dataSource`, and updates on focus.
 * Both examples have filtering disabled.
 */
const AutoCompleteExampleDataSource = () => (
  <div>
    <AutoComplete
      hintText="text-value data"
      filter={AutoComplete.noFilter}
      dataSource={dataSource1}
    /><br />
    <AutoComplete
      floatingLabelText="showAllItems"
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource2}
    /><br />
    <AutoComplete
      floatingLabelText="Same text, different values"
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource3}
      dataSourceConfig={dataSourceConfig}
    />
  </div>
);

export default AutoCompleteExampleDataSource;
```

App.js
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridListExampleSimple from './GridListExampleSimple.js';
import AutoCompleteExampleDataSource from './AutoCompleteExampleSimple';
import ControlledCarousel from './ControlledCarousel.js';
import { Carousel,Button } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ControlledCarousel />
        <div className="row">
          <h2> Bootstrap Buttons</h2>
          <Button bsStyle="primary">Primary</Button>
          <Button bsStyle="success">Success</Button>
          <Button bsStyle="info">Info</Button>
          <Button bsStyle="warning">Warning</Button>
          <Button bsStyle="danger">Danger</Button>
        </div>
        <div className="row">
          <h2>Meterial Grid</h2>
          <GridListExampleSimple />
        </div>
        <div className="row">
            <MuiThemeProvider>
            <h2>Meterial Auto Complete</h2>
              <AutoCompleteExampleDataSource />
            </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
```

## React Routerの導入

ルーティングするにはreact-router-domをインストールする必要が有ります。
ルーティングは以下サイトが参考になります。
[react-router@v4を使ってみよう：シンプルなtutorial](https://qiita.com/m4iyama/items/b4ca1773580317e7112e)
### インストール
```
yarn add react-router-dom
```

インポートするには以下コマンド
```
import { BrowserRouter, Route, Link } from 'react-router-dom'
```

App.js
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridListExampleSimple from './GridListExampleSimple.js';
import AutoCompleteExampleDataSource from './AutoCompleteExampleSimple';
import ControlledCarousel from './ControlledCarousel.js';
import { Carousel,Button } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <BrowserRouter>
        <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </nav>
        </BrowserRouter>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <ControlledCarousel />
    <div className="row">
      <h2> Bootstrap Buttons</h2>
      <Button bsStyle="primary">Primary</Button>
      <Button bsStyle="success">Success</Button>
      <Button bsStyle="info">Info</Button>
      <Button bsStyle="warning">Warning</Button>
      <Button bsStyle="danger">Danger</Button>
    </div>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
    <div className="row">
      <h2>Material Grid</h2>
      <GridListExampleSimple />
    </div>
  </div>
)
const Contact = () => (
  <div>
    <h2>Contact</h2>
    <div className="row">
        <MuiThemeProvider>
        <h2>Material Auto Complete</h2>
          <AutoCompleteExampleDataSource />
        </MuiThemeProvider>
    </div>
  </div>
)

export  default App
```