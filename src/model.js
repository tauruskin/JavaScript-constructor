import image from './assets/javascript.png';
import { TextBlock, ImageBlock, ColumnsBlock, TitleBlock } from './classes/blocks'

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, velit eos? Delectus possimus quae libero, reiciendis dicta quos fugiat laborum natus molestiae commodi atque ratione fugit voluptate, praesentium suscipit blanditiis, repellat vero tenetur explicabo accusantium eveniet voluptatum expedita autem quibusdam! Repellat, ut atque eius voluptatibus magni quidem doloribus iusto dolor praesentium aspernatur, blanditiis animi consequuntur illo tempore perspiciatis quasi ipsam. Fuga, esse assumenda harum vel quas, fugiat maiores minus quibusdam quos impedit rerum tenetur corporis molestiae, voluptatum asperiores iste aperiam aliquam saepe aut facere illo? Dolorem quis placeat eaque magni, culpa repudiandae laborum impedit reiciendis nam autem maxime nesciunt non?`

export const model = [
  new TitleBlock('Constructor JavaScript for web sites', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #1FC9FD, #FC0061)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),
  new ImageBlock(image, {
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
  }),
  new ColumnsBlock([
    'Приложение на чистом JS, без использования библиотек',
    'Приложение на чистом JS, без использования библиотек',
    'Приложение на чистом JS, без использования библиотек'
  ], {
    styles: {
      background: 'linear-gradient(to bottom, #1FC9FD, #4218B8)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to bottom, #FFE53B, #00FFFF)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  })
]