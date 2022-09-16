import { Button, PageTitle } from 'ui';

export default function Web() {
  return (
    <>
      <PageTitle>home</PageTitle>
      <Button onClick={() => alert('hello')}>Hello there</Button>
    </>
  );
}
