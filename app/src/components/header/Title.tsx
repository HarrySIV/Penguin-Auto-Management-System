import icon from '../../assets/icon.png';
import { LinkItem } from './navigation/LinkItem';

export function Title() {
  return (
    <LinkItem to="/dashboard">
      <img src={icon} className="max-h-52 max-w-52" />
    </LinkItem>
  );
}
