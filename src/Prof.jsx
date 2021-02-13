import './Prof.scss';
import SubjectIcon from '@material-ui/icons/Subject';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Prof(props){

    const {nom, dateModif, id} = props;

    return(
        <li className="Prof">
            <SubjectIcon />
             <img src={'images/' + props.id + '.jpg'} alt=""/>
             <div className="info">
                <p className="nom">{props.nom}</p>
                <p className="dateModif">Modifié le : {props.dateModif}</p>
            </div>
            <MoreVertIcon />
        </li>
    )
}