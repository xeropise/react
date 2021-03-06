## 13장 리액트 라우터로 SPA 개발하기

### 13.1 SPA란?

- SPA는 Single Page Application 의 약어, 말 그대로 한 개의 페이지로 이루어진 애플리케이션



- 싱글 페이지라고 해서 한 화면인게 아니라 서버에서 사용자에게 제공하는 페이지는 한 종류이지만, 해당 페이지에서 로딩된 자바스크립트와 현재 사용자 브라우저의 주소 상태에 따라 다양한 화면을 보여 줄 수 있다.



- 다른 주소에 다른 화면을 보여 주는 것을 __라우팅__ 이라고 한다. 리액트 라이브러리 자체에 이 기능이 내장되어 있지는 않으나, 브라우저의 API 를 직접 사용하여 이를 관리하거나, 라이브러리를 사용하여 이 작업을 더욱 쉽게 구현 할 수 있다.



- 리액트 라우팅 라이브러리는 리액트 라우터(react-router), 리치 라우터(reach-router), Next.js 등 여러 가지가 있다. 여기서는 리액트 라우터를 사용해볼 예정 

  리액트 라우터는 클라리언트 사이드에서 이루어지는 라우팅을 아주 간단하게 구현할 수 있도록 해 준다. 서버 사이드 렌더링을 할 때도 라우팅을 도와주는 컴포넌트들을 제공해 준다.



#### 13.1.1 SPA의 단점

- SPA의 단점은 앱의 규모가 커지면 자바스크립트 파일이 너무 커진다는 것, 페이지 로딩 시 사용자가 실제로 방문하지 않을 수도 있는 페이지 스크립트도 불러오기 때문, 이는 코드 스플리팅(code splitting)을 사용하면 라우트별로 파일들을 나누어서 트래픽과 로딩 속도를 개선할 수 있다.



- 리액트 라우터처럼 브라우저에서 자바스크립트를 사용하여 라우팅을 관리하는 것은 자바스크립트를 실행하지 않는 일반 크롤러에서 페이지의 정보를 제대로 수집해 가지 못한다는 잠재적인 단점이 있다.



- 자바스크립트가 실행될 때까지 페이지가 비어 있기  때문에 자바스크립트 파일이 로딩되어 실행되는 짧은 시간 동안 흰 페이지가 나타날 수 있다는 단점도 있다.



***

### 13.2 프로젝트 준비 및 기본적인 사용법

- 새 프로젝트를 생성해 보자, 리액트 라우터 react-router-dom 라이브러리도 설치하자

```react
yarn create react-app router-tutorial
cd router-tutorial
yarn add react-router-dom
```



#### 13.2.2 프로젝트에 라우터 적용

- 프로젝트에 리액트 라우터를 적용할 때는 src/index.js 파일에서 react-router-dom 에 내장되어 있는 _BrowserRouter_ 라는 컴포넌트를 사용하여 감싸면 된다.



```react
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
> [reportWebVitalks](https://create-react-app.dev/docs/measuring-performance/) 는 뭘까




#### 13.2.3 페이지 만들기

- 라우트로 사용할 페이지 컴포넌트를 만들어 보자. 사용자가 웹 사이트에 들어왔을 때 맨처음 보여 줄  Home 컴포넌트와 웹 사이트를 소개하는 About 컴포넌트

  를 만들어 보자.



_Home.js_

```react
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>홈, 그 페이지는 가장 먼저 보여지는 페이지. (씹덕이냐)</p>
    </div>
  );
};

export default Home;
```



_About.js_

```react
import React from "react";

const About = () => {
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
    </div>
  );
};

export default About;
```





#### 13.2.4 Route 컴포넌트로 특정 주소에 컴포넌트 연결

- Route 라는 컴포넌트를 사용하여 사용자의 현재 경로에 따라 컴포넌트를 보여 줄 예정,

  Route 컴포넌트를 사용하면 어떤 규칙을 가진 경로에 어떤 컴포넌트를 보여 줄지 정의할 수 있다.



```react
<Route path='주소규칙' component={보여 줄 컴포넌트} />
```



- App.js 에서 기존 코드를 모두 제거하고, Route 컴포넌트를 사용하여 방금 만든 Home 컴포넌트 혹은 About 컴포넌트를 보여 주도록 설정하자.



_App.js_

```react
import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div>
    	<Route path="/"   component={Home} />
        <Route path='/about' component={About} />
    </div>
  );
}

