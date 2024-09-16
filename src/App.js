import React from "react";
import { Header} from "./components";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );

}

export default App;

// class App extends React.Component {
//   componentDidMount() {
//     axios.get("http://localhost:3000/db.json")
//       .then(({data}) => {
//         this.props.setPizzas(data.pizzas)
//       });
//   }

//   render() {
//     console.log(this.props)
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Main items={this.props.items} />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </div>
//       </div>
//     );
//   }
// }
const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
