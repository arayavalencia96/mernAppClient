import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceDizzy } from "@fortawesome/free-solid-svg-icons";

function NotFound() {
  return (
    <div className='font-size: large'>
      <h3 className="d-flex justify-content-center">
        La página a la que querés acceder no se encuentra o no existe.
      </h3>
      <div className="d-flex justify-content-center font-size: large">
        <FontAwesomeIcon size='lg' icon={faFaceDizzy} />
      </div>
    </div>
  );
}

export default NotFound;