export default App;
```

> yarn start 하여 개발 서버를 시작 해 보자.
>
> 기본 화면에는 Home 컴포넌트만 나오고, /home 경로를 입력하면 About 컴포넌트가 같이 나온다.
>
> /home 경로 시, 두 컴포넌트가 모두 나타나는 이유는  / 규칙에도 일치하기 때문에 발생한 현상이다.



- 위의 경우를 수정하려면 Home 을 위한 Route 컴포넌트를 사용할 때 exact 라는 props 를 true로 설정해주면 된다.



_App.js_

```react
import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div>
    	<Route path="/"   component={Home} exact={true} />
        <Route path='/about' component={About} />
    </div>
  );
}

export default App;
```



#### 13.2.5 Link 컴포넌트를 사용하여 다른 주소로 이동하기 

- __Link 컴포넌트__ 는 클릭하면 다른 주소로 이동시켜 주는 컴포넌트,  일반 웹 애플리케이션에서는 a 태그를 이용하여 페이지를 전환하는데, 리액트 라우터를

  사용할 때는 이 태그를 직접 사용하면 안 된다. 이 태그는 페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문에 애플리케이션이 들고 있던 상태들을 모두 날려버리게 된다.



- Link 컴포넌트를 사용하여 페이지를 전환하면, 페이지를 새로 불러오지 않고 애플리케이션은 그대로 유지한 상태에서 HTM5 History API를 사용하여 페이지의 주소만 변경해 준다. Link 컴포넌트 자체는 a 태그로 이루어져 있지만, 페이지 전환을 방지하는 기능이 내장되어 있다.



- 다음과 같이 사용한다.

```react
<Link to='주소'>내용</Link>
```



- App 컴포넌트에서 "/", "/about" 경로로 이동하는 Link 컴포넌트를 만들어 보자.



__App.js__

```react
import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <div>
      <ul>
      	<li>
          <Link to="/">홈</Link>
        </li>
        <li>
       	  <Link to="/about">소개</Link>
        </li>  
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
```



***

### 13.3 Route 하나에 여러 개의 path 설정하기

- Route 하나에 여러 개의 path를 지정하는 것은 최신 버전은 리액트 라우터 v5 부터 적용된 기능이다.

  이전 버전에서 여러 개의 path에 같은 컴포넌트를 보여 주고 싶다면 다음과 같이 해야했다.



_App.js_

```react
import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/info" component={About} />
    </div>
  );
}

export default App;
```



- 이렇게 하는 대신에, path props를 배열로 설정해 주면 여러 경로에서 같은 컴포넌트를 보여 줄 수 있다.



_App.js_

```react
import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
    </div>
  );
}

export default App;
```



***

### 13.4 URL 파라미터와 쿼리

- 페이지 주소를 정의할 때 가끔은 유동적인 값을 전달해야 할 때도 있다. 이는 파라미터와 쿼리로 나눌 수 있다.
  - 파리미터 예시: /profiles/velopert
  - 쿼리 예시: /about?details=true



- 유동적인 값을 사용해야 하는 상황에서 파라미터를 써야 할지, 쿼리를 써야 할지 정할 때, 무조건 따라야하는 규칙은 없으나 일반적으로

  파라미터는 특정 아이디 혹은 이름을 사용하여 조회할 때 사용하고, 쿼리는 우리가 어떤 키워드를 검색하거나 페이지에 필요한 옵션을 전달할 때 사용한다.



#### 13.4.1 URL 파라미터

- Profile 페이지에서 파라미터를 사용해 보자. /profile/velopert 와 같은 형식으로 뒷부분에 유동적인 username 값을 넣어 줄 때 해당 값을 props 로 받아 와서 조회해 보자.



_Profile.js_

```react
import React from "react";

