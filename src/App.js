import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading : false});
    }, 6000);  
  }
      // delay function 6초 뒤에 실행될 것이다.
      // 6초뒤에 state의 isLoading은 false로 바뀐다 그때 생기는 변화는?
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading": "We are ready"}</div> 
  }
  // 삼항연산자 true라면 "Loading" false라면 We are ready를 screen에 render한다.
  // 즉 delay function 이 있기 때문에 6초동안은 true이기때문에 Loading이
  // 6초뒤에는 false로 바뀌기 때문에 We are ready로 바뀔 것이다.
}

export default App; // 앱이라는 함수를 내보낸다.
