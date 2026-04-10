import { useCounter } from '../hooks/useCounter'

/**
 * Animated number that counts up from 0 to `value` when scrolled into view.
 *
 * Props:
 *   value     number   Target value
 *   prefix    string   e.g. "+" or "€"
 *   suffix    string   e.g. "%" or "k"
 *   duration  ms       Animation duration
 *   decimals  number   Decimal places (0 = integers)
 *   delay     ms       Delay before starting
 *   ...rest            Passed to the wrapping <span>
 */
export default function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  duration = 1800,
  decimals = 0,
  delay = 0,
  ...rest
}) {
  const { value: count, ref } = useCounter(value, { duration, decimals, delay })
  const display = decimals > 0 ? count.toFixed(decimals) : count

  return (
    <span ref={ref} {...rest}>
      {prefix}{display}{suffix}
    </span>
  )
}