const data = {
  veloper: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  kyubi: {
    name: "조규비",
    description: "알 수 없음",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};
```

> URL 파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아 오는 match 라는 객체 안의 params 값을 참조한다.



- App 컴포넌트에 Profile 컴포넌트를 위한 라우트를 정의해 보자. 이번에 사용할 path 규칙에는 /profiles/:username 이라고 넣어 주자.

  이렇게 설정하면 match.params.username 값을 통해 현재 username 값을 조회할 수 있다.



_App.js_

```react
import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from './Profile';

const App = () => {
  return (
  	<div>
    	<ul>
        	<li>
            	<Link to='/'>홈</Link>
            </li>  
            <li>
            	<Link to='/about'>소개</Link>
            </li>
            <li>
            	<Link to='/profile/velopert'>velopert 프로필</Link>
            </li>
            <li>
            	<Link to='/profile/gildong'>kyubi 프로필</Link>
            </li>
        </ul>  
        <hr />
       <Route path="/" component={Home} exact={true} />
       <Route path={["/about", "/info"]} component={About} />       
       <Route path='/profile/:username' component={Profile} />
    </div>
  );
};

export default App;
```



#### 13.4.2 URL 쿼리

- 이번에는 About 페이지에서 쿼리를 받아 오자. 쿼리는 location 객체에 들어 있는 search 값에서 조회할 수 있다.

  location  객체는 라우트로 사용된 컴포넌트에게 props로 전달되며, 웹 애플리케이션의 현재 주소에 대한 정보를 지니고 있다.



- location 의 형태는 다음과 같다

```react
{
    'pathname': '/about',
    'search': '?detail=true',
    'hash': ''
}
```

> http://localhost:3000/about?detail=true 주소로 들어갔을 때



- URL 쿼리를 읽을 때는 위 객체가 지닌 값 중에서 SEARCH 값을 확인해야 한다. 이 값을 문자열 형태로 되어 있다. search 값에서 특정 값을 읽어 오기 위해서는

  이 문자열을 객체 형태로 변환해 주어야 한다.



- 쿼리 문자열을 객체로 변환할 때는 qs 라는 라이브러리를 사용한다. 설치하자

```react
yarn add qs
```



_About.js_

```react
import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ?를 생략합니다.
  });
  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과 값은 문자열입니다.
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
```

> 쿼리를 사용할 때는 쿼리 문자열을 객체로 파싱하는 과정에서 결과 값은 언제나 문자열이라는 점에서 주의하자.



***

### 13.5 서브 라우트

- 서브 라우트는 라우트 내부에 또 라우트를 정의하는 것을 의미한다. 복잡하지는 않아 라우트로 사용되고 있는 컴포넌트 내부에 

  Route 컴포넌트를 또 사용하면 된다.



- 기존의 App 컴포넌트에서 두 종류의 프로필 링크를 보여 주었는데, 이를 잘라내서 프로필 링크를 보여 주는 Profiles 라는 라우트 컴포넌트를 따로 만들고, 

  그 안에서 Profile 컴포넌트를 서브 라우트로 사용하도록 코드를 작성해 보자.



_Profiles.js_

```react
import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
```

> 첫 번째 Route 컴포넌트에는 component 대신 render 라는 props 를 넣어 주었는데, 컴포넌트 자체를 전달하는 것이 아니라, 보여 주고 싶은 JSX를 넣어 줄 수 있다. 지금처럼 따로 컴포넌트를 만들기 애매한 상황에 사용해도 되고, 컴포넌트에 props를 별도로 넣어 주고 싶을 때도 사용할 수 있다.
>
> JSX 에서 props 를 설정할 때 값을 생략하면 자동으로 true로 설정된다. exact={true} 와 같은 의미가 되었다.



- App 컴포넌트에 있던 프로필 링크를 지우고, Profiles 컴포넌트를 /profiles 경로에 연결 시켜 주자. 해당 경로로 이동하는 링크도 추가하자.



_App.js_

```react
import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/">프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
};

