import image from './assets/javascript.png'

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, velit eos? Delectus possimus quae libero, reiciendis dicta quos fugiat laborum natus molestiae commodi atque ratione fugit voluptate, praesentium suscipit blanditiis, repellat vero tenetur explicabo accusantium eveniet voluptatum expedita autem quibusdam! Repellat, ut atque eius voluptatibus magni quidem doloribus iusto dolor praesentium aspernatur, blanditiis animi consequuntur illo tempore perspiciatis quasi ipsam. Fuga, esse assumenda harum vel quas, fugiat maiores minus quibusdam quos impedit rerum tenetur corporis molestiae, voluptatum asperiores iste aperiam aliquam saepe aut facere illo? Dolorem quis placeat eaque magni, culpa repudiandae laborum impedit reiciendis nam autem maxime nesciunt non?`

export const model = [
  {
    type: 'title', value: 'Constructor JavaScript for web sites', options: {
      tag: 'h2',
      styles: {
        background: 'linear-gradient(to right, #FBD601, #CF5605)',
        color: '#fff',
        padding: '1.5rem',
        'text-align': 'center'
      }
    }
  },
  {
    type: 'image', value: image, options: {
      styles: {
        padding: '2rem 0',
        display: 'flex',
        'justify-content': 'center'
      },
      imageStyles: {
        width: '500px',
        height: 'auto'
      },
      alt: 'This is a JS image'
    }
  },
  {
    type: 'text', value: text, options: {
      styles: {
        background: 'linear-gradient(to bottom, #FBD601, #8e2df9)',
        padding: '1rem',
        'font-weight': 'bold'
      }
    }
  },
  {
    type: 'columns', value: [
      'Приложение на чистом JS, без использования библиотек',
      'Lorem ipsum dolor sit amet consectetur adipisicing',
      'Lorem ipsum dolor sit amet consectetur adipisicing'
    ], options: {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00f0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold'
      }
    }
  }
]