import './PiedDePage.scss';
import AddIcon from '@material-ui/icons/Add';

export default function PiedDePage(props) {
  return (
    <footer className="PiedDePage">
      <button className="btnAdd">
          <AddIcon />
      </button>
    </footer>
  );
}