import useMeasure from 'react-use-measure';

export default function useElementSize() {
  const [ref, bounds] = useMeasure();
  return { ref, ...bounds };
}
