import AtomicComponent from './AtomicComponent';

export default function (block) {
  switch (block.getType()) {
    case 'atomic': return {
      component: AtomicComponent,
      editable: false,
      foo: 'bar',
      props: {
        foo: 'bar',
        block,
      },
    };
    default: return null;
  }
}
