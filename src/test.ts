export function getHello(): string {
  console.log('on hello', process.env.APP_PUBLIC_KEY)
  return 'Hello from the new package!';
}
