function getMiddle(s)
{
  const a = s.length
  const z = Math.ceil(a / 2 - 1)
  return a % 2 == 1 ? s.slice(z, z + 1) : s.slice(z, z + 2)
}