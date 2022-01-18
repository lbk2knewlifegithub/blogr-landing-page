import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';

export const listAnimation = (element: string) => {
  return trigger('listAnimation', [
    transition(':enter', [
      query(
        element,
        [
          style({ opacity: 0, transform: 'translateX(-10%)' }),
          stagger(300, [
            animate('.5s', style({ opacity: 1, transform: 'translateY(0)' })),
          ]),
        ],
        { optional: true }
      ),
    ]),
  ]);
};
