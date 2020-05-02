import useScrollTrigger from '@material-ui/core/useScrollTrigger'

export default function useElevationScroll(props) {
  const { window, elevation } = props || {}
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  // return React.cloneElement(children, {
  //   elevation: trigger ? 4 : 0,
  // });

  return trigger ? elevation : 0
}
