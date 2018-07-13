import RegExp from 'path-to-regexp';
import {
  Admin,
  Design,
} from './components';

export default function (props) {
  if (RegExp('/design/*').exec(props.location.pathname)) {
    return (
      <Design {...props} />
    );
  }
  return (
    <Admin {...props} />
  );
}
