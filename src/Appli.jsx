import './Appli.scss';
import Entete from './Entete.jsx';
import ListeProfs from './ListeProfs';
import PiedDePage from './PiedDePage';

export default function Appli() {

  return (
    <div className="Appli">
        <Entete />
        <ListeProfs />
        <PiedDePage />
    </div>
  );
}