export default App;
```



***

### 13.6 리액트 라우터 부가 기능

#### 13.6.1 history

- history 객체는 라우트로 사용된 컴포넌트에 match, location과 함께 전달되는 props 중 하나로, 이 객체를 통해 컴포넌트 내에 구현하는 메서드에서

  라우터 API를 호출할 수 있다. 예를 들어 특정 버튼을 눌렀을 때 뒤로 가거나, 로그인 후 화면을 전환하거나, 다른 페이지로 이탈하는 것을 방지해야 할 때

  history를 활용한다.



_HistorySample.js_

```react
import React, { Component } from 'react';

class HistorySample extends Component {
    // 뒤로 가기
    handleGoBack = () => {
      this.props.history.goBack()  ;
    };

	// 홈으로 이동
	handleGoHome = () => {
      this.props.history.push('/')  ;
    };

	componentDidMount() {
        // 이것을 설정하고 나면 페이지에 변화가 생기려고 할 때마다 정말 나갈 것인지를 질문함
        this.unblock = this.prop.history.block('정말 떠나실 건가요?');
    }

	componentWillUnmount(){
        // 컴포넌트가 언마운트되면 질문을 멈춤
        if (this.unblock) {
            this.unblock();
        }
    }

	render() {
        return (
        	<div>
            	<button onClick={this.handleGoBack}>뒤로</button>
            	<button onClick={this.handleGoHome}>홈으로</button>                
            </div>
        )
    }
}

export default HistorySample;
```



_App.js_

```react
import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path='/history' component={HistorySample} />
    </div>
  );
};

export default App;
```



#### 13.6.2 withRouter

- withRouter 함수는 HoC(Higher-order Component) 이다. 라우트로 사용된 컴포넌트가 아니어도 match, location, history  객체를 접근할 수 있게 해준다.



_WithRouterSample.js_

```react
import React from "react";
import { withRouter } from "react-router-dom";
const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readonly={true}
      />
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
};

export default withRouter(WithRouterSample);
```

> JSON.stringify의 두 번째 파라미터와 세 번째 파라미터를 위와 같이 null, 2 로 설정해 주면 JSON 에 들여쓰기가 적용된 상태로 문자열이 만들어 진다.



_Profiles.js_

```react
import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
```

> 서버를 실행후 match 객체를 보면 params 가 비어 있는데, withRouter 를 사용하면 현재 자신을 보여 주고 있는 라우트 컴포넌트(현재 Profiles)를 기준으로
>
> match 가 전달된다. WithRouterSample 컴포넌트를 Profiles 에서 지우고 Profile 컴포넌트에 넣으면 match 쪽 URL 파라미터가 제대로 보일 것이다.



_Profile.js_

```react
import React from "react";
import { withRouter } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

const data = {
  veloper: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  kyubi: {
    name: "조규비",
    description: "알 수 없음",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default withRouter(Profile);
```



#### 13.6.3 Switch

- 여러 Route 를 감싸서 그 중 일치하는 단 하나의 라우트만 렌더링 시켜 준다. 모든 규칙과 일치하지 않을 때 보여 줄 Not Found 페이지도 구현할 수 있다.



_App.js_

```react
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={["/about", "/info"]} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않는다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
```



#### 13.6.4 NavLink

- NavLink는 Link와 비슷하다. 현재 경로와 Link 에서 사용하는 경로가 일치하는 경우, 특정 스타일 혹은 CSS 클래스를 적용할 수 있는 컴포넌트이다.

  NavLink에서 링크가 활성화되었을 때의 스타일을 적용할 때는 activeStyle 값을, CSS 클래스를 적용할 때는 activeClassName 값을 props로 넣어 주면 된다.



_Profiles.js_

```react
import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/velopert">
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">
            gildong
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
```



***

### 13.7 정리

- 리액트 라우터를 사용하여 주소 경로에 따라 다양한 페이지를 보여 주는 방법을 알았다.
- 큰 규모의 프로젝트를 진행하다 보면 한 가지 문제가 발생하는데, 웹 브라우저에서 사용할 컴포넌트, 상태 관리르 하는 로직, 그 외 여러 기능으 룩현하는 함수들이 점점 쌓이면 최종 결과물인 자바스크립트 파일의 크기가 매우 커진다는 점이다. 이를 해결 하는 방법은 19장에서 알아볼 예정



> 13장 종료
