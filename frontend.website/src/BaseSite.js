import './BaseSite.css';
import NameComponent from './components/NameComponent.js'

function BaseSite() {
  return (
    <div className="BaseSite BaseSite-header">
      <NameComponent></NameComponent>
    </div>
  );
}

export default BaseSite;
