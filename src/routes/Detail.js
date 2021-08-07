import React from "react";

// function Detail({location}) {
//     console.log(location);
//     return <span>hello</span>
// }

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        console.log(location, history);
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if(location.state) {
            return<div>
                {location.state.title}
            </div>;
        } else {
            return null;
        }
    }
}

export default Detail;



// class Detail extends React.Component {
//     componentDidMount() {
//       console.log(this.props);
//       const { location, history } = this.props;
//       if(location.state === undefined) {
//         history.push("/"); //리 다이렉트시킨다.
//       }
//     }
    
//     render() {
//       const { location } = this.props;
//       if(location.state) {
//         return <sapn>{location.state.title}</sapn>;
//       } else {
//         return null;
//       }
//     }
//   }