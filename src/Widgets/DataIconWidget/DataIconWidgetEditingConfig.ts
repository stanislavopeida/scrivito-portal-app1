import { provideEditingConfig } from 'scrivito'
import { DataIconWidget } from './DataIconWidgetClass'

provideEditingConfig(DataIconWidget, {
  title: 'Data Icon',
  attributes: {
    alignment: {
      title: 'Alignment',
      description: 'Default: Center',
      values: [
        { value: 'left', title: 'Left' },
        { value: 'center', title: 'Center' },
        { value: 'right', title: 'Right' },
      ],
    },
    size: {
      title: 'Size',
      description: 'Default: bi-2x',
    },
    fallbackIcon: {
      title: 'Fallback icon',
      description:
        'This icon is used, if no condition matches. Default: "bi-question-octagon". The full list of names can be found at https://icons.getbootstrap.com/',
    },
    fallbackHumanReadableValue: {
      title: 'Fallback human readable value',
      description:
        'This is used, if no condition matches. Can also contain placeholders.',
    },
  },
  properties: [
    'dataItemAttributeName',
    'size',
    'alignment',
    'conditions',
    'fallbackIcon',
    'fallbackHumanReadableValue',
  ],
  initialContent: {
    alignment: 'center',
    size: 'bi-2x',
    fallbackIcon: 'bi-question-octagon',
  },
})