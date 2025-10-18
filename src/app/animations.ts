import {
  animate,
  animateChild,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger
} from '@angular/animations'

export const routeAnimations = trigger('routeAnimations', [
  transition('WelcomePage <=> GamePage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw'
      })
    ]),
    query(':leave', [style({ opacity: 1 })], { optional: true }),
    query(':enter', [style({ transform: 'translateX(-100vw)' })], { optional: true }),
    group([
      query(
        ':leave',
        [animate('1000ms ease-out', keyframes([style({ opacity: 1 }), style({ opacity: 0 })]))],
        {
          optional: true
        }
      ),
      query(
        ':enter',
        [
          animate(
            '1000ms ease-out',
            keyframes([
              style({ opacity: 0, transform: 'translateX(-100vw)' }),
              style({ opacity: 1, transform: 'translateX(0)' })
            ])
          )
        ],
        {
          optional: true
        }
      )
    ])
  ]),
  transition('* <=> *', [
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(':leave', [animate('0.2s', style({ opacity: 0 }))], { optional: true }),
    query(':enter', [animate('0.2s', style({ opacity: 1 }))], { optional: true })
  ])
])
