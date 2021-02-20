import image from './assets/javascript.png'
export const model = [
  {
    type: 'title', value: 'Constructor JavaScript for web sites', options: {
      tag: 'h2',
      styles: {
        background: 'linear-gradient(to right, #ff1230, #483723)',
        color: '#fff',
        padding: '1.5rem',
        'text-align': 'center'
      }
    }
  },
  {
    type: 'text', value: 'here we go with some text'
  },
  {
    type: 'columns', value: [
      '1111111',
      '2222222',
      '3333333'
    ]
  },
  { type: 'image', value: image }
]