import './ListeProfs.scss';
import Prof from './Prof'
import tabProfs from './data/profs.json';

export default function ListeProfs(props) {
  return (
    <div className="ListeProfs">
        <ul>
          
        {tabProfs.map(prof => 
         <Prof key={prof.id} nom={prof.nom} dateModif={prof.dateModif} id={prof.id} />
        )}
        </ul>
    </div>
  );
}