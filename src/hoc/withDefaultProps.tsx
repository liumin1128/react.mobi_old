import React from 'react'

function withDefaultProps<P extends Record<string, unknown>, DP extends Partial<P>>(
  component: React.ComponentType<P>,
  dp: DP
) {
  // eslint-disable-next-line no-param-reassign
  component.defaultProps = dp
  type RequiredProps = Omit<P, keyof DP>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (component as React.ComponentType<any>) as React.ComponentType<RequiredProps & DP>
}

export default withDefaultProps
