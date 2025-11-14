const Header = () => {
  return (<div id="header" style={{display:"flex", justifyContent:"center"}}>Header
    <img className="logo" src="header.jpg" alt="Header Image" />
    <h2>Amazon</h2>
    <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
    </ul>
  
  </div>);
}
const Body = () => {
  return (<div id='body'>
    <Search/>
    <div className="product_container">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>
  </div>);
}
const Footer = () => {
  return (<>This is Footer Component</>);
}
const App = () => {
  return (
    <>
        <Header/>
        <Body/>
        <Footer/>
    </>
  );
};
export default App;
//component->a js function which returns jsx