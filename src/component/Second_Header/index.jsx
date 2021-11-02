import { 
    Link,
  } from "react-router-dom";
  import { secondList } from "../../utils/constant";
  const SecondHeader = (props) => {
      const {navTo} = props||{}
    const navListing = () => {
      return (secondList?.[navTo] || []).map((value, index) => {
        return <Link className="p-2"  to={value?.navTo}> {value?.name} <br />{value?.title}</Link>;
      });
    };
    return (
      <div className="demo">
        <div className= "d-flex justify-content-start">{navListing()}</div> 
      </div>
    );
  };
  
  export default SecondHeader;
  