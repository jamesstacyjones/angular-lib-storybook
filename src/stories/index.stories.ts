import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../../projects/my-lib/src/lib/button/button.component';

storiesOf('my-lib', module)
  .add('button', () => ({
    component: ButtonComponent,
    props: {
      text: 'Hello',
      click: action('You clicked me...')
    }
  }));
