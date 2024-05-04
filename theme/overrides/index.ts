import { DefaultTheme } from '@mui/styles';
import { merge } from 'lodash';
import Button from './Button';
import Card from './Card';

export default function Overrides(theme: DefaultTheme) {
  return merge(Button(theme), Card(theme));
}
